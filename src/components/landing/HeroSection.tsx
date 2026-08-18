import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImg1 from "@/assets/hero-compressor-1.png";
import heroImg2 from "@/assets/hero-compressor-2.png";
import heroImg3 from "@/assets/hero-compressor-3.png";
import heroImg4 from "@/assets/hero-compressor-4.png";
import interrapidisimoLogo from "@/assets/interrapidisimo.svg";
import coordinadoraLogo from "@/assets/coordinadora.svg";
import tccLogo from "@/assets/tcc.svg";

const images = [heroImg1, heroImg2, heroImg3, heroImg4];

const packages = [
  {
    id: "1pack",
    qty: 1,
    label: "1 Compresor",
    saving: "$90.000",
    badge: "Ahorras 45%",
    price: "$109.000",
    oldPrice: "$199.000",
    highlight: null,
  },
  {
    id: "2pack",
    qty: 2,
    label: "2 Compresores",
    saving: "$209.000",
    badge: "Ahorras 53%",
    price: "$189.000",
    oldPrice: "$398.000",
    highlight: "⭐ El más pedido",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [selectedPkg, setSelectedPkg] = useState("2pack");

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const activePkg = packages.find((p) => p.id === selectedPkg)!;

  const scrollToOrder = () => {
    document.getElementById("formulario-pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="bg-background py-8 lg:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image carousel */}
          <div className="relative">
            <div className="bg-secondary rounded-xl overflow-hidden aspect-square flex items-center justify-center">
              <img
                src={images[current]}
                alt="Mini Compresor Portátil"
                width={800}
                height={800}
                className="object-contain w-full h-full p-4"
              />
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={next}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 justify-center">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    i === current ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Vista ${i + 1}`}
                    loading="lazy"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full bg-secondary p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-5">
            {/* Stars */}
            <a href="#reviews" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-star text-star" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9 | 127 reseñas</span>
            </a>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Mini Compresor Portátil
            </h1>
            <p className="text-lg text-muted-foreground">
              Infla tus llantas en segundos, donde sea que estés
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-bold text-foreground">{activePkg.price}</span>
              <span className="text-lg text-[#999999] line-through">{activePkg.oldPrice}</span>
              <Badge className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1">
                {activePkg.badge}
              </Badge>
            </div>

            {/* Quantity selector */}
            <div className="flex flex-col gap-3">
              {packages.map((pkg) => {
                const selected = selectedPkg === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkg(pkg.id)}
                    className={`relative flex items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all text-left ${
                      selected
                        ? "border-[#111111] bg-[#F5F5F5]"
                        : "border-border bg-background hover:border-muted-foreground/30"
                    }`}
                  >
                    {/* Radio circle */}
                    <span
                      className={`flex-shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                        selected ? "border-foreground" : "border-muted-foreground/40"
                      }`}
                    >
                      {selected && (
                        <span className="h-3 w-3 rounded-full bg-foreground" />
                      )}
                    </span>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-foreground">{pkg.label}</span>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Envío Gratis
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Te ahorras {pkg.saving}
                      </p>
                    </div>

                    {/* Prices */}
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-foreground">{pkg.price}</p>
                      <p className="text-sm text-[#999999] line-through">{pkg.oldPrice}</p>
                    </div>

                    {/* Badge */}
                    <span className="absolute -top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-md">
                      {pkg.badge}
                    </span>
                    {pkg.highlight && (
                      <span className="absolute -top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md" style={{ backgroundColor: '#16A34A', color: 'white' }}>
                        {pkg.highlight}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <Button
              onClick={scrollToOrder}
              size="lg"
              className="w-full text-lg font-bold py-7 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground animate-shake"
            >
              ¡Quiero el mío!
            </Button>

            {/* Urgency elements */}
            <div className="text-center space-y-1">
              <p className="text-sm font-bold text-cta">
                🔥 ¡Solo quedan 23 unidades disponibles!
              </p>
              <p className="text-sm text-muted-foreground">
                ⏳ Oferta válida por tiempo limitado
              </p>
            </div>

            <p className="text-center text-muted-foreground text-lg">
              📦 <strong>Envío gratis · 💵 Pagas al recibirlo</strong>
            </p>

            {/* Transportadora trust */}
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground font-medium">
                Enviamos con las mejores transportadoras
              </p>
              <div className="flex-wrap flex items-center justify-center gap-[24px]">
                <img src={interrapidisimoLogo} alt="Interrapidísimo" className="h-9 rounded-[5px]" />
                <img src={coordinadoraLogo} alt="Coordinadora" className="h-9" />
                <img src={tccLogo} alt="TCC" className="h-9" />
              </div>
            </div>

            {/* Demo video */}
            <div className="rounded-xl overflow-hidden lg:hidden">
              <video
                src="/videos/hero-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
