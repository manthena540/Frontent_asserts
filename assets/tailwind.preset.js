// tailwind.config.js:  presets: [require('./src/assets/tailwind.preset.js')]
// Colours reference CSS variables, so switching data-domain / data-theme re-themes every utility.
// Note: Tailwind opacity modifiers (bg-primary/50) do not work with plain CSS-variable colours; use the -subtle tokens instead.
const scale = (n) => Object.fromEntries([50,100,200,300,400,500,600,700,800,900].map(s => [s, `var(--${n}-${s})`]));
module.exports = {
  theme: { extend: {
    colors: {
      bg: 'var(--color-bg)', surface: 'var(--color-surface)', 'surface-alt': 'var(--color-surface-alt)', border: 'var(--color-border)',
      text: 'var(--color-text)', muted: 'var(--color-text-muted)', overlay: 'var(--color-overlay)',
      primary: { DEFAULT: 'var(--color-primary)', hover: 'var(--color-primary-hover)', text: 'var(--color-primary-text)', on: 'var(--color-on-primary)', subtle: 'var(--color-primary-subtle)', ...scale('primary') },
      secondary: { DEFAULT: 'var(--color-secondary)', on: 'var(--color-on-secondary)', subtle: 'var(--color-secondary-subtle)', ...scale('secondary') },
      accent: { DEFAULT: 'var(--color-accent)', on: 'var(--color-on-accent)', subtle: 'var(--color-accent-subtle)', ...scale('accent') },
      success: { DEFAULT: 'var(--color-success)', bg: 'var(--color-success-bg)' }, warning: { DEFAULT: 'var(--color-warning)', bg: 'var(--color-warning-bg)' },
      danger: { DEFAULT: 'var(--color-danger)', bg: 'var(--color-danger-bg)' }, info: { DEFAULT: 'var(--color-info)', bg: 'var(--color-info-bg)' },
    },
    fontFamily: { heading: ['var(--font-heading)'], body: ['var(--font-body)'], mono: ['var(--font-mono)'], accent: ['var(--font-accent)'] },
    fontSize: Object.fromEntries(['xs','sm','base','lg','xl','2xl','3xl','4xl','5xl'].map(n => [n, `var(--text-${n})`])),
    borderRadius: { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', full: 'var(--radius-full)' },
    boxShadow: { sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' },
    transitionDuration: { fast: 'var(--duration-fast)', DEFAULT: 'var(--duration-normal)', slow: 'var(--duration-slow)' },
  } },
};
