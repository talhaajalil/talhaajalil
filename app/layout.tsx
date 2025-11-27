import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Talha Jalil | DevOps Engineer",
  description: "Portfolio website of Talha Jalil - DevOps Engineer and Computer Science graduate from FAST-NUCES with experience in AWS, Docker, Kubernetes, CI/CD, and monitoring tools.",
  keywords: ["Talha Jalil", "DevOps Engineer", "AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Azure DevOps", "Grafana", "Prometheus", "Cloud Engineer", "FAST-NUCES"],
  authors: [{ name: "Talha Jalil" }],
  creator: "Talha Jalil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talhaajalil.github.io/talhaajalil/",
    title: "Talha Jalil | DevOps Engineer",
    description: "Portfolio website of Talha Jalil - DevOps Engineer specializing in AWS, Docker, Kubernetes, and CI/CD pipelines.",
    siteName: "Talha Jalil Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talha Jalil | DevOps Engineer",
    description: "Portfolio website of Talha Jalil - DevOps Engineer specializing in AWS, Docker, Kubernetes, and CI/CD pipelines.",
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
