# Callahan Software Consulting Website

A professional, modern website for Callahan Software Consulting built with Next.js, React, and Tailwind CSS.

## Features

- **Static Site Generation** - Optimized for performance and SEO
- **Responsive Design** - Works beautifully on all devices
- **Modern Stack** - Next.js 14, React 18, TypeScript, Tailwind CSS
- **Professional Design** - Clean, professional look perfect for small businesses

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a static export (which can be deployed to any static hosting):

```bash
npm run build
```

The static files will be in the `out/` directory, ready to deploy to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── about/
│   │   └── page.tsx        # About Us page
│   ├── contact/
│   │   └── page.tsx        # Contact page with form
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Logo.tsx            # Logo component
│   ├── Navigation.tsx      # Navigation bar
│   └── Footer.tsx          # Footer component
└── public/                 # Static assets (images, etc.)
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

- Primary Dark: `#0A2342`
- Primary Blue: `#1C6DD0`
- Primary Light: `#F5F7FA`
- Primary Gray: `#6B7A8F`

### Typography

- **Headings**: Poppins Bold (loaded via Next.js font optimization)
- **Body Text**: Inter Regular (loaded via Next.js font optimization)

### Contact Form

The contact form currently shows a success message after submission. To integrate with a backend service:

1. Update the `handleSubmit` function in `app/contact/page.tsx`
2. Send form data to your API endpoint
3. Handle success/error responses accordingly

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out/` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Other Static Hosting

1. Run `npm run build`
2. Upload the contents of the `out/` directory to your hosting service

## License

© 2024 Callahan Software Consulting. All rights reserved.
