'use client'

import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { X, ZoomIn, SlidersHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ───────────────────────────────────────────────────────────────────
interface Project {
  id: number
  title: string
  location: string
  service: string
  category: string
  // priceLabel?: string
  gradient: string
  span: 'normal' | 'wide' | 'tall'
  images: string[]
}

// ─── Categories / Filters ────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'all',              label: 'All Works' },
  { id: 'false-ceiling',    label: 'False Ceiling' },
  { id: 'modular-kitchen',  label: 'Modular Kitchen' },
  { id: 'wardrobe',         label: 'Almirah / Wardrobe' },
  { id: 'flooring',         label: 'Wooden Flooring' },
  { id: 'partitions',       label: 'Partitions' },
  { id: 'wall-panel',       label: 'Wall Panels' },
  { id: 'steel-work',       label: 'Steel / SS Work' },
  { id: 'wooden',           label: 'Wooden Works' },
]

// ─── Projects Data ────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 1,
    title: 'PVC False Ceiling',
    location: 'Premium Finish',
    service: 'False Ceiling',
    category: 'false-ceiling',
    // priceLabel: '₹95 / sq ft',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
    span: 'wide',
    images: ['/gallery/falseCeiling1.jpg', '/gallery/falseCeiling2.jpg'],
  },
  {
    id: 2,
    title: 'Gypsum False Ceiling',
    location: 'Elegant Curves',
    service: 'False Ceiling',
    category: 'false-ceiling',
    // priceLabel: '₹55 / sq ft',
    gradient: 'linear-gradient(135deg, #2c3e50 0%, #4a4e69 100%)',
    span: 'normal',
    images: ['/gallery/falseCeiling3.jpg', '/gallery/falseCeiling4.jpg'],
  },
  {
    id: 3,
    title: 'POP False Ceiling',
    location: 'Classic Design',
    service: 'False Ceiling',
    category: 'false-ceiling',
    // priceLabel: '₹120 / sq ft',
    gradient: 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)',
    span: 'tall',
    images: ['/gallery/falseCeiling5.jpg', '/gallery/falseCeiling6.jpg'],
  },
  {
    id: 4,
    title: 'Grid False Ceiling',
    location: 'Commercial Grade',
    service: 'False Ceiling',
    category: 'false-ceiling',
    // priceLabel: '₹65 / sq ft',
    gradient: 'linear-gradient(135deg, #1c1c1c 0%, #3a3a3a 100%)',
    span: 'normal',
    images: ['/gallery/falseCeiling7.jpg', '/gallery/falseCeiling8.jpg'],
  },
  {
    id: 5,
    title: 'Living Room Ceiling',
    location: 'Residential',
    service: 'False Ceiling',
    category: 'false-ceiling',
    // priceLabel: '₹65 / sq ft',
    gradient: 'linear-gradient(135deg, #2b4162 0%, #12a8e0 100%)',
    span: 'normal',
    images: ['/gallery/falseCeiling9.jpg', '/gallery/falseCeiling10.jpg'],
  },
  {
    id: 6,
    title: 'False Ceiling Design',
    location: 'Designer Series',
    service: 'False Ceiling',
    category: 'false-ceiling',
    // priceLabel: '₹65 / sq ft',
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    span: 'wide',
    images: ['/gallery/falseCeiling11.jpg', '/gallery/falseCeiling12.jpg'],
  },
  {
    id: 7,
    title: 'Modular Kitchen Interior',
    location: 'Modern Living',
    service: 'Modular Kitchen',
    category: 'modular-kitchen',
    // priceLabel: '₹1,250 / sq ft',
    gradient: 'linear-gradient(135deg, #4a1942 0%, #c74b50 100%)',
    span: 'wide',
    images: ['/gallery/modularKitchen1.jpg', '/gallery/modularKitchen2.jpg'],
  },
  {
    id: 8,
    title: 'Modular Kitchen Premium',
    location: 'Luxury Series',
    service: 'Modular Kitchen',
    category: 'modular-kitchen',
    // priceLabel: '₹1,650 / sq ft',
    gradient: 'linear-gradient(135deg, #7b2ff7 0%, #f107a3 100%)',
    span: 'tall',
    images: ['/gallery/modularKitchen3.jpg', '/gallery/modularKitchen4.jpg'],
  },
  {
    id: 9,
    title: 'Custom Almirah',
    location: 'Bedroom Storage',
    service: 'Wardrobe & Storage',
    category: 'wardrobe',
    gradient: 'linear-gradient(135deg, #5C4033 0%, #8B6F47 100%)',
    span: 'normal',
    images: ['/gallery/almirah1.jpg', '/gallery/almirah2.jpg'],
  },
  {
    id: 10,
    title: 'Wooden Crockery Unit',
    location: 'Dining Room',
    service: 'Wooden Works',
    category: 'wooden',
    // priceLabel: '₹1,050 / sq ft',
    gradient: 'linear-gradient(135deg, #3e1f00 0%, #7a4100 100%)',
    span: 'normal',
    images: ['/gallery/wooden1.jpg', '/gallery/wooden2.jpg'],
  },
  {
    id: 11,
    title: 'Wooden Flooring',
    location: 'Living & Bedroom',
    service: 'Flooring',
    category: 'flooring',
    gradient: 'linear-gradient(135deg, #6f4e37 0%, #c9a96e 100%)',
    span: 'wide',
    images: ['/gallery/woodenFlooring1.jpg', '/gallery/woodenFlooring2.jpg'],
  },
  {
    id: 12,
    title: 'Gypsum Board Partition',
    location: 'Office & Home',
    service: 'Partitions',
    category: 'partitions',
    gradient: 'linear-gradient(135deg, #283048 0%, #859398 100%)',
    span: 'normal',
    images: ['/gallery/partition1.jpg', '/gallery/partition2.jpg'],
  },
  {
    id: 13,
    title: 'PVC Wall Panel',
    location: 'Feature Walls',
    service: 'Wall Panels',
    category: 'wall-panel',
    gradient: 'linear-gradient(135deg, #0b486b 0%, #f56217 100%)',
    span: 'tall',
    images: ['/gallery/pvcWallPanel1.jpg', '/gallery/pvcWallPanel2.jpg'],
  },
  {
    id: 14,
    title: 'Steel / SS Work',
    location: 'Doors & Fixtures',
    service: 'Steel Work',
    category: 'steel-work',
    gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    span: 'normal',
    images: ['/gallery/steelWork1.jpg', '/gallery/steelWork2.jpg'],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const getSpanClass = (span: string) => {
  switch (span) {
    case 'wide': return 'md:col-span-2'
    case 'tall': return 'md:row-span-2'
    default:     return ''
  }
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [imgIdx, setImgIdx] = useState(0)

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const total = project.images.length


  // whatsapp/inquiry
  const getWhatsAppLink = (project: Project) => {
    const phone = "918006180090";

    const message = `Hi, I am interested in your ${project.title} (${project.service}).
Can you share details about pricing, materials and timeline?`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 p-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Card */}
      <motion.div
        className="relative w-full max-w-5xl rounded-xl overflow-hidden"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div className="relative h-[42vh] sm:h-[55vh] md:h-[65vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIdx}
              className="absolute inset-0"
              style={{ background: project.gradient }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              {/* Actual image — falls back to gradient if missing */}
              <img
                src={project.images[imgIdx]}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail strip */}
          {total > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`w-12 h-8 sm:w-16 sm:h-10 rounded overflow-hidden border-2 transition-all duration-300 ${
                    i === imgIdx
                      ? "border-white scale-110"
                      : "border-white/30 opacity-60"
                  }`}
                >
                  <div
                    className="w-full h-full"
                    style={{ background: project.gradient }}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="bg-[#0d0d0d] p-6 sm:p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs text-white/50 tracking-[0.2em] uppercase">
                  {project.service}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                {project.title}
              </h2>
              <p className="text-white/60 text-sm">{project.location}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">
                Category
              </p>
              <p className="text-sm text-white">{project.service}</p>
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-2">
                Finish Type
              </p>
              <p className="text-sm text-white">{project.location}</p>
            </div>
            <div>
              <a
                href={getWhatsAppLink(project)}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full px-6 py-3 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-accent hover:text-foreground transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                💬 Inquiry Now
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProjectsGallery() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(() => {
    const cat = searchParams.get('category')
    return cat && CATEGORIES.some((c: {id: string}) => c.id === cat) ? cat : 'all'
  })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Sync when URL param changes (back/forward navigation)
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && CATEGORIES.some((c: {id: string}) => c.id === cat)) {
      setActiveCategory(cat)
    }
  }, [searchParams])

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedProject])

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-8 sm:mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs sm:text-sm tracking-widest text-muted-foreground uppercase">
              Ghaziabad &bull; Delhi &bull; Noida &bull; Greater Noida &bull; Gurgaon
            </span>
          </div>

          {/* SEO H1 */}
          <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
            False Ceiling &amp; Home Interior Contractor
            <span className="block text-accent text-xl sm:text-2xl md:text-3xl mt-1 font-light">
              in Ghaziabad — Brother Interior
            </span>
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base max-w-3xl leading-relaxed">
            Brother Interior is Ghaziabad&apos;s most trusted home interior contractor specialising in
            <strong className="text-foreground font-medium"> False Ceiling</strong> (PVC, Gypsum, POP &amp; Grid),{" "}
            <strong className="text-foreground font-medium">Modular Kitchens</strong>,{" "}
            <strong className="text-foreground font-medium">Wardrobes &amp; Almirahs</strong>,{" "}
            <strong className="text-foreground font-medium">Wooden Flooring</strong>,{" "}
            <strong className="text-foreground font-medium">PVC Wall Panels</strong> and{" "}
            <strong className="text-foreground font-medium">Steel / SS Work</strong>.
            Rated <span className="text-foreground font-semibold">5.0 ★</span> across 39 Google reviews — we deliver
            premium finishes at the lowest prices across Delhi NCR.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { label: "5.0 ★ Rating", sub: "39 Google Reviews" },
              { label: "Since 2018", sub: "Ghaziabad, UP" },
              { label: "Pan NCR Service", sub: "Delhi · Noida · Gurgaon" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-2 px-4 py-2.5 border border-foreground/10 bg-foreground/[0.03]">
                <div>
                  <p className="text-xs font-semibold text-foreground tracking-wide">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Filter Bar ── */}
        <div className="mb-8 sm:mb-10">
          {/* Mobile: dropdown toggle */}
          <div className="flex sm:hidden items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              {CATEGORIES.find(c => c.id === activeCategory)?.label}
            </span>
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 px-4 py-2 border border-foreground/20 text-xs tracking-widest uppercase text-foreground"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {filterOpen && (
              <motion.div
                className="sm:hidden flex flex-wrap gap-2 mb-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setFilterOpen(false) }}
                    className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                      activeCategory === cat.id
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-transparent text-foreground/60 border-foreground/20 hover:border-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop: inline strip */}
          <div className="hidden sm:flex flex-wrap gap-2">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent text-foreground/60 border-foreground/20 hover:border-foreground/60 hover:text-foreground'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Masonry Gallery ── */}
        <motion.div
          ref={galleryRef}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-[180px] sm:auto-rows-[240px] md:auto-rows-[280px]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden cursor-pointer ${getSpanClass(project.span)}`}
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ background: project.gradient }}
                />

                {/* Actual image */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

                {/* Price badge */}
                {/* {project.priceLabel && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/20">
                    <span className="text-[10px] text-white/80 tracking-widest">{project.priceLabel}</span>
                  </div>
                )} */}

                {/* Content on hover */}
                <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end z-10">
                  <div className="mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ZoomIn className="text-white" size={20} />
                  </div>
                  <div className="space-y-1 sm:space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      <span className="text-xs text-white/70 tracking-widest uppercase hidden sm:inline-block">
                        {project.service}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white font-serif">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80">{project.location}</p>
                  </div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

       
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedProject && (
          <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}