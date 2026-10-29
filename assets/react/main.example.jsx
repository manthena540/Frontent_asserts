// src/main.jsx: multi-domain / white-label setup
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/fonts/fonts.css';       // all @font-face (or import a single domain's fonts.css to ship only what you use)
import '../assets/all-domains.css';       // tokens for every domain, scoped by data-domain
import '../assets/_shared/base.css';      // reset + typography + buttons/cards/inputs
import { DomainTheme } from '../assets/react/DomainTheme';
import { Icon } from '../assets/react/Icon';

function App() {
  return (
    <DomainTheme domain="beauty">
      <main className="container">
        <h1>Glow Ritual</h1>
        <p>Soft, premium skincare.</p>
        <button className="btn btn-primary"><Icon name="shopping-bag" domain="beauty" size={20} /> Add to bag</button>
      </main>
    </DomainTheme>
  );
}
createRoot(document.getElementById('root')).render(<App />);

/* Single-domain build (smallest bundle): replace the three CSS imports with
   import '../assets/domains/beauty/fonts.css';
   import '../assets/domains/beauty/tokens.css';
   import '../assets/_shared/base.css';
*/
