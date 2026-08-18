import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

interface Department {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
}

const OrderFormSection = () => {
  // Form state
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [tipoEntrega, setTipoEntrega] = useState("domicilio");
  const [cedula, setCedula] = useState("");
  const [departamentoId, setDepartamentoId] = useState("");
  const [departamentoNombre, setDepartamentoNombre] = useState("");
  const [municipioNombre, setMunicipioNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [barrio, setBarrio] = useState("");
  const [cantidad, setCantidad] = useState(2);

  // Data state
  const [departamentos, setDepartamentos] = useState<Department[]>([]);
  const [municipios, setMunicipios] = useState<City[]>([]);
  const [loadingDepts, setLoadingDepts] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  // UI state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [successData, setSuccessData] = useState({ nombre: "", celular: "" });

  // Load departments
  useEffect(() => {
    fetch("https://api-colombia.com/api/v1/Department")
      .then((res) => res.json())
      .then((data: Department[]) => {
        const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
        setDepartamentos(sorted);
      })
      .catch(() => setDepartamentos([]))
      .finally(() => setLoadingDepts(false));
  }, []);

  // Load cities when department changes
  useEffect(() => {
    if (!departamentoId) {
      setMunicipios([]);
      return;
    }
    setLoadingCities(true);
    setMunicipioNombre("");
    fetch(`https://api-colombia.com/api/v1/Department/${departamentoId}/cities`)
      .then((res) => res.json())
      .then((data: City[]) => {
        const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
        setMunicipios(sorted);
      })
      .catch(() => setMunicipios([]))
      .finally(() => setLoadingCities(false));
  }, [departamentoId]);

  const isDomicilio = tipoEntrega === "domicilio";

  const validate = (): boolean => {
    const e: Record<string, string> = {};

    if (!nombre.trim()) e.nombre = "El nombre es obligatorio";
    if (!celular.trim()) e.celular = "El celular es obligatorio";
    else if (!/^\d{10}$/.test(celular.trim()))
      e.celular = "El celular debe tener exactamente 10 dígitos";

    if (!isDomicilio) {
      if (!cedula.trim()) e.cedula = "La cédula es obligatoria para recoger en oficina";
      else if (!/^\d{6,10}$/.test(cedula.trim()))
        e.cedula = "La cédula debe tener entre 6 y 10 dígitos";
    }

    if (!departamentoNombre) e.departamento = "Selecciona un departamento";
    if (!municipioNombre) e.municipio = "Selecciona un municipio";

    if (isDomicilio && !direccion.trim())
      e.direccion = "La dirección es obligatoria para envío a domicilio";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    if (!validate()) return;

    setSubmitting(true);

    const payload = {
      nombre: nombre.trim(),
      celular: celular.trim(),
      cedula: isDomicilio ? null : cedula.trim(),
      tipo_entrega: tipoEntrega,
      departamento: departamentoNombre,
      municipio: municipioNombre,
      direccion: isDomicilio ? direccion.trim() : null,
      barrio: isDomicilio ? (barrio.trim() || null) : null,
      cantidad,
    };

    const { error } = await supabase.from("pedidos").insert(payload);

    setSubmitting(false);

    if (error) {
      setSubmitError(true);
    } else {
      setSuccessData({ nombre: nombre.trim(), celular: celular.trim() });
      setSuccess(true);
    }
  };

  const handleDeptChange = (value: string) => {
    const dept = departamentos.find((d) => String(d.id) === value);
    if (dept) {
      setDepartamentoId(value);
      setDepartamentoNombre(dept.name);
    }
  };

  const handleMunicipioChange = (value: string) => {
    setMunicipioNombre(value);
  };

  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="text-sm text-cta font-medium mt-1">{errors[field]}</p>
    ) : null;

  if (success) {
    return (
      <section id="formulario-pedido" className="bg-[hsl(220,20%,15%)] py-12 lg:py-20">
        <div className="container flex justify-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 w-full max-w-[600px] text-center">
            <p className="text-3xl mb-4">🎉</p>
            <h3 className="text-xl font-bold text-foreground mb-2">
              ¡Listo {successData.nombre}!
            </h3>
            <p className="text-muted-foreground">
              En los próximos minutos te contactamos al{" "}
              <span className="font-semibold text-foreground">{successData.celular}</span>{" "}
              por WhatsApp para confirmar tu pedido ✅
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario-pedido" className="bg-[hsl(220,20%,15%)] py-12 lg:py-20">
      <div className="container flex flex-col items-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-2">
          ¡Pide el tuyo ahora!
        </h2>
        <p className="text-white/70 text-center mb-8 max-w-md">
          Llena el formulario y te contactamos por WhatsApp para confirmar{" "}
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-6 lg:p-10 w-full max-w-[600px] space-y-5"
          noValidate
        >
          {/* Nombre */}
          <div>
            <Label htmlFor="nombre">Nombre completo *</Label>
            <Input
              id="nombre"
              placeholder="Tu nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1.5 rounded-lg border-muted-foreground/30 focus-visible:ring-cta focus-visible:border-cta"
            />
            <FieldError field="nombre" />
          </div>

          {/* Celular */}
          <div>
            <Label htmlFor="celular">Celular *</Label>
            <Input
              id="celular"
              type="tel"
              placeholder="Número de celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="mt-1.5 rounded-lg border-muted-foreground/30 focus-visible:ring-cta focus-visible:border-cta"
            />
            <FieldError field="celular" />
          </div>

          {/* Tipo entrega */}
          <div>
            <Label>Tipo de entrega *</Label>
            <RadioGroup
              value={tipoEntrega}
              onValueChange={setTipoEntrega}
              className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <label
                className={`flex items-center gap-2 border rounded-lg p-3 cursor-pointer transition-all ${
                  isDomicilio
                    ? "border-foreground bg-secondary"
                    : "border-muted-foreground/30"
                }`}
              >
                <RadioGroupItem value="domicilio" />
                <span className="text-sm font-medium">🏠 Envío a domicilio</span>
              </label>
              <label
                className={`flex items-center gap-2 border rounded-lg p-3 cursor-pointer transition-all ${
                  !isDomicilio
                    ? "border-foreground bg-secondary"
                    : "border-muted-foreground/30"
                }`}
              >
                <RadioGroupItem value="oficina" />
                <span className="text-sm font-medium">🏢 Recoger en oficina</span>
              </label>
            </RadioGroup>
          </div>

          {/* Cédula — solo oficina */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              !isDomicilio ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Label htmlFor="cedula">Cédula *</Label>
            <Input
              id="cedula"
              type="number"
              placeholder="Número de cédula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="mt-1.5 rounded-lg border-muted-foreground/30 focus-visible:ring-cta focus-visible:border-cta"
            />
            <FieldError field="cedula" />
            <p className="text-xs text-[#6B7280] italic mt-1">
              ⓘ Requerido por la transportadora para verificar tu identidad al recibir el paquete
            </p>
          </div>

          {/* Departamento */}
          <div>
            <Label>Departamento *</Label>
            <Select onValueChange={handleDeptChange} value={departamentoId}>
              <SelectTrigger className="mt-1.5 rounded-lg border-muted-foreground/30 focus:ring-cta">
                <SelectValue placeholder={loadingDepts ? "Cargando..." : "Selecciona tu departamento"} />
              </SelectTrigger>
              <SelectContent>
                {departamentos.map((d) => (
                  <SelectItem key={d.id} value={String(d.id)}>
                    {d.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError field="departamento" />
          </div>

          {/* Municipio */}
          <div>
            <Label>Municipio *</Label>
            <Select
              onValueChange={handleMunicipioChange}
              value={municipioNombre}
              disabled={!departamentoId}
            >
              <SelectTrigger className="mt-1.5 rounded-lg border-muted-foreground/30 focus:ring-cta">
                <SelectValue
                  placeholder={
                    loadingCities
                      ? "Cargando..."
                      : !departamentoId
                      ? "Primero selecciona departamento"
                      : "Selecciona tu municipio"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {municipios.map((c) => (
                  <SelectItem key={c.id} value={c.name}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError field="municipio" />
          </div>

          {/* Dirección — solo domicilio */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isDomicilio ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Label htmlFor="direccion">Dirección *</Label>
            <Input
              id="direccion"
              placeholder="Calle, carrera, número, apartamento"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="mt-1.5 rounded-lg border-muted-foreground/30 focus-visible:ring-cta focus-visible:border-cta"
            />
            <FieldError field="direccion" />
          </div>

          {/* Barrio — solo domicilio */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isDomicilio ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Label htmlFor="barrio">Barrio (opcional)</Label>
            <Input
              id="barrio"
              placeholder="Nombre del barrio"
              value={barrio}
              onChange={(e) => setBarrio(e.target.value)}
              className="mt-1.5 rounded-lg border-muted-foreground/30 focus-visible:ring-cta focus-visible:border-cta"
            />
          </div>

          {/* Cantidad */}
          <div>
            <Label>Cantidad</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {/* 2 units */}
              <button
                type="button"
                onClick={() => setCantidad(2)}
                className={`relative border rounded-xl p-4 text-left transition-all ${
                  cantidad === 2
                    ? "border-foreground border-2 bg-secondary"
                    : "border-muted-foreground/30"
                }`}
              >
                <span className="absolute top-2 right-2 bg-cta text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  MÁS VENDIDO
                </span>
                <p className="font-bold text-foreground">2 Compresores</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-foreground">$189.000</span>
                  <span className="text-sm text-muted-foreground line-through">$398.000</span>
                </div>
              </button>

              {/* 1 unit */}
              <button
                type="button"
                onClick={() => setCantidad(1)}
                className={`relative border rounded-xl p-4 text-left transition-all ${
                  cantidad === 1
                    ? "border-foreground border-2 bg-secondary"
                    : "border-muted-foreground/30"
                }`}
              >
                <p className="font-bold text-foreground">1 Compresor</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold text-foreground">$109.000</span>
                  <span className="text-sm text-muted-foreground line-through">$199.000</span>
                </div>
              </button>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-cta hover:bg-cta/90 text-white font-bold text-base py-6 rounded-xl animate-shake"
          >
            {submitting ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Enviando tu pedido...
              </>
            ) : (
              "Confirmar mi pedido 🚀"
            )}
          </Button>

          {submitError && (
            <div className="text-center space-y-3 mt-4">
              <p className="text-cta font-medium text-sm">
                Hubo un problema al enviar tu pedido. Escríbenos directamente al WhatsApp 📱
              </p>
              <a
                href="https://wa.me/573001244665"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default OrderFormSection;
