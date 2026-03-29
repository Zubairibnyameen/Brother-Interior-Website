'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <Navigation />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
