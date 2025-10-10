import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { LanguageProvider } from "@/components/language/language-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan José Herrera Sierra | Tech Lead & Senior Backend Engineer",
  description:
    "Portfolio and experience of Juan José Herrera Sierra, Tech Lead and Senior Backend Engineer specializing in AWS, Python, Java, and DevOps.",
  keywords: [
    "Juan José Herrera Sierra",
    "Tech Lead",
    "Backend Engineer",
    "AWS",
    "Python",
    "Django",
    "FastAPI",
    "Java",
    "DevOps",
    "Terraform",
    "Docker",
    "Microservices",
    "Ciudad de México",
  ],
  authors: [{ name: "Juan José Herrera Sierra", url: "https://juanherrera.dev" }],
  creator: "Juan José Herrera Sierra",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://juanherrera.dev",
    title: "Juan José Herrera Sierra | Tech Lead & Senior Backend Engineer",
    description:
      "Portfolio and experience of Juan José Herrera Sierra, Tech Lead and Senior Backend Engineer specializing in AWS, Python, Java, and DevOps.",
    siteName: "Juan José Herrera Sierra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan José Herrera Sierra | Tech Lead & Senior Backend Engineer",
    description:
      "Portfolio and experience of Juan José Herrera Sierra, Tech Lead and Senior Backend Engineer specializing in AWS, Python, Java, and DevOps.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
