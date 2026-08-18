import { useState, useEffect, useRef } from "react";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shownRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit_popup_shown")) return;

    const resetTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        if (!shownRef.current) trigger();
      }, 30000);
    };

    const trigger = () => {
      shownRef.current = true;
      sessionStorage.setItem("exit_popup_shown", "1");
      setShow(true);
    };

    // Detect fast scroll back to top
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (lastScrollY > 600 && currentY < 100 && !shownRef.current) {
        trigger();
      }
      lastScrollY = currentY;
      resetTimer();
    };

    const onInteraction = () => resetTimer();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", onInteraction, { passive: true });
    window.addEventListener("click", onInteraction);

    resetTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", onInteraction);
      window.removeEventListener("click", onInteraction);
    };
  }, []);

  if (!show) return null;

  const handleCTA = () => {
    setShow(false);
    document.getElementById("formulario-pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center bg-black/60 animate-fade-in">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md mx-4 p-6 animate-[slide-up_0.3s_ease-out] space-y-4">
        <h3 className="text-2xl font-extrabold text-foreground text-center">
          ¡Espera! 🎁
        </h3>
        <p className="text-center text-muted-foreground">
          Antes de irte, recuerda que tienes envío <span className="font-bold text-foreground">GRATIS</span> y pagas solo cuando lo recibes
        </p>
        <p className="text-center text-xl font-bold text-foreground">
          $109.000 — <span className="text-cta">Oferta limitada</span>
        </p>
        <button
          onClick={handleCTA}
          className="w-full h-14 rounded-xl bg-cta hover:bg-cta/90 text-white font-bold text-lg transition-colors"
        >
          ¡Quiero el mío!
        </button>
        <button
          onClick={() => setShow(false)}
          className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          No gracias
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
