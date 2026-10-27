"use client"

import { useEffect, useState, type FormEvent } from "react"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { site, waLink } from "@/lib/site"

const vehicles = ["Carro", "Jeepeta", "Motor", "Camioneta", "Camión", "Otro"]

export function Contact() {
  const [vehicle, setVehicle] = useState("Carro")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text =
      `Hola, quiero instalar el GPS de EasyWay.\n\n` +
      `Nombre: ${data.get("nombre")}\n` +
      `Teléfono: ${data.get("telefono")}\n` +
      `Vehículo: ${vehicle}\n` +
      `Sector / ciudad: ${data.get("zona") || "—"}\n` +
      (data.get("mensaje") ? `Mensaje: ${data.get("mensaje")}\n` : "")
    window.open(waLink(text), "_blank", "noopener")
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-ink/20 bg-white px-3.5 py-3 text-base outline-none transition focus:border-[var(--ink)] focus:ring-2 focus:ring-pin/40"

  return (
    <section id="contacto" className="bg-[var(--teal)] py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="section-index">06 — Contacto</p>
          <h2 className="display mt-8 text-4xl leading-[0.95] sm:text-6xl">¿Hacemos la vuelta?</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
            Déjanos tus datos y te escribimos por WhatsApp para coordinar la instalación. O llámanos directo.
          </p>

          <ul className="mt-10 space-y-5">
            <li>
              <a href={`tel:${site.phoneE164}`} className="group flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--teal-deep)]"><Phone className="h-5 w-5" aria-hidden="true" /></span>
                <span>
                  <span className="mono-label block text-white/80">Teléfono y WhatsApp</span>
                  <span className="text-xl font-bold group-hover:underline">{site.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--teal-deep)]"><Mail className="h-5 w-5" aria-hidden="true" /></span>
                <span>
                  <span className="mono-label block text-white/80">Correo</span>
                  <span className="break-all text-lg font-bold group-hover:underline">{site.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--teal-deep)]"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
              <span>
                <span className="mono-label block text-white/80">Oficina</span>
                <span className="text-lg font-bold">{site.address.street}, {site.address.city}</span>
              </span>
            </li>
          </ul>

          <dl className="mt-10 grid max-w-md grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 border-t border-white/30 pt-6 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt className="font-semibold">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
            <dt className="font-semibold">Soporte técnico</dt>
            <dd>24 horas, 7 días</dd>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-[var(--paper)] p-6 text-[var(--ink)] shadow-[0_30px_60px_-30px_rgba(13,19,18,0.45)] sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Nombre
              <input name="nombre" required autoComplete="name" placeholder="Tu nombre" className={field} />
            </label>
            <label className="block text-sm font-semibold">
              Teléfono
              <input name="telefono" required type="tel" inputMode="tel" autoComplete="tel" placeholder="809-000-0000" pattern="[0-9\-\s\+\(\)]{10,}" className={field} />
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-semibold">Tipo de vehículo</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {vehicles.map((v) => (
                <button
                  key={v}
                  type="button"
                  aria-pressed={vehicle === v}
                  onClick={() => setVehicle(v)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    vehicle === v ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-ink/25 hover:border-[var(--ink)]"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="mt-5 block text-sm font-semibold">
            Sector o ciudad
            <input name="zona" autoComplete="address-level2" placeholder="Ej. Los Mina, Santiago, Bávaro…" className={field} />
          </label>

          <label className="mt-5 block text-sm font-semibold">
            Mensaje <span className="font-normal text-[var(--ink-soft)]">(opcional)</span>
            <textarea name="mensaje" rows={3} placeholder="¿Algo que debamos saber?" className={field} />
          </label>

          <button type="submit" className="btn-primary mt-7 w-full">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Enviar por WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-[var(--ink-soft)]">Se abre WhatsApp con tu mensaje listo para enviar.</p>
        </form>
      </div>
    </section>
  )
}

export function WhatsAppFloat() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const hero = document.getElementById("inicio")
    const onScroll = () => setShow(window.scrollY > (hero?.offsetHeight ?? 800) - window.innerHeight)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <a
      href={waLink("Hola, quiero más información sobre el GPS de EasyWay.")}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className={`fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition-all duration-300 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5c0-5.2 4.23-9.42 9.44-9.42a9.4 9.4 0 0 1 9.42 9.43c0 5.2-4.23 9.42-9.43 9.42m8.02-17.44A11.27 11.27 0 0 0 12.04.75C5.8.75.7 5.83.7 12.08c0 2 .52 3.95 1.52 5.66L.6 23.25l5.65-1.48a11.3 11.3 0 0 0 5.78 1.47h.01c6.25 0 11.34-5.08 11.34-11.33 0-3.03-1.18-5.87-3.32-8.01" />
      </svg>
    </a>
  )
}
