'use client'

import Loader from '@/components/loader';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/navigation'
import SlidingWindowHero from '@/components/sliding-window-hero'
import IdentitySection from '@/components/identity-section'
import ServiceShowcase from '@/components/service-showcase'
import ByTheNumbers from '@/components/by-the-numbers'
import ProjectsGalleryHome from '@/components/project-preview-home';
import InstaReels from'@/components/insta-reels'
import LuxuryTestimonials from '@/components/luxury-testimonials'
import VisionarySection from '@/components/visionary-section'
import DesignFaq from '@/components/design-faq'
import WhatsAppButton from '@/components/whatsapp-button'
import Footer from '@/components/footer'
import { useState,useEffect } from 'react';

export default function Home() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (

    <div className="min-h-screen bg- overflow-x-hidden">

      <Navigation />
      <SlidingWindowHero />
      <ByTheNumbers />
      <ProjectsGalleryHome />
      <IdentitySection />
      <InstaReels />
      <ServiceShowcase />
      <LuxuryTestimonials />
      <VisionarySection />
      <DesignFaq />
      <WhatsAppButton />
      <Footer />
      
    </div>

    )}
    </AnimatePresence>
  )
}
