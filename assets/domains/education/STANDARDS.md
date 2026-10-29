# Education / E-learning: design standards

> Friendly, motivating, highly readable.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Indigo primary signals focus and trust; sky blue supports; amber celebrates achievement (XP, streak, badges).
- Use green/red for correct/incorrect with icon + text; use colour-blind safe level colours with labels.
- Soft tinted backgrounds per subject are fine but keep text at --color-text.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F6F6F9` | `#0F0F15` | Page background |
| `surface` | `#FFFFFF` | `#181820` | Cards, modals, inputs |
| `surface-alt` | `#ECEDF3` | `#20212C` | Subtle sections, table stripes, hover |
| `border` | `#D5D6E2` | `#313240` | Dividers and input borders |
| `text` | `#12131C` | `#EDEDF3` | Body and headings |
| `text-muted` | `#56586C` | `#A0A3BA` | Secondary text, captions, placeholders |
| `primary` | `#4338CA` | `#A19CE4` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#0B0B0F` | Text/icons on primary |
| `primary-hover` | `#3B31B2` | `#ACA8E7` | Primary hover / pressed |
| `primary-text` | `#4338CA` | `#A19CE4` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#F0EFFB` | `#262636` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#0284C7` | `#0284C7` | Secondary buttons, supporting UI |
| `on-secondary` | `#0B0B0F` | `#0B0B0F` | Text on secondary |
| `accent` | `#AC6F08` | `#F59E0B` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#4338CA` | `#A19CE4` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#F0EFFB` | `#EBF5FB` | `#FEF7EB` |
| 100 | `#E1DFF7` | `#D7EBF6` | `#FDEFD8` |
| 200 | `#C3BFEE` | `#AED8ED` | `#FCE0B1` |
| 300 | `#A19CE4` | `#80C2E3` | `#FACE85` |
| 400 | `#726AD7` | `#41A3D5` | `#F8B648` |
| 500 | `#4338CA` | `#0284C7` | `#F59E0B` |
| 600 | `#3930AC` | `#0270A9` | `#D08609` |
| 700 | `#2F278D` | `#015C8B` | `#AC6F08` |
| 800 | `#251F6F` | `#01496D` | `#875706` |
| 900 | `#1B1651` | `#013550` | `#623F04` |

Brand gradient: `linear-gradient(135deg, #4338CA, #0284C7)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-correct` | `#15803D` | `#15803D` | 4.6:1 / 3.8:1 |
| `--x-incorrect` | `#B91C1C` | `#B91C1C` | 6.0:1 / 3.0:1 |
| `--x-streak` | `#EA580C` | `#EA580C` | 3.3:1 / 5.4:1 |
| `--x-xp` | `#B45309` | `#B45309` | 4.7:1 / 3.8:1 |
| `--x-level-beginner` | `#15803D` | `#15803D` | 4.6:1 / 3.8:1 |
| `--x-level-intermediate` | `#B45309` | `#B45309` | 4.7:1 / 3.8:1 |
| `--x-level-advanced` | `#B91C1C` | `#B91C1C` | 6.0:1 / 3.0:1 |
| `--x-progress-track` | `#E5E7EB` | `#2A2F45` | 1.1:1 / 1.4:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 17.1:1 | 16.4:1 |
| text on surface | 18.5:1 | 15.1:1 |
| muted text on bg | 6.5:1 | 7.7:1 |
| muted text on surface | 7.0:1 | 7.1:1 |
| on-primary on primary | 7.9:1 | 7.8:1 |
| on-secondary on secondary | 4.8:1 | 4.8:1 |
| on-accent on accent | 4.7:1 | 9.1:1 |
| primary-text (links) on bg | 7.3:1 | 7.6:1 |
| success on bg | 4.6:1 | 11.0:1 |
| warning on bg | 4.7:1 | 11.4:1 |
| danger on bg | 6.0:1 | 6.9:1 |
| info on bg | 6.2:1 | 7.5:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Nunito | 600, 700, 800 | `--font-heading` |
| Body | Nunito Sans | 400, 600, 700 | `--font-body` |
| Accent | Merriweather | 400, 700 | `--font-accent` |

Headings: weight 700, tracking 0, transform none. Body line-height 1.6. Type scale ratio 1.25, base 17px.

| Token | rem | px | Typical use |
|---|---|---|---|
| `--text-xs` | 0.68 | 11 | Captions, legal, badges |
| `--text-sm` | 0.85 | 14 | Meta, helper text, table cells |
| `--text-base` | 1.062 | 17 | Body copy |
| `--text-lg` | 1.328 | 21 | Lead paragraph, H6/H5 |
| `--text-xl` | 1.66 | 27 | H4 |
| `--text-2xl` | 2.075 | 33 | H3 |
| `--text-3xl` | 2.594 | 42 | H2 (mobile) |
| `--text-4xl` | 3.242 | 52 | H2 / H1 (mobile) |
| `--text-5xl` | 4.053 | 65 | Hero H1 (desktop) |

### Rules
- Nunito (rounded) for headings; Nunito Sans for UI/body; Merriweather for long-form lessons and articles.
- Base 17px with 1.6 leading; lesson text max 70 characters per line.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 42 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor (duotone), Material Symbols.

### Rules
- 2px outline, rounded, 24px; pair with illustrations and mascot for tone.
- Progress rings and badges use filled shapes.

**Included:** `graduation-cap`, `book-open`, `book`, `library`, `notebook-pen`, `pencil`, `pen-line`, `school`, `presentation`, `video`, `circle-play`, `clock`, `calendar`, `award`, `trophy`, `medal`, `star`, `target`, `brain`, `lightbulb`, `users`, `user-round`, `message-circle`, `file-text`, `clipboard-check`, `circle-check`, `bookmark`, `search`, `globe`, `languages`, `calculator`, `flask-conical`, `atom`, `microscope`, `laptop`, `headphones`, `bell`, `chart-bar`, `flame`, `lock`, `menu`, `x`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Course thumbnail | 16:9 | 1280x720 | WebP, <=80KB | Consistent template: subject illustration + course colour band |
| Instructor photo | 1:1 | 400x400 | WebP | Friendly, well-lit; name and credentials as HTML |
| Hero | 16:9 / 4:5 | 1920x1080 | WebP | Real learners, diverse ages; avoid generic classroom stock |
| Illustrations / mascots | auto | SVG | SVG | Rounded shapes, brand palette; mascot expressions for feedback states |
| Certificate | A4 landscape | 3508x2480 | PDF/PNG | Brand colours, verify URL/QR code |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Dashboard: continue-learning card first, then courses, then recommendations.
- Lessons: distraction-free layout, progress bar, next/previous, notes.
- Quizzes: immediate feedback with explanation; never colour-only.
- Gamification (streaks, XP) optional; avoid dark patterns that punish missing a day.

Shape and motion: radius 8/12/20px (sm/md/lg), soft elevation shadows, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Captions and transcripts on all video; adjustable playback speed; keyboard-operable quizzes.
- Dyslexia-friendly options: larger text, extra spacing, sans-serif fallback.
- Protect minors: COPPA / GDPR-K / local law; parental consent flows.

## 7. Avoid

- Dense text walls
- Red for neutral UI
- Timed quizzes without accommodation
- Childish styling on adult/professional courses

