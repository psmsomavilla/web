import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Correo", value: "hola@casasdelvalle.com" },
  { icon: MapPin, label: "Oficina", value: "Av. Central 1200, Zona Norte" },
];

export function ContactCta() {
  return (
    <section id="contacto" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contacto
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
            Agenda tu visita hoy mismo
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Cuéntanos qué buscas y uno de nuestros asesores te contactará para
            ayudarte a dar el siguiente paso hacia tu nuevo hogar.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <form className="flex flex-col gap-6">
            <FieldGroup>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Nombre</FieldLabel>
                  <Input id="name" name="name" placeholder="Tu nombre" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Teléfono</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="interest">Estoy buscando</FieldLabel>
                <Select>
                  <SelectTrigger id="interest" className="w-full">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="apartamento">Apartamento</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Mensaje</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuéntanos qué tipo de propiedad buscas..."
                />
              </Field>
            </FieldGroup>
            <Button type="submit" size="lg" className="w-full">
              Enviar solicitud
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
