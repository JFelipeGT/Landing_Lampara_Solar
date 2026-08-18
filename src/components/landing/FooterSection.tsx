import { Instagram, MessageCircle, Package, Banknote, ShieldCheck, Truck, MapPin, Clock, Phone } from "lucide-react";
import coordinadoraLogo from "@/assets/coordinadora.svg";
import interrapidisimoLogo from "@/assets/interrapidisimo.svg";
import tccLogo from "@/assets/tcc.svg";

const FooterSection = () => {
  return (
    <footer className="bg-[#1A1F2A] text-[#9CA3AF]">
      {/* Main content */}
      <div className="container py-10 lg:py-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 text-center lg:text-left">
          
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">AXM Imports</h3>
            <p className="text-sm">Tu solución de carretera, donde sea que estés 🚗</p>
            <div className="flex gap-3 mt-1">
              <a
                href="https://www.instagram.com/axm.imports/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#2D3748] flex items-center justify-center text-white hover:bg-[#E63946] transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/573001244665?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20mini%20compresor%20portatil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#2D3748] flex items-center justify-center text-white hover:bg-[#E63946] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Contact */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Contáctanos</h4>
            <a
              href="https://wa.me/573001244665"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 shrink-0" />
              +57 3001244665
            </a>
            <a
              href="https://www.instagram.com/axm.imports/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Instagram className="h-4 w-4 shrink-0" />
              @axm.imports
            </a>
            <span className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 shrink-0" />
              Armenia, Quindío — Colombia
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 shrink-0" />
              Atención: Lun – Dom 8am – 8pm
            </span>
          </div>

          {/* Column 3 — Trust */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Compra segura</h4>
            <span className="flex items-center gap-2 text-sm">
              <Package className="h-4 w-4 shrink-0" />
              Envío gratis a toda Colombia
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Banknote className="h-4 w-4 shrink-0" />
              Pagas cuando lo recibes
            </span>
            <span className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Garantía de 2 meses
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Truck className="h-4 w-4 shrink-0" />
              Despacho el mismo día
            </span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-[#2D3748]">
        <div className="container py-5 flex flex-col lg:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6B7280]">
            © 2025 AXM Imports. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <img src={interrapidisimoLogo} alt="Interrapidísimo" className="h-5 opacity-40" />
            <img src={coordinadoraLogo} alt="Coordinadora" className="h-5 opacity-40" />
            <img src={tccLogo} alt="TCC" className="h-5 opacity-40" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
