# Media / News / Publishing / Blog: design standards

> Authoritative, readable, content-first.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Paper-warm white background, near-black text, red reserved for BREAKING / LIVE.
- One link blue for all inline links (underlined); category colours only for small tags.
- Avoid colour backgrounds behind long reading text.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F8F8F7` | `#131211` | Page background |
| `surface` | `#FFFFFF` | `#1D1C1B` | Cards, modals, inputs |
| `surface-alt` | `#F1F0EF` | `#282725` | Subtle sections, table stripes, hover |
| `border` | `#DDDCDA` | `#3A3936` | Dividers and input borders |
| `text` | `#181716` | `#F1F0EF` | Body and headings |
| `text-muted` | `#64625E` | `#B2AFA9` | Secondary text, captions, placeholders |
| `primary` | `#C62828` | `#C62828` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#AE2323` | `#CD4242` | Primary hover / pressed |
| `primary-text` | `#C62828` | `#D45E5E` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#FAEEEE` | `#301615` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#1A1A1A` | `#8C8C8C` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#0B0B0F` | Text on secondary |
| `accent` | `#0B57D0` | `#4881DC` | Highlights, CTAs, badges |
| `on-accent` | `#FFFFFF` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#C62828` | `#D45E5E` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#FAEEEE` | `#EDEDED` | `#EBF2FB` |
| 100 | `#F6DDDD` | `#DADADA` | `#D8E4F7` |
| 200 | `#EDBABA` | `#B6B6B6` | `#B1C9F0` |
| 300 | `#E29494` | `#8C8C8C` | `#85ABE8` |
| 400 | `#D45E5E` | `#535353` | `#4881DC` |
| 500 | `#C62828` | `#1A1A1A` | `#0B57D0` |
| 600 | `#A82222` | `#161616` | `#094AB1` |
| 700 | `#8B1C1C` | `#121212` | `#083D92` |
| 800 | `#6D1616` | `#0E0E0E` | `#063072` |
| 900 | `#4F1010` | `#0A0A0A` | `#042353` |

Brand gradient: `linear-gradient(135deg, #C62828, #1A1A1A)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-breaking` | `#C62828` | `#C62828` | 5.3:1 / 3.3:1 |
| `--x-live` | `#DC2626` | `#DC2626` | 4.5:1 / 3.9:1 |
| `--x-opinion` | `#6D28D9` | `#6D28D9` | 6.7:1 / 2.6:1 |
| `--x-sponsored` | `#6B7280` | `#6B7280` | 4.5:1 / 3.9:1 |
| `--x-paywall` | `#B45309` | `#B45309` | 4.7:1 / 3.7:1 |
| `--x-cat-politics` | `#1D4ED8` | `#1D4ED8` | 6.3:1 / 2.8:1 |
| `--x-cat-business` | `#047857` | `#047857` | 5.2:1 / 3.4:1 |
| `--x-cat-sports` | `#C2410C` | `#C2410C` | 4.9:1 / 3.6:1 |
| `--x-cat-tech` | `#0E7490` | `#0E7490` | 5.0:1 / 3.5:1 |
| `--x-cat-culture` | `#9D174D` | `#9D174D` | 7.4:1 / 2.4:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.8:1 | 16.4:1 |
| text on surface | 17.9:1 | 14.9:1 |
| muted text on bg | 5.7:1 | 8.6:1 |
| muted text on surface | 6.1:1 | 7.8:1 |
| on-primary on primary | 5.6:1 | 5.6:1 |
| on-secondary on secondary | 17.4:1 | 5.8:1 |
| on-accent on accent | 6.4:1 | 5.1:1 |
| primary-text (links) on bg | 5.3:1 | 5.0:1 |
| success on bg | 4.7:1 | 10.7:1 |
| warning on bg | 4.7:1 | 11.2:1 |
| danger on bg | 6.1:1 | 6.8:1 |
| info on bg | 6.3:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Playfair Display | 700, 900 | `--font-heading` |
| Body | Source Serif 4 | 400, 600, 700 | `--font-body` |
| Accent | Inter | 500, 600, 700 | `--font-accent` |

Headings: weight 700, tracking -0.01em, transform none. Body line-height 1.65. Type scale ratio 1.25, base 18px.

| Token | rem | px | Typical use |
|---|---|---|---|
| `--text-xs` | 0.72 | 12 | Captions, legal, badges |
| `--text-sm` | 0.9 | 14 | Meta, helper text, table cells |
| `--text-base` | 1.125 | 18 | Body copy |
| `--text-lg` | 1.406 | 22 | Lead paragraph, H6/H5 |
| `--text-xl` | 1.758 | 28 | H4 |
| `--text-2xl` | 2.197 | 35 | H3 |
| `--text-3xl` | 2.747 | 44 | H2 (mobile) |
| `--text-4xl` | 3.433 | 55 | H2 / H1 (mobile) |
| `--text-5xl` | 4.292 | 69 | Hero H1 (desktop) |

### Rules
- Playfair Display for headlines and section titles; Source Serif 4 for article body at 18px / 1.65; Inter for bylines, captions, UI.
- Line length 60-75 characters; paragraph spacing 1em; drop cap optional.
- Headline hierarchy: H1 36-48px, H2 28px, H3 22px.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 30 icons included in `icons/`, stroke width **1.75px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor, Tabler.

### Rules
- 1.75px outline; icons minimal and functional (share, bookmark, comment).
- Share bar sticky on desktop, bottom on mobile.

**Included:** `newspaper`, `radio`, `rss`, `mic`, `podcast`, `video`, `play`, `image`, `bookmark`, `share-2`, `message-square`, `clock`, `calendar`, `search`, `menu`, `x`, `globe`, `trending-up`, `flame`, `tag`, `user-round`, `pen-line`, `quote`, `bell`, `mail`, `languages`, `circle-alert`, `lock`, `sun-moon`, `a-large-small`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Lead story image | 16:9 | 1920x1080 | WebP, <=180KB | Documentary quality; caption + credit mandatory |
| Article inline | 3:2 | 1200x800 | WebP, <=100KB | Always include caption and credit |
| Thumbnail | 1:1 or 4:3 | 400x300 | WebP, <=25KB | Consistent crop |
| Author byline | 1:1 | 96x96 | WebP | Circle |
| OG share card | 1.91:1 | 1200x630 | JPEG | Headline + logo |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Front page grid: lead + secondary + list; dense modular layout; strong rules (1px lines) between sections.
- Article page: single column, large type, related stories, newsletter capture after content.
- Dark and sepia reading modes; font-size control.
- Paywall: show meter and benefits, never hide content from search crawlers incorrectly.

Shape and motion: radius 2/4/6px (sm/md/lg), flat (borders instead of shadows), base transition 150ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Captions/transcripts for video and podcasts; text size controls; skip-to-content links.
- Label sponsored/advertorial content clearly; separate ads from editorial.
- Cookie/consent management; corrections policy link.

## 7. Avoid

- Autoplay video with sound
- Ads between every paragraph
- Low contrast grey body text
- Clickbait colours across headlines

