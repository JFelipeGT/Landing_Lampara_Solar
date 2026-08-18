import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tarda en llegar?",
    answer: (
      <>
        📍 <strong>Ciudades principales:</strong> 1 a 2 días hábiles <br />
        📍<strong> Resto del país:</strong> 2 a 5 días hábiles
      </>
    ),
  },
  {
    question: "¿Cómo pago?",
    answer: "Pagas contraentrega, es decir cuando el paquete llega a tu puerta. No necesitas tarjeta ni transferencia.",
  },
  {
    question: "¿Sirve para mi vehículo?",
    answer: "Sí, tiene modos para carro, moto, bicicleta y balón.",
  },
  {
    question: "¿Qué pasa si no me llega o llega dañado?",
    answer: "Te hacemos el cambio o te devolvemos el dinero, sin preguntas.",
  },
  {
    question: "¿Tiene garantía?",
    answer: "Sí, 30 días de garantía por defectos de fábrica.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-background py-12 lg:py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl lg:text-4xl font-bold text-foreground text-center mb-10 lg:mb-14">
          Preguntas Frecuentes
        </h2>

        <Accordion type="single" collapsible defaultValue="item-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg mb-3 px-4 data-[state=open]:bg-secondary"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
