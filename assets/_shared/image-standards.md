# Image standards (all domains)

## Formats
| Use | Format | Notes |
|---|---|---|
| Photography | AVIF (best), WebP (fallback), JPEG (legacy) | Quality 70-80, strip metadata |
| Logos, icons, illustrations, diagrams | SVG | Optimise with SVGO; set `viewBox` |
| Transparency | WebP or PNG-8/24 | Avoid PNG for photos |
| Animation | MP4/WebM loop (muted), not GIF | Provide pause control |
| Social / OG | JPEG or PNG 1200x630 | |

## Sizes and weight budgets
- Hero: max 1920-2400px wide, <= 200-250KB. Card images <= 60KB. Thumbnails <= 30KB. Whole page image weight ideally < 1MB above the fold.
- Provide `srcset` widths 480, 768, 1280, 1920 (+2x for small fixed-size images).
- Always set `width` and `height` (or CSS `aspect-ratio`) to prevent layout shift (CLS < 0.1).
- `loading="lazy"` for below-the-fold; `fetchpriority="high"` for the LCP hero image (never lazy).

## Common aspect ratios
1:1 products/avatars, 4:5 portrait cards (mobile hero), 3:2 photography, 4:3 cards, 16:9 video/hero, 21:9 cinematic banners, 2:3 posters, 1.91:1 social cards.

## Naming
`kebab-case`, descriptive, with size/density suffix: `hero-home.avif`, `hero-home@2x.avif`, `product-blue-sneaker-front-1200.webp`.

## Art direction
Consistent lighting, crop, colour grade and background across a set. Real people and places beat generic stock. Represent diverse people. Obtain model releases and licences; record the credit.

## Accessibility
- Meaningful `alt` (what the image communicates, not "image of"); `alt=""` for decorative.
- Text over images needs a scrim to reach 4.5:1; keep important text as HTML, not baked into the image.
- Provide captions/transcripts for video; avoid autoplay with sound.

## Folder convention
```
src/assets/
  images/<section>/<name>.<ext>
  icons/<name>.svg
  fonts/<Family>/<file>.woff2
```
