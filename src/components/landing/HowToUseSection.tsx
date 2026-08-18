import { Plug, SlidersHorizontal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Conéctalo a la válvula del vehículo",
    description: "Conecta la manguera a la válvula de la llanta, carro, moto o bicicleta",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Configura la presión",
    description: "Selecciona la presión deseada en la pantalla digital y presiona inicio",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Se apaga solo",
    description: "Al llegar a la presión configurada se detiene automáticamente, sin riesgo de sobreinflado",
  },
];

const HowToUseSection = () => {
  const scrollToOrder = () => {
    document.getElementById("formulario-pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-to-use" className="bg-secondary py-12 lg:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            ¿Cómo se usa?
          </h2>
          <p className="text-muted-foreground mt-2 text-sm lg:text-base">
            En 3 simples pasos
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-card rounded-xl border border-border p-6 lg:p-8 shadow-sm"
              >
                <span className="text-5xl lg:text-6xl font-bold text-primary leading-none">
                  {step.number}
                </span>
                <div className="mt-4 mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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

export default HowToUseSection;
