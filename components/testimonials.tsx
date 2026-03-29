'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Indirapuram',
      text: 'Brother Interior transformed our home into a luxury masterpiece. The attention to detail and premium materials exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      location: 'Vasundhara',
      text: 'Exceptional craftsmanship and professional execution. The modular kitchen and false ceiling look absolutely stunning. Highly recommended!',
      rating: 5
    },
    {
      name: 'Neha Verma',
      location: 'Ghaziabad',
      text: 'The 3D visualization was incredibly accurate. They delivered exactly what we envisioned with premium finishes and impeccable quality.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      location: 'Raj Nagar',
      text: 'Professional team, transparent communication, and stunning results. Our office interior is the talk of the town!',
      rating: 5
    },
  ]

  return (
    <section className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Client Satisfaction
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Hear from our satisfied clients across Ghaziabad and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 text-lg mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif font-bold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-foreground/60 text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
