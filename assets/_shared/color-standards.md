# Colour standards (all domains)

## Structure
1. **Neutrals (about 60%)**: bg, surface, surface-alt, border, text, text-muted.
2. **Brand (about 30%)**: primary + secondary with 50-900 scales.
3. **Accent (about 10%)**: one highlight colour for the single most important action or signal.
4. **Semantic**: success (green), warning (amber), danger (red), info (blue). Same meaning in every domain; never use for decoration.
5. **Domain tokens (`--x-*`)**: rarity, stock, gain/loss, veg/non-veg, heart-rate zones, etc.

## Rules
- Text contrast >= 4.5:1 (3:1 for 18px+/14px bold and for UI component borders and icons). All token pairs in this kit are verified at build time.
- Never convey meaning by colour alone (WCAG 1.4.1): add icon, text, pattern or sign (+/-).
- Use `--color-primary-text` for links and coloured text (guaranteed AA), `--color-primary` for fills.
- Use `--color-on-*` for text on filled colours; do not hard-code white.
- One primary button per view; destructive actions use danger, not primary.
- Dark mode is not inverted light mode: surfaces step lighter with elevation, saturation is reduced, shadows become subtle borders or glows.
- Colour psychology is a guide, not a rule: blue = trust, green = growth/health, red = urgency/energy, orange = action/appetite, purple = creative/premium, black = luxury, teal = calm/medical.
- Test with colour-blindness simulators (protanopia, deuteranopia, tritanopia) and greyscale.
- Respect brand/regulatory colours (e.g. national emblem rules, medical device labelling).

## Theme switching
Set `data-theme="light|dark"` on `<html>`. Light-native domains also follow the OS (`prefers-color-scheme`) unless `data-theme="light"` is set. Persist the user's choice in localStorage and apply before first paint to avoid flash.
