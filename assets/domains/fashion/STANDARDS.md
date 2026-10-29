# Fashion / Lifestyle: design standards

> Editorial, minimal, image-led luxury.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Monochrome first: black, white, warm greys; photography is the colour.
- One restrained accent (antique gold) for highlights, never for large fills.
- Sale in muted red only; avoid bright promotional colours that cheapen the brand.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F8F7F7` | `#131211` | Page background |
| `surface` | `#FFFFFF` | `#1D1C1B` | Cards, modals, inputs |
| `surface-alt` | `#F0F0EF` | `#282625` | Subtle sections, table stripes, hover |
| `border` | `#DDDBDA` | `#3A3836` | Dividers and input borders |
| `text` | `#181716` | `#F0F0EF` | Body and headings |
| `text-muted` | `#63615E` | `#B1ADA9` | Secondary text, captions, placeholders |
| `primary` | `#111111` | `#888888` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#0B0B0F` | Text/icons on primary |
| `primary-hover` | `#0F0F0F` | `#969696` | Primary hover / pressed |
| `primary-text` | `#111111` | `#888888` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#ECECEC` | `#262524` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#6B5B4B` | `#908478` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#0B0B0F` | Text on secondary |
| `accent` | `#B8860B` | `#B8860B` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#111111` | `#888888` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#ECECEC` | `#F3F2F1` | `#F9F5EB` |
| 100 | `#D9D9D9` | `#E7E5E2` | `#F4ECD8` |
| 200 | `#B3B3B3` | `#D0CBC5` | `#E8D8B1` |
| 300 | `#888888` | `#B5ADA5` | `#DCC285` |
| 400 | `#4C4C4C` | `#908478` | `#CAA448` |
| 500 | `#111111` | `#6B5B4B` | `#B8860B` |
| 600 | `#0E0E0E` | `#5B4D40` | `#9C7209` |
| 700 | `#0C0C0C` | `#4B4034` | `#815E08` |
| 800 | `#090909` | `#3B3229` | `#654A06` |
| 900 | `#070707` | `#2B241E` | `#4A3604` |

Brand gradient: `linear-gradient(135deg, #111111, #6B5B4B)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-sale` | `#B91C1C` | `#B91C1C` | 6.1:1 / 2.9:1 |
| `--x-sold-out` | `#6B7280` | `#6B7280` | 4.5:1 / 3.9:1 |
| `--x-size-available` | `#111111` | `#111111` | 17.7:1 / 1.0:1 |
| `--x-size-unavailable` | `#BDBDBD` | `#BDBDBD` | 1.8:1 / 10.0:1 |
| `--x-new-in` | `#111111` | `#111111` | 17.7:1 / 1.0:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.7:1 | 16.4:1 |
| text on surface | 17.9:1 | 14.9:1 |
| muted text on bg | 5.8:1 | 8.4:1 |
| muted text on surface | 6.2:1 | 7.6:1 |
| on-primary on primary | 18.9:1 | 5.5:1 |
| on-secondary on secondary | 6.5:1 | 5.4:1 |
| on-accent on accent | 6.0:1 | 6.0:1 |
| primary-text (links) on bg | 17.7:1 | 5.3:1 |
| success on bg | 4.7:1 | 10.7:1 |
| warning on bg | 4.7:1 | 11.2:1 |
| danger on bg | 6.1:1 | 6.8:1 |
| info on bg | 6.3:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Bodoni Moda | 500, 600 | `--font-heading` |
| Body | Jost | 400, 500 | `--font-body` |

Headings: weight 500, tracking 0.01em, transform none. Body line-height 1.55. Type scale ratio 1.25, base 16px.

| Token | rem | px | Typical use |
|---|---|---|---|
| `--text-xs` | 0.64 | 10 | Captions, legal, badges |
| `--text-sm` | 0.8 | 13 | Meta, helper text, table cells |
| `--text-base` | 1.0 | 16 | Body copy |
| `--text-lg` | 1.25 | 20 | Lead paragraph, H6/H5 |
| `--text-xl` | 1.562 | 25 | H4 |
| `--text-2xl` | 1.953 | 31 | H3 |
| `--text-3xl` | 2.441 | 39 | H2 (mobile) |
| `--text-4xl` | 3.052 | 49 | H2 / H1 (mobile) |
| `--text-5xl` | 3.815 | 61 | Hero H1 (desktop) |

### Rules
- Bodoni Moda (high-contrast serif) for headlines at 32px and above only; Jost for body.
- Navigation and labels: Jost 12-13px, uppercase, 0.12em letter-spacing.
- Generous leading (1.55) and wide margins; headings 500 weight, never bold.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 32 icons included in `icons/`, stroke width **1.5px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor (thin), Lucide at 1.5px.

### Rules
- Thin 1.5px outline icons, square caps feel preferred; 20-24px.
- Fewer icons overall: prefer text labels.

**Included:** `shopping-bag`, `heart`, `search`, `user`, `ruler`, `shirt`, `scissors`, `truck`, `rotate-ccw`, `gift`, `tag`, `map-pin`, `sparkles`, `star`, `eye`, `share-2`, `menu`, `x`, `chevron-right`, `arrow-right`, `play`, `camera`, `image`, `calendar`, `bell`, `funnel`, `plus`, `minus`, `credit-card`, `package`, `store`, `globe`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Editorial hero | 4:5 mobile, 16:9 desktop | 1600x2000 / 2400x1350 | AVIF/WebP, <=220KB | Full-bleed, text overlay in white or black with 4.5:1 scrim |
| Product (on-model) | 4:5 | 1200x1500 | WebP, <=140KB | Consistent lighting, neutral backdrop; provide 4-6 angles + zoom |
| Product (flat-lay) | 4:5 | 1200x1500 | WebP | Alternate image on hover |
| Lookbook tile | 3:4 or 1:1 | 900x1200 | WebP | Mixed grid allowed |
| Brand mark | auto | SVG | SVG | Wordmark in --color-text |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Square corners, 1px black borders, no shadows.
- Full-bleed imagery, asymmetric editorial grids, slow 300ms fades.
- Buttons: solid black or outlined; uppercase tracked label.
- Size selector as bordered squares; unavailable sizes struck through.

Shape and motion: radius 0/0/0px (sm/md/lg), flat (borders instead of shadows), base transition 300ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Thin type on photos needs a scrim to hit 4.5:1.
- Provide descriptive alt text including garment, colour and fit.
- Size guide and returns policy must be reachable from product page.

## 7. Avoid

- Rounded pill buttons
- Heavy drop shadows
- Bold Bodoni at small sizes
- More than one accent colour

