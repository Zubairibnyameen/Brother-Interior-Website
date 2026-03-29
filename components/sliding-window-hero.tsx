import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SLIDES, PREVIEW_PROPERTIES } from '../constants';
 
const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
 
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);
 
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);
 
  // Swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? nextSlide() : prevSlide();
    setTouchStart(null);
  };
 
  const currentSlide = SLIDES[currentIndex];
 
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 1000 : -1000, opacity: 0 }),
  };
 
  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: '100svh' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
 
      {/* Slide Content */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background image — full-bleed on mobile, centered box on desktop */}
          <div
            className={[
              'relative overflow-hidden group',
              isMobile
                ? 'absolute inset-0 w-full h-full'
                : 'w-[50%] h-[70%] z-10',
            ].join(' ')}
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="w-full h-full object-cover brightness-75 grayscale-[30%] transition-all duration-700 group-hover:scale-105"
            />
            {/* Mobile overlay gradient for readability */}
            {isMobile && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
            )}
            {/* Residence label — hidden on mobile (shown in bottom section instead) */}
            <div className="hidden md:block absolute bottom-10 left-10 text-white z-20">
              <span className="text-[10px] tracking-widest opacity-60 uppercase">Residence</span>
              <h3 className="text-xl font-light tracking-wide mt-2">
                {currentSlide.title} {currentSlide.subtitle}
              </h3>
            </div>
          </div>
 
          {/* Large typography overlay — scaled for screen size */}
          <div
            className={[
              'absolute inset-0 z-20 flex flex-col justify-center pointer-events-none px-5 md:px-12',
              isMobile ? 'pt-20 pb-0' : '',
            ].join(' ')}
          >
            <div className="flex flex-col items-start w-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[18vw] md:text-[12vw] leading-none font-bold text-white tracking-tighter"
              >
                {currentSlide.title}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-[18vw] md:text-[12vw] leading-none font-bold text-white self-end tracking-tighter mt-[-4vw]"
              >
                {currentSlide.subtitle}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
 
      {/* ── MOBILE BOTTOM PANEL ── */}
      {isMobile && (
        <div className="absolute bottom-0 left-0 right-0 z-30 px-5 pb-8 pt-4">
          {/* Tagline */}
          <motion.p
            key={`tagline-m-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 text-sm font-light leading-relaxed mb-4"
          >
            {currentSlide.tagline}
          </motion.p>
 
          {/* Nav + progress row */}
          <div className="flex items-center justify-between">
            {/* Progress dots */}
            <div className="flex gap-3">
              {SLIDES.map((_, i) => (
                <div
                  key={i}
                  className={`h-[1px] w-8 transition-all duration-500 ${
                    i === currentIndex ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white active:bg-white active:text-black transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white active:bg-white active:text-black transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
 
          {/* Residence + description */}
          <div className="mt-3">
            <span className="text-[9px] tracking-widest opacity-50 text-white uppercase">Residence</span>
            <p className="text-white/50 text-[9px] leading-relaxed uppercase tracking-widest mt-1 line-clamp-2">
              {currentSlide.description}
            </p>
          </div>
        </div>
      )}
 
      {/* ── DESKTOP LAYOUT (unchanged) ── */}
      {!isMobile && (
        <>
          {/* Left: tagline + previews */}
          <div className="absolute left-12 bottom-24 z-30 max-w-sm">
            <motion.div
              key={`tagline-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-white/80 text-lg font-light leading-relaxed mb-4">
                {currentSlide.tagline}
              </p>
            </motion.div>
 
            <div className="flex gap-4 mt-8">
              {PREVIEW_PROPERTIES.map((prop, i) => (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="relative w-24 h-32 overflow-hidden border border-white/10 group cursor-pointer"
                >
                  <img
                    src={prop.imageUrl}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    alt=""
                  />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[6px] text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {prop.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
 
          {/* Right: description + arrows */}
          <div className="absolute right-12 bottom-24 z-30 text-right max-w-xs">
            <div className="flex justify-end gap-6 mt-12">
              <button
                onClick={prevSlide}
                aria-label="Previous"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
 
          {/* Progress bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className={`h-[1px] w-12 transition-all duration-500 ${
                  i === currentIndex ? 'bg-white' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
 
export default HeroSlider;