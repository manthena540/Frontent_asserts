# Colors

## Recommended color roles

Define semantic roles instead of scattering raw colors everywhere:

```text
primary
primary-hover
secondary
accent
background
surface
surface-muted
text
text-muted
border
success
warning
error
info
```

## Palette tools

### Free

- Coolors
- Adobe Color
- Color Hunt
- Realtime Colors
- Material Theme Builder
- Radix Colors

### Professional / design-system tools

- Figma Variables / design systems
- Tokens Studio
- Tailwind CSS color system
- Material Design color tooling

## Example token structure

```css
:root {
  --color-primary: #5b8c00;
  --color-primary-hover: #4d7800;
  --color-background: #ffffff;
  --color-surface: #f7f8f5;
  --color-text: #172018;
  --color-text-muted: #667067;
  --color-border: #dfe4dd;
  --color-success: #15803d;
  --color-warning: #b45309;
  --color-error: #dc2626;
}
```

## Color checklist

- [ ] Brand color identified
- [ ] Primary/secondary/accent defined
- [ ] Text colors defined
- [ ] Surface colors defined
- [ ] Border colors defined
- [ ] Success/warning/error defined
- [ ] Hover states defined
- [ ] Dark mode considered
- [ ] Contrast checked
- [ ] Colors are not the only way to communicate meaning
