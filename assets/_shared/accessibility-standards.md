# Accessibility baseline (WCAG 2.2 AA)

| Area | Requirement |
|---|---|
| Contrast | Text 4.5:1, large text and UI components 3:1 |
| Focus | Visible 3px focus ring (`--color-focus-ring`), logical tab order, no keyboard traps |
| Targets | 24x24px minimum (WCAG 2.2), 44x44px recommended |
| Motion | Respect `prefers-reduced-motion`; no flashing > 3 times per second |
| Forms | Visible labels, error text + icon + `aria-describedby`, don't rely on placeholders |
| Structure | One H1, ordered headings, landmarks (`header`, `nav`, `main`, `footer`), skip link |
| Media | Captions, transcripts, audio description where relevant |
| Zoom | Reflow at 320px width, text resize to 200% |
| Language | `lang` attribute; mark language changes; support RTL when needed |
| Colour | Never the only cue (WCAG 1.4.1) |
| Auth | No cognitive tests only; allow paste and password managers (WCAG 3.3.8) |

## Regional compliance reminders
USA: ADA / Section 508. EU: EN 301 549 / European Accessibility Act, GDPR. India: GIGW 3.0, RPwD Act, DPDP Act 2023. UK: Equality Act, UK GDPR. Check industry rules (HIPAA, PCI-DSS, FSSAI, RERA, ESRB/PEGI, COPPA) for your domain; see each domain's STANDARDS.md.
