'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function StickyCtaButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible || !isScrolled) return null

  return (
    <div className="fixed bottom-28 right-8 z-40 animate-in fade-in slide-in-from-right duration-500">
      <div className="bg-card border border-accent/30 rounded-lg shadow-xl p-4 max-w-xs">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-foreground/50 hover:text-foreground transition-colors"
        >
          <X size={18} />
        </button>

        <p className="text-sm font-serif font-bold text-primary mb-3 pr-4">
          Ready to transform your space?
        </p>

        <Button
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2 rounded-lg text-sm"
          asChild
        >
          <Link href="/contact">Book Free Consultation</Link>
        </Button>
      </div>
    </div>
  )
}
