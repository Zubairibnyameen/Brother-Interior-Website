'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProcessTimeline from '@/components/process-timeline'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Process() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-sm tracking-widest text-muted-foreground uppercase">
              Our Process
            </span>
          </div>
          <h1 className="text-6xl leading-tight text-foreground">
            From Vision to Reality
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our structured design process ensures every project exceeds expectations with meticulous attention to detail and premium craftsmanship.
          </p>
        </div>
      </section>
      <ProcessTimeline />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
