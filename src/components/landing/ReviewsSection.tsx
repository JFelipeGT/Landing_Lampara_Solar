import { Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/review-3.png";
import review4 from "@/assets/review-4.png";
import review5 from "@/assets/review-5.png";
import review6 from "@/assets/review-6.png";

const reviews = [
  {
    name: "Natalia Lopez",
    city: "Segovia - Antioquia",
    stars: 5,
    comment: "Me llegó rapidísimo y funciona perfecto. Ya lo usé dos veces con mi carro y todo bien.",
    image: review1,
  },
  {
    name: "Carlos Mendez",
    city: "Bogotá",
    stars: 5,
    comment: "Excelente producto, fácil de usar y llegó antes de lo esperado.",
    image: review2,
  },
  {
    name: "Juan García",
    city: "Barranquilla",
    stars: 5,
    comment: "Lo compré con desconfianza pero me sorprendió. El pago contraentrega me dio confianza, tal cual las imagenes y videos.",
    image: review3,
  },
  {
    name: "Santiago Tique ",
    city: "Armenia - Quindío",
    stars: 5,
    comment: "Súper práctico, lo llevo siempre en la moto. Tiene varias funciones más alla de solo inflar llantas.",
    image: review4,
  },
  {
    name: "Diego Castaño",
    city: "Cali",
    stars: 5,
    comment: "El mejor compresor para su precio. Lo usé con la camioneta y me resolvio en minutos a pesar de lo grande jaja.",
    image: review5,
  },
  {
    name: "Laura G.",
    city: "Medellín",
    stars: 5,
    comment: "Me encantó. Es pequeño y potente. Recomendados.",
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
