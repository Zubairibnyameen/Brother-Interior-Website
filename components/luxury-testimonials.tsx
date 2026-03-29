'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  location: string
  service: string
  quote: string
  rating: number
  image: string
  signature: string
  verified: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ajay Kumar',
    location: 'Delhi',
    service: 'Interior Work',
    quote:
      'Lucky to have worked with Brother Interior. On-time delivery and excellent service. Mr. Shakib Choudhary has a lot of patience to listen to customers and truly values relationships over money.',
    rating: 5,
    image: '/testimonial/testimonial1.jpg',
    signature: 'Ajay Kumar',
    verified: true,
  },
  {
    id: 2,
    name: 'Mohit Chauhan',
    location: 'Delhi',
    service: 'Interior Work',
    quote:
      'Work was completed on time and I feel overwhelmed with the results. Very cooperative team. If there was an option, I would give 10 out of 10. For genuine and quality work, highly recommended. #Shakeeb_Chaudhary 👌',
    rating: 5,
    image: '/testimonial/testimonial2.jpg',
    signature: 'Mohit Chauhan',
    verified: true,
  },
  {
    id: 3,
    name: 'Suraj Gupta',
    location: 'Delhi',
    service: 'Interior Work',
    quote:
      'They did awesome work. My family was completely surprised after seeing the results. Excellent craftsmanship. Special thanks to Shakib Choudhary.',
    rating: 5,
    image: '/testimonial/testimonial3.jpg',
    signature: 'Suraj Gupta',
    verified: true,
  },
]

export default function LuxuryTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const signatureRefs = useRef<(HTMLDivElement | null)[]>([])

  const activeTestimonial = testimonials[activeIndex]

  // Animated signature effect on mount
  useEffect(() => {
    const signatureElement = signatureRefs.current[activeIndex]
    if (signatureElement) {
      signatureElement.style.opacity = '0'
      signatureElement.style.animation = 'none'
      
      // Trigger reflow to restart animation
      void signatureElement.offsetWidth
      signatureElement.style.animation = 'signatureWrite 1.2s ease-out forwards 0.3s'
    }
  }, [activeIndex])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    const nextIndex = (activeIndex + 1) % testimonials.length
    const currentCard = cardsRef.current[activeIndex]
    
    if (currentCard) {
      currentCard.style.animation = 'stackFlyOff 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
    }
    
    setTimeout(() => {
      setActiveIndex(nextIndex)
      setIsAnimating(false)
      
      // Reset animation for reentry
      const newCard = cardsRef.current[nextIndex]
      if (newCard) {
        newCard.style.animation = 'stackSlideIn 0.5s ease-out forwards'
      }
    }, 300)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length
    setActiveIndex(prevIndex)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#2B2B2B] via-[#1F1F1F] to-[#2B2B2B] overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Animated Background Smoke/Mist Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center space-y-6">
          <div className="inline-flex items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs sm:text-sm tracking-widest text-accent uppercase">
              Client Stories
            </span>
          </div>
          <h2 className="text-foreground max-w-3xl mx-auto">
            Voices of Luxury: Client Testimonials
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mx-auto">
            Discover how Brother Interior has transformed homes across
            Ghaziabad, creating spaces that blend luxury with functionality.
          </p>
        </div>

        {/* Testimonials Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Stack Container - Mobile Responsive */}
          <div className="lg:col-span-2 relative h-96 sm:h-[500px] md:h-[600px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`absolute inset-0 transition-all duration-300 ${
                  index === activeIndex
                    ? "z-20 opacity-100"
                    : "z-10 opacity-0 pointer-events-none"
                }`}
                style={{
                  transform:
                    index === activeIndex
                      ? "translateY(0)"
                      : "translateY(20px)",
                }}
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden group">
                  {/* Gold Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-30"></div>

                  <div className="h-full flex flex-col justify-between">
                    {/* Client Info & Portrait */}
                    <div className="flex items-start justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-lg sm:text-2xl font-serif text-white mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-accent tracking-widest uppercase">
                            {testimonial.service}
                          </p>
                        </div>

                        {/* Star Rating - Minimalist Gold */}
                        <div className="flex items-center gap-2">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <div
                                key={i}
                                className="w-4 h-4 rounded-full border border-accent bg-accent/20 flex items-center justify-center"
                              >
                                <div className="w-1 h-1 rounded-full bg-accent"></div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Circular Portrait */}
                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
                        <div
                          className="absolute inset-0 rounded-full border-2 border-accent/50 transition-all duration-300 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/50"
                          style={{
                            backgroundImage: `url(${testimonial.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>

                        {/* Golden Glow on Hover */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/20 to-transparent blur-xl"></div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="flex-1 mb-6 sm:mb-8">
                      <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Signature & Location */}
                    <div className="space-y-4">
                      {/* Handwritten Signature Effect */}
                      <div
                        ref={(el) => {
                          signatureRefs.current[index] = el;
                        }}
                        className="text-accent font-serif text-lg sm:text-xl md:text-2xl opacity-0"
                      >
                        {testimonial.signature}
                      </div>

                      {/* Verified Badge */}
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-accent flex items-center justify-center bg-accent/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        </div>
                        <span className="text-xs sm:text-sm text-white/60 tracking-widest uppercase">
                          Verified Project: {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls Sidebar */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start gap-6 sm:gap-8 lg:h-96 lg:justify-between">
            {/* Navigation Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-foreground text-xs sm:text-sm tracking-widest font-semibold disabled:opacity-50 transition-all duration-300 touch-target"
              >
                Next Story
              </button>
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-accent/50 hover:border-accent text-accent hover:bg-accent/10 text-xs sm:text-sm tracking-widest font-semibold disabled:opacity-50 transition-all duration-300 touch-target"
              >
                Previous
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="flex flex-col gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) setActiveIndex(index);
                  }}
                  className={`h-1 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                ></button>
              ))}
            </div>

            {/* Stats */}
            <div className="text-center lg:text-left space-y-2">
              <p className="text-accent font-serif text-2xl sm:text-3xl">
                {activeIndex + 1}/{testimonials.length}
              </p>
              <p className="text-xs sm:text-sm text-white/60 tracking-widest uppercase">
                Client Stories
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Button - Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden">
        <a
          href="/contact"
          className="block w-full px-4 py-4 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-foreground text-center text-sm font-semibold tracking-widest transition-all duration-300 shadow-2xl shadow-accent/50"
        >
          Get Your Free Consultation
        </a>
      </div>
    </section>
  );
}
