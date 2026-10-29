# Gaming: design standards

> High-energy, immersive, competitive. Dark-first with neon accents.

Native theme: **dark** (the other theme is available via `data-theme`). Files in this folder: `tokens.css`, `tokens.json`, `fonts.css`, `icons/`, `images/`.

## 1. Colour system

### How to use colour
- Dark-first: near-black blue-violet background, surfaces one step lighter; never pure #000.
- 60-30-10: 60% dark neutrals, 30% primary violet / secondary cyan, 10% accent rose for CTAs, kills and alerts.
- Use rarity colours only for item tiers, never for generic UI.
- Glow (box-shadow in primary) replaces drop shadows; keep it to hover, focus and active states.

| Token (`--color-*`) | Light | Dark | Use |
|---|---|---|---|
| `bg` | `#F6F5F9` | `#100E16` | Page background |
| `surface` | `#FFFFFF` | `#191722` | Cards, modals, inputs |
| `surface-alt` | `#EEEBF4` | `#231F2E` | Subtle sections, table stripes, hover |
| `border` | `#D7D3E3` | `#332F42` | Dividers and input borders |
| `text` | `#14111D` | `#EEEDF3` | Body and headings |
| `text-muted` | `#5A536E` | `#A7A0BA` | Secondary text, captions, placeholders |
| `primary` | `#7C3AED` | `#7C3AED` | Primary buttons, key actions, active states |
| `on-primary` | `#FFFFFF` | `#FFFFFF` | Text/icons on primary |
| `primary-hover` | `#6D33D1` | `#8C52EF` | Primary hover / pressed |
| `primary-text` | `#7C3AED` | `#9D6BF2` | Links and primary-coloured text (AA on bg) |
| `primary-subtle` | `#F5EFFE` | `#211538` | Tinted backgrounds (selected rows, chips) |
| `secondary` | `#059BB4` | `#06B6D4` | Secondary buttons, supporting UI |
| `on-secondary` | `#0B0B0F` | `#0B0B0F` | Text on secondary |
| `accent` | `#F43F5E` | `#F43F5E` | Highlights, CTAs, badges |
| `on-accent` | `#0B0B0F` | `#0B0B0F` | Text on accent |
| `focus-ring` | `#7C3AED` | `#9D6BF2` | Keyboard focus outline (3px) |
| `success` | `#15803D` | `#4ADE80` | Success text/icons |
| `warning` | `#B45309` | `#FBBF24` | Warning text/icons |
| `danger` | `#B91C1C` | `#F87171` | Errors, destructive |
| `info` | `#1D4ED8` | `#60A5FA` | Informational |

**Brand scales** (theme independent, use for charts, illustrations, tints)

| Step | Primary | Secondary | Accent |
|---|---|---|---|
| 50 | `#F5EFFE` | `#EBF9FC` | `#FEF0F2` |
| 100 | `#EADFFC` | `#D7F3F8` | `#FDE0E5` |
| 200 | `#D5C0F9` | `#AFE8F1` | `#FBC2CB` |
| 300 | `#BE9CF6` | `#82DAEA` | `#FA9FAE` |
| 400 | `#9D6BF2` | `#44C8DF` | `#F76F86` |
| 500 | `#7C3AED` | `#06B6D4` | `#F43F5E` |
| 600 | `#6931C9` | `#059BB4` | `#CF3650` |
| 700 | `#5729A6` | `#047F94` | `#AB2C42` |
| 800 | `#442082` | `#036475` | `#862334` |
| 900 | `#32175F` | `#024955` | `#621926` |

Brand gradient: `linear-gradient(135deg, #7C3AED, #059BB4)` (`--color-gradient-brand`).

**Domain-specific colours** (`--x-*`)

| Token | Light | Dark | Contrast on bg (light / dark) |
|---|---|---|---|
| `--x-rarity-common` | `#9CA3AF` | `#9CA3AF` | 2.3:1 / 7.5:1 |
| `--x-rarity-uncommon` | `#22C55E` | `#22C55E` | 2.1:1 / 8.4:1 |
| `--x-rarity-rare` | `#3B82F6` | `#3B82F6` | 3.4:1 / 5.2:1 |
| `--x-rarity-epic` | `#A855F7` | `#A855F7` | 3.6:1 / 4.8:1 |
| `--x-rarity-legendary` | `#F59E0B` | `#F59E0B` | 2.0:1 / 8.9:1 |
| `--x-xp` | `#84CC16` | `#84CC16` | 1.8:1 / 9.7:1 |
| `--x-health` | `#EF4444` | `#EF4444` | 3.5:1 / 5.1:1 |
| `--x-mana` | `#3B82F6` | `#3B82F6` | 3.4:1 / 5.2:1 |
| `--x-online` | `#22C55E` | `#22C55E` | 2.1:1 / 8.4:1 |
| `--x-offline` | `#6B7280` | `#6B7280` | 4.5:1 / 4.0:1 |

Indicator colours below 3:1 must always be paired with a label, icon or border.

**Categorical chart palette** `--chart-1` to `--chart-8` (colour-blind-safe Okabe-Ito based) is included in every theme.

**Verified contrast (WCAG 2.2, computed at build time)**

| Pair | Light | Dark |
|---|---|---|
| text on bg | 17.2:1 | 16.5:1 |
| text on surface | 18.6:1 | 15.2:1 |
| muted text on bg | 6.7:1 | 7.6:1 |
| muted text on surface | 7.2:1 | 7.1:1 |
| on-primary on primary | 5.7:1 | 5.7:1 |
| on-secondary on secondary | 5.9:1 | 8.1:1 |
| on-accent on accent | 5.4:1 | 5.4:1 |
| primary-text (links) on bg | 5.3:1 | 5.3:1 |
| success on bg | 4.6:1 | 11.0:1 |
| warning on bg | 4.6:1 | 11.5:1 |
| danger on bg | 6.0:1 | 6.9:1 |
| info on bg | 6.2:1 | 7.5:1 |

All pairs above meet AA (4.5:1) for normal text.

## 2. Typography

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Heading | Orbitron | 700, 900 | `--font-heading` |
| Body | Exo 2 | 400, 500, 600 | `--font-body` |
| Accent | Press Start 2P | 400 | `--font-accent` |

Headings: weight 700, tracking 0.04em, transform uppercase. Body line-height 1.5. Type scale ratio 1.333, base 16px.

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
- Orbitron for headings and HUD numbers only (uppercase, tracked); never for paragraphs.
- Exo 2 for body copy and UI; 16px minimum.
- Press Start 2P is optional retro accent for scores, badges and 404 pages; 10-14px multiples only.

_Fonts are Latin subset WOFF2 (SIL OFL). For Hindi, Telugu and other Indic scripts add Noto Sans Devanagari / Noto Sans Telugu; the font stacks already list them as fallbacks._

## 3. Icons

- Library: **Lucide** (ISC licence), 44 icons included in `icons/`, stroke width **2px**, 24x24 grid, `currentColor`.
- Sizes: 16 (inline/meta), 20 (buttons, inputs), 24 (navigation, default), 32+ (feature illustrations). Hit area at least 44x44px.
- Alternatives that suit this domain: Phosphor (bold/duotone), Game-icons.net for RPG items.

### Rules
- Filled or 2px stroke icons, sharp joins; Lucide set included.
- Use 24px in nav, 20px in buttons, 16px in stats; keep icon plus label for primary actions.

**Included:** `gamepad-2`, `joystick`, `swords`, `sword`, `shield`, `trophy`, `crown`, `gem`, `coins`, `zap`, `flame`, `target`, `crosshair`, `skull`, `ghost`, `users`, `user`, `headset`, `mic`, `monitor`, `dices`, `puzzle`, `rocket`, `map`, `medal`, `award`, `star`, `heart`, `bell`, `settings`, `download`, `play`, `pause`, `volume-2`, `store`, `shopping-cart`, `wallet`, `gift`, `lock`, `key-round`, `chart-bar`, `search`, `menu`, `x`

## 4. Images

| Asset | Ratio | Pixel size | Format / weight | Notes |
|---|---|---|---|---|
| Key art / hero | 16:9 | 1920x1080 | WebP/AVIF, <=250KB | Dark scene, subject on the right third, text-safe zone on the left |
| Game cover / box art | 3:4 | 600x800 | WebP, <=80KB | Show on dark surface with 1px primary glow on hover |
| Screenshot gallery | 16:9 | 1280x720 | WebP, <=120KB | Lazy-load, lightbox on click |
| Character / item card | 1:1 | 512x512 | PNG-8/WebP with transparency | Rarity border colour from extras tokens |
| Avatar | 1:1 | 128x128 | WebP | Circle or 6px radius; show online dot |

Global rules: serve AVIF/WebP with JPEG fallback via `<picture>`, provide 1x/2x (`srcset`), set `width`/`height` to prevent layout shift, `loading="lazy"` below the fold, meaningful `alt` text (empty alt for decoration). See `../../_shared/image-standards.md`.

## 5. UI and layout patterns

### Patterns
- Angular components: 4-6px radius, 1px borders that brighten on hover.
- Large primary CTA (48px high) in primary or accent with glow; one per view.
- Leaderboards and stat tables: tabular numerals, rank in Orbitron.
- Motion 150ms ease-out; allow parallax only when prefers-reduced-motion is off.

Shape and motion: radius 4/6/10px (sm/md/lg), glow shadows in the primary colour, base transition 150ms. Respect `prefers-reduced-motion`.

## 6. Accessibility and compliance

### Must-haves
- Neon on dark can vibrate: keep body text at --color-text, not coloured.
- Do not rely on colour alone for team/rarity (add icon or label).
- Provide a photosensitivity-safe option for flashing effects (WCAG 2.3.1).
- Age ratings (ESRB/PEGI/IARC) must be visible on game pages; loot-box odds must be disclosed where required.

## 7. Avoid

- Light backgrounds for core pages
- More than 3 neon hues on one screen
- Orbitron at small sizes or in long text
- Autoplay audio

