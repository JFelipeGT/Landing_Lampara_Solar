import AnnouncementBar from "@/components/landing/AnnouncementBar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TrustBadges from "@/components/landing/TrustBadges";
import SpecsSection from "@/components/landing/SpecsSection";
import HowToUseSection from "@/components/landing/HowToUseSection";
import FaqSection from "@/components/landing/FaqSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import OrderFormSection from "@/components/landing/OrderFormSection";
import FooterSection from "@/components/landing/FooterSection";
import WhatsAppFloating from "@/components/landing/WhatsAppFloating";
import MobileStickyButton from "@/components/landing/MobileStickyButton";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <TrustBadges />
        <SpecsSection />
        <HowToUseSection />
        <FaqSection />
        <ReviewsSection />
        <OrderFormSection />
      </main>
      <FooterSection />
      <WhatsAppFloating />
      <MobileStickyButton />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
