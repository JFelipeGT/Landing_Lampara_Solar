import { Truck, ShieldCheck, SmilePlus, Zap } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "A toda Colombia",
  },
  {
    icon: ShieldCheck,
    title: "Pago Seguro",
    description: "Pagas al recibir",
  },
  {
    icon: SmilePlus,
    title: "Satisfacción Garantizada",
    description: "O te devolvemos tu dinero",
  },
  {
    icon: Zap,
    title: "Despacho Rápido",
    description: "En 24 horas hábiles",
  },
];

const TrustBadges = () => {
  return (
    <section id="trust-badges" className="bg-navy text-navy-foreground py-12 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <Icon className="w-10 h-10 text-navy-foreground" />
                <div>
                  <h3 className="font-bold text-sm lg:text-base">{badge.title}</h3>
                  <p className="text-navy-foreground/70 text-xs lg:text-sm mt-1">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
