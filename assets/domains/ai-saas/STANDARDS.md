# AI / SaaS / Developer Tools: design standards

> Intelligent, modern, precise. Gradients and monospace details.

Native theme: **dark** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Dark-first with deep blue-black surfaces; indigo primary, violet accent, cyan secondary; light theme fully supported.
- Use the 3-stop brand gradient for hero text, borders and the streaming indicator only; not for body UI.
- Code blocks and diffs use dedicated tokens (code-bg, diff-add, diff-remove).

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F6F6F9` | `#0F0F15` | Page background |
| `surface` | `#FFFFFF` | `#181820` | Cards, modals, inputs |
| `surface-alt` | `#ECEDF3` | `#20212C` | Subtle sections, table stripes, hover |
| `border` | `#D5D6E2` | `#313240` | Dividers and input borders |
| `text` | `#12131C` | `#EDEDF3` | Body and headings |
| `text-muted` | `#56586C` | `#A0A3BA` | Secondary text, captions, placeholders |
| `primary` | `#4F46E5` | `#4F46E5` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#463ECA` | `#645CE8` | Primary hover / pressed |
| `primary-text` | `#4F46E5` | `#7B74EC` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#F1F0FD` | `#191836` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#0891B2` | `#0891B2` | Secondary buttons, supporting UI |
| `on-secondary` | `#0B0B0F` | `#0B0B0F` | Text on secondary |
| `accent` | `#A855F7` | `#A855F7` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#4F46E5` | `#7B74EC` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#F1F0FD` | `#EBF6F9` | `#F8F1FE` |
| 100 | `#E3E1FB` | `#D7EDF3` | `#F1E4FE` |
| 200 | `#C7C4F7` | `#B0DCE6` | `#E3C9FC` |
| 300 | `#A7A2F2` | `#84C8D8` | `#D4AAFB` |
| 400 | `#7B74EC` | `#46ACC5` | `#BE80F9` |
| 500 | `#4F46E5` | `#0891B2` | `#A855F7` |
| 600 | `#433CC3` | `#077B97` | `#8F48D2` |
| 700 | `#3731A0` | `#06667D` | `#763CAD` |
| 800 | `#2B267E` | `#045062` | `#5C2F88` |
| 900 | `#201C5C` | `#033A47` | `#432263` |

Brand gradient: `linear-gradient(135deg, #4F46E5, #A855F7, #0891B2)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-streaming` | `#A855F7` | `#A855F7` | 3.7:1 / 4.8:1 |
| `--x-code-bg` | `#F3F4F8` | `#0B1020` | 1.0:1 / 1.0:1 |
| `--x-diff-add` | `#15803D` | `#4ADE80` | 4.6:1 / 11.0:1 |
| `--x-diff-remove` | `#B91C1C` | `#F87171` | 6.0:1 / 6.9:1 |
| `--x-user-bubble` | `#E0E7FF` | `#1E1B4B` | 1.1:1 / 1.2:1 |
| `--x-ai-bubble` | `#FFFFFF` | `#171B2E` | 1.1:1 / 1.1:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 17.1:1 | 16.4:1 |
| text on surface | 18.5:1 | 15.1:1 |
| muted text on bg | 6.5:1 | 7.7:1 |
| muted text on surface | 7.0:1 | 7.1:1 |
| on-primary on primary | 6.3:1 | 6.3:1 |
| on-secondary on secondary | 5.3:1 | 5.3:1 |
| on-accent on accent | 5.0:1 | 5.0:1 |
| primary-text (links) on bg | 5.8:1 | 5.0:1 |
| success on bg | 4.6:1 | 11.0:1 |
| warning on bg | 4.7:1 | 11.4:1 |
| danger on bg | 6.0:1 | 6.9:1 |
| info on bg | 6.2:1 | 7.5:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Space Grotesk | 500, 600, 700 | `--font-heading` |
| Body | Inter | 400, 500, 600 | `--font-body` |
| Mono | JetBrains Mono | 400, 500 | `--font-mono` |

Headings: weight 600, tracking -0.02em, transform none. Body line-height 1.5. Type scale ratio 1.2, base 16px.

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
- Space Grotesk for headings (geometric, techy); Inter for UI; JetBrains Mono for code, prompts and model names.
- Tight heading tracking (-0.02em); body 15-16px; chat text 15-16px at 1.6 leading.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 39 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Lucide, Phosphor, Radix Icons.

### Rules
- 2px outline Lucide; sparkles = AI action, reserve it for generation features.
- Add subtle animated states (pulse while streaming) instead of spinners where possible.

**Included:** `sparkles`, `bot`, `brain`, `brain-circuit`, `cpu`, `message-square`, `message-circle`, `send`, `mic`, `paperclip`, `image`, `file-text`, `code`, `terminal`, `wand-sparkles`, `zap`, `workflow`, `network`, `database`, `cloud`, `shield-check`, `lock`, `key-round`, `settings`, `sliders-horizontal`, `history`, `copy`, `thumbs-up`, `thumbs-down`, `refresh-cw`, `play`, `square`, `plus`, `search`, `user`, `users`, `chart-line`, `gauge`, `layers`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Hero visual | 16:9 or abstract | 1920x1080 | WebP / SVG / WebM loop | Gradient mesh or product UI screenshot with glow; avoid humanoid-robot clichés |
| Product screenshot | 16:10 | 1600x1000 | WebP, <=150KB | Rounded 12px frame, subtle border, both light and dark variants |
| Feature illustration | 1:1 or 4:3 | 800x800 | SVG | Brand gradient + line art |
| Logo cloud | auto | height 24-32px | SVG | Monochrome, 60% opacity |
| OG / social card | 1.91:1 | 1200x630 | PNG/JPEG | Headline + gradient |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Chat/composer pattern: pinned bottom input, attachment, send; markdown rendering with copy buttons.
- Show model/usage/limits transparently; keyboard shortcuts everywhere.
- Empty states with suggested prompts; skeleton for streaming content.
- Pricing: 3-tier cards, highlight middle tier, monthly/annual toggle.

Shape and motion: radius 8/12/20px (sm/md/lg), glow shadows in the primary colour, base transition 200ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Streamed content needs aria-live="polite" and a stop control.
- Clearly label AI-generated content and give feedback (thumbs) controls.
- Disclose data usage, retention and model limitations; respect reduced-motion for gradient animations.

## 7. Avoid

- Neon gradients behind body text
- Humanoid robot / glowing brain stock imagery
- Unlabelled AI output
- Infinite looping hero animations without pause control

