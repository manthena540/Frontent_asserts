# Entertainment / Streaming / Music: design standards

> Cinematic, immersive, content-forward. Always dark.

Native theme: **dark** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Always dark (bg near #0D0E12); content imagery provides colour; UI chrome stays neutral.
- Brand red for primary actions and progress; gold for ratings; green for "% match" and new.
- Dynamic backdrops from artwork must keep a min 4.5:1 text overlay via scrim.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F7F7F8` | `#101013` | Page background |
| `surface` | `#FFFFFF` | `#1A1A1E` | Cards, modals, inputs |
| `surface-alt` | `#EEEEF1` | `#242429` | Subtle sections, table stripes, hover |
| `border` | `#D8D8DE` | `#35353B` | Dividers and input borders |
| `text` | `#151519` | `#EEEEF1` | Body and headings |
| `text-muted` | `#5C5C66` | `#A5A5B6` | Secondary text, captions, placeholders |
| `primary` | `#E11D48` | `#E11D48` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#C61A3F` | `#E5385E` | Primary hover / pressed |
| `primary-text` | `#BF193D` | `#E85676` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#FDEDF0` | `#31121B` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#7C3AED` | `#7C3AED` | Secondary buttons, supporting UI |
| `on-secondary` | `#FFFFFF` | `#FFFFFF` | Text on secondary |
| `accent` | `#8A700C` | `#FACC15` | Highlights, CTAs, badges |
| `on-accent` | `#FFFFFF` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#BF193D` | `#E85676` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#FDEDF0` | `#F5EFFE` | `#FFFBEC` |
| 100 | `#FADBE2` | `#EADFFC` | `#FEF7DA` |
| 200 | `#F5B7C4` | `#D5C0F9` | `#FDEFB4` |
| 300 | `#F08EA4` | `#BE9CF6` | `#FCE68A` |
| 400 | `#E85676` | `#9D6BF2` | `#FBD950` |
| 500 | `#E11D48` | `#7C3AED` | `#FACC15` |
| 600 | `#BF193D` | `#6931C9` | `#D4AD12` |
| 700 | `#9E1432` | `#5729A6` | `#AF8F0F` |
| 800 | `#7C1028` | `#442082` | `#8A700C` |
| 900 | `#5A0C1D` | `#32175F` | `#645208` |

Brand gradient: `linear-gradient(135deg, #E11D48, #7C3AED)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-match` | `#46D369` | `#46D369` | 1.8:1 / 9.8:1 |
| `--x-imdb` | `#F5C518` | `#F5C518` | 1.5:1 / 11.7:1 |
| `--x-age-rating-bg` | `#374151` | `#374151` | 9.6:1 / 1.8:1 |
| `--x-live` | `#EF4444` | `#EF4444` | 3.5:1 / 5.0:1 |
| `--x-new` | `#22C55E` | `#22C55E` | 2.1:1 / 8.3:1 |
| `--x-top10` | `#F59E0B` | `#F59E0B` | 2.0:1 / 8.8:1 |
| `--x-progress-fill` | `#E11D48` | `#E11D48` | 4.4:1 / 4.0:1 |
| `--x-progress-track` | `#3F3F46` | `#3F3F46` | 9.8:1 / 1.8:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 17.0:1 | 16.4:1 |
| text on surface | 18.2:1 | 15.0:1 |
| muted text on bg | 6.2:1 | 7.8:1 |
| muted text on surface | 6.6:1 | 7.2:1 |
| on-primary on primary | 4.7:1 | 4.7:1 |
| on-secondary on secondary | 5.7:1 | 5.7:1 |
| on-accent on accent | 4.8:1 | 12.8:1 |
| primary-text (links) on bg | 5.7:1 | 5.4:1 |
| success on bg | 4.7:1 | 10.9:1 |
| warning on bg | 4.7:1 | 11.4:1 |
| danger on bg | 6.0:1 | 6.9:1 |
| info on bg | 6.3:1 | 7.5:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Bebas Neue | 400 | `--font-heading` |
| Body | Inter | 400, 500, 600, 700 | `--font-body` |

Headings: weight 400, tracking 0.03em, transform uppercase. Body line-height 1.5. Type scale ratio 1.333, base 16px.

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
- Bebas Neue for titles, rails headings and counts (uppercase); Inter for metadata and UI.
- Metadata line: year, rating, duration in Inter 13-14px muted; descriptions max 3 lines.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 46 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Material Symbols (filled), Phosphor (fill).

### Rules
- 2px filled or outline media icons; player controls 24-32px with 44px hit area.
- Use platform-standard symbols for play, cast, subtitles.

**Included:** `play`, `pause`, `film`, `clapperboard`, `tv`, `popcorn`, `ticket`, `music`, `headphones`, `mic`, `radio`, `podcast`, `star`, `heart`, `plus`, `check`, `thumbs-up`, `thumbs-down`, `share-2`, `download`, `cast`, `volume-2`, `volume-x`, `subtitles`, `captions`, `languages`, `maximize`, `minimize`, `skip-forward`, `skip-back`, `rewind`, `fast-forward`, `list-video`, `search`, `user-round`, `users`, `bell`, `settings`, `flame`, `trending-up`, `clock`, `calendar`, `info`, `ellipsis`, `menu`, `x`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Hero / billboard | 16:9 + 21:9 | 2560x1080 | AVIF/WebP, <=300KB | Bottom gradient scrim; title logo as transparent PNG/SVG |
| Poster (vertical) | 2:3 | 500x750 | WebP, <=60KB | Rail card; hover scale 1.05 |
| Landscape thumbnail | 16:9 | 640x360 | WebP, <=45KB | Progress bar overlay for continue-watching |
| Album / cover | 1:1 | 640x640 | WebP | Dominant-colour extraction for backdrop |
| Title logo | auto | width 300-600px | PNG/SVG transparent | Never recreate with fonts |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Horizontal rails with peek of next item; keyboard/remote focus ring is prominent (3px).
- Hero billboard with Play (primary) and More Info (secondary).
- Player: scrubber with preview, audio/subtitle menu, next-episode countdown.
- Profiles, parental controls and download states.

Shape and motion: radius 4/6/8px (sm/md/lg), soft elevation shadows, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Subtitles/captions and audio description tracks; caption style customisation.
- Respect reduced motion for autoplay previews; provide a pause control.
- Age ratings and content advisories visible; parental PIN flows.
- Licence/region availability clearly communicated.

## 7. Avoid

- Light-theme default
- Text over imagery without scrim
- Autoplay with sound
- Tiny remote/keyboard focus states

