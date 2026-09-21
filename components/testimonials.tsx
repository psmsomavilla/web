import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Compró en Las Lomas",
    image: "/images/client-1.png",
    quote:
      "El equipo hizo que todo el proceso fuera sencillo. Encontramos la casa perfecta para nuestra familia en menos de un mes.",
  },
  {
    name: "Carlos Ramírez",
    role: "Compró en El Bosque",
    image: "/images/client-2.png",
    quote:
      "Profesionalismo de principio a fin. Me asesoraron con total honestidad y siempre pensando en lo mejor para mí.",
  },
  {
    name: "Lucía Fernández",
    role: "Compró en Valle Verde",
    image: "/images/client-3.png",
    quote:
      "Nunca me sentí presionada. Entendieron exactamente lo que buscaba y superaron mis expectativas.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Testimonios
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
            Familias que ya encontraron su hogar
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card">
              <CardContent className="flex h-full flex-col gap-5">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="flex-1 leading-relaxed text-foreground text-pretty">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
