# Icons

## Recommended free/open-source icon libraries

| Library | Best for | License / access | React usage |
|---|---|---|---|
| Lucide | Clean general UI, React, shadcn-style interfaces | ISC / free | `lucide-react` |
| Heroicons | Tailwind projects | MIT / free | `@heroicons/react` |
| Tabler Icons | Large dashboards and admin apps | MIT / free | `@tabler/icons-react` |
| Phosphor | Multiple weights and duotone | MIT / free | `@phosphor-icons/react` |
| Material Symbols | Material Design / Google-style UI | Apache 2.0 / free | Google Fonts or SVG |
| Radix Icons | Minimal product UI | MIT / free | `@radix-ui/react-icons` |
| Bootstrap Icons | Bootstrap projects | MIT / free | SVG / community React packages |
| Simple Icons | Brand/company logos | Open-source; check each brand/trademark | SVG |

## Paid / premium options

| Platform | Useful for |
|---|---|
| Font Awesome Pro | Large professional icon collection and brand coverage |
| Streamline | Very large icon/illustration systems and multiple styles |
| Icons8 | Icons, illustrations and UI assets |
| Flaticon Premium | Large downloadable icon collection |
| IconScout | Icons, illustrations, 3D and Lottie assets |
| Hugeicons Pro | Large icon collection with multiple styles |
| Lordicon Pro | Animated web icons |

## How to choose

- General React UI → Lucide
- Tailwind UI → Heroicons
- Need many icons → Tabler
- Need several visual weights → Phosphor
- Material UI → Material Symbols
- Brand logos → Simple Icons
- Need premium/illustrated/animated assets → Streamline, Icons8, IconScout or Lordicon

## React example — Lucide

```bash
npm install lucide-react
```

```jsx
import { Search, Menu, ArrowRight } from "lucide-react";

export default function Example() {
  return (
    <button className="flex items-center gap-2">
      <Search size={20} aria-hidden="true" />
      Search
      <ArrowRight size={18} aria-hidden="true" />
    </button>
  );
}
```

## React example — Heroicons

```bash
npm install @heroicons/react
```

```jsx
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

<MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />;
```

## Accessibility

Decorative icon:

```jsx
<ArrowRight aria-hidden="true" />
```

Icon-only button:

```jsx
<button aria-label="Open menu">
  <Menu aria-hidden="true" />
</button>
```

## Icon consistency checklist

- [ ] One main icon family per product
- [ ] Consistent stroke weight
- [ ] Consistent visual size
- [ ] Consistent corner style
- [ ] Consistent color treatment
- [ ] Icon-only controls have accessible labels
- [ ] License checked before shipping
- [ ] Brand/trademark usage checked for logos
