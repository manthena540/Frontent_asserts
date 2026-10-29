# Healthcare / Hospital / Clinic: design standards

> Calm, trustworthy, accessible to everyone.

Native theme: **light** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Blue and teal communicate calm and trust; red is reserved strictly for emergency and critical states.
- White and very light cool-blue backgrounds; avoid dark mode as default (still supported).
- Status colours (stable, urgent, critical) must always pair with icon and text.
- Contrast target is WCAG AA minimum, AAA for body text where possible.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F6F8F9` | `#0F1215` | Page background |
| `surface` | `#FFFFFF` | `#181D20` | Cards, modals, inputs |
| `surface-alt` | `#ECF0F3` | `#20272C` | Subtle sections, table stripes, hover |
| `border` | `#D5DCE2` | `#313940` | Dividers and input borders |
| `text` | `#12181C` | `#EDF0F3` | Body and headings |
| `text-muted` | `#56636C` | `#A0B0BA` | Secondary text, captions, placeholders |
| `primary` | `#0369A1` | `#0369A1` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#035C8E` | `#217BAC` | Primary hover / pressed |
| `primary-text` | `#0369A1` | `#428EB8` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#EBF3F7` | `#0D202B` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#0D9488` | `#0D9488` | Secondary buttons, supporting UI |
| `on-secondary` | `#0B0B0F` | `#0B0B0F` | Text on secondary |
| `accent` | `#C62828` | `#C62828` | Highlights, CTAs, badges |
| `on-accent` | `#FFFFFF` | `#FFFFFF` | Text on accent |
| `focus-ring` | `#0369A1` | `#428EB8` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#EBF3F7` | `#ECF6F5` | `#FAEEEE` |
| 100 | `#D7E7F0` | `#D8EEEC` | `#F6DDDD` |
| 200 | `#AECFE1` | `#B2DDD9` | `#EDBABA` |
| 300 | `#81B4D0` | `#86CAC4` | `#E29494` |
| 400 | `#428EB8` | `#4AAFA6` | `#D45E5E` |
| 500 | `#0369A1` | `#0D9488` | `#C62828` |
| 600 | `#035989` | `#0B7E74` | `#A82222` |
| 700 | `#024A71` | `#09685F` | `#8B1C1C` |
| 800 | `#023A59` | `#07514B` | `#6D1616` |
| 900 | `#012A40` | `#053B36` | `#4F1010` |

Brand gradient: `linear-gradient(135deg, #0369A1, #0D9488)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-emergency` | `#C62828` | `#C62828` | 5.3:1 / 3.3:1 |
| `--x-critical` | `#B91C1C` | `#B91C1C` | 6.1:1 / 2.9:1 |
| `--x-urgent` | `#C2410C` | `#C2410C` | 4.9:1 / 3.6:1 |
| `--x-stable` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-pending` | `#A16207` | `#A16207` | 4.6:1 / 3.8:1 |
| `--x-telehealth` | `#0D9488` | `#0D9488` | 3.5:1 / 5.0:1 |
| `--x-confirmed` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-cancelled` | `#B91C1C` | `#B91C1C` | 6.1:1 / 2.9:1 |
| `--x-lab-normal` | `#15803D` | `#15803D` | 4.7:1 / 3.7:1 |
| `--x-lab-abnormal` | `#B91C1C` | `#B91C1C` | 6.1:1 / 2.9:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 16.8:1 | 16.4:1 |
| text on surface | 17.9:1 | 14.9:1 |
| muted text on bg | 5.8:1 | 8.4:1 |
| muted text on surface | 6.2:1 | 7.6:1 |
| on-primary on primary | 5.9:1 | 5.9:1 |
| on-secondary on secondary | 5.2:1 | 5.2:1 |
| on-accent on accent | 5.6:1 | 5.6:1 |
| primary-text (links) on bg | 5.6:1 | 5.2:1 |
| success on bg | 4.7:1 | 10.8:1 |
| warning on bg | 4.7:1 | 11.3:1 |
| danger on bg | 6.1:1 | 6.8:1 |
| info on bg | 6.3:1 | 7.4:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Lexend | 500, 600, 700 | `--font-heading` |
| Body | Open Sans | 400, 600, 700 | `--font-body` |

Headings: weight 600, tracking 0, transform none. Body line-height 1.6. Type scale ratio 1.2, base 17px.

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
- Lexend (designed for reading proficiency) for headings; Open Sans for body.
- Base size 17px, line-height 1.6; never below 14px anywhere; allow user text scaling to 200%.
- Plain language, short sentences; avoid all-caps blocks.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 40 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Material Symbols (rounded), Phosphor.

### Rules
- 2px outline, 24px, always with text label; avoid ambiguous medical symbols without labels.
- Include an accessibility icon and language switcher in the header.

**Included:** `stethoscope`, `heart-pulse`, `activity`, `hospital`, `ambulance`, `pill`, `syringe`, `thermometer`, `calendar-check`, `calendar-plus`, `clock`, `phone`, `phone-call`, `map-pin`, `user-round`, `users`, `file-text`, `clipboard-list`, `clipboard-check`, `brain`, `bone`, `eye`, `baby`, `microscope`, `test-tube`, `shield-check`, `lock`, `video`, `message-circle`, `bell`, `circle-alert`, `siren`, `badge-check`, `search`, `menu`, `x`, `chevron-right`, `download`, `bed-double`, `accessibility`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Hero | 16:9 | 1920x1080 | WebP, <=200KB | Real staff and facilities, warm natural light, diverse patients |
| Doctor profile | 4:5 | 600x750 | WebP, <=60KB | Consistent background, friendly neutral expression, name + specialty as HTML |
| Department / service tile | 4:3 | 800x600 | WebP | Illustration or photo; consistent style across all departments |
| Facility gallery | 3:2 | 1200x800 | WebP | Include accessibility features (ramps, rooms) |
| Badges / accreditations | auto | height 48px | SVG | Only show real accreditations (NABH, JCI etc.) |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Prominent emergency number and Book Appointment CTA in header; 48px+ touch targets.
- Step-by-step booking with progress and confirmation by SMS/email.
- Doctor search by specialty, location, language and availability.
- Patient portal: clear lab result states with normal/abnormal icon + text.

Shape and motion: radius 8/12/16px (sm/md/lg), soft elevation shadows, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Target WCAG 2.2 AA; ideally AAA for text; fully keyboard and screen-reader operable.
- Patient data forms must follow local privacy law (HIPAA, GDPR, India DPDP Act); show consent and privacy notices.
- Never use imagery implying diagnosis or guaranteed outcomes; avoid shock/graphic medical images.
- Provide captions/transcripts for video and multilingual support.

## 7. Avoid

- Red for non-emergency UI
- Low-contrast grey text
- Stock images that do not represent your community
- Auto-playing video or pop-ups on appointment flows

