import { Check, MessageCircle, Plus } from "lucide-react"
import { Pin } from "./pin"
import { LiveCoords } from "./live-coords"
import { faq } from "@/lib/faq"
import { rd, site, waLink } from "@/lib/site"

/* ---------------------------------------------------------------- Cómo funciona */

const steps = [
  {
    n: "01",
    title: "Nos escribes",
    text: "Por WhatsApp o llamada. Nos dices qué vehículo tienes y coordinamos la instalación.",
  },
  {
    n: "02",
    title: "Lo instalamos",
    text: "Colocamos el equipo de forma discreta dentro del vehículo. La instalación va incluida en el precio.",
  },
  {
    n: "03",
    title: "Lo ves en tu celular",
    text: "Entras a la app y ya está: tu vehículo en el mapa, en tiempo real, desde donde estés.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative border-t border-[var(--rule)] bg-[var(--paper)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="section-index text-[var(--ink-soft)]">01 — Cómo funciona</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <h2 className="display text-4xl leading-[0.95] sm:text-5xl">
            Tres pasos y <span className="text-[var(--teal-deep)]">es tu vuelta.</span>
          </h2>
          <p className="max-w-xl self-end text-lg leading-relaxed text-[var(--ink-soft)]">
            Nada de visitas a oficinas ni papeleo largo. Nos escribes hoy y en poco tiempo estás viendo tu carro, jeepeta o
            motor desde el celular.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* La ruta punteada que une los pasos, igual que en el mapa */}
          <svg
            className="pointer-events-none absolute left-0 top-[38px] hidden h-6 w-full md:block"
            viewBox="0 0 100 6"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M2 3 C 30 0, 40 6, 66 3 S 90 1, 98 3" fill="none" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="0.25" strokeDasharray="0.6 1.4" vectorEffect="non-scaling-stroke" />
          </svg>
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="flex items-center gap-4">
                <span className="relative grid h-[76px] w-[76px] shrink-0 place-items-center rounded-full border-[1.5px] border-[var(--ink)] bg-[var(--paper)] font-mono text-lg font-semibold">
                  {s.n}
                </span>
                {i === steps.length - 1 ? <Pin className="h-12 w-auto" /> : null}
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-[var(--ink-soft)]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- Funciones */

function Alert({ time, title, body, tone = "teal" }: { time: string; title: string; body: string; tone?: "teal" | "signal" }) {
  return (
    <div className="rounded-lg bg-white/[0.06] px-3.5 py-3 ring-1 ring-white/10">
      <div className="flex items-center justify-between text-[11px] text-white/45">
        <span className="flex items-center gap-1.5 font-semibold uppercase tracking-[0.12em]">
          <span className={`h-1.5 w-1.5 rounded-full ${tone === "signal" ? "bg-[var(--signal)]" : "bg-[var(--teal-bright)]"}`} />
          EasyWay
        </span>
        <span className="font-mono">{time}</span>
      </div>
      <p className="mt-1 text-sm font-semibold text-white">{title}</p>
      <p className="text-[13px] text-white/60">{body}</p>
    </div>
  )
}

export function Features() {
  return (
    <section id="funciones" className="bg-[var(--ink)] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="section-index text-white/60">02 — Funciones</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2 className="display text-4xl leading-[0.95] sm:text-5xl">
            Todo lo que pasa con tu vehículo, <span className="text-[var(--teal-bright)]">en tu bolsillo.</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/65">
            Un rastreador GPS de verdad, no una app de pasar el rato. Ubicación, alertas, rutas y control, todo incluido en el
            plan.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {/* Alertas */}
          <article className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 md:col-span-3 md:row-span-2">
            <h3 className="text-xl font-bold">Alertas al instante</h3>
            <p className="mt-2 max-w-sm text-white/60">
              Te llega una notificación cuando tu vehículo se enciende, se mueve, va muy rápido o sale de una zona.
            </p>
            <div className="mt-6 space-y-2.5">
              <Alert time="6:42 a.m." title="Tu vehículo se encendió" body="G482917 · Los Prados, Santo Domingo" />
              <Alert time="8:15 a.m." title="Exceso de velocidad: 96 km/h" body="Autopista Duarte, km 18 · límite configurado 80 km/h" tone="signal" />
              <Alert time="1:03 p.m." title="Salió de la zona “Casa”" body="Geocerca de 300 m · Av. Sarasota" />
              <Alert time="1:04 p.m." title="Motor apagado a distancia" body="Comando confirmado por el equipo" tone="signal" />
            </div>
          </article>

          {/* Tiempo real */}
          <article className="rounded-2xl bg-[var(--teal)] p-6 text-white md:col-span-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Ubicación en tiempo real</h3>
                <p className="mt-2 max-w-xs text-white/85">Precisión de hasta 3 metros. Abres la app y lo ves moverse.</p>
              </div>
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white"><Pin className="h-10 w-auto" /></span>
            </div>
            <LiveCoords />
          </article>

          {/* Geocercas */}
          <article className="relative overflow-hidden rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 md:col-span-3 lg:col-span-1 lg:col-start-4">
            <h3 className="text-xl font-bold">Geocercas</h3>
            <p className="mt-2 text-sm text-white/60">Marca casa, trabajo o colegio y entérate cuando entra o sale.</p>
            <svg viewBox="0 0 160 80" className="mt-4 w-full" aria-hidden="true">
              <path d="M0 52 H160 M0 20 H160 M48 0 V80 M112 0 V80" stroke="white" strokeOpacity="0.12" strokeWidth="3" />
              <circle cx="80" cy="40" r="28" fill="var(--teal)" fillOpacity="0.15" stroke="var(--teal-bright)" strokeDasharray="4 4" />
              <circle cx="80" cy="40" r="4" fill="var(--teal-bright)" />
            </svg>
          </article>

          {/* Historial */}
          <article className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 md:col-span-3 lg:col-span-2">
            <h3 className="text-xl font-bold">Historial de rutas</h3>
            <p className="mt-2 text-sm text-white/60">Por dónde anduvo, a qué hora y cuánto tiempo se detuvo.</p>
            <ul className="mt-4 space-y-1.5 font-mono text-[12px] text-white/70">
              <li className="flex justify-between"><span>07:10</span><span>Salida · Arroyo Hondo</span></li>
              <li className="flex justify-between"><span>07:48</span><span>Parada 22 min · Piantini</span></li>
              <li className="flex justify-between"><span>12:30</span><span>Parada 1 h · Naco</span></li>
              <li className="flex justify-between text-[var(--teal-bright)]"><span>18:05</span><span>Llegada · Arroyo Hondo</span></li>
            </ul>
          </article>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-white/15 pt-10 md:grid-cols-4">
          {[
            ["150+", "clientes activos"],
            ["24/7", "soporte técnico"],
            ["±3 m", "de precisión"],
            ["4G + 2G", "cobertura nacional"],
          ].map(([k, v]) => (
            <div key={v}>
              <dt className="sr-only">{v}</dt>
              <dd className="display text-3xl sm:text-4xl">{k}</dd>
              <dd className="mono-label mt-1 text-white/50">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- Plan */

const included = [
  "Equipo GPS e instalación",
  "12 meses de servicio sin mensualidades",
  "App móvil y plataforma web",
  "Ubicación en tiempo real e historial",
  "Alertas de encendido, movimiento y velocidad",
  "Geocercas ilimitadas",
  "Soporte técnico 24/7",
]

export function Pricing() {
  const perMonth = Math.round(site.plan.price / 12)
  const renewalMonth = Math.round(site.plan.renewal / 12)
  return (
    <section id="plan" className="relative overflow-hidden bg-[var(--paper-2)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="section-index text-[var(--ink-soft)]">03 — Precio</p>
        <h2 className="display mt-8 max-w-3xl text-4xl leading-[0.95] sm:text-5xl">
          Un solo plan. <span className="text-[var(--teal-deep)]">Un solo pago al año.</span>
        </h2>

        <div className="mt-12 grid overflow-hidden rounded-3xl bg-[var(--paper)] shadow-[0_30px_60px_-30px_rgba(13,19,18,0.35)] ring-1 ring-[var(--rule)] lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-w-0 p-6 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap rounded-full bg-[var(--ink)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                Plan anual
              </span>
              <span className="mono-label text-[var(--teal-deep)]">Instalación incluida</span>
            </div>

            <p className="mt-8 flex items-start gap-1 leading-none">
              <span className="mt-3 text-2xl font-bold">RD$</span>
              <span className="display text-[4.25rem] sm:text-[7.5rem]">{site.plan.price.toLocaleString("en-US")}</span>
            </p>
            <p className="mt-2 text-lg font-semibold">por todo un año de servicio</p>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-[var(--rule)] ring-1 ring-[var(--rule)]">
              <div className="min-w-0 bg-[var(--paper)] p-3.5 sm:p-4">
                <p className="mono-label text-[var(--ink-soft)]">Equivale a</p>
                <p className="mt-1 text-xl font-bold sm:text-2xl">{rd(perMonth)}<span className="text-base font-medium text-[var(--ink-soft)]">/mes</span></p>
                <p className="text-sm text-[var(--ink-soft)]">menos de RD$16 al día</p>
              </div>
              <div className="min-w-0 bg-[var(--paper)] p-3.5 sm:p-4">
                <p className="mono-label text-[var(--ink-soft)]">Renovación</p>
                <p className="mt-1 text-xl font-bold sm:text-2xl">{rd(site.plan.renewal)}<span className="text-base font-medium text-[var(--ink-soft)]">/año</span></p>
                <p className="text-sm text-[var(--ink-soft)]">unos {rd(renewalMonth)} al mes</p>
              </div>
            </div>

            <a
              href={waLink(`Hola, quiero el plan anual de ${rd(site.plan.price)} con renovación de ${rd(site.plan.renewal)}.`)}
              target="_blank"
              rel="noopener"
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Quiero mi GPS
            </a>
          </div>

          <div className="relative min-w-0 border-t border-dashed border-ink/25 bg-[var(--ink)] p-7 text-white sm:p-10 lg:border-l lg:border-t-0">
            <p className="mono-label text-white/50">Qué incluye</p>
            <ul className="mt-5 space-y-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--teal-bright)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-white/60">
              Pagas una vez y te olvidas por 12 meses. Al terminar el año, renuevas por {rd(site.plan.renewal)} y sigues
              con todo igual.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- Testimonios */

const quotes = [
  {
    text: "El sistema es preciso y fácil de usar. La app es intuitiva y las alertas llegan al instante.",
    name: "Ana Martínez",
    role: "Motor · Santo Domingo",
  },
  {
    text: "Lo uso para los vehículos de delivery. Veo las rutas en tiempo real y organizo mejor las entregas.",
    name: "Roberto Silva",
    role: "Logística",
  },
  {
    text: "La instalación fue rapidísima y el soporte responde. Me siento más tranquila sabiendo dónde está mi carro.",
    name: "Carmen López",
    role: "Carro particular",
  },
]

export function Testimonials() {
  return (
    <section id="clientes" className="bg-[var(--paper)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="section-index text-[var(--ink-soft)]">04 — Clientes</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {quotes.map((q) => (
            <figure key={q.name} className="border-t-2 border-[var(--ink)] pt-6">
              <blockquote className="text-xl font-medium leading-snug tracking-tight">“{q.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--teal)] text-sm font-bold text-white">
                  {q.name.split(" ").map((w) => w[0]).join("")}
                </span>
                <span>
                  <span className="block font-semibold">{q.name}</span>
                  <span className="mono-label text-[var(--ink-soft)]">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- FAQ */

export function Faq() {
  return (
    <section id="preguntas" className="border-t border-[var(--rule)] bg-[var(--paper)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <p className="section-index text-[var(--ink-soft)]">05 — Preguntas</p>
          <h2 className="display mt-8 text-4xl leading-[0.95] sm:text-5xl">Lo que nos preguntan antes de instalar.</h2>
          <p className="mt-5 max-w-sm text-[var(--ink-soft)]">
            ¿No ves tu pregunta?{" "}
            <a href={waLink("Hola, tengo una pregunta sobre el GPS.")} target="_blank" rel="noopener" className="font-semibold text-[var(--teal-deep)] underline underline-offset-4">
              Escríbenos por WhatsApp
            </a>
            .
          </p>
        </div>
        <div className="border-t border-[var(--ink)]">
          {faq.map((item) => (
            <details key={item.q} className="group border-b border-[var(--rule)]">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                <h3>{item.q}</h3>
                <Plus className="mt-1 h-5 w-5 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="-mt-1 max-w-2xl pb-6 leading-relaxed text-[var(--ink-soft)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
