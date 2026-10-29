# Animation Sources

## Free / commonly used

| Source / Library | Best for |
|---|---|
| Motion | React UI and interaction animation |
| GSAP | Advanced timelines and complex animation |
| AOS | Scroll reveal effects |
| Lottie | JSON-based motion graphics |
| React Spring | Physics-based React animation |
| CSS animations | Simple transitions and micro-interactions |

## Premium / asset-focused

- LottieFiles paid assets
- Lordicon Pro
- Rive professional workflows
- Motion design asset marketplaces

## Animation hierarchy

### Level 1 — Micro interaction

```text
button hover
icon transition
input focus
```

### Level 2 — Component

```text
card reveal
dropdown
modal
accordion
```

### Level 3 — Page

```text
page transition
hero entrance
section reveal
```

### Level 4 — Storytelling

```text
scroll-driven sequence
product demonstration
interactive visual narrative
```

Use the lowest level that communicates the idea effectively.

## Animation rules

- [ ] Animation has a purpose
- [ ] It does not block the user
- [ ] It does not make text hard to read
- [ ] Duration feels natural
- [ ] Reduced-motion preference is considered
- [ ] Mobile performance is acceptable
- [ ] Animation does not run unnecessarily

## CSS reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
