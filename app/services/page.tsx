'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ServiceShowcase from '@/components/service-showcase'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Services() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-sm tracking-widest text-muted-foreground uppercase">
              Our Expertise
            </span>
          </div>
          <h1 className="text-6xl leading-tight text-foreground">
            Premium Interior Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive luxury interior design solutions tailored to your vision, featuring premium materials and meticulous craftsmanship.
          </p>
        </div>
      </section>
      <ServiceShowcase />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
