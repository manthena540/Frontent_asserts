# Typography standards (all domains)

- **Max 2 families + 1 mono/accent.** One for headings, one for body. A third only for code, scripts or retro accents.
- **Weights:** 400 body, 500 labels and UI, 600 subheads and buttons, 700 headings. Load only the weights you use (each is about 15-25KB).
- **Sizes:** body 16px minimum (17-18px for healthcare, education, news, government). Never below 12px (legal text) and 14px for UI.
- **Line height:** headings 1.1-1.25, body 1.5-1.65, captions 1.4. Line length 45-75 characters.
- **Scale ratios:** 1.2 (minor third) for dense UI and dashboards, 1.25 (major third) for editorial and marketing, 1.333 (perfect fourth) for display-heavy brands (gaming, streaming, fitness).
- **Numbers:** use `font-variant-numeric: tabular-nums` for prices, tables, stats and timers.
- **Alignment:** left-align body text; centre only short headings. Never justify on the web.
- **Case:** uppercase only for short labels and display headings (letter-spacing 0.04-0.12em); never for paragraphs.
- **Loading:** `font-display: swap`, preload the primary heading and body WOFF2, self-host (no third-party requests), subset to Latin; add Noto subsets for Indic, Arabic, CJK as needed.
- **Fluid headings:** `clamp(var(--text-3xl), 5vw, var(--text-5xl))` for H1; avoid viewport-only units for body text.
- **Zoom:** layouts must work at 200% text zoom and 320px width (WCAG 1.4.4, 1.4.10).

## Font pairing cheat-sheet used in this kit

| Mood | Heading | Body |
|---|---|---|
| Techy / futuristic | Orbitron, Space Grotesk | Exo 2, Inter |
| Friendly commerce | Poppins | Inter |
| Luxury / editorial | Bodoni Moda, Cormorant Garamond, Playfair Display, DM Serif Display | Jost, DM Sans, Source Serif 4 |
| Clinical clarity | Lexend | Open Sans |
| Corporate neutral | IBM Plex Sans, Montserrat, Manrope | IBM Plex Sans, Source Sans 3, Inter |
| Playful learning | Nunito | Nunito Sans |
| Cinematic / sport | Bebas Neue, Barlow Condensed | Inter, Barlow |
| Civic / accessible | Public Sans | Public Sans |
