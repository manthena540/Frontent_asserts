# Corporate / B2B / Commercial: design standards

> Credible, structured, professional.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Deep navy primary signals stability; slate secondary for supporting UI; antique gold sparingly for highlights and awards.
- Neutral cool-grey surfaces; white cards on a grey canvas for dashboards.
- Charts use the shared categorical chart palette (colour-blind safe).

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F6F7F8` | `#101214` | Page background |
| `surface` | `#FFFFFF` | `#1A1C1E` | Cards, modals, inputs |
| `surface-alt` | `#EEEFF2` | `#232629` | Subtle sections, table stripes, hover |
| `border` | `#D8DBDF` | `#34373C` | Dividers and input borders |
| `text` | `#14161A` | `#EEEFF2` | Body and headings |
| `text-muted` | `#5B6067` | `#A4ACB7` | Secondary text, captions, placeholders |
| `primary` | `#1E3A8A` | `#566BA7` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#1A3379` | `#6A7DB2` | Primary hover / pressed |
| `primary-text` | `#1E3A8A` | `#8E9CC4` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#EDEFF6` | `#1B202C` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#475569` | `#75808E` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#0B0B0F` | Text on secondary |
| `accent` | `#B7791F` | `#B7791F` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#1E3A8A` | `#8E9CC4` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#EDEFF6` | `#F0F1F3` | `#F9F4ED` |
| 100 | `#DBDFEC` | `#E2E4E7` | `#F3EADB` |
| 200 | `#B7C0DA` | `#C4C9CF` | `#E8D4B7` |
| 300 | `#8E9CC4` | `#A3AAB4` | `#DBBC8F` |
| 400 | `#566BA7` | `#75808E` | `#C99A57` |
| 500 | `#1E3A8A` | `#475569` | `#B7791F` |
| 600 | `#1A3175` | `#3C4859` | `#9C671A` |
| 700 | `#152961` | `#323C4A` | `#805516` |
| 800 | `#10204C` | `#272F3A` | `#654311` |
| 900 | `#0C1737` | `#1C222A` | `#49300C` |

Brand gradient: `linear-gradient(135deg, #1E3A8A, #475569)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-positive` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-negative` | `#B91C1C` | `#B91C1C` | 6.0:1 / 2.9:1 |
| `--x-neutral` | `#475569` | `#475569` | 7.1:1 / 2.5:1 |
| `--x-highlight` | `#FEF3C7` | `#FEF3C7` | 1.0:1 / 16.9:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.9:1 | 16.3:1 |
| text on surface | 18.1:1 | 14.9:1 |
| muted text on bg | 5.9:1 | 8.2:1 |
| muted text on surface | 6.3:1 | 7.5:1 |
| on-primary on primary | 10.4:1 | 5.2:1 |
| on-secondary on secondary | 7.6:1 | 4.9:1 |
| on-accent on accent | 5.4:1 | 5.4:1 |
| primary-text (links) on bg | 9.7:1 | 6.9:1 |
| success on bg | 4.7:1 | 10.8:1 |
| warning on bg | 4.7:1 | 11.2:1 |
| danger on bg | 6.0:1 | 6.8:1 |
| info on bg | 6.2:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | IBM Plex Sans | 600, 700 | `--font-heading` |
| Body | IBM Plex Sans | 400, 500 | `--font-body` |
| Mono | IBM Plex Mono | 400, 500 | `--font-mono` |

Headings: weight 600, tracking -0.01em, transform none. Body line-height 1.5. Type scale ratio 1.2, base 16px.

| Token | rem | px | Typical use |
|---|---|---|---|
| `--text-xs` | 0.694 | 11 | Captions, legal, badges |
| `--text-sm` | 0.833 | 13 | Meta, helper text, table cells |
| `--text-base` | 1.0 | 16 | Body copy |
| `--text-lg` | 1.2 | 19 | Lead paragraph, H6/H5 |
| `--text-xl` | 1.44 | 23 | H4 |
| `--text-2xl` | 1.728 | 28 | H3 |
| `--text-3xl` | 2.074 | 33 | H2 (mobile) |
| `--text-4xl` | 2.488 | 40 | H2 / H1 (mobile) |
| `--text-5xl` | 2.986 | 48 | Hero H1 (desktop) |

### Rules
- IBM Plex Sans for everything; IBM Plex Mono for figures, IDs and code.
- Headings 600, tight tracking; body 16px; dense tables 14px with tabular numerals.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 43 icons included in `icons/`, stroke width **1.75px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Tabler, Heroicons, Carbon.

### Rules
- 1.75px outline, 20-24px, consistent corner radius.
- Use icons with labels in navigation and feature grids.

**Included:** `building-2`, `briefcase`, `handshake`, `users`, `user-round`, `chart-line`, `chart-bar`, `chart-pie`, `trending-up`, `target`, `globe`, `mail`, `phone`, `map-pin`, `file-text`, `file-check`, `clipboard-check`, `calendar`, `clock`, `shield-check`, `lock`, `settings`, `layers`, `workflow`, `award`, `badge-check`, `scale`, `landmark`, `factory`, `truck`, `package`, `wallet`, `receipt`, `circle-help`, `headset`, `search`, `menu`, `x`, `chevron-right`, `arrow-right`, `download`, `upload`, `link`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Hero | 16:9 | 1920x1080 | WebP, <=200KB | Real team / office / product in use; duotone overlay in primary at 60% if needed |
| Team portrait | 1:1 or 4:5 | 600x600 | WebP, <=50KB | Same background and framing for the whole team page |
| Case study cover | 3:2 | 1200x800 | WebP | Client logo + headline metric overlay as HTML |
| Client logos | auto | height 32-40px | SVG | Monochrome (grey) row |
| Illustration / diagram | auto | SVG | SVG | Use brand palette only; 2px strokes |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- 12-column grid, max width 1200-1280px, strong alignment.
- Clear primary CTA ("Request a demo", "Contact sales") above the fold; secondary "Learn more".
- Social proof (logos, metrics, testimonials) directly under hero.
- Data tables: sticky header, zebra optional, sortable.

Shape and motion: radius 4/6/8px (sm/md/lg), soft elevation shadows, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- WCAG 2.2 AA; provide accessible chart alternatives (tables / text summaries).
- Cookie and consent banners compliant with GDPR / local law.
- Document downloads (PDF) should be tagged and accessible.

## 7. Avoid

- Decorative stock handshake photos
- More than 2 font families
- Dense walls of text without hierarchy
- Gold used for body text

