# Fitness / Sports / Outdoor: design standards

> Energetic, bold, performance-driven.

Native theme: **dark** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Dark base with volt-lime primary (dark text on it), orange for effort/calories, sky for hydration/recovery.
- Heart-rate zones Z1-Z5 use the zone tokens consistently across all charts and screens.
- Light theme uses darker lime steps automatically for text/links.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F7F8F7` | `#111311` | Page background |
| `surface` | `#FFFFFF` | `#1A1E1C` | Cards, modals, inputs |
| `surface-alt` | `#EEF1EF` | `#242826` | Subtle sections, table stripes, hover |
| `border` | `#D9DEDB` | `#353B37` | Dividers and input borders |
| `text` | `#151916` | `#EEF1EF` | Body and headings |
| `text-muted` | `#5D6560` | `#A7B4AB` | Secondary text, captions, placeholders |
| `primary` | `#5A7E1D` | `#A3E635` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#0B0B0F` | Text/icons on primary |
| `primary-hover` | `#4F6F1A` | `#AEE94D` | Primary hover / pressed |
| `primary-text` | `#415C15` | `#A3E635` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#F8FDEF` | `#283517` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#D46213` | `#F97316` | Secondary buttons, supporting UI |
| `on-secondary` | `#0B0B0F` | `#0B0B0F` | Text on secondary |
| `accent` | `#2784AE` | `#38BDF8` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#415C15` | `#A3E635` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#F8FDEF` | `#FFF4EC` | `#EFFAFE` |
| 100 | `#F0FBDF` | `#FEE9DA` | `#DFF4FE` |
| 200 | `#E2F7BE` | `#FDD2B4` | `#BFEAFD` |
| 300 | `#D1F29A` | `#FCB98A` | `#9CDEFC` |
| 400 | `#BAEC68` | `#FA9650` | `#6ACEFA` |
| 500 | `#A3E635` | `#F97316` | `#38BDF8` |
| 600 | `#8BC42D` | `#D46213` | `#30A1D3` |
| 700 | `#72A125` | `#AE500F` | `#2784AE` |
| 800 | `#5A7E1D` | `#893F0C` | `#1F6888` |
| 900 | `#415C15` | `#642E09` | `#164C63` |

Brand gradient: `linear-gradient(135deg, #5A7E1D, #D46213)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-zone1` | `#9CA3AF` | `#9CA3AF` | 2.4:1 / 7.4:1 |
| `--x-zone2` | `#3B82F6` | `#3B82F6` | 3.5:1 / 5.1:1 |
| `--x-zone3` | `#22C55E` | `#22C55E` | 2.1:1 / 8.2:1 |
| `--x-zone4` | `#F59E0B` | `#F59E0B` | 2.0:1 / 8.7:1 |
| `--x-zone5` | `#EF4444` | `#EF4444` | 3.5:1 / 5.0:1 |
| `--x-calories` | `#F97316` | `#F97316` | 2.6:1 / 6.7:1 |
| `--x-steps` | `#22C55E` | `#22C55E` | 2.1:1 / 8.2:1 |
| `--x-sleep` | `#818CF8` | `#818CF8` | 2.8:1 / 6.3:1 |
| `--x-win` | `#22C55E` | `#22C55E` | 2.1:1 / 8.2:1 |
| `--x-loss` | `#EF4444` | `#EF4444` | 3.5:1 / 5.0:1 |
| `--x-live` | `#EF4444` | `#EF4444` | 3.5:1 / 5.0:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.7:1 | 16.4:1 |
| text on surface | 17.8:1 | 14.8:1 |
| muted text on bg | 5.6:1 | 8.7:1 |
| muted text on surface | 6.0:1 | 7.8:1 |
| on-primary on primary | 4.7:1 | 13.0:1 |
| on-secondary on secondary | 5.2:1 | 7.0:1 |
| on-accent on accent | 4.7:1 | 9.2:1 |
| primary-text (links) on bg | 7.1:1 | 12.4:1 |
| success on bg | 4.7:1 | 10.7:1 |
| warning on bg | 4.7:1 | 11.2:1 |
| danger on bg | 6.1:1 | 6.7:1 |
| info on bg | 6.3:1 | 7.3:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Barlow Condensed | 600, 700 | `--font-heading` |
| Body | Barlow | 400, 500, 600 | `--font-body` |

Headings: weight 700, tracking 0.02em, transform uppercase. Body line-height 1.5. Type scale ratio 1.333, base 16px.

| Token | rem | px | Typical use |
|---|---|---|---|
| `--text-xs` | 0.563 | 9 | Captions, legal, badges |
| `--text-sm` | 0.75 | 12 | Meta, helper text, table cells |
| `--text-base` | 1.0 | 16 | Body copy |
| `--text-lg` | 1.333 | 21 | Lead paragraph, H6/H5 |
| `--text-xl` | 1.777 | 28 | H4 |
| `--text-2xl` | 2.369 | 38 | H3 |
| `--text-3xl` | 3.157 | 51 | H2 (mobile) |
| `--text-4xl` | 4.209 | 67 | H2 / H1 (mobile) |
| `--text-5xl` | 5.61 | 90 | Hero H1 (desktop) |

### Rules
- Barlow Condensed (uppercase, 700) for headings and big stats; Barlow for body and UI.
- Large numeric stats (48-72px) with small uppercase units; tabular numerals.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 38 icons included in `icons/`, stroke width **2.25px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor (bold), Tabler.

### Rules
- 2.25px thicker strokes, bold feel; 24px, 28px for tab bar.
- Activity icons accompany every metric.

**Included:** `dumbbell`, `activity`, `heart-pulse`, `flame`, `timer`, `trophy`, `medal`, `target`, `zap`, `footprints`, `bike`, `person-standing`, `trending-up`, `chart-line`, `calendar-check`, `clock`, `map-pin`, `route`, `mountain`, `apple`, `utensils`, `droplet`, `moon`, `scale`, `watch`, `smartphone`, `play`, `users`, `user-round`, `award`, `star`, `bell`, `settings`, `share-2`, `plus`, `search`, `menu`, `x`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Hero action shot | 16:9 / 4:5 | 2400x1350 | AVIF/WebP, <=250KB | Motion, sweat, real athletes of varied body types; high contrast |
| Workout / class card | 4:3 | 800x600 | WebP, <=70KB | Instructor + intensity badge |
| Exercise demo | 1:1 | 600x600 | WebP/MP4 loop <=500KB | Silent looping video with captions |
| Progress photos / charts | auto | SVG | SVG | Use zone tokens for heart-rate zones |
| Product (gear) | 1:1 | 1200x1200 | WebP | Cut-out on dark or light-grey |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Today dashboard: ring/progress cards, next workout, streak.
- Workout player with large timer, rest countdown, haptic cues.
- Leaderboards and challenges with clear rules and privacy options.
- Plan builder and calendar views.

Shape and motion: radius 4/8/12px (sm/md/lg), soft elevation shadows, base transition 150ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Medical disclaimer and PAR-Q style health checks before intense programmes.
- Do not promote unsafe weight-loss claims; avoid body-shaming imagery.
- High-contrast mode and large tap targets for use during exercise; voice/audio cues option.
- Protect health data (GDPR, HIPAA-like rules, DPDP Act).

## 7. Avoid

- Neon lime as text on white
- Before/after shaming imagery
- Small stats during activity screens
- Overly aggressive streak guilt notifications

