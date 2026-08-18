import { useState, useEffect } from "react";

const MobileStickyButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      // Get all CTA buttons (hero + section buttons + form)
      const ctaButtons = document.querySelectorAll('.animate-shake, #formulario-pedido button[type="submit"]');
      if (ctaButtons.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          // Hide sticky button if ANY CTA button is visible
          const anyVisible = entries.some((entry) => entry.isIntersecting);
          setVisible(!anyVisible);
        },
        { threshold: 0 }
      );

      ctaButtons.forEach((btn) => observer.observe(btn));
      return () => observer.disconnect();
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(checkVisibility, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("formulario-pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-[999] lg:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ boxShadow: "0 -4px 12px rgba(0,0,0,0.15)" }}
    >
      <button
        onClick={scrollToOrder}
        className="w-full h-14 rounded-xl bg-cta hover:bg-cta/90 text-white font-bold text-lg transition-colors"
      >
        ¡Quiero el mío! 🚀
      </button>
    </div>
  );
};

export default MobileStickyButton;
