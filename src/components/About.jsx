import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Sparkles, Award } from "lucide-react";
import { SITE, ABOUT_IMAGE, HYGIENE_POINTS, waLink } from "../data";

const ICONS = [ShieldCheck, Leaf, Sparkles, Award];

export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={ABOUT_IMAGE}
                alt="Calm, elegant beauty salon interior with minimalist decor"
                className="h-[400px] w-full object-cover md:h-[520px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-rosewood-600 px-6 py-5 text-center shadow-xl md:block">
              <span className="block font-serif text-3xl font-medium text-cream-50">
                {new Date().getFullYear() - SITE.established}+
              </span>
              <span className="text-xs uppercase tracking-wider text-cream-100/80">Years of Trust</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-600">Our Story</span>
            <h2 className="font-serif text-3xl font-light leading-tight text-rosewood-800 md:text-4xl lg:text-5xl">
              A sanctuary built on craft, care & cleanliness.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-taupe-600">
              Aura Salon & Spa opened its doors in {SITE.established} in the heart of DHA Phase 6,
              born from Ayesha Khan's vision of a salon that feels less like a clinic and more like
              a retreat. Over a decade later, we've grown into one of Karachi's most trusted names
              for hair, skin, bridal, and wellness — but the philosophy hasn't changed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-taupe-600">
              Every visit is designed around you: warm welcomes, unhurried appointments, premium
              products, and therapists who genuinely listen. We believe beauty isn't just about the
              result — it's about how you feel in the chair.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {HYGIENE_POINTS.map((point, i) => {
                const Icon = ICONS[i];
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-xl border border-rosewood-100 bg-white/60 p-4"
                  >
                    <Icon className="mb-2 h-5 w-5 text-rosewood-500" />
                    <h4 className="text-sm font-semibold text-rosewood-700">{point.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-taupe-500">{point.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <a
              href={waLink("Hi! I'd like to learn more about Aura Salon & Spa's hygiene standards and services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-rosewood-300 px-5 py-2.5 text-sm font-medium text-rosewood-700 transition-colors hover:bg-rosewood-50"
            >
              Ask us about our hygiene standards
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
