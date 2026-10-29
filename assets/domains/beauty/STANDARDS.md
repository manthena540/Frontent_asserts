# Beauty / Cosmetics / Wellness: design standards

> Soft, sensorial, premium and inclusive.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Warm blush-tinted neutrals (not cold grey); deep rose primary for CTAs, rose-gold secondary for accents, sage for skincare/clean claims.
- Use the 6 skin-tone swatch tokens for shade pickers; never use them as decoration.
- Keep saturation low: pastels as backgrounds, deep rose only for actions.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F9F6F5` | `#16100E` | Page background |
| `surface` | `#FFFFFF` | `#221917` | Cards, modals, inputs |
| `surface-alt` | `#F4EEEB` | `#2E231F` | Subtle sections, table stripes, hover |
| `border` | `#E3D7D3` | `#42332F` | Dividers and input borders |
| `text` | `#1D1411` | `#F3EEED` | Body and headings |
| `text-muted` | `#6E5A53` | `#BAA7A0` | Secondary text, captions, placeholders |
| `primary` | `#9D174D` | `#B6517A` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#8A1444` | `#BF668A` | Primary hover / pressed |
| `primary-text` | `#9D174D` | `#CE8BA6` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#F7ECF1` | `#301A1F` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#B76E79` | `#B76E79` | Secondary buttons, supporting UI |
| `on-secondary` | `#0B0B0F` | `#0B0B0F` | Text on secondary |
| `accent` | `#557567` | `#557567` | Highlights, CTAs, badges |
| `on-accent` | `#FFFFFF` | `#FFFFFF` | Text on accent |
| `focus-ring` | `#9D174D` | `#CE8BA6` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#F7ECF1` | `#F9F3F4` | `#F1F4F3` |
| 100 | `#EFDAE3` | `#F3E8EA` | `#E4E9E7` |
| 200 | `#E0B5C6` | `#E8D1D4` | `#C9D3CE` |
| 300 | `#CE8BA6` | `#DBB6BC` | `#AABAB3` |
| 400 | `#B6517A` | `#C9929A` | `#80988D` |
| 500 | `#9D174D` | `#B76E79` | `#557567` |
| 600 | `#851441` | `#9C5E67` | `#486358` |
| 700 | `#6E1036` | `#804D55` | `#3C5248` |
| 800 | `#560D2A` | `#653C43` | `#2F4039` |
| 900 | `#3F091F` | `#492C30` | `#222F29` |

Brand gradient: `linear-gradient(135deg, #9D174D, #B76E79)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-skin-1` | `#F6D7C3` | `#F6D7C3` | 1.3:1 / 13.8:1 |
| `--x-skin-2` | `#E8B896` | `#E8B896` | 1.7:1 / 10.5:1 |
| `--x-skin-3` | `#D19A6B` | `#D19A6B` | 2.3:1 / 7.7:1 |
| `--x-skin-4` | `#B07A4F` | `#B07A4F` | 3.4:1 / 5.2:1 |
| `--x-skin-5` | `#8A5A3B` | `#8A5A3B` | 5.4:1 / 3.2:1 |
| `--x-skin-6` | `#5B3A29` | `#5B3A29` | 9.4:1 / 1.9:1 |
| `--x-vegan` | `#4D7C0F` | `#4D7C0F` | 4.6:1 / 3.8:1 |
| `--x-cruelty-free` | `#0E7490` | `#0E7490` | 5.0:1 / 3.5:1 |
| `--x-sale` | `#BE123C` | `#BE123C` | 5.8:1 / 3.0:1 |
| `--x-rating` | `#B45309` | `#B45309` | 4.7:1 / 3.8:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.8:1 | 16.4:1 |
| text on surface | 18.1:1 | 15.0:1 |
| muted text on bg | 6.0:1 | 8.2:1 |
| muted text on surface | 6.5:1 | 7.5:1 |
| on-primary on primary | 7.9:1 | 4.7:1 |
| on-secondary on secondary | 5.2:1 | 5.2:1 |
| on-accent on accent | 5.1:1 | 5.1:1 |
| primary-text (links) on bg | 7.3:1 | 7.1:1 |
| success on bg | 4.7:1 | 10.8:1 |
| warning on bg | 4.7:1 | 11.3:1 |
| danger on bg | 6.0:1 | 6.8:1 |
| info on bg | 6.2:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Cormorant Garamond | 500, 600, 700 | `--font-heading` |
| Body | Jost | 400, 500 | `--font-body` |

Headings: weight 500, tracking 0.01em, transform none. Body line-height 1.6. Type scale ratio 1.25, base 16px.

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
- Cormorant Garamond for headlines (36px+); its thin strokes need size and 500-600 weight.
- Jost 400 for body, 500 for labels; 16px minimum.
- Italic Cormorant is acceptable for pull quotes.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 37 icons included in `icons/`, stroke width **1.5px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor (light/duotone), Lucide at 1.5px.

### Rules
- 1.5px stroke, rounded, organic; 20-24px.
- Droplet, leaf, sparkle for ingredient and benefit callouts.

**Included:** `sparkles`, `heart`, `droplet`, `droplets`, `flower-2`, `leaf`, `sun`, `moon`, `sparkle`, `gem`, `gift`, `shopping-bag`, `search`, `user`, `star`, `calendar`, `clock`, `map-pin`, `camera`, `scissors`, `brush`, `palette`, `wand-sparkles`, `smile`, `shield-check`, `truck`, `tag`, `badge-check`, `flask-conical`, `feather`, `eye`, `share-2`, `menu`, `x`, `chevron-right`, `plus`, `minus`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Hero / campaign | 16:9 desktop, 4:5 mobile | 2400x1350 / 1080x1350 | AVIF/WebP, <=200KB | Soft natural light, diverse models, space for headline |
| Product packshot | 1:1 | 1200x1200 | WebP, <=120KB | Warm off-white or tinted backdrop; show texture swatch as 2nd image |
| Shade swatches | 1:1 circle | 96x96 | SVG or WebP | Provide full range of skin tones; label shade name and undertone |
| Before / after | 1:1 pair | 800x800 each | WebP | Same lighting; add disclaimer where required |
| Ingredient / lifestyle | 4:5 | 1000x1250 | WebP | Macro textures, botanicals |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Rounded 16px cards, pill buttons (999px) for primary CTAs.
- Generous white space; slow 300ms fades.
- Shade picker with circular swatches, selected state with ring + name.
- Virtual try-on / quiz CTAs are primary entry points.

Shape and motion: radius 12/16/28px (sm/md/lg), soft elevation shadows, base transition 300ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Show inclusive shade ranges and alt text describing the product and shade.
- Substantiate claims (dermatologist-tested, vegan, cruelty-free) with real certifications; show ingredient lists.
- Before/after imagery must be unretouched or labelled per local advertising rules.

## 7. Avoid

- Cold blue-grey backgrounds
- Thin serif below 24px
- Unlabelled colour-only swatches
- Retouched results presented as real

