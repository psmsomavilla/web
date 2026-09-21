import { Award, HeartHandshake, Home, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15 años de experiencia",
    description:
      "Un equipo consolidado que conoce el mercado y defiende siempre tus intereses.",
  },
  {
    icon: Home,
    title: "Propiedades verificadas",
    description:
      "Cada inmueble pasa por una revisión legal y técnica antes de llegar a ti.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento total",
    description:
      "Te guiamos en cada paso, desde la primera visita hasta la firma final.",
  },
  {
    icon: ShieldCheck,
    title: "Transacciones seguras",
    description:
      "Procesos transparentes y asesoría jurídica para tu total tranquilidad.",
  },
];

const stats = [
  { value: "500+", label: "Propiedades vendidas" },
  { value: "15", label: "Años en el mercado" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "40+", label: "Asesores expertos" },
];

export function WhyChooseUs() {
  return (
    <section id="nosotros" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Por qué elegirnos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-foreground text-balance sm:text-4xl">
            Tu tranquilidad es nuestra prioridad
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Combinamos experiencia, cercanía y tecnología para que encontrar
            casa sea una experiencia agradable de principio a fin.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="size-6" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-heading text-4xl font-semibold sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-primary-foreground/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
