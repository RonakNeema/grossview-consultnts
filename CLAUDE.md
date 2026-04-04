@AGENTS.md

# GrossView Consultants - Project Context

## Project Overview
GrossView Consultants is a **static marketing website** for a real estate KPO and outsourcing firm specializing in property accounting, real estate bookkeeping, and financial analysis. The site showcases their comprehensive services, software expertise across 6 platforms, and global support for property management companies and real estate professionals.

## Tech Stack
- **Framework**: Next.js 16.2.1 (App Router)
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4 with PostCSS
- **TypeScript**: 5.x with strict mode
- **Font**: Inter (via `next/font/google`)
- **Deployment**: Static export to GitHub Pages

## Project Structure
```
/
├── app/
│   ├── page.tsx        # Main landing page (single-page site)
│   ├── layout.tsx      # Root layout with metadata and font config
│   ├── globals.css     # Global styles, CSS variables, and Tailwind imports
│   └── favicon.ico
├── public/
│   └── images/
│       ├── logo.jpeg       # Company logo
│       └── cover photo.jpeg
├── .github/workflows/
│   └── nextjs.yml      # GitHub Pages deployment workflow
├── next.config.ts      # Static export config with basePath
├── tsconfig.json       # TypeScript configuration
├── eslint.config.mjs   # ESLint with Next.js rules
└── postcss.config.mjs  # PostCSS with Tailwind plugin
```

## Key Commands
```bash
npm run dev     # Start dev server on port 3001
npm run build   # Build static export to /out
npm run start   # Production server on port 3001
npm run lint    # Run ESLint
```

## Design System

### Colors (CSS Variables in globals.css)
- `--primary`: #1e3a5f (dark navy blue)
- `--secondary`: #2d4a6f (medium navy)
- `--accent`: #e91e8c (magenta/pink)
- `--purple`: #7c3aed (purple)
- `--gradient-start`: #e91e8c → `--gradient-end`: #7c3aed

### Custom Utilities
- `.gradient-text` - Gradient text effect (pink to purple)
- `.gradient-bg` - Gradient background (pink to purple)

## Site Sections (in page.tsx)
1. **Navigation** - Sticky header with logo and nav links
2. **Hero** - Main headline emphasizing Real Estate Bookkeeping, Property Accounting & Financial Analysis with stats (8+ years, 5+ clients)
3. **Real Estate Fields** - 4 sectors: Commercial Real Estate, HOA, Multifamily, Residential
4. **Services** - 10 comprehensive service cards + featured Yardi Implementation section + featured Financial Analysis section
5. **Software Expertise** - 6 platforms: Yardi, AppFolio, QuickBooks, Entrata, Buildium, Real Page
6. **About** - KPO positioning, global support, skilled team, structured workflows
7. **Contact/CTA** - Email and call buttons
8. **Footer** - Logo, comprehensive services list (9), all software platforms (6), contact info

## Services Offered
1. **Bookkeeping** - Accurate and timely bookkeeping services
2. **Property Accounting** - Full-service property accounting
3. **Bank Reconciliation** - Monthly reconciliation services
4. **Invoice Processing** - Efficient AP workflow management
5. **Accounts Payable** - Complete vendor payment management
6. **Accounts Receivable** - Cash flow optimization and collections
7. **Lease Administration & Abstraction** - Lease lifecycle management and data extraction
8. **CAM Reconciliation** - Tenant billing and expense allocation
9. **Financial Reporting** - Comprehensive property performance reports
10. **Financial Analysis** - Model Creation, Deal Underwriting, Asset Management
11. **Yardi Implementation & Data Transition Support** - Functional setup, configuration, and migration

## Software Expertise
India-based team with deep expertise in:
1. **Yardi** - Full implementation, training, and ongoing support for Voyager and other products
2. **AppFolio** - Complete setup and bookkeeping services
3. **QuickBooks** - Integration and management for real estate accounting
4. **Entrata** - Expert configuration and property management solutions
5. **Buildium** - Setup, training, and comprehensive support
6. **Real Page** - Implementation and optimization for property operations

## Deployment Configuration
- **Output**: Static export (`output: "export"` in next.config.ts)
- **Base Path**: `/grossview-consultnts` in production (for GitHub Pages)
- **Images**: Unoptimized for static export
- **CI/CD**: GitHub Actions workflow deploys to GitHub Pages on push to `main`

## Real Estate Fields Served
- **Commercial Real Estate** - Office buildings, retail centers, commercial properties
- **HOA** - Homeowners associations and community management  
- **Multifamily** - Apartment complexes and multifamily residential
- **Residential** - Single-family homes and residential real estate

## Company Positioning
- **Real estate KPO and outsourcing firm**
- **Global support** for property managers and real estate businesses
- **8+ years** of industry experience
- **Skilled team** and structured workflows
- Strong industry knowledge and platform expertise
- Cost savings: **Save up to 65%**
- **Scalability** based on client requirements
- Focus on high-value business growth opportunities

## Development Notes
- This is a **single-page static site** - all content is in `app/page.tsx`
- Uses Tailwind CSS 4 with new `@theme inline` syntax
- Images use `next/image` with `unoptimized: true` for static export
- Smooth scroll enabled via `scroll-behavior: smooth` in globals.css
- Dev server runs on port **3001** (not default 3000)
- Site features 10 services, 6 software platforms, 4 real estate fields

## Important Conventions
- All styling uses Tailwind utility classes
- Color references use CSS variables: `text-[var(--primary)]`
- Links use anchor tags with hash navigation (`#services`, `#contact`, etc.)
- Card components use consistent shadow and hover effects
