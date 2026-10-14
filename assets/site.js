document.querySelectorAll('.menu-toggle').forEach(button=>{const menu=document.getElementById(button.getAttribute('aria-controls'));if(!menu)return;button.addEventListener('click',()=>{const isOpen=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!isOpen));menu.classList.toggle('is-open',!isOpen)});menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');menu.classList.remove('is-open')}))});document.querySelectorAll('[data-year]').forEach(node=>node.textContent=String(new Date().getFullYear()));
document.addEventListener('error',event=>{
  const image=event.target;
  if(!(image instanceof HTMLImageElement))return;
  const figure=image.closest('figure');
  const attempts=Number(image.dataset.loadAttempts||0)+1;
  image.dataset.loadAttempts=String(attempts);
  if(attempts===1){
    image.closest('picture')?.querySelectorAll('source').forEach(source=>source.remove());
  }
  if(attempts<=2){
    const jpeg=image.getAttribute('src');
    window.setTimeout(()=>{image.src=jpeg+(jpeg.includes('?')?'&':'?')+'retry='+attempts;},attempts*700);
    return;
  }
  figure?.classList.add('missing-image');
  image.hidden=true;
},true);
