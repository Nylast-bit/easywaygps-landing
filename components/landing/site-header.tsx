"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { waLink } from "@/lib/site"

const links = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#funciones", label: "Funciones" },
  { href: "#plan", label: "Precio" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-[var(--rule)] bg-white/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="EasyWayGPS, ir al inicio" className="shrink-0">
          <Image src="/images/logo-tight.png" alt="EasyWayGPS" width={413} height={127} priority className="h-8 w-auto sm:h-9" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 text-[0.95rem] font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Hola, quiero más información sobre el GPS de EasyWay.")}
            target="_blank"
            rel="noopener"
            className="btn-primary hidden !min-h-10 !px-4 !text-sm sm:inline-flex"
          >
            Escríbenos
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--rule)] md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-movil" aria-label="Móvil" className="border-t border-[var(--rule)] px-4 pb-5 pt-2 md:hidden">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 border-b border-[var(--rule)] py-3 text-lg font-semibold"
            >
              <span className="font-mono text-xs text-[var(--teal-deep)]">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Hola, quiero más información sobre el GPS de EasyWay.")}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-4 w-full"
          >
            Escríbenos por WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  )
}
