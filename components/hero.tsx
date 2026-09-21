import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.png"
          alt="Casa moderna de lujo al atardecer"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-28 sm:px-8 sm:py-36 lg:py-44">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-sm font-medium text-background ring-1 ring-inset ring-background/25 backdrop-blur">
          <MapPin className="size-4" />
          Más de 500 propiedades disponibles
        </span>

        <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-[1.1] text-background text-balance sm:text-5xl lg:text-6xl">
          Encuentra el hogar de tus sueños
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/85 text-pretty">
          En Casas del Valle llevamos más de 15 años conectando a las familias
          con las propiedades perfectas en las zonas más exclusivas.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" render={<a href="#propiedades" />}>
            <Search data-icon="inline-start" />
            Explorar propiedades
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background/15 text-background ring-1 ring-inset ring-background/30 backdrop-blur hover:bg-background/25"
            render={<a href="#contacto" />}
          >
            Habla con un asesor
          </Button>
        </div>
      </div>
    </section>
  );
}
