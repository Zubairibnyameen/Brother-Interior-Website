'use client'

import { MapPin } from 'lucide-react'

export default function ServiceAreas() {
  const areas = [
    { name: 'Ghaziabad', icon: '🏙️' },
    { name: 'Indirapuram', icon: '🏘️' },
    { name: 'Vasundhara', icon: '🏠' },
    { name: 'Raj Nagar', icon: '🏢' },
    { name: 'Crossings Republik', icon: '🌆' },
    { name: 'Kaushambi', icon: '🏬' },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Serving Premium Locations
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              We specialize in delivering luxury interior design solutions across Ghaziabad and surrounding premium residential areas. Our local expertise ensures quality execution and seamless project management.
            </p>
            <div className="space-y-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group">
                  <MapPin className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium group-hover:text-accent transition-colors">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Map Placeholder */}
          <div className="bg-secondary/50 border-2 border-accent/20 rounded-xl p-8 flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                Service Coverage Map
              </h3>
              <p className="text-foreground/60">
                We serve Ghaziabad and premium surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
