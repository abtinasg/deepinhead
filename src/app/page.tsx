import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductsOverview } from "@/components/ProductsOverview";
import { FinanceSection } from "@/components/FinanceSection";
import { ResearchSection } from "@/components/ResearchSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { PrinciplesSection } from "@/components/PrinciplesSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-elevation-base">
      <Navbar />
      <Hero />
      <ProductsOverview />
      <FinanceSection />
      <ResearchSection />
      <EcosystemSection />
      <PrinciplesSection />
      <Footer />
    </main>
  );
}

