import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
