import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const base = 'https://jefer2107.github.io/site-jardinagem/';
const pages = ["","servicos/","servicos/poda-de-plantas/","servicos/rocagem-de-gramados/","servicos/controle-de-pragas-em-jardins/","servicos/manutencao-de-jardins/"];
const browser = await puppeteer.launch({
  headless: true,
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});
await fs.mkdir('reports/screenshots', { recursive: true });
const findings = [];
try {
  for (const [device, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const tab = await browser.newPage();
    await tab.setViewport({ width, height, deviceScaleFactor: 1, isMobile: device === 'mobile' });
    for (const route of pages) {
      const url = base + route;
      const response = await tab.goto(url, { waitUntil: 'networkidle2', timeout: 65000 });
      await tab.evaluate(async () => {
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        for (let y = 0; y < document.body.scrollHeight; y += 650) {
          window.scrollTo(0, y);
          await delay(70);
        }
        window.scrollTo(0, 0);
        document.querySelectorAll('img').forEach(img=>img.loading='eager');
        await delay(3200);
      });
      const state = await tab.evaluate(() => {
        const images = [...document.images];
        return {
          horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 2,
          documentWidth: document.documentElement.scrollWidth,
          viewportWidth: window.innerWidth,
          brokenImages: images.filter(x => x.hidden || !x.complete || x.naturalWidth === 0).map(x => x.src),
          images: images.map(x => ({ url: x.currentSrc, width: x.naturalWidth, height: x.naturalHeight }))
        };
      });
      const name = route ? route.replaceAll('/', '-').replace(/-$/, '') : 'home';
      await tab.screenshot({ path: `reports/screenshots/${device}-${name}.png`, fullPage: true });
      const info = { device, route: '/' + route, status: response?.status(), ...state };
      findings.push(info);
      console.log('PAGE_CHECK ' + JSON.stringify({ device, route: info.route, status: info.status, horizontalOverflow: info.horizontalOverflow, brokenCount: info.brokenImages.length, imageCount: info.images.length }));
    }
    await tab.close();
  }
} finally {
  await browser.close();
}
await fs.writeFile('reports/layout-check.json', JSON.stringify(findings, null, 2));
const failed = findings.filter(x => x.status !== 200 || x.horizontalOverflow || x.brokenImages.length);
console.log('LAYOUT_SUMMARY ' + JSON.stringify({ total: findings.length, failures: failed.length, failed }));
if (failed.length) process.exitCode = 1;
