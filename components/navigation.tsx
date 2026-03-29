'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ]

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true)
      } else {
        setIsScrollingDown(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Desktop Header - Sticky with scroll hide */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300 ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 touch-target">
              <div className="w-9 h-9 overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Brother Interior Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-base font-serif tracking-tight">
                Brother Interior
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-wide text-foreground hover:text-accent transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/918006180090?text=Hi%20I%20want%20a%20free%20quote%20for%20interior%20work"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-2.5 text-xs tracking-widest bg-foreground text-background hover:bg-accent hover:text-foreground transition-all duration-300 flex items-center gap-2 touch-target"
            >
              <MessageCircle
                size={14}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Header - Always visible */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 touch-target">
            <div className="w-9 h-9 overflow-hidden">
              <img
                src="/logo.png"
                alt="Brother Interior Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-base font-serif tracking-tight">
              Brother Interior
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 touch-target hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="border-t border-border bg-background animate-in fade-in">
            <div className="px-4 py-4 space-y-3 pb-20">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-sm tracking-wide text-foreground hover:text-accent hover:bg-secondary transition-colors touch-target"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:918006180090"
                className="group w-full mt-4 px-5 py-3 text-sm tracking-widest text-black flex items-center justify-center gap-2 rounded-md 
  bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 
  shadow-md shadow-yellow-500/30
  transition-all duration-300 hover:scale-[1.03] hover:shadow-yellow-500/50 active:scale-95"
              >
                <Phone
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                Call Now • Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/98 backdrop-blur-sm border-t border-border px-4 py-3 flex gap-3 safe-area-inset-bottom">
        <a
          href="https://wa.me/918006180090?text=Hi%20Brother%20Interior%2C%20I%27m%20interested%20in%20a%20luxury%20interior%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-foreground hover:bg-accent/90 transition-all duration-300 touch-target text-sm font-semibold"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <button
          onClick={() => (window.location.href = "tel:+918006180090")}
          className="flex-1 flex px-4 py-3 justify-center gap-2 bg-foreground text-background hover:bg-accent hover:text-foreground transition-all duration-300 touch-target text-sm font-semibold"
        >
          <Phone size={18} />
          Enquiry
        </button>
      </div>

      {/* Padding for mobile nav */}
      <div className="md:hidden h-14"></div>
    </>
  );
}
