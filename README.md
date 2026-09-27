# Yudhistira Nata, Portfolio

Personal portfolio of Yudhistira Nata, a web developer. It presents the websites and web apps I have built, each with a live link, a real homepage screenshot and a written case study.

Live site: https://yudhistiranata.vercel.app

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS v4
- Framer Motion
- English and Indonesian, switched on the client with a dictionary and context

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Where the content lives

| File | What it holds |
| --- | --- |
| `src/data/projects.ts` | Project list: name, category, live domain, featured flag, short summary |
| `src/data/case-studies.ts` | Case study per project: context, approach, what was built, outcome, stack |
| `src/data/site.ts` | Contact channels and the stack shown on the About page |
| `src/data/certifications.ts` | Certifications on the About page: issuer, dates, credential ID and link |
| `src/lib/i18n/dictionary.ts` | Every interface string in English and Indonesian |
| `public/work/` | Homepage screenshots, one per project, named after the project slug |

To add a project, add an entry to `projects.ts`, a case study to `case-studies.ts` and a screenshot at `public/work/<slug>.jpg`.
