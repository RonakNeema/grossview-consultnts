# GrossView Consultants Website

A modern, responsive marketing website for GrossView Consultants built with Next.js, React, and Tailwind CSS.

## Project Overview

Static website deployed to https://www.grossviewconsultants.com showcasing real estate accounting and outsourcing services. Single-page site with integrated contact form using EmailJS for lead capture.

## Getting Started

### Development

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (port 3001)
npm run build    # Build static export to /out
npm run lint     # Run ESLint
```

Open [http://localhost:3001](http://localhost:3001) to view the site.

## Tech Stack

- **Framework**: Next.js 16.2.1 (App Router)
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4
- **TypeScript**: 5.x (strict mode)
- **Email**: EmailJS (200 emails/month free)
- **Deployment**: GitHub Pages + Custom Domain (GoDaddy)
- **Static Export**: No server runtime

## Key Features

### Contact Form
- Multi-field form with services dropdown
- Email integration via EmailJS
- Form submissions sent to: bfsipedia@gmail.com
- Success/error notifications
- Mobile responsive

### Navigation
- Sticky header with logo
- Hamburger menu on mobile
- Hash-based navigation anchors
- Responsive logo sizing

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly form inputs

## Deployment

### GitHub Pages + Custom Domain

1. **Frontend**: Deployed to GitHub Pages (static export)
2. **Domain**: Connected via GoDaddy DNS (CNAME to ronakneema.github.io)
3. **HTTPS**: Auto-provisioned by GitHub Pages
4. **CI/CD**: GitHub Actions on push to main

### Environment Variables

None required - everything is static/client-side except EmailJS integration which uses public credentials.

## Project Structure

```
app/
├── page.tsx                # Main landing page
├── layout.tsx              # Root layout
├── globals.css             # Global styles & CSS variables
├── favicon.ico
├── lib/
│   └── utils.ts            # Image path utility
└── components/
    ├── Navigation.tsx      # Header & navigation
    ├── ContactForm.tsx     # Contact form with EmailJS
    ├── ScrollToTop.tsx     # Auto scroll to top
    └── README.md           # Component documentation
public/
└── images/                 # Logo & platform images
.github/workflows/
└── nextjs.yml              # GitHub Pages deployment
```

## EmailJS Setup

Contact form uses EmailJS for email notifications.

**Configuration**:
- Service ID: `service_9ufrsw8`
- Template ID: `template_399ou3j`
- Public Key: `TndYiSPPJ6cQiGDAe`

**Email recipient**: bfsipedia@gmail.com

To update credentials, edit `app/components/ContactForm.tsx`.

## Important Conventions

- **Image paths**: No basePath needed (using custom domain)
- **Client components**: Use `'use client'` directive for interactive components
- **CSS variables**: Colors defined in `globals.css` for brand consistency
- **Responsive classes**: Use Tailwind breakpoints (sm:, md:, lg:)
- **TypeScript**: Strict mode enabled - all types required

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Documentation](https://react.dev)
