# E-commerce / Retail: design standards

> Trustworthy, scannable, conversion-focused.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Neutral canvas (white / cool grey) so product photography carries the colour.
- Blue = trust and links; orange = Add to Cart / Buy Now (the single highest-contrast action); red is reserved for sale and discount.
- Green only for in-stock, success and free shipping; amber for low stock.
- Max one accent per viewport region; CTA colour must never be reused for decoration.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F6F7F8` | `#101114` | Page background |
| `surface` | `#FFFFFF` | `#191B1F` | Cards, modals, inputs |
| `surface-alt` | `#EEEFF2` | `#23252A` | Subtle sections, table stripes, hover |
| `border` | `#D7DADF` | `#33373D` | Dividers and input borders |
| `text` | `#14161A` | `#EEEFF2` | Body and headings |
| `text-muted` | `#5A5F68` | `#A2AAB9` | Secondary text, captions, placeholders |
| `primary` | `#2563EB` | `#2563EB` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#2157CF` | `#3F76ED` | Primary hover / pressed |
| `primary-text` | `#2563EB` | `#5C8AF0` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#EEF3FD` | `#131E36` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#111827` | `#888C93` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#0B0B0F` | Text on secondary |
| `accent` | `#D46213` | `#F97316` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#2563EB` | `#5C8AF0` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#EEF3FD` | `#ECEDEE` | `#FFF4EC` |
| 100 | `#DCE6FC` | `#D9DADC` | `#FEE9DA` |
| 200 | `#B9CDF9` | `#B3B5BA` | `#FDD2B4` |
| 300 | `#92B1F5` | `#888C93` | `#FCB98A` |
| 400 | `#5C8AF0` | `#4C525D` | `#FA9650` |
| 500 | `#2563EB` | `#111827` | `#F97316` |
| 600 | `#1F54C8` | `#0E1421` | `#D46213` |
| 700 | `#1A45A4` | `#0C111B` | `#AE500F` |
| 800 | `#143681` | `#090D15` | `#893F0C` |
| 900 | `#0F285E` | `#070A10` | `#642E09` |

Brand gradient: `linear-gradient(135deg, #2563EB, #111827)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-sale` | `#DC2626` | `#DC2626` | 4.5:1 / 3.9:1 |
| `--x-price` | `#111827` | `#111827` | 16.5:1 / 1.1:1 |
| `--x-price-old` | `#6B7280` | `#6B7280` | 4.5:1 / 3.9:1 |
| `--x-rating` | `#F59E0B` | `#F59E0B` | 2.0:1 / 8.8:1 |
| `--x-in-stock` | `#15803D` | `#15803D` | 4.7:1 / 3.8:1 |
| `--x-low-stock` | `#B45309` | `#B45309` | 4.7:1 / 3.8:1 |
| `--x-out-of-stock` | `#6B7280` | `#6B7280` | 4.5:1 / 3.9:1 |
| `--x-free-shipping` | `#0E7490` | `#0E7490` | 5.0:1 / 3.5:1 |
| `--x-badge-new` | `#2563EB` | `#2563EB` | 4.8:1 / 3.7:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.9:1 | 16.4:1 |
| text on surface | 18.1:1 | 15.0:1 |
| muted text on bg | 6.0:1 | 8.1:1 |
| muted text on surface | 6.4:1 | 7.4:1 |
| on-primary on primary | 5.2:1 | 5.2:1 |
| on-secondary on secondary | 17.7:1 | 5.8:1 |
| on-accent on accent | 5.2:1 | 7.0:1 |
| primary-text (links) on bg | 4.8:1 | 5.7:1 |
| success on bg | 4.7:1 | 10.8:1 |
| warning on bg | 4.7:1 | 11.3:1 |
| danger on bg | 6.0:1 | 6.8:1 |
| info on bg | 6.2:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Poppins | 500, 600, 700 | `--font-heading` |
| Body | Inter | 400, 500, 600, 700 | `--font-body` |

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
- Poppins for headings and prices-as-hero; Inter for everything else.
- Prices: Inter 600-700 with font-variant-numeric: tabular-nums; strike-through old price in muted grey.
- Product titles max 2 lines then truncate with ellipsis.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 37 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Heroicons, Material Symbols.

### Rules
- 2px outline icons, 24px nav and 20px in buttons.
- Cart, wishlist and account icons always carry a visible count/badge and aria-label.
- Trust row (secure payment, returns, delivery) uses icon + 12-14px label.

**Included:** `shopping-cart`, `shopping-bag`, `heart`, `search`, `user`, `package`, `truck`, `credit-card`, `tag`, `percent`, `star`, `store`, `map-pin`, `rotate-ccw`, `shield-check`, `badge-check`, `headset`, `gift`, `funnel`, `sliders-horizontal`, `receipt`, `wallet`, `bell`, `menu`, `x`, `chevron-down`, `plus`, `minus`, `trash-2`, `eye`, `share-2`, `circle-check`, `circle-alert`, `clock`, `house`, `layout-grid`, `list`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Product main | 1:1 | 1200x1200 | WebP/AVIF, <=150KB | Pure white (#FFFFFF) or very light grey background, product fills 80% of frame |
| Product thumbnail | 1:1 | 400x400 | WebP, <=30KB | Consistent crop and shadow across the catalogue |
| Category tile | 4:3 | 800x600 | WebP, <=60KB | Lifestyle or cut-out on tinted background |
| Hero / promo banner | 21:9 desktop, 4:5 mobile | 2400x1000 / 1080x1350 | WebP, <=200KB | Art-direct separately for mobile; keep CTA text as HTML, not baked in |
| Brand / payment logos | auto | height 24-32px | SVG | Greyscale unless brand guidelines require colour |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Sticky header with search first; cart always visible.
- Product grid: 2 cols mobile, 3 tablet, 4-5 desktop; consistent card height.
- Sticky mobile Add-to-Cart bar; 48px minimum tap height.
- Checkout: single column, progress indicator, guest checkout, inline validation.
- Skeleton loaders in the shape of cards, never spinners for lists.

Shape and motion: radius 6/8/12px (sm/md/lg), soft elevation shadows, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Sale price must not rely on red alone: add "Sale" label or percent badge.
- Quantity steppers and filters operable by keyboard; focus ring visible.
- Show total price including taxes where law requires it; clear returns and refund policy links.
- Payment pages: show recognised trust marks only if actually held.

## 7. Avoid

- Multiple competing orange buttons
- Auto-rotating carousels as the only navigation
- Baked-in text inside banner images
- Hidden shipping costs until the last step

