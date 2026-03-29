'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/918006180090?text=Hi%20Brother%20Interior%2C%20I%27m%20interested%20in%20a%20luxury%20interior%20consultation'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-8 right-8 z-30 items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent hover:bg-accent/80 text-foreground shadow-2xl hover:shadow-accent/40 transition-all duration-300 group hover:scale-110 touch-target"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
