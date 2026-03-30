import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  // ── Primary ──────────────────────────────────────────────────────────────
  title: {
    default: 'Brother Interior | False Ceiling & Home Interior Contractor in Ghaziabad',
    template: '%s | Brother Interior — Ghaziabad',
  },
  description:
    'Brother Interior (ब्रदर इंटीरियर) — Ghaziabad\'s top-rated false ceiling & home interior contractor. PVC, Gypsum, POP & Grid false ceiling, modular kitchen, wardrobe, wooden flooring, PVC wall panels & SS steel work. Rated 5.0 ★ · 39 Google reviews. Free site visit — serving Indirapuram, Vasundhara, Raj Nagar, Noida, Delhi & Gurgaon. Call 080061 80090.',
 
  // ── Keywords ─────────────────────────────────────────────────────────────
  keywords: [
    // Core service + city (highest intent)
    'false ceiling Ghaziabad',
    'false ceiling contractor Ghaziabad',
    'PVC false ceiling Ghaziabad',
    'gypsum false ceiling Ghaziabad',
    'POP false ceiling Ghaziabad',
    'grid false ceiling Ghaziabad',
    'false ceiling design Ghaziabad',
    // Interior contractor
    'home interior contractor Ghaziabad',
    'interior designer Ghaziabad',
    'interior contractor Ghaziabad',
    'home renovation Ghaziabad',
    // Services
    'modular kitchen Ghaziabad',
    'wardrobe Ghaziabad',
    'almirah Ghaziabad',
    'wooden flooring Ghaziabad',
    'PVC wall panel Ghaziabad',
    'gypsum board partition Ghaziabad',
    'steel door work Ghaziabad',
    'SS work Ghaziabad',
    // Locality-level keywords
    'false ceiling Indirapuram',
    'false ceiling Vasundhara',
    'false ceiling Raj Nagar',
    'false ceiling Khora Colony',
    'interior contractor Noida',
    'interior contractor Delhi',
    'interior contractor Gurgaon',
    'false ceiling Noida',
    'false ceiling Delhi NCR',
    // Brand
    'Brother Interior',
    'brother interior Ghaziabad',
    'brotherinterior.com',
  ],
 
  // ── Viewport / Theme ──────────────────────────────────────────────────────
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#2B2B2B',
 
  // ── Canonical & Alternates ────────────────────────────────────────────────
  alternates: {
    canonical: 'https://brotherinterior.com',
  },
 
  // ── Open Graph (WhatsApp / Facebook previews) ─────────────────────────────
  openGraph: {
    type: 'website',
    url: 'https://brotherinterior.com',
    siteName: 'Brother Interior',
    title: 'Brother Interior | False Ceiling & Home Interior Contractor in Ghaziabad',
    description:
      'Ghaziabad\'s top-rated false ceiling & home interior contractor — PVC, Gypsum, POP, Grid ceiling, modular kitchen, wardrobe, wooden flooring & more. 5.0 ★ · 39 reviews. Free site visit. Call 080061 80090.',
    images: [
      {
        url: 'https://brotherinterior.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brother Interior — False Ceiling & Home Interior Contractor, Ghaziabad',
      },
    ],
    locale: 'en_IN',
  },
 
  // ── Twitter / X card ──────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Brother Interior | False Ceiling & Home Interior Contractor in Ghaziabad',
    description:
      'PVC, Gypsum, POP & Grid false ceiling · Modular kitchen · Wardrobe · Wooden flooring. 5.0 ★ Ghaziabad. Free site visit — 080061 80090.',
    images: ['https://brotherinterior.com/og-image.jpg'],
  },
 
  // ── Robots ────────────────────────────────────────────────────────────────
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
 
  // ── Authorship / Publisher ────────────────────────────────────────────────
  authors: [{ name: 'Mohd Saqib', url: 'https://brotherinterior.com' }],
  creator: 'Brother Interior',
  publisher: 'Brother Interior',
 
  // ── Category ─────────────────────────────────────────────────────────────
  category: 'Interior Design & Home Renovation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
