'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react'

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/XFectvNcbEDcBVoq6'

// WhatsApp number in international format (no + or spaces)
const WHATSAPP_NUMBER = '918006180090'

const buildWhatsAppURL = (data: {
  name: string; email: string; phone: string; service: string; message: string
}) => {
  const serviceLabel = data.service
    ? data.service.replace(/-/g, ' ').replace(/\w/g, (c) => c.toUpperCase())
    : 'Not specified'

  const text = [
    '🏠 *New Enquiry — Brother Interior*',
    '',
    `👤 *Name:* ${data.name}`,
    `📞 *Phone:* ${data.phone || 'Not provided'}`,
    `📧 *Email:* ${data.email || 'Not provided'}`,
    `🔧 *Service:* ${serviceLabel}`,
    `💬 *Message:* ${data.message || 'No message'}`,
    '',
    '_Sent via brotherinterior.com contact form_',
  ].join('')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: [
      'RC 60/2, Lok Priya Vihar,',
      'Khora Colony, Ghaziabad,',
      'Uttar Pradesh — 201020',
    ],
    link: GOOGLE_MAPS_URL,
    linkLabel: 'Open in Google Maps',
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    lines: ['080061 80090'],
    link: 'tel:08006180090',
    linkLabel: 'Free Call now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['brotherinterior4@gmail.com'],
    link: 'mailto:brotherinterior4@gmail.com',
    linkLabel: 'Email us now',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Sat: 8:00 AM – 8:00 PM', 'Sunday: By Appointment'],
    link: null,
    linkLabel: null,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  show:   { opacity: 1, x: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  show:   { opacity: 1, x: 0 },
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open WhatsApp with pre-filled message
    const waURL = buildWhatsAppURL(formData)
    window.open(waURL, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 4000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-background border text-foreground placeholder-muted-foreground/50
     focus:outline-none transition-all duration-300 text-sm
     ${focused === field ? 'border-accent shadow-[0_0_0_3px_hsl(var(--accent)/0.15)]' : 'border-border hover:border-foreground/30'}`

  return (
    <section
      className="py-24 px-4 sm:px-8 overflow-hidden"
      aria-label="Contact Brother Interior — False Ceiling & Home Interior Contractor Ghaziabad"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          className="mb-20 space-y-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.11 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs tracking-widest text-muted-foreground uppercase">
              Contact · Ghaziabad · Delhi · Noida · Gurgaon
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="text-5xl sm:text-6xl leading-tight text-foreground"
          >
            Get In Touch
          </motion.h1>

          {/* SEO sub-heading */}
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="text-base sm:text-lg text-accent font-medium tracking-wide"
          >
            Book a Free Site Visit — False Ceiling &amp; Home Interior Contractor in Ghaziabad
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Ready to transform your space with a{' '}
            <strong className="text-foreground/80">false ceiling</strong>,{' '}
            <strong className="text-foreground/80">modular kitchen</strong>,{' '}
            <strong className="text-foreground/80">wardrobe</strong> or complete home renovation?
            Contact Brother Interior for a free consultation — serving Indirapuram, Vasundhara,
            Raj Nagar, Noida &amp; all of Delhi NCR.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20 items-start">

          {/* ── Contact Info ── */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeLeft}
                  transition={{ duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 group"
                >
                  {/* Icon bubble */}
                  <div className="flex-shrink-0 mt-1">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
                    >
                      <Icon className="text-accent" size={18} />
                    </motion.div>
                  </div>

                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-base mb-1">
                      {item.title}
                    </h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                    {item.link && item.linkLabel && (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline underline-offset-2 mt-1.5 transition-colors"
                      >
                        {item.linkLabel}
                        {item.link.startsWith('http') && <ArrowUpRight size={11} />}
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}

            {/* Trust micro-badge */}
            <motion.div
              variants={fadeLeft}
              transition={{ duration: 0.5 }}
              className="mt-2 pt-6 border-t border-border space-y-2"
            >
              {['5.0 ★ — 39 Google Reviews', 'Free Site Visit — Pan NCR'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 size={13} className="text-accent flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            className="lg:col-span-2 bg-secondary border border-border p-8 sm:p-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeRight}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center"
                  >
                    <CheckCircle2 size={32} className="text-accent" />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thank you! Our team will call you back shortly to schedule your free site visit.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-widest uppercase">
                        Full Name
                      </label>
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} required
                        onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                        className={inputClass('name')} placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                    >
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-widest uppercase">
                        Email
                      </label>
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} required
                        onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                        className={inputClass('email')} placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-widest uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel" name="phone" value={formData.phone}
                        onChange={handleChange} required
                        onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                        className={inputClass('phone')} placeholder="09876543210"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-widest uppercase">
                        Service Required
                      </label>
                      <select
                        name="service" value={formData.service} onChange={handleChange}
                        onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                        className={inputClass('service')}
                      >
                        <option value="">Select a service</option>
                        <option value="false-ceiling-pvc">PVC False Ceiling</option>
                        <option value="false-ceiling-gypsum">Gypsum False Ceiling</option>
                        <option value="false-ceiling-pop">POP False Ceiling</option>
                        <option value="false-ceiling-grid">Grid False Ceiling</option>
                        <option value="modular-kitchen">Modular Kitchen</option>
                        <option value="wardrobe">Wardrobe / Almirah</option>
                        <option value="wooden-flooring">Wooden Flooring</option>
                        <option value="pvc-wall-panel">PVC Wall Panel</option>
                        <option value="partition">Gypsum Board Partition</option>
                        <option value="steel-work">Steel / SS Work</option>
                        <option value="complete-interior">Complete Home Interior</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-xs font-semibold text-foreground mb-2 tracking-widest uppercase">
                      Project Details
                    </label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                      className={`${inputClass('message')} min-h-32 resize-none`}
                      placeholder="Tell us about your project — location, room size, budget..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-[#25D366] text-white text-xs tracking-[0.2em] font-semibold uppercase hover:bg-[#1ebe5d] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle size={16} />
                      Send on WhatsApp
                      <ArrowUpRight size={14} />
                    </motion.button>
                    <p className="text-center text-[10px] text-muted-foreground mt-3 tracking-wide">
                      Opens WhatsApp · Free consultation · No commitment · Pan Delhi NCR
                    </p>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Google Maps embed ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border border-border overflow-hidden"
        >
          {/* Map header bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-secondary border-b border-border">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-accent" />
              <div>
                <p className="text-sm font-semibold text-foreground">Brother Interior</p>
                <p className="text-xs text-muted-foreground">RC 60/2, Lok Priya Vihar, Khora Colony, Ghaziabad — 201020</p>
              </div>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-foreground/20 text-xs tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Open Maps <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Embedded map */}
          <div className="relative h-80 sm:h-96 w-full">
            <iframe
              title="Brother Interior location — Khora Colony, Ghaziabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3689!3d28.6448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzQxLjMiTiA3N8KwMjInMDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* Overlay CTA on map */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-4 py-2.5 bg-background/90 backdrop-blur-sm border border-border text-xs font-semibold tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-lg"
            >
              <MapPin size={12} className="text-accent" />
              Get Directions
              <ArrowUpRight size={11} />
            </a>
          </div>

          {/* SEO address footer */}
          <div className="px-6 py-4 bg-secondary/60 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Brother Interior</strong> (ब्रदर इंटीरियर) —
              False Ceiling &amp; Home Interior Contractor in Ghaziabad. Serving{' '}
              <strong className="text-foreground/70">Indirapuram</strong>,{' '}
              <strong className="text-foreground/70">Vasundhara</strong>,{' '}
              <strong className="text-foreground/70">Raj Nagar</strong>,{' '}
              <strong className="text-foreground/70">Khora Colony</strong>,{' '}
              <strong className="text-foreground/70">Noida</strong>,{' '}
              <strong className="text-foreground/70">Delhi</strong> &amp;{' '}
              <strong className="text-foreground/70">Gurgaon</strong>.{' '}
              📞{' '}
              <a href="tel:08006180090" className="text-foreground hover:text-accent transition-colors">
                080061 80090
              </a>
              {' '}·{' '}
              <a
                href="https://brotherinterior.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                brotherinterior.com
              </a>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}