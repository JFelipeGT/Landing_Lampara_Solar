import { Ruler, Weight, Gauge, Battery, Volume2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const metrics = [
  { label: "PESO", value: "490", unit: "G", icon: Weight },
  { label: "LARGO", value: "15", unit: "CM", icon: Ruler },
  { label: "PRESIÓN MÁX", value: "150", unit: "PSI", icon: Gauge },
  { label: "BATERÍA", value: "6000", unit: "MAH", icon: Battery },
  { label: "RUIDO", value: "<80", unit: "DB", icon: Volume2 },
];

const detailedSpecs = [
  {
    emoji: "🔋",
    title: "Batería",
    items: [
      "Batería recargable",
      "Capacidad para múltiples inflados por carga:",
      "· Hasta 2-3 llantas de automóvil",
      "· 4-6 llantas de motocicleta",
      "· 8-10 llantas de bicicleta",
      "· 20 balones",
    ],
  },
  {
    emoji: "⚡",
    title: "Velocidad de inflado",
    items: [
      "Inflado rápido de neumáticos (25-36 PSI)",
      "Tiempo estimado: menos de 60 segundos",
      "Hasta 4 veces más rápido que infladores convencionales",
    ],
  },
  {
    emoji: "🎛️",
    title: "Modos de uso",
    items: [
      "Modo automóvil",
      "Modo motocicleta",
      "Modo bicicleta",
      "Modo balón",
      "Modo personalizado",
    ],
  },
  {
    emoji: "📏",
    title: "Precisión y control",
    items: [
      "Sistema de preajuste inteligente",
      "Apagado automático al alcanzar la presión deseada",
      "Pantalla LCD digital de alta precisión",
    ],
  },
  {
    emoji: "📊",
    title: "Unidades de medición",
    items: ["PSI · kPa · BAR · KG/CM²"],
  },
  {
    emoji: "💡",
    title: "Funciones adicionales",
    items: [
      "Linterna integrada (ideal para emergencias)",
      "Función power bank (carga de dispositivos móviles)",
    ],
  },
  {
    emoji: "🎒",
    title: "Diseño y portabilidad",
    items: ["Peso: 490 g", "Diseño compacto y fácil de transportar"],
  },
];

const SpecsSection = () => {
  return (
    <section id="specs" className="py-12 lg:py-20" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">
        <h2 className="text-2xl lg:text-4xl font-bold text-foreground text-center mb-10 lg:mb-14">
          Especificaciones Técnicas
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center items-start gap-8 lg:gap-12">

          {/* Specs */}
          <div className="w-full lg:w-1/2">
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {metrics.map((spec) => (
                <div key={spec.label} className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground font-semibold tracking-wider mb-1">
                    {spec.label}
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl lg:text-5xl font-bold text-foreground leading-none">
                      {spec.value}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium pb-1">
                      {spec.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed specs accordion */}
            <Accordion type="single" collapsible defaultValue="modos-de-uso">
              {detailedSpecs.map((spec) => {
                const value = spec.title.toLowerCase().replace(/\s+/g, "-");
                return (
                  <AccordionItem
                    key={value}
                    value={value}
                    className="bg-white border border-gray-200 rounded-lg mb-3 px-5 overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="font-bold text-foreground text-sm">
                        {spec.emoji} {spec.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1.5">
                        {spec.items.map((item, i) => (
                          <li
                            key={i}
                            className={`text-sm text-muted-foreground ${
                              item.startsWith("·") ? "pl-3" : ""
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
