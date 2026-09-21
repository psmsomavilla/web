"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Home className="size-5" />
          </span>
          <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Casas del Valle
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contacto">Agenda una visita</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2">
            <a href="#contacto" onClick={() => setOpen(false)}>
              Agenda una visita
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
