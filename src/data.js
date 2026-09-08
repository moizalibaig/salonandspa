export const SITE = {
  name: "Aura Salon & Spa",
  nameUrdu: "Khush Aamdeed",
  tagline: "Karachi's Premier Salon & Spa",
  phone: "+92 339 8867672",
  phoneLink: "tel:+923398867672",
  whatsappNumber: "923398867672",
  whatsappDisplay: "+92 339 8867672",
  email: "hello@aurasalonspa.pk",
  address: "Shop 14, Bukhari Commercial Lane 5, DHA Phase 6, Karachi",
  addressShort: "DHA Phase 6, Karachi",
  established: 2014,
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.2!2d67.06!3d24.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ5JzEyLjAiTiA2N8KwMDMnMzYuMCJF!5e0!3m2!1sen!2s!4v1700000000000",
  mapLink: "https://www.google.com/maps/search/?api=1&query=DHA+Phase+6+Karachi",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
  hours: [
    { day: "Monday – Thursday", time: "10:00 AM – 9:00 PM" },
    { day: "Friday", time: "2:00 PM – 9:30 PM" },
    { day: "Saturday", time: "10:00 AM – 10:00 PM" },
    { day: "Sunday", time: "11:00 AM – 7:00 PM" },
  ],
};

export function waLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const HERO_IMAGE = "https://images.pexels.com/photos/7750120/pexels-photo-7750120.jpeg?auto=compress&cs=tinysrgb&w=1920";
export const ABOUT_IMAGE = "https://images.pexels.com/photos/33412989/pexels-photo-33412989.png?auto=compress&cs=tinysrgb&w=1200";

export const TRUST_STATS = [
  { label: "Years in Karachi", value: "10+" },
  { label: "Happy Clients", value: "15,000+" },
  { label: "Certified Therapists", value: "12" },
  { label: "Bridal Makeovers", value: "800+" },
];

export const HYGIENE_POINTS = [
  {
    title: "Sanitized Tools",
    text: "Every tool is sterilized in a UV chamber before each client. Metal tools are also autoclaved at 134°C.",
  },
  {
    title: "Single-Use Items",
    text: "Razors, nail files, buffers, and waxing spatulas are strictly single-use and disposed of after every service.",
  },
  {
    title: "Licensed Professionals",
    text: "Our stylists and therapists are certified from accredited beauty academies and carry valid licenses.",
  },
  {
    title: "Clean Linens",
    text: "Fresh, laundered towels and robes for every appointment. No exceptions.",
  },
];

export const SERVICES = [
  {
    category: "Hair",
    icon: "scissors",
    items: [
      { name: "Precision Hair Cut", desc: "Bespoke cut tailored to your face shape and hair texture.", duration: "45 min", price: 2500 },
      { name: "Global Hair Color", desc: "Full-head color using premium ammonia-free brands.", duration: "2 hrs", price: 8000 },
      { name: "Keratin Smoothening", desc: "Frizz-free, manageable hair that lasts up to 5 months.", duration: "3 hrs", price: 18000 },
      { name: "Bridal Hair Styling", desc: "Updos, curls and intricate styling for your big day.", duration: "90 min", price: 6000 },
      { name: "Hair Botox Treatment", desc: "Deep-conditioning treatment to restore shine and volume.", duration: "60 min", price: 6500 },
      { name: "Beard Trim & Shape", desc: "Sharp, sculpted beard line with hot towel finish.", duration: "20 min", price: 800 },
    ],
  },
  {
    category: "Skin & Facials",
    icon: "sparkles",
    items: [
      { name: "Signature Glow Facial", desc: "Cleanse, exfoliate, and mask for an instant radiant glow.", duration: "60 min", price: 4500 },
      { name: "HydraFacial Treatment", desc: "Deep hydration and extraction for visibly clearer skin.", duration: "75 min", price: 9000 },
      { name: "Whitening & Brightening Facial", desc: "Targeted treatment for even-toned, luminous skin.", duration: "90 min", price: 7000 },
      { name: "Anti-Aging Facial", desc: "Collagen-boosting facial to firm and rejuvenate.", duration: "90 min", price: 8500 },
      { name: "Express Cleanup", desc: "Quick refresh — cleanse, steam, and mask.", duration: "30 min", price: 2000 },
      { name: "Acne Control Facial", desc: "Purifying facial with salicylic infusion for acne-prone skin.", duration: "75 min", price: 5500 },
    ],
  },
  {
    category: "Spa & Massage",
    icon: "leaf",
    items: [
      { name: "Aromatherapy Body Massage", desc: "Full-body relaxation with essential oils.", duration: "60 min", price: 5500 },
      { name: "Deep Tissue Massage", desc: "Targeted pressure to relieve chronic muscle tension.", duration: "75 min", price: 6500 },
      { name: "Hot Stone Therapy", desc: "Heated basalt stones melt away stress and stiffness.", duration: "90 min", price: 7500 },
      { name: "Foot Reflexology Spa", desc: "Pressure-point foot massage with warm soak and scrub.", duration: "45 min", price: 3500 },
      { name: "Couples Massage", desc: "Side-by-side aromatherapy massage for two.", duration: "60 min", price: 10000 },
    ],
  },
  {
    category: "Nails",
    icon: "hand",
    items: [
      { name: "Classic Manicure", desc: "Shape, cuticle care, buff, and polish.", duration: "40 min", price: 1500 },
      { name: "Gel Manicure", desc: "Long-lasting, chip-free gel polish in your shade.", duration: "50 min", price: 2500 },
      { name: "Spa Pedicure", desc: "Soak, scrub, callus removal, and massage.", duration: "60 min", price: 2500 },
      { name: "Nail Art (per nail)", desc: "Custom designs — chrome, foil, rhinestones, hand-painted.", duration: "15 min", price: 300 },
      { name: "Acrylic Extensions", desc: "Full-set acrylic extensions with gel top coat.", duration: "90 min", price: 5000 },
    ],
  },
  {
    category: "Bridal & Makeup",
    icon: "crown",
    items: [
      { name: "Bridal Trial", desc: "Pre-wedding makeup trial to finalize your look.", duration: "90 min", price: 8000 },
      { name: "Party Makeup", desc: "Glam makeup for parties, engagements, and events.", duration: "60 min", price: 4500 },
      { name: "Mehndi Package", desc: "Hair, makeup, draping, and floral jewelry styling.", duration: "2 hrs", price: 15000 },
      { name: "Nikkah Package", desc: "Soft glam makeup, hair styling, and dupatta draping.", duration: "2.5 hrs", price: 22000 },
      { name: "Barat Bridal Package", desc: "Full bridal: HD makeup, hair, drape, and touch-up kit.", duration: "3 hrs", price: 35000 },
      { name: "Walima Package", desc: "Elegant evening glam with hair and draping.", duration: "2.5 hrs", price: 25000 },
    ],
  },
  {
    category: "Waxing & Threading",
    icon: "wand",
    items: [
      { name: "Eyebrow Threading", desc: "Precise shaping with cotton thread.", duration: "15 min", price: 400 },
      { name: "Upper Lip & Chin", desc: "Quick, gentle threading for face.", duration: "10 min", price: 300 },
      { name: "Full Arms Wax", desc: "Roll-on warm wax with soothing after-care.", duration: "30 min", price: 1200 },
      { name: "Full Legs Wax", desc: "Smooth, even waxing with premium wax.", duration: "40 min", price: 1800 },
      { name: "Full Body Wax", desc: "Complete body waxing — arms, legs, underarms, back.", duration: "90 min", price: 5000 },
    ],
  },
  {
    category: "Men's Grooming",
    icon: "user",
    items: [
      { name: "Men's Haircut", desc: "Tailored cut with styling and wash.", duration: "40 min", price: 1500 },
      { name: "Men's Facial", desc: "Deep-clean facial designed for male skin.", duration: "60 min", price: 3500 },
      { name: "Men's Cleanup", desc: "Steam, exfoliation, and mask for fresh skin.", duration: "45 min", price: 2000 },
      { name: "Beard Design & Trim", desc: "Sculpted beard shape with razor line-up.", duration: "30 min", price: 1000 },
      { name: "Men's Manicure", desc: "Clean, buffed nails with neat cuticles.", duration: "30 min", price: 1200 },
    ],
  },
];

export const PLANS = [
  {
    name: "Glow",
    tagline: "Essentials",
    price: 4500,
    period: "per month",
    popular: false,
    features: [
      "1 facial per month",
      "1 manicure per month",
      "1 threading session per month",
      "10% off all other services",
      "Priority WhatsApp booking",
    ],
  },
  {
    name: "Radiance",
    tagline: "Most Popular",
    price: 9500,
    period: "per month",
    popular: true,
    features: [
      "2 facials per month",
      "1 hair cut & style per month",
      "1 manicure + pedicure per month",
      "1 body massage per month",
      "Unlimited threading",
      "15% off all other services",
    ],
  },
  {
    name: "Aura VIP",
    tagline: "Premium",
    price: 18000,
    period: "per month",
    popular: false,
    features: [
      "Unlimited facials",
      "2 hair services per month",
      "2 body massages per month",
      "Weekly mani-pedi",
      "1 complimentary bridal trial",
      "25% off all other services",
      "Free birthday spa day",
    ],
  },
];

export const GALLERY = [
  { src: "https://images.pexels.com/photos/27165072/pexels-photo-27165072.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Elegant salon interior with warm lighting", span: "wide" },
  { src: "https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Facial treatment in progress", span: "tall" },
  { src: "https://images.pexels.com/photos/30497752/pexels-photo-30497752.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Bride in red with gold jewelry", span: "normal" },
  { src: "https://images.pexels.com/photos/38407786/pexels-photo-38407786.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Relaxing massage therapy", span: "normal" },
  { src: "https://images.pexels.com/photos/13068380/pexels-photo-13068380.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Modern nail salon station", span: "wide" },
  { src: "https://images.pexels.com/photos/6011782/pexels-photo-6011782.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Intricate bridal mehndi", span: "normal" },
  { src: "https://images.pexels.com/photos/8834098/pexels-photo-8834098.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Hair styling session", span: "normal" },
  { src: "https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=900", alt: "Spa candles and relaxation setup", span: "wide" },
  { src: "https://images.pexels.com/photos/35983900/pexels-photo-35983900.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Bridal makeup application", span: "normal" },
  { src: "https://images.pexels.com/photos/10123923/pexels-photo-10123923.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Artistic nail design", span: "normal" },
];

export const TEAM = [
  { name: "Ayesha Khan", role: "Founder & Master Stylist", specialty: "Bridal Hair & Color", experience: 14, image: "https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Sana Siddiqui", role: "Senior Makeup Artist", specialty: "Bridal & Party Makeup", experience: 9, image: "https://images.pexels.com/photos/7752818/pexels-photo-7752818.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Fatima Raza", role: "Lead Esthetician", specialty: "Facials & Skin Care", experience: 7, image: "https://images.pexels.com/photos/37601638/pexels-photo-37601638.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Zainab Malik", role: "Spa Therapist", specialty: "Aromatherapy & Deep Tissue", experience: 6, image: "https://images.pexels.com/photos/7515080/pexels-photo-7515080.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Hira Saleem", role: "Nail Technician", specialty: "Nail Art & Extensions", experience: 5, image: "https://images.pexels.com/photos/15116521/pexels-photo-15116521.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Bilal Ahmed", role: "Men's Grooming Expert", specialty: "Cuts & Beard Design", experience: 8, image: "https://images.pexels.com/photos/7750120/pexels-photo-7750120.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

export const TESTIMONIALS = [
  { name: "Mahnoor Sheikh", rating: 5, quote: "Got my bridal makeup done at Aura and I genuinely couldn't have asked for more. The HD makeup lasted through tears, dancing, and the entire barat. Absolutely worth every rupee.", area: "Bahria Town", initials: "MS" },
  { name: "Areeba Tariq", rating: 5, quote: "I've been going to Aura for over two years. The hygiene standards are visible — you can see them open sealed tools every time. My HydraFacial results last for weeks.", area: "Clifton", initials: "AT" },
  { name: "Saba Javed", rating: 5, quote: "The couples massage package was such a beautiful experience for our anniversary. The ambience is calm, the therapists are professional, and it felt like a mini retreat in Karachi.", area: "Gulshan", initials: "SJ" },
  { name: "Nimra Qureshi", rating: 5, quote: "I tried three salons before settling on Aura. Ayesha understands curly hair like no one else in the city. My keratin treatment has been life-changing.", area: "DHA Phase 4", initials: "NQ" },
  { name: "Hina Ansari", rating: 5, quote: "Booked the Radiance membership and it has saved me so much. Two facials, a haircut, and a massage every month — the value is incredible. WhatsApp booking is so convenient.", area: "PECHS", initials: "HA" },
  { name: "Fariya Chaudhry", rating: 5, quote: "Their nail art is the best in DHA. I bring inspiration photos and they always nail it (pun intended). Clean, hygienic, and the gel lasts 3+ weeks without chipping.", area: "DHA Phase 6", initials: "FC" },
];

export const FAQS = [
  {
    q: "Do you accept walk-ins or is it appointment only?",
    a: "We welcome both! Walk-ins are accommodated based on availability, but we strongly recommend booking ahead via WhatsApp to guarantee your preferred time and therapist, especially on weekends.",
  },
  {
    q: "What hygiene practices do you follow?",
    a: "Every tool is UV-sterilized and autoclaved between clients. Razors, nail files, and waxing spatulas are single-use and disposed of immediately. Fresh linens are used for every appointment, and our therapists wear gloves during all treatments.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 4 hours' notice for cancellations or rescheduling. Appointments cancelled with less than 4 hours' notice may incur a 30% charge of the service cost, especially for bridal bookings where time is blocked exclusively for you.",
  },
  {
    q: "Is the salon ladies-only or unisex?",
    a: "We are a unisex salon with dedicated ladies' hours from 10 AM to 5 PM, Monday through Thursday. Men's grooming services are available all day. We also offer private bridal booking slots upon request.",
  },
  {
    q: "How far in advance should I book bridal services?",
    a: "For bridal packages (mehndi, nikkah, barat, walima), we recommend booking 2–3 months in advance, especially during peak wedding season (November–February). A bridal trial should be scheduled at least 3 weeks before your event.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, all major debit/credit cards, EasyPaisa, and JazzCash. For membership plans, we also offer bank transfer. Bridal packages require a 50% advance booking deposit.",
  },
];
