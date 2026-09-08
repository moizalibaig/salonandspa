import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppBubble from "./components/WhatsAppBubble";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <Team />
        <Testimonials />
        <Booking />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
