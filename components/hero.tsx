'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
          Luxury Interiors, Elevated Living
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience premium interior design with Italian marble, bespoke woodwork, and master craftsmanship. Transform your space into a masterpiece.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg"
            asChild
          >
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
          <Button
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold px-8 py-6 text-lg rounded-lg bg-transparent"
            asChild
          >
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('why-section')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-accent" size={32} />
        </button>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23d4af37" fillOpacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}></div>
    </section>
  )
}
