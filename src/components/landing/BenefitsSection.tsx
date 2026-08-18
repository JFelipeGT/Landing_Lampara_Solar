import { Zap, Gauge, BatteryCharging, Flashlight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Zap,
    title: "Llanta baja resuelta en segundos",
    description: "Infla tú mismo sin depender de nadie",
  },
  {
    icon: Gauge,
    title: "Presión exacta, apagado automático",
    description: "Configura la presión y se detiene solo",
  },
  {
    icon: BatteryCharging,
    title: "Batería recargable siempre lista",
    description: "Cárgala y tenla lista para cualquier emergencia",
  },
  {
    icon: Flashlight,
    title: "Linterna integrada",
    description: "Para las emergencias que nunca avisan",
  },
  {
    icon: Smartphone,
    title: "Carga tu celular",
    description: "Power bank incluido cuando más lo necesitas",
  },
];

const BenefitsSection = () => {
  const scrollToOrder = () => {
    document.getElementById("formulario-pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="benefits" className="bg-background py-12 lg:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            ¿Por qué necesitas uno?
          </h2>
        </div>

        {/* Cards grid: 2 cols mobile, 5 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLast = index === benefits.length - 1;

            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 lg:p-8 ${
                  isLast ? "col-span-2 lg:col-span-1 max-w-[calc(50%-0.5rem)] mx-auto lg:max-w-none" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-cta/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-cta" />
                </div>
                <h3 className="font-bold text-foreground text-sm lg:text-base mb-2 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center px-4 lg:px-0">
          <Button
            onClick={scrollToOrder}
            size="lg"
            className="w-full lg:w-[400px] text-lg font-bold py-7 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground animate-shake"
          >
            ¡Quiero el mío!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
