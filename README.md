# My Past Life in Joseon

Bilingual (English default + Korean toggle) static personality test inspired by Joseon-era atmosphere.

## Highlights
- 12-question test with deterministic result generation.
- Personalized outputs built from archetype + composable details.
- Joseon-style name generator (EN/KO pair output).
- LocalStorage persistence for language and last result.
- Static multi-page site (Vercel-friendly, no server/DB).

## Pages
- `/index.html`: test + result + card save/share
- `/history.html`: Joseon stories (EN/KR)
- `/about.html`: service explanation (EN/KR)
- `/privacy.html`: privacy policy (EN/KR)
- `/contact.html`: contact (EN/KR)

## Data edit points
- UI/page text and translations: `i18n.js`
- Quiz questions, archetypes, pools, and name parts: `script.js`
- Styling/theme: `style.css`

## Deploy (Vercel)
Deploy as a static site (Framework preset: Other). No build step required.
