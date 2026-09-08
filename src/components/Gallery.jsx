import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { GALLERY } from "../data";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(() => setLightbox((p) => (p === null ? p : (p + 1) % GALLERY.length)), []);
  const prev = useCallback(() => setLightbox((p) => (p === null ? p : (p - 1 + GALLERY.length) % GALLERY.length)), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, next, prev]);

  const spanClass = {
    wide: "sm:col-span-2",
    tall: "sm:row-span-2",
    normal: "",
  };

  return (
    <section id="gallery" className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-600">Gallery</span>
          <h2 className="font-serif text-3xl font-light leading-tight text-rosewood-800 md:text-4xl lg:text-5xl">
            Step inside the Aura experience
          </h2>
          <p className="mt-4 text-base leading-relaxed text-taupe-600">
            From our calming interiors to bridal transformations and treatment close-ups —
            a glimpse of what awaits you.
          </p>
        </motion.div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {GALLERY.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-xl ${spanClass[img.span] || ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 transition-colors duration-300 group-hover:bg-charcoal-900/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-6 w-6 text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal-900/90 p-4 backdrop-blur-sm"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-cream-50/10 p-2.5 text-cream-50 transition-colors hover:bg-cream-50/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 rounded-full bg-cream-50/10 p-2.5 text-cream-50 transition-colors hover:bg-cream-50/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 rounded-full bg-cream-50/10 p-2.5 text-cream-50 transition-colors hover:bg-cream-50/20"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={lightbox}
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
