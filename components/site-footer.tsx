import { Home } from "lucide-react";

const columns = [
  {
    title: "Propiedades",
    links: ["Casas", "Apartamentos", "Townhouses", "Terrenos"],
  },
  {
    title: "Empresa",
    links: ["Sobre nosotros", "Equipo", "Testimonios", "Blog"],
  },
  {
    title: "Contacto",
    links: ["Agenda una visita", "Teléfono", "Correo", "Oficinas"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15">
                <Home className="size-5" />
              </span>
              <span className="font-heading text-xl font-semibold">
                Casas del Valle
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Más de 15 años ayudando a las familias a encontrar el hogar de sus
              sueños.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contacto"
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Casas del Valle. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
