import { Sparkles, Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, SERVICES, waLink } from "../data";

const TIKTOK_ICON = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100/70">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-cream-50">
              <Sparkles className="h-6 w-6 text-gold-400" />
              <span className="font-serif text-xl font-semibold">{SITE.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Karachi's premier salon & spa since {SITE.established}. Where certified craft meets
              calming luxury — in the heart of DHA Phase 6.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href={SITE.social.instagram} label="Instagram"><Instagram className="h-4 w-4" /></SocialLink>
              <SocialLink href={SITE.social.facebook} label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
              <SocialLink href={SITE.social.tiktok} label="TikTok"><TIKTOK_ICON className="h-4 w-4" /></SocialLink>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream-100/90">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Pricing Plans", href: "#pricing" },
                { label: "Gallery", href: "#gallery" },
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#team" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream-100/90">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.category}>
                  <a href="#services" className="transition-colors hover:text-gold-300">{s.category}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream-100/90">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={SITE.phoneLink} className="hover:text-gold-300">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-300">{SITE.email}</a>
              </li>
            </ul>
            <a
              href={waLink("Hi! I'd like to book an appointment at Aura Salon & Spa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#1da851]"
            >
              WhatsApp: {SITE.whatsappDisplay}
            </a>

            <div className="mt-5">
              <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-cream-100/60">
                <Clock className="h-3.5 w-3.5 text-gold-400" />
                Working Hours
              </div>
              <ul className="space-y-0.5 text-xs">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span className="text-cream-100/50">{h.day}</span>
                    <span className="text-cream-100/70">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-cream-100/40 md:flex-row md:px-8">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Made with care in Karachi, Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/60 transition-all hover:border-gold-400/50 hover:text-gold-300"
    >
      {children}
    </a>
  );
}
