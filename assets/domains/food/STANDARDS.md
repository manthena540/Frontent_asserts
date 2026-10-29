# Food / Restaurant / Delivery: design standards

> Warm, appetising, quick to order.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Warm cream background; burnt orange primary stimulates appetite; herb green for fresh/veg; mustard for highlights.
- Veg (green) and non-veg (red) markers are legally required in India; always show on every menu item.
- Avoid blue/grey-dominant palettes; they suppress appetite.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#FAF7F5` | `#16120E` | Page background |
| `surface` | `#FFFFFF` | `#221C16` | Cards, modals, inputs |
| `surface-alt` | `#F4F0EB` | `#2E261E` | Subtle sections, table stripes, hover |
| `border` | `#E4DBD3` | `#42382E` | Dividers and input borders |
| `text` | `#1E1710` | `#F3F0ED` | Body and headings |
| `text-muted` | `#6F6152` | `#BAADA0` | Secondary text, captions, placeholders |
| `primary` | `#C2410C` | `#C2410C` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#AB390B` | `#C95829` | Primary hover / pressed |
| `primary-text` | `#C2410C` | `#D17049` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#FAF0EC` | `#321A0E` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#166534` | `#508C67` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#0B0B0F` | Text on secondary |
| `accent` | `#AC7503` | `#CA8A04` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#C2410C` | `#D17049` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#FAF0EC` | `#ECF3EF` | `#FBF6EB` |
| 100 | `#F5E1D8` | `#DAE6DF` | `#F7ECD7` |
| 200 | `#EBC2B1` | `#B4CEBE` | `#EEDAAF` |
| 300 | `#E0A086` | `#8AB29A` | `#E4C482` |
| 400 | `#D17049` | `#508C67` | `#D7A743` |
| 500 | `#C2410C` | `#166534` | `#CA8A04` |
| 600 | `#A5370A` | `#13562C` | `#AC7503` |
| 700 | `#882E08` | `#0F4724` | `#8D6103` |
| 800 | `#6B2407` | `#0C381D` | `#6F4C02` |
| 900 | `#4E1A05` | `#092815` | `#513702` |

Brand gradient: `linear-gradient(135deg, #C2410C, #AC7503)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-veg` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-non-veg` | `#B91C1C` | `#B91C1C` | 6.1:1 / 2.9:1 |
| `--x-egg` | `#CA8A04` | `#CA8A04` | 2.8:1 / 6.3:1 |
| `--x-spicy` | `#DC2626` | `#DC2626` | 4.5:1 / 3.9:1 |
| `--x-offer` | `#C2410C` | `#C2410C` | 4.9:1 / 3.6:1 |
| `--x-rating` | `#B45309` | `#B45309` | 4.7:1 / 3.7:1 |
| `--x-open-now` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-closed` | `#6B7280` | `#6B7280` | 4.5:1 / 3.9:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.6:1 | 16.4:1 |
| text on surface | 17.7:1 | 14.8:1 |
| muted text on bg | 5.6:1 | 8.5:1 |
| muted text on surface | 6.0:1 | 7.7:1 |
| on-primary on primary | 5.2:1 | 5.2:1 |
| on-secondary on secondary | 7.1:1 | 4.9:1 |
| on-accent on accent | 5.0:1 | 6.7:1 |
| primary-text (links) on bg | 4.9:1 | 5.4:1 |
| success on bg | 4.7:1 | 10.7:1 |
| warning on bg | 4.7:1 | 11.2:1 |
| danger on bg | 6.1:1 | 6.7:1 |
| info on bg | 6.3:1 | 7.3:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Playfair Display | 600, 700 | `--font-heading` |
| Body | Lato | 400, 700 | `--font-body` |
| Accent | Caveat | 500, 700 | `--font-accent` |

Headings: weight 700, tracking 0, transform none. Body line-height 1.55. Type scale ratio 1.25, base 16px.

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
- Playfair Display for menu headings and brand; Lato for item names and body.
- Caveat script only for short accents ("Chef's special"), never body.
- Prices right-aligned, tabular numerals; allergen notes 12px minimum.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 38 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor, Tabler.

### Rules
- 2px outline, friendly; 24px.
- Dietary icons (leaf, wheat, flame) always with text.

**Included:** `utensils`, `utensils-crossed`, `chef-hat`, `pizza`, `soup`, `salad`, `cake`, `coffee`, `wine`, `beer`, `cookie`, `ice-cream-cone`, `sandwich`, `egg`, `flame`, `leaf`, `wheat`, `bike`, `truck`, `clock`, `map-pin`, `phone`, `star`, `heart`, `shopping-bag`, `receipt`, `qr-code`, `calendar`, `users`, `percent`, `tag`, `search`, `menu`, `x`, `badge-check`, `circle-alert`, `timer`, `store`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Dish photo | 1:1 or 4:3 | 1200x900 | WebP, <=100KB | Natural light, 45-degree angle, consistent plating background |
| Hero | 16:9 / 4:5 | 1920x1080 | WebP, <=200KB | Appetising close-up, warm tones, space for CTA |
| Menu item thumbnail | 1:1 | 320x320 | WebP, <=25KB | Always show; photographs raise conversion |
| Restaurant interior | 3:2 | 1200x800 | WebP | Real photos |
| Veg / non-veg marks | 16x16 | SVG | SVG | Green square-with-dot = veg; red square-with-dot = non-veg (mandatory in India) |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Sticky category tabs, search and veg-only toggle.
- Item cards: photo, name, description (2 lines), price, ADD button; customisation in a bottom sheet.
- Cart shows delivery time, fees, taxes; live order tracking.
- Reservations: date, party size, time chips.

Shape and motion: radius 8/12/20px (sm/md/lg), soft elevation shadows, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Display allergen and nutrition info where required (FSSAI, FDA, EU 1169/2011).
- Large tap targets for ordering one-handed; offline-friendly menu.
- Do not use colour alone for spice or dietary level.

## 7. Avoid

- Stock food photos that misrepresent dishes
- Tiny veg/non-veg markers
- Cold colour palettes
- Hidden delivery fees

