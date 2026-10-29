# Government / Non-profit / Public Services: design standards

> Clear, inclusive, plain-language, accessible by default.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Calm blue primary and navy secondary; use burnt orange sparingly for donate/urgent calls.
- Link colour blue (underlined) with a distinct visited colour; focus ring thick and high-contrast.
- Alerts use tinted backgrounds + icon + text.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F7F7F8` | `#111213` | Page background |
| `surface` | `#FFFFFF` | `#1A1C1E` | Cards, modals, inputs |
| `surface-alt` | `#EEF0F1` | `#242628` | Subtle sections, table stripes, hover |
| `border` | `#D9DBDE` | `#35383B` | Dividers and input borders |
| `text` | `#151719` | `#EEF0F1` | Body and headings |
| `text-muted` | `#5D6165` | `#A7ADB4` | Secondary text, captions, placeholders |
| `primary` | `#005EA2` | `#4086B9` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#0B0B0F` | Text/icons on primary |
| `primary-hover` | `#00538F` | `#5795C1` | Primary hover / pressed |
| `primary-text` | `#005EA2` | `#80AED0` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#EBF2F8` | `#19252E` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#162E51` | `#50627C` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#FFFFFF` | Text on secondary |
| `accent` | `#C2410C` | `#C2410C` | Highlights, CTAs, badges |
| `on-accent` | `#FFFFFF` | `#FFFFFF` | Text on accent |
| `focus-ring` | `#005EA2` | `#80AED0` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#EBF2F8` | `#ECEEF1` | `#FAF0EC` |
| 100 | `#D6E5F0` | `#DADEE3` | `#F5E1D8` |
| 200 | `#ADCBE1` | `#B4BCC7` | `#EBC2B1` |
| 300 | `#80AED0` | `#8A96A8` | `#E0A086` |
| 400 | `#4086B9` | `#50627C` | `#D17049` |
| 500 | `#005EA2` | `#162E51` | `#C2410C` |
| 600 | `#00508A` | `#132745` | `#A5370A` |
| 700 | `#004271` | `#0F2039` | `#882E08` |
| 800 | `#003459` | `#0C192D` | `#6B2407` |
| 900 | `#002641` | `#091220` | `#4E1A05` |

Brand gradient: `linear-gradient(135deg, #005EA2, #162E51)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-info` | `#0B5CAD` | `#0B5CAD` | 6.2:1 / 2.8:1 |
| `--x-success-bg` | `#ECF3EC` | `#ECF3EC` | 1.1:1 / 16.6:1 |
| `--x-warning-bg` | `#FAF3D1` | `#FAF3D1` | 1.0:1 / 16.8:1 |
| `--x-error-bg` | `#F4E3DB` | `#F4E3DB` | 1.2:1 / 15.1:1 |
| `--x-visited-link` | `#54278F` | `#54278F` | 9.5:1 / 1.8:1 |
| `--x-focus-ring` | `#2491FF` | `#2491FF` | 3.0:1 / 5.9:1 |
| `--x-donate` | `#C2410C` | `#C2410C` | 4.8:1 / 3.6:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.8:1 | 16.4:1 |
| text on surface | 18.0:1 | 14.9:1 |
| muted text on bg | 5.8:1 | 8.3:1 |
| muted text on surface | 6.2:1 | 7.6:1 |
| on-primary on primary | 6.7:1 | 5.0:1 |
| on-secondary on secondary | 13.6:1 | 6.2:1 |
| on-accent on accent | 5.2:1 | 5.2:1 |
| primary-text (links) on bg | 6.3:1 | 7.9:1 |
| success on bg | 4.7:1 | 10.8:1 |
| warning on bg | 4.7:1 | 11.2:1 |
| danger on bg | 6.0:1 | 6.8:1 |
| info on bg | 6.3:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Public Sans | 600, 700 | `--font-heading` |
| Body | Public Sans | 400, 500, 600, 700 | `--font-body` |

Headings: weight 700, tracking 0, transform none. Body line-height 1.55. Type scale ratio 1.2, base 17px.

| Token | rem | px | Typical use |
|---|---|---|---|
| `--text-xs` | 0.738 | 12 | Captions, legal, badges |
| `--text-sm` | 0.885 | 14 | Meta, helper text, table cells |
| `--text-base` | 1.062 | 17 | Body copy |
| `--text-lg` | 1.275 | 20 | Lead paragraph, H6/H5 |
| `--text-xl` | 1.53 | 24 | H4 |
| `--text-2xl` | 1.836 | 29 | H3 |
| `--text-3xl` | 2.203 | 35 | H2 (mobile) |
| `--text-4xl` | 2.644 | 42 | H2 / H1 (mobile) |
| `--text-5xl` | 3.173 | 51 | Hero H1 (desktop) |

### Rules
- Public Sans (designed for government use) for all text; 17px base, 1.55 leading; plain language at grade 8 or lower.
- Left-aligned text, no justified paragraphs; headings in sentence case.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 43 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: USWDS icons (Material based), Material Symbols.

### Rules
- 2px outline, 24px, always with visible text labels for services.
- Use universally understood symbols; add tooltips and aria-labels.

**Included:** `landmark`, `building-2`, `scale`, `gavel`, `file-text`, `file-check`, `clipboard-list`, `users`, `user-round`, `hand-heart`, `heart-handshake`, `handshake`, `hand-coins`, `globe`, `map-pin`, `phone`, `mail`, `calendar`, `clock`, `circle-help`, `info`, `circle-alert`, `shield-check`, `lock`, `search`, `download`, `printer`, `languages`, `accessibility`, `vote`, `id-card`, `badge-check`, `megaphone`, `newspaper`, `leaf`, `house`, `school`, `hospital`, `bus`, `menu`, `x`, `chevron-right`, `external-link`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Hero (optional) | 16:9 | 1920x1080 | WebP, <=180KB | Real people and places; avoid decorative flags overload |
| Service tile | 1:1 icon | 96x96 | SVG | Consistent illustration set |
| Impact / story image | 3:2 | 1200x800 | WebP | Consent and dignity of subjects |
| Seal / emblem | auto | SVG | SVG | Official asset only; minimum clear space |
| Document thumbnails | 3:4 | 240x320 | PNG/WebP | Show file type and size |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Task-first homepage: top tasks as large links; prominent search; breadcrumb on every page.
- Forms: one question per page where possible, clear labels above fields, error summary at top.
- Language switcher, text size control and high-contrast option; print-friendly pages.
- Donation flow (non-profit): preset amounts, monthly toggle, transparent fund usage.

Shape and motion: radius 2/4/8px (sm/md/lg), flat (borders instead of shadows), base transition 150ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- WCAG 2.2 AA is a legal requirement in many jurisdictions (Section 508, EN 301 549, India GIGW); test with screen readers.
- Support low bandwidth and older devices; progressive enhancement.
- Multilingual content, including right-to-left and Indic scripts, with proper fonts.
- Privacy notice and consent for any data collection.

## 7. Avoid

- Heavy animation
- Jargon and acronyms without expansion
- Low-contrast placeholder-only labels
- PDF-only information

