import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { PLANS, waLink } from "../data";

function formatPKR(amount) {
  return amount.toLocaleString("en-PK");
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-rosewood-800 py-20 md:py-28">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-300 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-rosewood-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-300">Membership Plans</span>
          <h2 className="font-serif text-3xl font-light leading-tight text-cream-50 md:text-4xl lg:text-5xl">
            Glow every month with Aura memberships
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream-100/70">
            Lock in your beauty routine with curated monthly plans. Cancel anytime — no lock-in,
            no hassle. All plans are billed monthly in PKR.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-3xl p-6 md:p-8 ${
                plan.popular
                  ? "bg-cream-50 shadow-2xl shadow-rosewood-900/30 md:-mt-4 md:mb-4"
                  : "bg-rosewood-700/40 border border-rosewood-600/30 backdrop-blur-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold text-charcoal-900">
                  <Star className="h-3 w-3 fill-charcoal-900" />
                  {plan.tagline}
                </div>
              )}

              <div className="text-center">
                <h3 className={`font-serif text-2xl font-medium ${plan.popular ? "text-rosewood-700" : "text-cream-50"}`}>
                  {plan.name}
                </h3>
                {!plan.popular && (
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-gold-300/70">{plan.tagline}</p>
                )}
                <div className="mt-5">
                  <span className={`font-serif text-4xl font-medium ${plan.popular ? "text-rosewood-700" : "text-cream-50"}`}>
                    {formatPKR(plan.price)}
                  </span>
                  <span className={`ml-1 text-sm ${plan.popular ? "text-taupe-500" : "text-cream-100/60"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.popular ? "text-rosewood-500" : "text-gold-300"}`} />
                    <span className={`text-sm leading-relaxed ${plan.popular ? "text-taupe-600" : "text-cream-100/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`Hi! I'm interested in the ${plan.name} (${plan.tagline}) membership at ${"PKR " + formatPKR(plan.price)}/month. Can you tell me more?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-rosewood-600 text-cream-50 hover:bg-rosewood-700 hover:shadow-lg"
                    : "bg-cream-50 text-rosewood-700 hover:bg-cream-100 hover:shadow-lg"
                }`}
              >
                Check Availability on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-cream-100/50">
          All plans are monthly subscriptions in PKR. No long-term contract — cancel anytime with 7 days' notice.
        </p>
      </div>
    </section>
  );
}
