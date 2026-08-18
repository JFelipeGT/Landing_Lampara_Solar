import { Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import review1 from "@/assets/review1.jpg";
import review2 from "@/assets/review2.jpg";
import review3 from "@/assets/review3.jpg";
import review4 from "@/assets/review4.jpg";
import review5 from "@/assets/review5.jpg";
import review6 from "@/assets/review6.jpg";

const reviews = [
  {
    name: "Natalia Lopez",
    city: "Segovia - Antioquia",
    stars: 5,
    comment: "Sinceramente, me sorprendió mucho. El precio era bastante bueno, así que no esperaba que la calidad fuera tan alta. Estas luces brillan mucho y el sensor de movimiento responde muy bien y siempre está en su punto. Fueron fáciles de instalar y, según el vídeo, se puede ver realmente lo brillantes que son. Gran calidad en general y una excelente relación calidad-precio.",
    image: review1,
  },
  {
    name: "Carlos Mendez",
    city: "Bogotá",
    stars: 5,
    comment: "Instalé estas luces solares en mi patio y han superado mis expectativas. Se cargan bien durante el día y brillan mucho por la noche cuando detectan movimiento. Los tres paneles ajustables ayudan a cubrir un área más amplia, haciendo que el patio parezca más seguro y bien iluminado. La instalación fue sencilla y, hasta ahora, han resistido la lluvia sin problemas. Estoy muy satisfecho con la compra y sin duda los recomendaría.",
    image: review2,
  },
  {
    name: "Juan García",
    city: "Barranquilla",
    stars: 5,
    comment: "Estoy muy impresionado con la facilidad con la que pude instalar estas luces detectoras de movimiento solares. Y funcionan como se describe. Se los recomendaría a cualquiera que necesite iluminar un área oscura alrededor de su casa.",
    image: review3,
  },
  {
    name: "Santiago Tique ",
    city: "Armenia - Quindío",
    stars: 5,
    comment: "¡Los pedí hace meses y hasta ahora son geniales! La luz se extiende por todo el patio. ¡Se ven bien en el garaje y funcionan mejor que la luz que había en mi casa cuando la construí!",
    image: review4,
  },
  {
    name: "Diego Castaño",
    city: "Cali",
    stars: 5,
    comment: "Me encantan estas luces solares. ¡Fácil de instalar y proporciona una gran luz!",
    image: review5,
  },
  {
    name: "Laura G.",
    city: "Medellín",
    stars: 5,
    comment: "Luces solares muy prácticas para patios, entradas, garajes o zonas oscuras. Los 3 cabezales permiten cubrir mejor el área, el sensor de movimiento ayuda a ahorrar energía y los 3000 LM ofrecen buena iluminación. Al ser solares y resistentes al agua, son cómodas para uso exterior diario.",
    image: review6,
  },
];

const ReviewsSection = () => {
  const scrollToOrder = () => {
    document.getElementById("formulario-pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="reviews" className="bg-background py-12 lg:py-20">
      <div className="container">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
            Lo que dicen nuestros clientes 🤩
          </h2>
          <p className="text-muted-foreground mt-2 text-sm lg:text-base">
            Opiniones reales de compradores verificados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col"
            >
              {/* Review Image */}
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={review.image}
                  alt={`Reseña de ${review.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.stars
                          ? "fill-star text-star"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground text-sm leading-relaxed mb-6 flex-1">
                  "{review.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-muted-foreground text-xs">{review.city}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <BadgeCheck className="w-4 h-4" />
                    <span>Verificado</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default ReviewsSection;
