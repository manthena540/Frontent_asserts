# Travel / Hospitality / Hotels: design standards

> Aspirational, airy, inspiring with clear booking flow.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Ocean teal primary, deep slate secondary for text/footer, sunset orange accent for Book Now.
- Use photography for colour; UI stays calm and airy with off-white backgrounds.
- Price drop = green with arrow; deal/limited-time = rose, never alone.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F6F8F9` | `#101314` | Page background |
| `surface` | `#FFFFFF` | `#191E1F` | Cards, modals, inputs |
| `surface-alt` | `#EDF1F2` | `#22282B` | Subtle sections, table stripes, hover |
| `border` | `#D7DEE0` | `#333B3D` | Dividers and input borders |
| `text` | `#13191B` | `#EDF1F2` | Body and headings |
| `text-muted` | `#596569` | `#A0B4BA` | Secondary text, captions, placeholders |
| `primary` | `#0E7490` | `#0E7490` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#0C667F` | `#2B859D` | Primary hover / pressed |
| `primary-text` | `#0E7490` | `#4A97AC` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#ECF4F6` | `#102328` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#1E293B` | `#8E949D` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#0B0B0F` | Text on secondary |
| `accent` | `#D46213` | `#F97316` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#0E7490` | `#4A97AC` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#ECF4F6` | `#EDEEEF` | `#FFF4EC` |
| 100 | `#D8E9ED` | `#DBDDE0` | `#FEE9DA` |
| 200 | `#B2D3DB` | `#B7BBC0` | `#FDD2B4` |
| 300 | `#86BAC8` | `#8E949D` | `#FCB98A` |
| 400 | `#4A97AC` | `#565E6C` | `#FA9650` |
| 500 | `#0E7490` | `#1E293B` | `#F97316` |
| 600 | `#0C637A` | `#1A2332` | `#D46213` |
| 700 | `#0A5165` | `#151D29` | `#AE500F` |
| 800 | `#08404F` | `#101720` | `#893F0C` |
| 900 | `#062E3A` | `#0C1018` | `#642E09` |

Brand gradient: `linear-gradient(135deg, #0E7490, #1E293B)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-price-drop` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-sold-out` | `#6B7280` | `#6B7280` | 4.5:1 / 3.9:1 |
| `--x-rating` | `#B45309` | `#B45309` | 4.7:1 / 3.7:1 |
| `--x-deal` | `#E11D48` | `#E11D48` | 4.4:1 / 4.0:1 |
| `--x-free-cancellation` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-member` | `#7C3AED` | `#7C3AED` | 5.3:1 / 3.3:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.7:1 | 16.4:1 |
| text on surface | 17.8:1 | 14.8:1 |
| muted text on bg | 5.6:1 | 8.6:1 |
| muted text on surface | 6.0:1 | 7.8:1 |
| on-primary on primary | 5.4:1 | 5.4:1 |
| on-secondary on secondary | 14.6:1 | 6.4:1 |
| on-accent on accent | 5.2:1 | 7.0:1 |
| primary-text (links) on bg | 5.0:1 | 5.6:1 |
| success on bg | 4.7:1 | 10.7:1 |
| warning on bg | 4.7:1 | 11.2:1 |
| danger on bg | 6.1:1 | 6.7:1 |
| info on bg | 6.3:1 | 7.3:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | DM Serif Display | 400 | `--font-heading` |
| Body | DM Sans | 400, 500, 700 | `--font-body` |

Headings: weight 400, tracking 0, transform none. Body line-height 1.55. Type scale ratio 1.25, base 16px.

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
- DM Serif Display (single weight) for hero and section headings; DM Sans for UI and body.
- Large hero headings 48-72px; prices in DM Sans 700 with currency and "per night" in muted text.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 40 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor, Material Symbols.

### Rules
- 2px outline, 24px; amenities grid with icon + label.
- Use filled star for ratings with numeric value.

**Included:** `plane`, `plane-takeoff`, `plane-landing`, `hotel`, `bed-double`, `map`, `map-pin`, `compass`, `globe`, `luggage`, `ticket`, `tent`, `mountain`, `tree-palm`, `sun`, `umbrella`, `waves`, `car`, `train-front`, `bus`, `ship`, `calendar-days`, `users`, `user-round`, `star`, `heart`, `search`, `wifi`, `coffee`, `utensils`, `square-parking`, `snowflake`, `shield-check`, `credit-card`, `badge-check`, `clock`, `camera`, `menu`, `x`, `chevron-right`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Destination hero | 16:9 / 4:5 | 2400x1350 | AVIF/WebP, <=250KB | Wide, golden-hour, people for scale; dark gradient scrim for text |
| Property gallery | 3:2 | 1600x1067 | WebP, <=140KB | Minimum 10 photos: room, bath, amenities, exterior, neighbourhood |
| Destination card | 4:5 | 800x1000 | WebP | Portrait for horizontal carousels |
| Map pin / thumbnails | 1:1 | 160x160 | WebP | Rounded 12px |
| Airline / partner logos | auto | height 24px | SVG | Colour allowed |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Prominent search card: destination, dates, guests, one orange CTA.
- Results with filters, sort, map toggle; price per night and total price transparent.
- Sticky booking summary on property page; free-cancellation badge near price.
- Itinerary / trip timelines for multi-day plans.

Shape and motion: radius 10/16/24px (sm/md/lg), soft elevation shadows, base transition 250ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Date pickers keyboard-accessible with clear text alternatives.
- Show total price with taxes and fees; comply with local consumer rules.
- Accessible room features listed (step-free, hearing loops).
- Alt text for property photos describing room/amenity.

## 7. Avoid

- Heavy text over busy photos without scrim
- Drip pricing
- Unlabelled map pins
- Too many urgency banners ("Only 1 left!") unless true

