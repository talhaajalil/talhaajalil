import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Talha Jalil | Computer Science Student at York University",
  description: "Portfolio website of Talha Jalil - Computer Science student at York University specializing in full-stack development with React, Next.js, Node.js, and more.",
  keywords: ["Talha Jalil", "Computer Science", "York University", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Talha Jalil" }],
  creator: "Talha Jalil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talhaajalil.github.io/talhaajalil/",
    title: "Talha Jalil | Computer Science Student at York University",
    description: "Portfolio website of Talha Jalil - Computer Science student at York University specializing in full-stack development.",
    siteName: "Talha Jalil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Jalil | Computer Science Student at York University",
    description: "Portfolio website of Talha Jalil - Computer Science student at York University specializing in full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
