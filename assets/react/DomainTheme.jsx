import { useEffect } from 'react';

/**
 * Applies a domain + theme to <html>. Requires all-domains.css and fonts/fonts.css to be imported once (e.g. in main.jsx).
 * <DomainTheme domain="healthcare" theme="light"> ... </DomainTheme>
 * theme: 'light' | 'dark' | undefined (undefined = domain default / OS preference)
 */
export function DomainTheme({ domain = 'ecommerce', theme, children }) {
  useEffect(() => {
    const el = document.documentElement;
    el.dataset.domain = domain;
    if (theme) el.dataset.theme = theme; else delete el.dataset.theme;
  }, [domain, theme]);
  return children;
}
export default DomainTheme;
