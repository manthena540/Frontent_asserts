// Vite: renders any SVG from domains/<domain>/icons by name, inheriting currentColor. (CRA/webpack: use @svgr/webpack instead.)
const files = import.meta.glob('../domains/*/icons/*.svg', { query: '?raw', import: 'default', eager: true });

export function Icon({ name, domain = 'ecommerce', size = 24, label, className = '', ...rest }) {
  const raw = files[`../domains/${domain}/icons/${name}.svg`];
  if (!raw) return null;
  const svg = raw.replace(/width="24"/, `width="${size}"`).replace(/height="24"/, `height="${size}"`);
  return (
    <span className={`icon-wrap ${className}`} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
      style={{ display: 'inline-flex', lineHeight: 0 }} dangerouslySetInnerHTML={{ __html: svg }} {...rest} />
  );
}
export default Icon;
