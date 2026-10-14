# Canteiva — Jardinagem e Manutenção de Áreas Verdes

Marca Canteiva em validação no INPI e no Registro.br. Site institucional em HTML, CSS e JavaScript, com páginas de serviços e conteúdo indexável no HTML. Trabalho inicial do agente na branch `agente-chatgpt/site-inicial`.

## Executar localmente
Sirva esta pasta como raiz de um servidor HTTP estático, por exemplo `python3 -m http.server 8000`, e acesse `http://localhost:8000`.

## Rotas
- `/`
- `/servicos/`
- `/jardinagem-para-condominios/`
- `/servicos/poda-de-plantas/`
- `/servicos/rocagem-de-gramados/`
- `/servicos/controle-de-pragas-em-jardins/`
- `/servicos/manutencao-de-jardins/`

## Fotografias
Os templates contêm os caminhos catalogados para 22 fotos que estão no arquivo ZIP do Drive. Os arquivos são montados no deploy do GitHub Pages a partir do arquivo compactado versionado em partes no repositório; o workflow gera cópias WebP e AVIF. Consultar `MAPA_IMPLEMENTACAO_IMAGENS.md` para os destinos.

## Pendências de publicação
- Validar disponibilidade jurídica da marca candidata `Canteiva` no INPI e disponibilidade de domínio no Registro.br.
- Configurar WhatsApp oficial; não há link falso para um número fictício.
- Adicionar imagens com direitos de uso confirmados; otimizar para WebP/AVIF.
- Definir domínio e URL canônica para ativar sitemap com URLs absolutas, robots.txt e Search Console.
- Validar fidelidade visual com os frames do Figma, principalmente mobile.
- Concluir migração dos estilos para pipeline de Tailwind CSS antes do build de produção. Nesta versão inicial, o CSS independente mantém as páginas diretamente visualizáveis.

## Fontes de requisitos
Regras de negócio, conteúdo SEO e mapa de fotografias estão em `Wx2 Sistemas/Projetos/site-jardinagem/docs/regras/site/` no Google Drive.
