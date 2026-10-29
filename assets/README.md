# Design standards and asset kit for React websites (16 domains)

Ready-to-use fonts (self-hosted WOFF2), colour tokens (light + dark), type scales, icons, image specs and written standards for each kind of website.

## Folder structure
```
assets/
├── README.md
├── palette-preview.html        # open in a browser: all domains, palettes + fonts
├── all-domains.css             # every domain's tokens, scoped by <html data-domain="...">
├── all-tokens.json / tokens.js # same tokens for JS / CSS-in-JS / charts
├── tailwind.preset.js          # Tailwind preset wired to the CSS variables
├── fonts/                      # 30 font families (Latin WOFF2 + OFL licence) + fonts.css
├── _shared/                    # base.css, typography / colour / icon / image / accessibility standards
├── react/                      # DomainTheme.jsx, Icon.jsx, main.example.jsx
└── domains/<domain>/
    ├── STANDARDS.md            # the full written standard for that domain
    ├── tokens.css / tokens.json
    ├── fonts.css               # only the @font-face this domain needs
    ├── icons/                  # curated SVG icons (Lucide, stroke set per domain)
    └── images/                 # placeholder SVGs + put real photography here
```

## Quick start (Vite + React)
Single domain (smallest bundle):
```js
import './assets/domains/healthcare/fonts.css';
import './assets/domains/healthcare/tokens.css';
import './assets/_shared/base.css';
```
Multi-domain / white-label:
```js
import './assets/fonts/fonts.css';
import './assets/all-domains.css';
import './assets/_shared/base.css';
// <html data-domain="fintech" data-theme="dark">
```
Use variables anywhere: `color: var(--color-primary-text); font-family: var(--font-heading); border-radius: var(--radius-md);`

## Domains at a glance
| Domain | Native | Primary / Secondary / Accent | Heading font | Body font | Icon stroke | Radius |
|---|---|---|---|---|---|---|
| [Gaming](domains/gaming/STANDARDS.md) | dark | `#7C3AED` `#06B6D4` `#F43F5E` | Orbitron | Exo 2 | 2px | 4/6/10 |
| [E-commerce / Retail](domains/ecommerce/STANDARDS.md) | light | `#2563EB` `#111827` `#F97316` | Poppins | Inter | 2px | 6/8/12 |
| [Fashion / Lifestyle](domains/fashion/STANDARDS.md) | light | `#111111` `#6B5B4B` `#B8860B` | Bodoni Moda | Jost | 1.5px | 0/0/0 |
| [Beauty / Cosmetics / Wellness](domains/beauty/STANDARDS.md) | light | `#9D174D` `#B76E79` `#557567` | Cormorant Garamond | Jost | 1.5px | 12/16/28 |
| [Healthcare / Hospital / Clinic](domains/healthcare/STANDARDS.md) | light | `#0369A1` `#0D9488` `#C62828` | Lexend | Open Sans | 2px | 8/12/16 |
| [Corporate / B2B / Commercial](domains/corporate/STANDARDS.md) | light | `#1E3A8A` `#475569` `#B7791F` | IBM Plex Sans | IBM Plex Sans | 1.75px | 4/6/8 |
| [AI / SaaS / Developer Tools](domains/ai-saas/STANDARDS.md) | dark | `#4F46E5` `#0891B2` `#A855F7` | Space Grotesk | Inter | 2px | 8/12/20 |
| [Fintech / Banking / Insurance](domains/fintech/STANDARDS.md) | light | `#0A4D8C` `#0F9D6B` `#F5B700` | Manrope | Inter | 2px | 8/12/16 |
| [Education / E-learning](domains/education/STANDARDS.md) | light | `#4338CA` `#0284C7` `#F59E0B` | Nunito | Nunito Sans | 2px | 8/12/20 |
| [Food / Restaurant / Delivery](domains/food/STANDARDS.md) | light | `#C2410C` `#166534` `#CA8A04` | Playfair Display | Lato | 2px | 8/12/20 |
| [Travel / Hospitality / Hotels](domains/travel/STANDARDS.md) | light | `#0E7490` `#1E293B` `#F97316` | DM Serif Display | DM Sans | 2px | 10/16/24 |
| [Real Estate / Property](domains/real-estate/STANDARDS.md) | light | `#1E3A5F` `#3F6212` `#D97706` | Montserrat | Source Sans 3 | 2px | 6/10/14 |
| [Media / News / Publishing / Blog](domains/media-news/STANDARDS.md) | light | `#C62828` `#1A1A1A` `#0B57D0` | Playfair Display | Source Serif 4 | 1.75px | 2/4/6 |
| [Entertainment / Streaming / Music](domains/streaming/STANDARDS.md) | dark | `#E11D48` `#7C3AED` `#FACC15` | Bebas Neue | Inter | 2px | 4/6/8 |
| [Fitness / Sports / Outdoor](domains/fitness/STANDARDS.md) | dark | `#A3E635` `#F97316` `#38BDF8` | Barlow Condensed | Barlow | 2.25px | 4/8/12 |
| [Government / Non-profit / Public Services](domains/government/STANDARDS.md) | light | `#005EA2` `#162E51` `#C2410C` | Public Sans | Public Sans | 2px | 2/4/8 |

## What is guaranteed
- Every text/background pair used by the tokens passes WCAG AA (4.5:1) in both light and dark themes (computed at build time; see each STANDARDS.md).
- Fonts are self-hosted Latin subsets under SIL OFL 1.1 (see `fonts/<Family>/LICENSE-OFL.txt`). Icons are Lucide (ISC). Placeholders and tokens are free to use.
- Brand colours are sensible starting points, not trademarks: replace `--primary-500`, `--secondary-500`, `--accent-500` (or edit `tokens.json`) with your real brand colours, then re-check contrast.

## Not included
- Latin only: add Noto Sans Devanagari / Telugu / Arabic etc. for other scripts.
- Brand/social/payment logos (download from each brand's press kit), real photography, and illustrations.
- Merged with another assets folder? Keep this kit in its own folder (e.g. `src/design-system/`) to avoid clashing `fonts/` paths.

## Cross-domain rules
Read `_shared/`: typography-standards.md, color-standards.md, icon-standards.md, image-standards.md, accessibility-standards.md.
