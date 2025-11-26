import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import ProductGrid from "@/components/products/ProductGrid";
import contentData from "@/data/content.json";
import { SiteContent } from "@/types/content";

const content = contentData as SiteContent;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero content={content.hero} />
      <About content={content.about} />
      <ProductGrid products={content.products} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </main>
  );
}
