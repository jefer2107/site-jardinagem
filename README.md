# Site Jardinagem — Belo Horizonte

Site institucional em HTML, CSS e JavaScript, com páginas de serviços e conteúdo indexável no HTML. Trabalho inicial do agente na branch `agente-chatgpt/site-inicial`.

## Executar localmente
Sirva esta pasta como raiz de um servidor HTTP estático, por exemplo `python3 -m http.server 8000`, e acesse `http://localhost:8000`.

## Rotas
- `/`
- `/servicos/`
- `/servicos/poda-de-plantas/`
- `/servicos/rocagem-de-gramados/`
- `/servicos/controle-de-pragas-em-jardins/`
- `/servicos/manutencao-de-jardins/`

## Fotografias
Os templates contêm os caminhos catalogados para 22 fotos que estão no arquivo ZIP do Drive. **Os arquivos JPEG ainda não estão neste repositório.** Antes de publicar, extrair as imagens da versão renomeada do ZIP para `images/<servico>/` conforme `MAPA_IMPLEMENTACAO_IMAGENS.md`; sem os arquivos, aparece um fundo gráfico de contingência.

## Pendências de publicação
- Confirmar o nome comercial (o texto `Jardinagem BH` é identificador provisório).
- Configurar WhatsApp oficial; não há link falso para um número fictício.
- Adicionar imagens com direitos de uso confirmados; otimizar para WebP/AVIF.
- Definir domínio e URL canônica para ativar sitemap com URLs absolutas, robots.txt e Search Console.
- Validar fidelidade visual com os frames do Figma, principalmente mobile.
- Concluir migração dos estilos para pipeline de Tailwind CSS antes do build de produção. Nesta versão inicial, o CSS independente mantém as páginas diretamente visualizáveis.

## Fontes de requisitos
Regras de negócio, conteúdo SEO e mapa de fotografias estão em `Wx2 Sistemas/Projetos/site-jardinagem/docs/regras/site/` no Google Drive.
