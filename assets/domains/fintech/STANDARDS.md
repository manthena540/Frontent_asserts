# Fintech / Banking / Insurance: design standards

> Secure, precise, calm confidence with clear gain/loss semantics.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Navy-blue primary conveys security; emerald is growth/gain; amber used for highlights and attention.
- Gain = green and Loss = red ALWAYS with +/- sign and arrow icon (never colour alone).
- White surfaces, subtle cool-grey canvas; dark mode supported.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F6F7F9` | `#101114` | Page background |
| `surface` | `#FFFFFF` | `#191C1F` | Cards, modals, inputs |
| `surface-alt` | `#EDEFF2` | `#22262B` | Subtle sections, table stripes, hover |
| `border` | `#D7DBE0` | `#33373D` | Dividers and input borders |
| `text` | `#13161B` | `#EDEFF2` | Body and headings |
| `text-muted` | `#596069` | `#A0ABBA` | Secondary text, captions, placeholders |
| `primary` | `#0A4D8C` | `#477AA9` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#09447B` | `#5D8AB3` | Primary hover / pressed |
| `primary-text` | `#0A4D8C` | `#84A6C6` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#EBF1F6` | `#19222C` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#0F9D6B` | `#0F9D6B` | Secondary buttons, supporting UI |
| `on-secondary` | `#0B0B0F` | `#0B0B0F` | Text on secondary |
| `accent` | `#AC8000` | `#F5B700` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#0A4D8C` | `#84A6C6` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#EBF1F6` | `#ECF7F3` | `#FEF9EB` |
| 100 | `#D8E3ED` | `#D9EFE7` | `#FDF3D6` |
| 200 | `#B1C6DA` | `#B2E0D0` | `#FCE8AD` |
| 300 | `#84A6C6` | `#87CEB5` | `#FADB80` |
| 400 | `#477AA9` | `#4BB690` | `#F8C940` |
| 500 | `#0A4D8C` | `#0F9D6B` | `#F5B700` |
| 600 | `#084177` | `#0D855B` | `#D09C00` |
| 700 | `#073662` | `#0A6E4B` | `#AC8000` |
| 800 | `#062A4D` | `#08563B` | `#876500` |
| 900 | `#041F38` | `#063F2B` | `#624900` |

Brand gradient: `linear-gradient(135deg, #0A4D8C, #0F9D6B)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-gain` | `#15803D` | `#4ADE80` | 4.7:1 / 10.8:1 |
| `--x-loss` | `#B91C1C` | `#F87171` | 6.0:1 / 6.8:1 |
| `--x-pending` | `#B45309` | `#FBBF24` | 4.7:1 / 11.3:1 |
| `--x-flat` | `#6B7280` | `#6B7280` | 4.5:1 / 3.9:1 |
| `--x-card-gradient-from` | `#0A4D8C` | `#0A4D8C` | 8.0:1 / 2.2:1 |
| `--x-card-gradient-to` | `#0F9D6B` | `#0F9D6B` | 3.2:1 / 5.4:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.9:1 | 16.4:1 |
| text on surface | 18.1:1 | 14.9:1 |
| muted text on bg | 5.9:1 | 8.1:1 |
| muted text on surface | 6.4:1 | 7.4:1 |
| on-primary on primary | 8.6:1 | 4.5:1 |
| on-secondary on secondary | 5.7:1 | 5.7:1 |
| on-accent on accent | 5.5:1 | 10.9:1 |
| primary-text (links) on bg | 8.0:1 | 7.4:1 |
| success on bg | 4.7:1 | 10.8:1 |
| warning on bg | 4.7:1 | 11.3:1 |
| danger on bg | 6.0:1 | 6.8:1 |
| info on bg | 6.3:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Manrope | 600, 700, 800 | `--font-heading` |
| Body | Inter | 400, 500, 600 | `--font-body` |
| Mono | JetBrains Mono | 400, 500 | `--font-mono` |

Headings: weight 700, tracking -0.015em, transform none. Body line-height 1.5. Type scale ratio 1.2, base 16px.

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
- Manrope for headings and large balances; Inter for UI; JetBrains Mono for account / card numbers.
- Use font-variant-numeric: tabular-nums on every amount; right-align numeric columns.
- Currency symbol smaller and lighter than the amount; always show currency code where ambiguous.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 37 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor, Heroicons, Material Symbols.

### Rules
- 2px outline, 24px; security (lock, shield, fingerprint) shown at authentication steps.
- Never replace text labels for money-moving actions with icons alone.

**Included:** `wallet`, `landmark`, `credit-card`, `banknote`, `coins`, `piggy-bank`, `hand-coins`, `receipt`, `arrow-left-right`, `arrow-up-right`, `arrow-down-left`, `trending-up`, `trending-down`, `chart-line`, `chart-pie`, `percent`, `calculator`, `shield-check`, `lock`, `fingerprint-pattern`, `scan-face`, `qr-code`, `smartphone`, `bell`, `user-round`, `building-2`, `file-text`, `circle-help`, `headset`, `globe`, `send`, `download`, `calendar-clock`, `badge-check`, `eye`, `eye-off`, `key-round`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Hero | 16:9 | 1920x1080 | WebP, <=180KB | App UI mockup or real customers; avoid piles of cash |
| Card visual | 1.586:1 (ISO card) | 856x540 | SVG/WebP | Use card_gradient tokens |
| App screenshots | 9:19.5 | 1170x2532 | WebP | Device frame optional |
| Partner / regulator logos | auto | height 32px | SVG | Only real affiliations (RBI, FDIC, PCI-DSS etc.) |
| Illustration | auto | SVG | SVG | Flat, brand palette, no gradients on people |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Dashboard: balance card, quick actions (Send, Pay, Request), recent transactions, insights.
- Confirm-before-commit for transfers with a summary step; show fees up front.
- Progressive KYC forms with progress and autosave.
- Session timeout notices; biometric / OTP flows with clear error recovery.

Shape and motion: radius 8/12/16px (sm/md/lg), soft elevation shadows, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- WCAG 2.2 AA; avoid time-limited steps without extension.
- Regulatory disclosures (risk warnings, APR, T&Cs, licence numbers) must be visible and readable (>=12px).
- Mask sensitive data by default with a visible reveal toggle.

## 7. Avoid

- Red/green as the only gain/loss signal
- Stock photos of cash and handshakes
- Hidden fees
- Decorative animation on transaction screens

