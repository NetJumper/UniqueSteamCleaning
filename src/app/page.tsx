import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { fetchAllContent } from "@/sanity/queries";

export const revalidate = 60;

export default async function Home() {
  const { business, services, reviews, faqs, hero, about, siteStats } = await fetchAllContent();

  return (
    <main className="pb-24 md:pb-0">
      <ScrollToTop />
      <Navbar business={business} />
      <Hero hero={hero} business={business} />
      <Stats siteStats={siteStats} />
      <Services services={services} />
      <About about={about} />
      <Reviews reviews={reviews} />
      <FAQ faqs={faqs} />
      <Contact business={business} />
      <Footer business={business} services={services} />
      <FloatingCTA business={business} />
    </main>
  );
}
