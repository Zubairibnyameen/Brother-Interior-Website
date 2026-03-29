"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Linkedin,Facebook, Twitter, Youtube, } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* ── CTA ── */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex items-center justify-center">
          <a
            href="/contact"
            className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground text-foreground text-xs sm:text-sm tracking-widest uppercase transition-all duration-500 ease-out"
          >
            {/* Background fill animation */}
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>

            {/* Glow effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md bg-foreground/20"></span>

            {/* Text */}
            <span className="relative z-10 group-hover:text-background transition-colors duration-300">
              Get Free Consultation Now!
            </span>
          </a>
        </div>

        {/* ── SEO Rich Text Footer ── */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 pt-10 border-t border-foreground/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* About */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-base font-semibold text-foreground tracking-wide">
              Best False Ceiling Contractor in Ghaziabad &amp; Delhi NCR
            </h2>
            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
              Brother Interior (ब्रदर इंटीरियर) is a Ghaziabad-based interior
              design and false ceiling contractor serving Khora Colony,
              Indirapuram, Vasundhara, Rajnagar, Noida, Greater Noida, New Delhi
              and Gurgaon. We specialise in PVC false ceiling, gypsum false
              ceiling, POP false ceiling, grid false ceiling, modular kitchen
              installation, custom almirah &amp; wardrobe, wooden crockery
              units, wooden flooring, PVC wall panels, gypsum board partitions
              and steel / SS door work — all at the lowest prices without
              compromising on finish quality.
            </p>
            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
              Our team has completed hundreds of residential and commercial
              projects across Delhi NCR. Whether you need a complete home
              renovation or a single false ceiling room, we bring the same
              dedication to every job. Call us at{" "}
              <a
                href="tel:08006180090"
                className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
              >
                080061 80090
              </a>{" "}
              or visit{" "}
              <a
                href="https://brotherinterior.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
              >
                brotherinterior.com
              </a>
              .
            </p>
          </div>

          {/* Contact / Address */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-foreground tracking-wide">
              Contact Us
            </h3>
            <address className="not-italic space-y-2 text-xs text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground">Brother Interior</p>
              <p>
                RC 60/2, Lok Priya Vihar,
                <br />
                Khora Colony, Ghaziabad,
                <br />
                Uttar Pradesh — 201020
              </p>
              <p>
                <a
                  href="tel:08006180090"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  080061 80090
                </a>
              </p>
              <p>
                <a
                  href="https://brotherinterior.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  brotherinterior.com
                </a>
              </p>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground/60 pt-1">
                Mon – Sat &nbsp;·&nbsp; 8:00 am – 8:00 pm
              </p>
            </address>

            {/* Keyword tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "False Ceiling Ghaziabad",
                "Modular Kitchen",
                "PVC Ceiling",
                "Gypsum Ceiling",
                "Wardrobe",
                "Wooden Flooring",
                "PVC Wall Panel",
                "Interior Contractor Delhi",
                "Home Renovation Noida",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[9px] tracking-widest uppercase border border-foreground/15 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="space-y-6">
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
            <p className="text-foreground/70 leading-relaxed text-sm">
              Premium luxury interior design and execution. Transforming spaces
              into works of art with Italian marble, bespoke craftsmanship, and
              sophisticated design.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/brotherinterior4/"
                className="p-2 border border-foreground/30 hover:border-accent hover:text-accent transition-all"
              >
                <Instagram size={18} />
              </a>

              {/* LinkedIn
              <a
                href="#"
                className="p-2 border border-foreground/30 hover:border-accent hover:text-accent transition-all"
              >
                <Linkedin size={18} />
              </a> */}

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61554738280210&mibextid=ZbWKwL"
                className="p-2 border border-foreground/30 hover:border-accent hover:text-accent transition-all"
              >
                <Facebook size={18} />
              </a>

              {/* Twitter / X */}
              {/* <a
                href="#"
                className="p-2 border border-foreground/30 hover:border-accent hover:text-accent transition-all"
              >
                <Twitter size={18} />
              </a> */}

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCcyNsBah6feOwuiNCDQJV3g"
                className="p-2 border border-foreground/30 hover:border-accent hover:text-accent transition-all"
              >
                <Youtube size={18} />
              </a>

              {/* Call Button (extra useful for business 🔥) */}
              <a
                href="tel:08006180090"
                className="p-2 border border-foreground/30 hover:border-accent hover:text-accent transition-all"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-foreground">
              Navigate
            </h4>
            <ul className="space-y-3 text-foreground/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-accent transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-accent transition-colors text-sm"
                >
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-foreground">
              Services
            </h4>

            <ul className="space-y-3 text-foreground/70">
              <li>
                <Link
                  href="/portfolio?category=modular-kitchen"
                  className="hover:text-accent transition-colors text-sm"
                >
                  Modular Kitchens
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio?category=false-ceiling"
                  className="hover:text-accent transition-colors text-sm"
                >
                  False Ceilings
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio?category=wardrobe"
                  className="hover:text-accent transition-colors text-sm"
                >
                  Custom Wardrobes
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio?category=wall-panel"
                  className="hover:text-accent transition-colors text-sm"
                >
                  TV Panels & Storage
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-foreground">
              Contact
            </h4>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-0.5 text-accent"
                />
                <span className="text-sm">
                  Ghaziabad, Indirapuram, Vasundhara & surrounding areas
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a
                  href="tel:+918006180090"
                  className="hover:text-accent transition-colors text-sm"
                >
                  +91 8006180090
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a
                  href="mailto:brotherinterior4@gmail.com"
                  className="hover:text-accent transition-colors text-sm"
                >
                  brotherinterior4@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col gap-4 sm:gap-6 text-center sm:text-left">
            <p className="text-foreground/60 text-xs tracking-wide">
              © {new Date().getFullYear()} Brother Interior. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-background/60 text-xs">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
