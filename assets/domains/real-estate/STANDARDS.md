# Real Estate / Property: design standards

> Reliable, aspirational, data-rich.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Navy primary for trust; amber accent for featured listings and CTAs; green for new/verified.
- Status chips use extras tokens (for sale, for rent, sold, reduced) with text labels.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F7F7F8` | `#101213` | Page background |
| `surface` | `#FFFFFF` | `#1A1C1E` | Cards, modals, inputs |
| `surface-alt` | `#EEF0F1` | `#242629` | Subtle sections, table stripes, hover |
| `border` | `#D8DBDE` | `#35383B` | Dividers and input borders |
| `text` | `#151719` | `#EEF0F1` | Body and headings |
| `text-muted` | `#5C6166` | `#A5ADB6` | Secondary text, captions, placeholders |
| `primary` | `#1E3A5F` | `#566B87` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#1A3354` | `#6A7D95` | Primary hover / pressed |
| `primary-text` | `#1E3A5F` | `#8E9CAF` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#EDEFF2` | `#1B2026` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#3F6212` | `#6F894D` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#0B0B0F` | Text on secondary |
| `accent` | `#B86505` | `#D97706` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#1E3A5F` | `#8E9CAF` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#EDEFF2` | `#F0F2EC` | `#FCF4EB` |
| 100 | `#DBDFE5` | `#E0E6D9` | `#F9E9D7` |
| 200 | `#B7C0CC` | `#C2CDB3` | `#F3D3AF` |
| 300 | `#8E9CAF` | `#9FB088` | `#ECBB82` |
| 400 | `#566B87` | `#6F894D` | `#E29944` |
| 500 | `#1E3A5F` | `#3F6212` | `#D97706` |
| 600 | `#1A3151` | `#36530F` | `#B86505` |
| 700 | `#152942` | `#2C450D` | `#985304` |
| 800 | `#102034` | `#23360A` | `#774103` |
| 900 | `#0C1726` | `#192707` | `#573002` |

Brand gradient: `linear-gradient(135deg, #1E3A5F, #3F6212)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-for-sale` | `#1E3A5F` | `#1E3A5F` | 10.7:1 / 1.6:1 |
| `--x-for-rent` | `#0E7490` | `#0E7490` | 5.0:1 / 3.5:1 |
| `--x-sold` | `#6B7280` | `#6B7280` | 4.5:1 / 3.9:1 |
| `--x-new-listing` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-price-reduced` | `#B91C1C` | `#B91C1C` | 6.0:1 / 2.9:1 |
| `--x-verified` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-featured` | `#D97706` | `#D97706` | 3.0:1 / 5.9:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.8:1 | 16.4:1 |
| text on surface | 18.0:1 | 14.9:1 |
| muted text on bg | 5.8:1 | 8.3:1 |
| muted text on surface | 6.3:1 | 7.5:1 |
| on-primary on primary | 11.5:1 | 5.5:1 |
| on-secondary on secondary | 7.1:1 | 5.0:1 |
| on-accent on accent | 4.6:1 | 6.2:1 |
| primary-text (links) on bg | 10.7:1 | 6.7:1 |
| success on bg | 4.7:1 | 10.8:1 |
| warning on bg | 4.7:1 | 11.3:1 |
| danger on bg | 6.0:1 | 6.8:1 |
| info on bg | 6.3:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Montserrat | 500, 600, 700 | `--font-heading` |
| Body | Source Sans 3 | 400, 600, 700 | `--font-body` |

Headings: weight 600, tracking -0.01em, transform none. Body line-height 1.55. Type scale ratio 1.2, base 16px.

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
- Montserrat for headings and prices; Source Sans 3 for body and specs.
- Prices large (24-32px) and bold with tabular numerals; specs (beds, baths, sqft) in 14-16px with icons.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 39 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Heroicons, Material Symbols.

### Rules
- 2px outline, 24px; spec row icons 20px (bed, bath, area, parking).
- Heart (save), share and compare are always visible on cards.

**Included:** `house`, `building`, `building-2`, `map-pin`, `map`, `bed-double`, `bath`, `car`, `ruler`, `key-round`, `door-open`, `sofa`, `trees`, `layers`, `landmark`, `calculator`, `hand-coins`, `percent`, `file-text`, `file-signature`, `calendar-check`, `phone`, `mail`, `user-round`, `heart`, `search`, `sliders-horizontal`, `camera`, `video`, `expand`, `share-2`, `shield-check`, `star`, `trending-up`, `compass`, `school`, `hospital`, `shopping-cart`, `bus`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Listing cover | 3:2 | 1600x1067 | WebP, <=140KB | Bright, wide-angle, level verticals, daytime |
| Gallery | 3:2 | 1600x1067 | WebP | Minimum 12 photos + floor plan + video tour |
| Floor plan | auto | SVG/PNG | SVG preferred | Labelled rooms and dimensions |
| Agent portrait | 1:1 | 400x400 | WebP | Consistent background |
| Map / neighbourhood | 16:9 | 1200x675 | Vector map / WebP | Pins coloured by status tokens |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Search first: location, type, budget, beds; map + list split view on desktop.
- Listing card: image carousel, price, status, address, 3-4 specs, agent CTA.
- Mortgage / EMI calculator and neighbourhood scores on detail page.
- Schedule visit form with calendar slots.

Shape and motion: radius 6/10/14px (sm/md/lg), soft elevation shadows, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Alt text describes room and features; floor plans need text equivalents.
- Display RERA / licence numbers and fair-housing statements where required.
- Show area units clearly (sq ft vs sq m) and allow toggling.

## 7. Avoid

- Over-edited photos that misrepresent the property
- Prices without currency/units
- Auto-playing video tours
- Pin colours with no legend

