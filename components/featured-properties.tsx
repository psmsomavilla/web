import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react";

type Property = {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  area: string;
  tag: string;
};

const properties: Property[] = [
  {
    id: 1,
    name: "Villa Los Robles",
    location: "Las Lomas, Zona Norte",
    price: "$485,000",
    image: "/images/prop-1.png",
    beds: 4,
    baths: 3,
    area: "320 m²",
    tag: "En venta",
  },
  {
    id: 2,
    name: "Residencia Mirador",
    location: "El Bosque, Zona Este",
    price: "$620,000",
    image: "/images/prop-2.png",
    beds: 5,
    baths: 4,
    area: "410 m²",
    tag: "Exclusiva",
  },
  {
    id: 3,
    name: "Casa Jardín Sur",
    location: "Valle Verde, Zona Sur",
    price: "$375,000",
    image: "/images/prop-3.png",
    beds: 3,
    baths: 2,
    area: "245 m²",
    tag: "En venta",
  },
  {
    id: 4,
    name: "Townhouse Alameda",
    location: "Centro Histórico",
    price: "$298,000",
    image: "/images/prop-4.png",
    beds: 3,
    baths: 2,
    area: "180 m²",
    tag: "Nueva",
  },
  {
    id: 5,
    name: "Apartamento Luz",
    location: "Distrito Financiero",
    price: "$265,000",
    image: "/images/prop-5.png",
    beds: 2,
    baths: 2,
    area: "120 m²",
    tag: "En venta",
  },
  {
    id: 6,
    name: "Hacienda El Retiro",
    location: "Afueras, Camino Real",
    price: "$710,000",
    image: "/images/prop-6.png",
    beds: 6,
    baths: 5,
    area: "560 m²",
    tag: "Exclusiva",
  },
];

export function FeaturedProperties() {
  return (
    <section id="propiedades" className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Propiedades destacadas
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
              Espacios pensados para vivir mejor
            </h2>
          </div>
          <Button variant="outline" render={<a href="#contacto" />}>
            Ver todas las propiedades
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden pt-0 transition-shadow hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                    {property.tag}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {property.name}
                  </h3>
                  <span className="whitespace-nowrap font-heading text-lg font-semibold text-accent">
                    {property.price}
                  </span>
                </div>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0" />
                  {property.location}
                </p>
                <div className="mt-1 flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="size-4" />
                    {property.beds} hab
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="size-4" />
                    {property.baths} baños
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="size-4" />
                    {property.area}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="secondary"
                  className="w-full"
                  render={<a href="#contacto" />}
                >
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
