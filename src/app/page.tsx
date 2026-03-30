import { Navbar } from "@/widgets/navbar/navbar";
import { Footer } from "@/widgets/footer/footer";
import { HeroSection } from "@/features/hero/hero-section";
import { StatsSection } from "@/features/stats/stats-section";
import { FeaturesGridSection } from "@/features/features-grid/features-grid-section";
import { EditorPremiumSection } from "@/features/editor-premium/editor-premium-section";
import { HowItWorksSection } from "@/features/how-it-works/how-it-works-section";
import { RoadmapSection } from "@/features/roadmap/roadmap-section";
import { FinalCtaSection } from "@/features/final-cta/final-cta-section";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <StatsSection />
        <FeaturesGridSection />
        <EditorPremiumSection />
        <HowItWorksSection />
        <RoadmapSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
