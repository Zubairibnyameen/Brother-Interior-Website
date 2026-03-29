'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function VisionarySection() {
  const { ref, isVisible } = useInView()

  const commitments = [
    {
      title: 'Premium Materials',
      desc: 'Only the finest finishes and trusted brands — from PVC & gypsum false ceiling to imported wooden flooring and SS steel fittings.',
    },
    {
      title: 'On-Time Excellence',
      desc: 'Guaranteed project completion on schedule — whether it is a single false ceiling room or a full home renovation in Ghaziabad.',
    },
    {
      title: 'Bespoke Design',
      desc: 'Custom modular kitchens, wardrobes, wall panels and false ceiling designs tailored to your lifestyle and budget.',
    },
    {
      title: 'Client First',
      desc: 'Rated 5.0 ★ across 39 Google reviews — your satisfaction across Delhi, Noida, Ghaziabad and Gurgaon is our greatest reward.',
    },
  ]

  return (
    <section
      ref={ref}
      className={`py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">

          {/* Portrait */}
          <div
            className={`md:col-span-1 flex justify-center md:justify-start transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <div className="w-48 h-64 sm:w-56 sm:h-72 bg-foreground/10 border-2 border-accent/30 rounded-lg overflow-hidden">
              <img
                src="/founder.jpg"
                alt="Founder"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6">

            {/* Heading */}
            <div>
              <div
                className={`inline-flex items-center space-x-2 mb-4 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs tracking-widest text-muted-foreground uppercase">
                  Our Vision
                </span>
              </div>

              <h2
                className={`transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Design Philosophy of Ghaziabad&apos;s{' '}
                <span className="text-accent">Best Interior Contractor</span>
              </h2>
            </div>

            {/* Quote */}
            <blockquote
              className={`space-y-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-base sm:text-lg text-foreground italic leading-relaxed border-l-4 border-accent pl-6">
                “At Brother Interior, we don’t just design spaces — we craft experiences...”
              </p>

              <div>
                <p className="font-serif text-lg font-semibold text-foreground">
                  Mohd Saqib
                </p>
                <p className="text-sm text-muted-foreground">
                  Founder & Lead Designer
                </p>
              </div>
            </blockquote>

            {/* Commitments */}
            <div className="space-y-4 pt-6 border-t border-border">
              <h3
                className={`font-serif text-lg transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Why Choose Brother Interior?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {commitments.map((item, index) => (
                  <div
                    key={item.title}
                    className={`space-y-2 transition-all duration-700 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${index * 120 + 500}ms` }}
                  >
                    <p className="font-semibold text-accent text-sm">
                      {item.title}
                    </p>
                    <p className="text-sm text-foreground/80">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer text */}
              <p
                className={`text-xs text-muted-foreground pt-2 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Serving Indirapuram, Vasundhara, Raj Nagar, Khora Colony, Noida, Delhi & Gurgaon.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}