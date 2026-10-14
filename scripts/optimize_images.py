#!/usr/bin/env python3
"""Gera imagens responsivas mantendo os JPEGs originais intactos."""
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path("images")
WIDTHS = (480, 960, 1400)

def optimize_images():
    originals = sorted(ROOT.rglob("*.jpeg"))
    if len(originals) != 22:
        raise RuntimeError(f"Esperadas 22 fotografias; encontradas {len(originals)}")

    for path in originals:
        with Image.open(path) as source:
            image = ImageOps.exif_transpose(source).convert("RGB")
            for width in WIDTHS:
                resized = image.copy()
                resized.thumbnail((width, width * 4), Image.Resampling.LANCZOS)
                for extension, quality in (("webp", 76), ("avif", 53)):
                    destination = path.with_name(f"{path.stem}-{width}.{extension}")
                    resized.save(destination, format=extension.upper(), quality=quality)
                    if not destination.exists() or destination.stat().st_size == 0:
                        raise RuntimeError(f"Falha ao gerar {destination}")

    print(f"Geradas {len(originals) * len(WIDTHS) * 2} versões responsivas de {len(originals)} fotos.")

if __name__ == "__main__":
    optimize_images()
