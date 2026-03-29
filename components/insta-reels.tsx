import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, X } from "lucide-react";

interface Reel {
  id: string;
  title: string;
  thumbnail: string;
  year: string;
  duration: string;
  embedUrl: string;
}

const REELS: Reel[] = [
  {
    id: "1",
    title: "False Ceiling Design 1",
    thumbnail: "/gallery/falseCeiling1.jpg",
    year: "2025",
    duration: "0:30",
    embedUrl: "https://www.instagram.com/reel/DU49hU-kvfz/embed/",
  },
  {
    id: "2",
    title: "False Ceiling Design 2",
    thumbnail: "/gallery/falseCeiling2.jpg",
    year: "2025",
    duration: "0:30",
    embedUrl: "https://www.instagram.com/reel/DU3HaXuEtTq/embed/",
  },
  {
    id: "3",
    title: "False Ceiling Design 3",
    thumbnail: "/gallery/falseCeiling3.jpg",
    year: "2025",
    duration: "0:30",
    embedUrl: "https://www.instagram.com/reel/DU3GM8JElh4/embed/",
  },
  {
    id: "4",
    title: "False Ceiling Design 4",
    thumbnail: "/gallery/falseCeiling4.jpg",
    year: "2024",
    duration: "0:30",
    embedUrl: "https://www.instagram.com/reel/DH44SKnJ4in/embed/",
  },
  {
    id: "5",
    title: "Modular Kitchen Design 1",
    thumbnail: "/gallery/modularKitchen1.jpg",
    year: "2024",
    duration: "0:30",
    embedUrl: "https://www.instagram.com/reel/DDKV-kuTMAG/embed/",
  },
  {
    id: "6",
    title: "Modular Kitchen Design 2",
    thumbnail: "/gallery/modularKitchen2.jpg",
    year: "2024",
    duration: "0:30",
    embedUrl: "https://www.instagram.com/reel/DDHJqdEp4Fa/embed/",
  },
  {
    id: "7",
    title: "PVC Wall Panel Design 1",
    thumbnail: "/gallery/pvcWallPanel1.jpg",
    year: "2024",
    duration: "0:30",
    embedUrl: "https://www.instagram.com/reel/DDHJSk1pMD7/embed/",
  },
  {
    id: "8",
    title: "PVC Wall Panel Design 2",
    thumbnail: "/gallery/pvcWallPanel2.jpg",
    year: "2024",
    duration: "0:30",
    embedUrl: "https://www.instagram.com/reel/DCwlbIlzFsZ/embed/",
  }
];

export default function ReelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeEmbed, setActiveEmbed] = useState<Reel | null>(null);
  const [embedLoaded, setEmbedLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REELS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REELS.length) % REELS.length);
  }, []);

  // Auto-advance only when modal is closed
  useEffect(() => {
    if (activeEmbed) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, activeEmbed]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeEmbed ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeEmbed]);

  const openEmbed = (reel: Reel) => {
    setEmbedLoaded(false);
    setActiveEmbed(reel);
  };

  const closeEmbed = () => {
    setActiveEmbed(null);
    setEmbedLoaded(false);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absDiff = Math.abs(diff);

    let effectiveDiff = diff;
    if (absDiff > REELS.length / 2) {
      effectiveDiff = diff > 0 ? diff - REELS.length : diff + REELS.length;
    }
    const effectiveAbsDiff = Math.abs(effectiveDiff);

    let spacing = 190;
    let depthStep = 200;
    let rotateStep = 25;
    let scaleStep = 0.14;
    let opacityStep = 0.28;

    if (isMobile) {
      spacing = 115;
      depthStep = 120;
      rotateStep = 12;
      scaleStep = 0.22;
      opacityStep = 0.45;
    } else if (isTablet) {
      spacing = 150;
      depthStep = 160;
      rotateStep = 18;
      scaleStep = 0.17;
      opacityStep = 0.35;
    }

    return {
      x: effectiveDiff * spacing,
      z: -effectiveAbsDiff * depthStep,
      rotateY: effectiveDiff * -rotateStep,
      scale: Math.max(0.1, 1 - effectiveAbsDiff * scaleStep),
      opacity: Math.max(0, 1 - effectiveAbsDiff * opacityStep),
      zIndex: 10 - effectiveAbsDiff,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    };
  };

  const cardW = isMobile ? 160 : isTablet ? 220 : 280;
  const cardH = isMobile ? 240 : isTablet ? 320 : 400;
  const stageH = isMobile ? 360 : isTablet ? 480 : 580;

  // Show at most 5 dots on mobile, all on larger screens
  const visibleDots = () => {
    const total = REELS.length;
    const max = isMobile ? 5 : total;
    if (total <= max) return REELS.map((_, i) => i);
    const half = Math.floor(max / 2);
    let start = Math.max(0, currentIndex - half);
    let end = start + max - 1;
    if (end >= total) { end = total - 1; start = Math.max(0, end - max + 1); }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <main
      className="min-h-screen bg-black text-white"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* ── HEADER ── */}
      <header className="pt-12 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-12 px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          Instagram Reels
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-3 sm:mb-4 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent leading-none">
          BROTHER INTERIOR
        </h1>
        <p className="max-w-xl mx-auto text-white/40 text-xs sm:text-sm md:text-lg font-medium leading-relaxed px-4">
          Explore our latest interior design transformations through immersive
          short-form content.
        </p>
      </header>

      {/* ── CAROUSEL STAGE ── */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: stageH,
          perspective: "1000px",
          background: "linear-gradient(to bottom, rgba(120,0,0,0.15), transparent)",
        }}
      >
        {/* Instagram handle badge */}
        <a
          href="https://www.instagram.com/brotherinterior4/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
        >
          <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 group-hover:text-white" />
          <span className="hidden sm:inline text-white/70 text-[10px] sm:text-xs font-medium group-hover:text-white">
            @brotherinterior4
          </span>
        </a>

        {/* Cards */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {REELS.map((reel, index) => {
            const style = getCardStyle(index);
            const isActive = index === currentIndex;

            return (
              <motion.div
                key={reel.id}
                initial={false}
                animate={style}
                className="absolute rounded-2xl overflow-hidden cursor-pointer group"
                style={{ width: cardW, height: cardH, transformStyle: "preserve-3d" }}
                onClick={() => {
                  if (isActive) openEmbed(reel);
                  else setCurrentIndex(index);
                }}
              >
                <div className="relative w-full h-full bg-zinc-900 border border-white/10 shadow-2xl">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 sm:p-4 md:p-6 flex flex-col justify-between">
                    {/* Instagram icon top-left */}
                    <div className="flex justify-between items-start">
                      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-1 sm:p-1.5 rounded-lg shadow-lg">
                        <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>

                    {/* Title & meta — visible only on active card */}
                    <div
                      className="transition-all duration-500"
                      style={{
                        transform: isActive ? "translateY(0)" : "translateY(12px)",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <h3 className="text-white font-bold text-sm sm:text-base md:text-xl leading-tight mb-1">
                        {reel.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60 text-[10px] sm:text-xs font-medium">
                        <span>{reel.year}</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        <span>{reel.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Play button — active card only */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 pointer-events-none"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-200">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 text-white fill-white ml-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest">
                      Tap to play
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Prev / Next + Dots */}
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-6 z-20">
          <button
            onClick={prev}
            aria-label="Previous"
            className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/50 group-hover:text-white transition-colors" />
          </button>

          <div className="flex gap-1.5 sm:gap-2 items-center">
            {visibleDots().map((i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to reel ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  height: 4,
                  width: i === currentIndex ? (isMobile ? 20 : 28) : isMobile ? 6 : 8,
                  background:
                    i === currentIndex ? "rgb(220,38,38)" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="p-2 sm:p-2.5 md:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/50 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* ── FOOTER CTA ── */}
      <footer className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-center">
        <p className="text-white/20 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.2em] mb-5 sm:mb-8">
          Follow us for daily inspiration
        </p>
        <a
          href="https://www.instagram.com/brotherinterior4/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-black rounded-full text-sm sm:text-base font-bold hover:scale-105 transition-transform active:scale-95"
        >
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          VIEW ALL REELS
        </a>
      </footer>

      {/* ── EMBED MODAL ── */}
      <AnimatePresence>
        {activeEmbed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={closeEmbed}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeEmbed}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Loading spinner */}
              {!embedLoaded && (
                <div
                  className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                >
                  <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}

              {/* Instagram embed iframe */}
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950"
                style={{
                  width: isMobile ? "min(340px, calc(100vw - 32px))" : 400,
                  height: isMobile ? "min(680px, 85vh)" : "min(740px, 85vh)",
                }}
              >
                <iframe
                  src={activeEmbed.embedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  onLoad={() => setEmbedLoaded(true)}
                  style={{ display: "block", border: "none" }}
                  title={activeEmbed.title}
                />
              </div>

              <p className="mt-3 text-white/30 text-xs text-center">
                Tap outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}