# Juan José Herrera Sierra - Personal Website

Modern, responsive personal portfolio website showcasing professional experience, skills, education, and certifications.

## 🚀 Tech Stack

- **Framework**: Next.js 16.3.6 (App Router)
- **Language**: TypeScript 7 (with the TypeScript 6 compatibility API for tooling)
- **Styling**: TailwindCSS 4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Build Tool**: Turbopack

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with two-column layout
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── Sidebar.tsx         # Sidebar with profile info and navigation
│   ├── sections/           # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── EducationSection.tsx
│   ├── language/           # Language management
│   │   ├── language-provider.tsx
│   │   └── language-toggle.tsx
│   └── theme/              # Theme management
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
├── data/
│   └── translations.ts     # Bilingual content (ES/EN)
└── types/
    ├── profile.ts          # TypeScript type definitions
    └── translations.ts     # Translation type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.19+ (or a newer supported LTS release)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm ci

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Generate route types and check with TypeScript 7
npm run typecheck
```

### Development

Open [http://localhost:3000](http://localhost:3000) to see the application.

The application uses Turbopack for fast builds and hot module replacement.

Next.js 16 uses Turbopack by default. Run lint separately from the production
build, which no longer runs ESLint.

### Tooling compatibility

- ESLint is pinned to 9.39.5 because the React, import, and accessibility plugins
  used by `eslint-config-next` do not yet declare support for ESLint 10.
- TypeScript 7.0.2 runs `tsc` through the `@typescript/native` npm alias.
  The `typescript` alias supplies the official TypeScript 6.0.2 compatibility API
  required by Next.js tooling and typescript-eslint. See the
  [official side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0).
- The temporary PostCSS override for Next.js 15 is no longer needed.

## 🎨 Features

- **Two-Column Layout**: Professional sidebar design inspired by Shine template
- **Bilingual Support**: Toggle between Spanish and English with persistent preference
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme Switching**: Light/Dark modes with persistent preferences
- **Type Safety**: Full TypeScript coverage with strict mode
- **Component Architecture**: Modular, reusable components following separation of concerns
- **Timeline View**: Clean timeline-style experience section
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Optimized fonts and images
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📝 Configuration

### Updating Content

Edit the data in `src/data/translations.ts` to update bilingual content:
- Work experience
- Skills
- Education
- Certifications
- Languages

### Customizing Theme

Theme colors and styles are defined in `src/app/globals.css` using CSS custom properties.

## 🧪 Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict mode enabled
- **Code Style**: Following Next.js and React best practices

## 📄 License

Private - All rights reserved

## 👤 Author

**Juan José Herrera Sierra**
- Tech Lead & Senior Backend Engineer
- Email: juanjhs@gmail.com
- LinkedIn: [juan-jose-herrera-sierra](https://www.linkedin.com/in/juan-jose-herrera-sierra)
- GitHub: [@JuanYave](https://github.com/JuanYave)
