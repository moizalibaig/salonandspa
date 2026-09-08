import { motion } from "framer-motion";
import { Scissors, Sparkles, Leaf, Hand, Crown, Wand2, User, Clock } from "lucide-react";
import { SERVICES, waLink } from "../data";

const ICON_MAP = {
  scissors: Scissors,
  sparkles: Sparkles,
  leaf: Leaf,
  hand: Hand,
  crown: Crown,
  wand: Wand2,
  user: User,
};

function formatPKR(amount) {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}

export default function Services() {
  return (
    <section id="services" className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-600">What We Offer</span>
          <h2 className="font-serif text-3xl font-light leading-tight text-rosewood-800 md:text-4xl lg:text-5xl">
            Services crafted for every kind of glow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-taupe-600">
            From everyday grooming to full bridal transformations — explore our full menu.
            All prices are starting rates in PKR; final pricing may vary based on consultation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((cat, catIdx) => {
            const Icon = ICON_MAP[cat.icon] || Sparkles;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (catIdx % 3) * 0.1 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-rosewood-100 bg-white/70 shadow-sm"
              >
                <div className="flex items-center gap-3 border-b border-rosewood-100 px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rosewood-50">
                    <Icon className="h-5 w-5 text-rosewood-600" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-rosewood-800">{cat.category}</h3>
                </div>

                <ul className="flex-1 divide-y divide-rosewood-50">
                  {cat.items.map((item) => (
                    <li key={item.name} className="group px-5 py-3.5 transition-colors hover:bg-cream-100/60">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-charcoal-800">{item.name}</h4>
                          <p className="mt-0.5 text-xs leading-relaxed text-taupe-500">{item.desc}</p>
                          <div className="mt-1.5 flex items-center gap-1 text-xs text-taupe-400">
                            <Clock className="h-3 w-3" />
                            {item.duration}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-taupe-400">from</span>
                          <p className="text-sm font-semibold text-rosewood-600">{formatPKR(item.price)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-rosewood-100 px-5 py-3">
                  <a
                    href={waLink(`Hi! I'm interested in ${cat.category} services at Aura Salon & Spa. Can you tell me more?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-rosewood-600 transition-colors hover:text-rosewood-800"
                  >
                    Book {cat.category} on WhatsApp →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
