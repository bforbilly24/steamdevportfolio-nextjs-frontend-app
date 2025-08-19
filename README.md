# Steam - Developer Portfolio

<img width="960" height="540" alt="Image" src="https://github.com/user-attachments/assets/5f282de0-ce22-4819-8097-5290f248a26a" />

The ultimate developer portfolio template for showcasing your skills and projects. A modern, responsive portfolio built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/). Perfect for developers looking to land their next opportunity with a professional showcase.

Developers aren't designers (trust me, I've reviewed a lot of developer portfolios...).

As a developer, I have to put my best foot forward if I hope to land an interview. So often there are hundreds of other engineers vying for the same jobs that I am. It's competitive.

Even with a solid list of projects, skills, and even experience, a weak portfolio can still hurt my chances...

... and that's why I built Steam!

This template contains a developer portfolio built with ReactJS on top of NextJS, TailwindCSS, and Framer Motion. You'll find downloads for TypeScript.

It's a perfect launch point for showing off my experience and projects to potential employers in a way that highlights my skills—without letting poor design get in the way.

I opted to stick with the NextJS pages router to keep it simple for anyone new to NextJS or wanting to migrate this template out of the framework.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Beautiful Animations**: Smooth animations powered by Framer Motion and Anime.js
- **Developer-Focused Design**: Tailored specifically for developer portfolios
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Interactive Elements**: Hero animations, project showcases, and engaging UI components
- **Dark Theme**: Beautiful dark theme with zinc and indigo color palette
- **Performance Optimized**: SEO-friendly with optimized fonts and images
- **Easy Configuration**: Setup takes minutes with modern tooling
- **Project Showcase**: Interactive project modals with detailed descriptions
- **Skills & Experience**: Comprehensive sections for showcasing technical expertise

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with Pages Router
- **Styling**: Tailwind CSS with custom animations
- **Animation**: Framer Motion for smooth interactions
- **Secondary Animation**: Anime.js for grid animations
- **Typography**: Optimized font loading
- **Icons**: React Icons library
- **Development**: TypeScript, ESLint, Prettier

## 📦 Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bforbilly24/steamdevportfolio-nextjs-frontend-app.git
cd steamdevportfolio-nextjs-frontend-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

## 📁 Project Structure

```
steamdevportfolio-nextjs-frontend-app/
├── 📁 src/
│   ├── pages/                 # Next.js Pages Router
│   │   ├── _app.tsx          # App wrapper
│   │   ├── _document.tsx     # Document with SEO meta tags
│   │   └── index.tsx         # Home page
│   ├── components/           # Reusable components
│   │   ├── about/           # About section components
│   │   ├── buttons/         # Button components
│   │   ├── contact/         # Contact section
│   │   ├── experience/      # Experience showcase
│   │   ├── hero/            # Hero section with animations
│   │   ├── nav/             # Navigation components
│   │   ├── projects/        # Project showcase components
│   │   └── util/            # Utility components
│   └── styles/              # Global styles
│       └── globals.css      # Global CSS with Tailwind
├── 📁 public/               # Public assets
│   ├── favicon/             # Favicon and PWA icons
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-96x96.png
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── site.webmanifest
│   │   ├── web-app-manifest-192x192.png
│   │   └── web-app-manifest-512x512.png
│   ├── project-imgs/        # Project images
│   └── preview.png          # Portfolio preview image
├── 📄 package.json
├── 📄 tailwind.config.ts
├── 📄 next.config.mjs
└── 📄 tsconfig.json
```

## 🎨 Components

This project includes various pre-built components:

- **Hero Section**: Eye-catching developer hero with dot grid animation and call-to-action
- **About Section**: Personal introduction with animated statistics
- **Experience**: Timeline showcasing work experience and career progression
- **Projects**: Interactive project grid with detailed modal views
- **Contact**: Contact form and social media links
- **Navigation**: Responsive header and sidebar navigation
- **Utility Components**: Reusable UI elements like chips, reveals, and section headers

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## ⚙️ Configuration

### Customizing Content
- Edit portfolio sections in `src/pages/index.tsx`
- Update personal information in component files
- Modify navigation in `src/components/nav/`
- Add your projects in `src/components/projects/`
- Update resume link in `src/components/nav/Header.tsx`

### Styling
- Modify `tailwind.config.ts` for custom colors and design tokens
- The project uses zinc for neutrals and indigo for primary colors
- Global styles are in `src/styles/globals.css`
- Component-specific styles use Tailwind utility classes

### SEO and Meta Tags
- SEO meta tags are configured in `src/pages/_document.tsx`
- PWA manifest is in `public/favicon/site.webmanifest`
- Favicon and app icons are in `public/favicon/`
- Update preview image in `public/preview.png`

### Adding Projects
- Add project images to `public/project-imgs/`
- Update project data in `src/components/projects/Projects.tsx`
- Customize project modal content in `src/components/projects/ProjectModal.tsx`

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [Anime.js](https://animejs.com/) - Lightweight JavaScript animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library for React

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbforbilly24%2Fsteamdevportfolio-nextjs-frontend-app)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Other Deployment Options

You can also deploy this application on:
- **Netlify**: Connect your Git repository for automatic deployments
- **AWS Amplify**: Full-stack deployment with hosting and backend services
- **Railway**: Simple deployment with Git integration
- **DigitalOcean App Platform**: Container-based deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Halim Putra**

- GitHub: [@bforbilly24](https://github.com/bforbilly24)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/bforbilly24/steamdevportfolio-nextjs-frontend-app/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!
