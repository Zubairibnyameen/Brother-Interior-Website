// 'use client'

// import { useState } from 'react'
// import { ChevronRight } from 'lucide-react'
// import Link from 'next/link'

// interface ServiceItem {
//   id: number
//   title: string
//   description: string
//   imageUrl: string
//   materials: string[]
//   textureImages: string[]
// }

// const services: ServiceItem[] = [
//   {
//     id: 1,
//     title: 'Modular Kitchens',
//     description: 'Premium culinary spaces with Italian marble countertops and bespoke cabinetry.',
//     imageUrl: '/kitchen-home.png',
//     materials: ['Italian Marble', 'Premium Laminates', 'Stainless Steel', 'HDHMR Board'],
//     textureImages: [
//       '/textures/marble.jpg',
//       '/textures/laminate.jpg',
//       '/textures/steel.jpg',
//       '/textures/board.jpg',
//     ],
//   },
//   {
//     id: 2,
//     title: 'Luxury Wardrobes',
//     description: 'Custom storage solutions with sophisticated finishes and smart organization.',
//     imageUrl: '/wardrobe-home.png',
//     materials: ['Walnut Veneer', 'Soft-close Hardware', 'Mirror Finishes', 'LED Lighting'],
//     textureImages: [
//       '/textures/walnut.jpg',
//       '/textures/hardware.jpg',
//       '/textures/mirror.jpg',
//       '/textures/led.jpg',
//     ],
//   },
//   {
//     id: 3,
//     title: 'False Ceilings',
//     description: 'Ambient lighting integrated with architectural ceiling designs.',
//     imageUrl: '/falseCeiling-home.jpeg',
//     materials: ['Gypsum Board', 'Ambient LEDs', 'Acoustic Panels', 'Decorative Molding'],
//     textureImages: [
//       '/textures/gypsum.jpg',
//       '/textures/ambient-light.jpg',
//       '/textures/acoustic.jpg',
//       '/textures/molding.jpg',
//     ],
//   },
// ]

// export default function ServiceShowcase() {
//   const [activeService, setActiveService] = useState(0)
//   const service = services[activeService]

//   const getWhatsAppLink = (service: ServiceItem) => {
//     const phone = "918006180090"; // 👈 your number (no +)

//     const message = `Hi, I'm interested in your ${service.title}. 
// Can you share more details about pricing, materials, and timeline?`;

//     return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//   };

//   return (
//     <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8 sm:mb-12 md:mb-16 space-y-4">
//           <div className="inline-flex items-center space-x-2">
//             <div className="w-2 h-2 rounded-full bg-accent"></div>
//             <span className="text-xs sm:text-sm tracking-widest text-muted-foreground uppercase">
//               Our Expertise
//             </span>
//           </div>
//           <h2 className="text-foreground">Premium Service Offerings</h2>
//         </div>

//         {/* Services */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
//           {services.map((svc, idx) => (
//             <div
//               key={svc.id}
//               onClick={() => setActiveService(idx)}
//               className="group border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300 cursor-pointer"
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={svc.imageUrl}
//                   alt={svc.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4">
//                 <h3 className="text-sm sm:text-base font-semibold mb-2 leading-snug">
//                   {svc.title}
//                 </h3>

//                 <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
//                   {svc.description}
//                 </p>

//                 {/* Bottom Row */}
//                 <div className="flex items-center justify-between">
//                   <a
//                     href={getWhatsAppLink(svc)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-between w-full"
//                   >
//                     <span className="text-[10px] uppercase text-muted-foreground group-hover:text-accent transition">
//                       Learn More
//                     </span>

//                     <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent text-white group-hover:translate-x-1 transition">
//                       <ChevronRight size={14} />
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 🔥 IMAGE TEXTURE SECTION */}
//         <div>
//           <p className="text-xs sm:text-sm tracking-widest text-muted-foreground uppercase mb-3 sm:mb-4">
//             Material Finishes
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 h-24 sm:h-32">
//             {service.textureImages.map((img, idx) => (
//               <div
//                 key={idx}
//                 className="relative group cursor-pointer overflow-hidden border border-border/50 hover:border-accent/50 rounded-md"
//                 style={{
//                   backgroundImage: `url(${img})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

//                 {/* Text */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                   <span className="text-white text-xs font-medium text-center px-1">
//                     {service.materials[idx]}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="pt-6 sm:pt-8">
//           <Link
//             href="/contact"
//             className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background text-xs sm:text-sm tracking-widest hover:bg-accent hover:text-foreground transition text-center"
//           >
//             Get Your Personalized Design
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

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

interface ServiceItem {
  id: number
  title: string
  description: string
  imageUrl: string
  materials: string[]
  textureImages: string[]
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Modular Kitchens',
    description:
      'Premium culinary spaces with Italian marble countertops and bespoke cabinetry.',
    imageUrl: '/kitchen-home.png',
    materials: ['Italian Marble', 'Premium Laminates', 'Stainless Steel', 'HDHMR Board'],
    textureImages: [
      '/textures/marble.jpg',
      '/textures/laminate.jpg',
      '/textures/steel.jpg',
      '/textures/board.jpg',
    ],
  },
  {
    id: 2,
    title: 'Luxury Wardrobes',
    description:
      'Custom storage solutions with sophisticated finishes and smart organization.',
    imageUrl: '/wardrobe-home.png',
    materials: ['Walnut Veneer', 'Soft-close Hardware', 'Mirror Finishes', 'LED Lighting'],
    textureImages: [
      '/textures/walnut.jpg',
      '/textures/hardware.jpg',
      '/textures/mirror.jpg',
      '/textures/led.jpg',
    ],
  },
  {
    id: 3,
    title: 'False Ceilings',
    description:
      'Ambient lighting integrated with architectural ceiling designs.',
    imageUrl: '/falseCeiling-home.jpeg',
    materials: ['Gypsum Board', 'Ambient LEDs', 'Acoustic Panels', 'Decorative Molding'],
    textureImages: [
      '/textures/gypsum.jpg',
      '/textures/ambient-light.jpg',
      '/textures/acoustic.jpg',
      '/textures/molding.jpg',
    ],
  },
]

export default function ServiceShowcase() {
  const { ref, isVisible } = useInView()

  const [activeService, setActiveService] = useState(0)
  const service = services[activeService]

  const getWhatsAppLink = (service: ServiceItem) => {
    const phone = "918006180090"

    const message = `Hi, I'm interested in your ${service.title}. 
Can you share more details about pricing, materials, and timeline?`

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  }

  return (
    <section
      ref={ref}
      className={`relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 space-y-4">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                Our Expertise
              </span>
            </div>
          </div>

          <h2 className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Premium Service Offerings
          </h2>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              onClick={() => setActiveService(idx)}
              className={`group border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={svc.imageUrl}
                  alt={svc.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-semibold mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                  {svc.description}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href={getWhatsAppLink(svc)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full"
                  >
                    <span className="text-[10px] uppercase text-muted-foreground group-hover:text-accent transition">
                      Learn More
                    </span>

                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent text-white group-hover:translate-x-1 transition">
                      <ChevronRight size={14} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Texture */}
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">
            Material Finishes
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-32">
            {service.textureImages.map((img, idx) => (
              <div
                key={idx}
                className={`relative group cursor-pointer overflow-hidden border border-border/50 hover:border-accent/50 rounded-md transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${idx * 100 + 400}ms`,
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-xs text-center px-1">
                    {service.materials[idx]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <Link
            href="/contact"
            className="group relative inline-block w-full sm:w-auto px-6 sm:px-8 py-4 bg-foreground text-background text-xs tracking-widest text-center overflow-hidden transition-all duration-500 active:scale-95"
          >
            <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

            <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">
              Get Your Personalized Design
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}