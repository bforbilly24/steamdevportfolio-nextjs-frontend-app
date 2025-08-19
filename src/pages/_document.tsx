import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="Professional developer portfolio showcasing projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS." />
        <meta name="keywords" content="developer portfolio, frontend developer, React, Next.js, TypeScript, web development" />
        <meta name="author" content="Halim Putra" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Steam - Developer Portfolio" />
        <meta property="og:description" content="Professional developer portfolio showcasing projects, skills, and experience." />
        <meta property="og:image" content="/preview.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Steam - Developer Portfolio" />
        <meta property="twitter:description" content="Professional developer portfolio showcasing projects, skills, and experience." />
        <meta property="twitter:image" content="/preview.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#18181b" />
        <meta name="msapplication-TileColor" content="#18181b" />
      </Head>
      <body id="root" className="bg-zinc-900 text-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
