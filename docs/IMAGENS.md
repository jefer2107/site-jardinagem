# Fotografias do site

As 22 fotos originais do cliente foram identificadas de FOTO-01 a FOTO-22 e agrupadas por serviço no mapa de implementação do Drive.

Fonte: https://drive.google.com/file/d/1odbVj97ZqHmKhxV_qjoEyceau2ntwbuM/view

## Publicação

A integração do GitHub limita o tamanho de um blob transferido por chamada. Por isso, o ZIP renomeado foi armazenado, em base64, nas partes ordenadas de `assets/photos-parts/`. Durante o GitHub Actions, as partes são concatenadas, decodificadas e extraídas para `images/`; elas não entram no artefato publicado.

O arquivo `images/<servico>/foto-NN-<descricao>.jpeg` é utilizado diretamente pelas páginas HTML.

NÃO alterar a ordem ou renomear as partes. Para trocar ou adicionar fotos, reprocessar o pacote completo e atualizar o mapa. Não declarar as fotos como execução comprovada da empresa sem confirmação. Não subir novas imagens para Figma.

Pendência: versões WebP/AVIF e revisão de direitos comerciais antes de divulgação definitiva.
