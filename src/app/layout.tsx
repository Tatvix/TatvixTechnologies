import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Site URL - update this to your actual domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tatvixtech.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tatvix | Embedded Product Design & IoT Development Services",
    template: "%s | Tatvix Technologies"
  },
  description: "Expert embedded systems design and IoT product development services. End-to-end solutions for smart devices, industrial automation, and connected products. Based in Ahmedabad, India.",
  keywords: [
    "embedded systems",
    "IoT development",
    "embedded product design",
    "IoT solutions",
    "embedded software",
    "IoT consulting",
    "smart device development",
    "industrial IoT",
    "embedded systems India",
    "IoT product development",
    "PCB design",
    "firmware development",
    "hardware design",
    "Ahmedabad",
    "Gujarat"
  ],
  authors: [{ name: "Tatvix Technologies" }],
  creator: "Tatvix Technologies",
  publisher: "Tatvix Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tatvix Technologies",
    title: "Tatvix | Embedded Product Design & IoT Development Services",
    description: "Expert embedded systems design and IoT product development services. End-to-end solutions for smart devices and connected products.",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tatvix Technologies - Embedded Systems & IoT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatvix | Embedded Product Design & IoT Development Services",
    description: "Expert embedded systems design and IoT product development services.",
    images: [`${siteUrl}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-bg text-text antialiased selection:bg-primary/30 selection:text-white`}
      >
        <div className="noise-overlay" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
