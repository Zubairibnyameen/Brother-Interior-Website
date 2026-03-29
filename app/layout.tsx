import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Brother Interior | Luxury Interior Design in Ghaziabad',
  description: 'Premium interior design services in Ghaziabad. Luxury modular kitchens, false ceilings, wardrobes, and bespoke design solutions with Italian marble and master craftsmanship.',
  generator: 'v0.app',
  keywords: 'interior design, Ghaziabad, luxury kitchens, modular furniture, interior decorator, Indirapuram, Vasundhara',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#2B2B2B',
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
