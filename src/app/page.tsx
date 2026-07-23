import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SobreSection } from "@/features/SobreSection";
import { ValoresSection } from "@/features/ValoresSection";
import { IndicadoresSection } from "@/features/IndicadoresSection";
import { ProjetosSection } from "@/features/ProjetosSection";
import { EventosSection } from "@/features/EventosSection";
import { ParceriasSection } from "@/features/ParceriasSection";
import { GaleriaSection } from "@/features/GaleriaSection";
import { FaqSection } from "@/features/FaqSection";
import { CtaSection } from "@/features/CtaSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <SobreSection />
        <ValoresSection />
        <IndicadoresSection />
        <ProjetosSection />
        <EventosSection />
        <ParceriasSection />
        <GaleriaSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
