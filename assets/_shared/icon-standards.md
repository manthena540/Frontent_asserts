# Icon standards (all domains)

- **One family per product.** Do not mix outline and filled sets or different stroke widths. This kit uses Lucide (ISC) with a per-domain stroke width.
- **Grid:** 24x24 with 2px padding; render at 16, 20, 24, 32px; hit area at least 44x44px (48px on touch-first products).
- **Colour:** `currentColor` so icons inherit text colour; use `--color-primary-text` for active, `--color-text-muted` for inactive.
- **Labels:** icon-only buttons need `aria-label`; decorative icons need `aria-hidden="true"`. Pair icons with text for primary navigation and money/health actions.
- **Delivery:** inline SVG or SVG sprite for critical icons; do not use icon fonts. Tree-shake by importing only used icons.
- **Stroke guide:** 1.5px luxury/editorial, 1.75px corporate, 2px default, 2.25-2.5px bold/sport/gaming.
- **Style by domain:** outline (most), filled (media controls, ratings, gaming HUD), duotone (education, wellness) if using Phosphor.
- **Status icons:** success = circle-check, warning = triangle-alert, danger = circle-x / octagon-alert, info = info.
- **Brand logos** (social, payment) are not included; download official SVGs from the brand's press kit and keep them monochrome unless the guidelines say otherwise.

## Common library options
| Library | Licence | Best for |
|---|---|---|
| Lucide | ISC | General purpose (used here) |
| Heroicons | MIT | Tailwind products, ecommerce, SaaS |
| Phosphor | MIT | Multiple weights (thin to bold, duotone) |
| Material Symbols | Apache 2.0 | Android-like, healthcare, government |
| Tabler | MIT | Dashboards, 5000+ icons |
| Font Awesome Free | CC BY 4.0 / OFL | Legacy projects |
