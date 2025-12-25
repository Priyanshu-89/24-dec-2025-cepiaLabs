import AIFeatures from "./components/AIFeatures";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar/>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <AIFeatures />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
