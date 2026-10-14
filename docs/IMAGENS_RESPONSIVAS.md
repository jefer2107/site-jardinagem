# Fotografias: carregamento responsivo

O arquivo-fonte é reconstruído pelo workflow do Pages a partir do ZIP no repositório. `scripts/optimize_images.py` gera WebP e AVIF em larguras máximas de 480, 960 e 1400 pixels para cada uma das 22 fotografias, com JPEG como fallback.

Os arquivos HTML usam `<picture>` com `srcset` e `sizes`: navegadores com AVIF usam AVIF, outros podem escolher WebP, e JPEG é mantido como fallback. A imagem do destaque principal usa `loading="eager"` e `fetchpriority="high"`; as demais usam `loading="lazy"`. O CSS define recortes desktop e mobile por contexto, sem alterar os originais. O atributo `alt` descreve a imagem e não afirma execução de serviços.

Validação: o job exige 22 JPEGs, 66 WebP e 66 AVIF antes de publicar. Conferir visualmente os enquadramentos em dispositivos reais; esta implementação usa recortes editoriais iniciais. As fotografias e suas permissões de uso comercial devem ser validadas pelo responsável.
