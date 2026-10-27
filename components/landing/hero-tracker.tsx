"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, MessageCircle } from "lucide-react"
import { MAP_H, MAP_W, ROUTE_D, SantoDomingoMap, toLatLng } from "./santo-domingo-map"
import { PIN_H, PIN_SRC, PIN_W } from "./pin"
import { rd, site, waLink } from "@/lib/site"

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const easeSlope = (t: number) => (t < 0.5 ? 12 * t * t : 3 * Math.pow(-2 * t + 2, 2))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const COMPASS = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"]

function streetAt(x: number, y: number, done: boolean) {
  if (done) return "Av. Independencia, Gazcue"
  if (x < 935 && y < 480) return "Av. 27 de Febrero"
  if (y < 680) return "Av. Abraham Lincoln"
  return "Av. Independencia"
}

export function HeroTracker() {
  const sectionRef = useRef<HTMLElement>(null)
  const cameraRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const routeRef = useRef<SVGPathElement>(null)
  const trailRef = useRef<SVGPathElement>(null)
  const carRef = useRef<SVGGElement>(null)
  const carBodyRef = useRef<SVGGElement>(null)
  const pinRef = useRef<SVGGElement>(null)
  const ringRef = useRef<SVGCircleElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const fadeRef = useRef<HTMLDivElement>(null)
  const f = {
    lat: useRef<HTMLSpanElement>(null),
    lng: useRef<HTMLSpanElement>(null),
    speed: useRef<HTMLSpanElement>(null),
    heading: useRef<HTMLSpanElement>(null),
    street: useRef<HTMLSpanElement>(null),
    status: useRef<HTMLSpanElement>(null),
    clock: useRef<HTMLSpanElement>(null),
    card: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const section = sectionRef.current
    const route = routeRef.current
    if (!section || !route) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const len = route.getTotalLength()
    const end = route.getPointAtLength(len)
    if (trailRef.current) trailRef.current.style.strokeDasharray = `${len} ${len}`
    let smooth = reduce ? 1 : 0
    let raf = 0
    let visible = true
    let lastAngle = 0
    let lastSecond = -1

    const clockFmt = new Intl.DateTimeFormat("es-DO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "America/Santo_Domingo",
    })

    const set = (ref: React.RefObject<HTMLElement | null>, text: string) => {
      if (ref.current && ref.current.textContent !== text) ref.current.textContent = text
    }

    const frame = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const total = Math.max(1, section.offsetHeight - vh)
      const target = reduce ? 1 : clamp(-section.getBoundingClientRect().top / total)
      smooth += (target - smooth) * 0.14
      if (Math.abs(target - smooth) < 0.0005) smooth = target
      const p = smooth

      // Fases: 0–0.06 señal · 0.06–0.76 en ruta · 0.78–0.92 ubicado
      const driveRaw = clamp((p - 0.06) / 0.7)
      const drive = ease(driveRaw)
      const located = clamp((p - 0.78) / 0.14)
      const done = driveRaw >= 1

      const at = route.getPointAtLength(drive * len)
      if (!done) {
        const ahead = route.getPointAtLength(Math.min(len, drive * len + 2))
        if (ahead.x !== at.x || ahead.y !== at.y) lastAngle = Math.atan2(ahead.y - at.y, ahead.x - at.x)
      }
      const pt = done ? end : at
      const deg = (lastAngle * 180) / Math.PI

      carRef.current?.setAttribute("transform", `translate(${pt.x} ${pt.y})`)
      carBodyRef.current?.setAttribute("transform", `rotate(${deg})`)
      if (trailRef.current) trailRef.current.style.strokeDashoffset = String(len * (1 - drive))

      const drop = ease(located)
      pinRef.current?.setAttribute("transform", `translate(0 ${lerp(-140, 0, drop)})`)
      if (pinRef.current) pinRef.current.style.opacity = String(clamp(located * 3))
      ringRef.current?.classList.toggle("is-on", located > 0.6)

      // Cámara: sigue al vehículo y hace zoom al ubicarlo
      const mobile = vw < 768
      const compact = vw < 1024
      // En móvil y tablet el texto se aparta mientras el vehículo recorre la ruta y vuelve al ubicarlo.
      // En móvil la telemetría ocupa su lugar mientras tanto.
      const copyVis = compact ? clamp(1 - clamp((p - 0.03) / 0.07) + clamp((p - 0.86) / 0.1)) : 1
      const cardVis = mobile ? 1 - copyVis : 1
      const zoom = lerp(mobile ? 1.15 : 1.05, mobile ? 1.6 : 1.7, ease(clamp((p - 0.66) / 0.3)))
      const s = Math.max(vw / MAP_W, vh / MAP_H) * zoom
      let ax = vw * 0.66
      let ay = vh * 0.52
      if (compact && copyRef.current && f.card.current) {
        // El vehículo (con el pin encima) se centra en el espacio libre que dejan el texto y la tarjeta
        const copyBottom = copyRef.current.offsetTop + copyRef.current.offsetHeight
        const freeHidden = (64 + (mobile ? f.card.current.offsetTop : vh)) / 2
        const freeVisible = (copyBottom + vh) / 2
        // En tablet la tarjeta queda abajo a la derecha, así que al volver el texto el vehículo se corre a la izquierda
        ax = vw * (mobile ? 0.5 : lerp(0.5, 0.3, copyVis))
        ay = lerp(freeHidden, freeVisible, copyVis) + 35
      }
      // A la izquierda se permite pasar del borde: queda tapado por el degradado del texto
      const tx = clamp(ax - pt.x * s, vw - MAP_W * s, compact ? 0 : vw * 0.45)
      const ty = clamp(ay - pt.y * s, vh - MAP_H * s, compact ? vh * 0.5 : 0)
      if (cameraRef.current) {
        cameraRef.current.style.width = `${MAP_W}px`
        cameraRef.current.style.height = `${MAP_H}px`
        cameraRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${s})`
      }
      // Capas con velocidad distinta = parallax
      if (gridRef.current) gridRef.current.style.backgroundPosition = `${tx * 0.35}px ${ty * 0.35}px`
      if (copyRef.current) {
        const c = copyRef.current.style
        c.transform = compact ? `translate3d(0, ${(copyVis - 1) * 28}px, 0)` : `translate3d(0, ${-p * 70}px, 0)`
        c.opacity = String(copyVis)
        c.pointerEvents = copyVis < 0.5 ? "none" : ""
      }
      if (fadeRef.current) fadeRef.current.style.opacity = String(copyVis)
      if (f.card.current) {
        f.card.current.style.transform = `translate3d(0, ${mobile ? (1 - cardVis) * 24 : (1 - p) * 24}px, 0)`
        f.card.current.style.opacity = String(cardVis)
      }

      // Telemetría
      const { lat, lng } = toLatLng(pt.x, pt.y)
      set(f.lat, lat.toFixed(5))
      set(f.lng, lng.toFixed(5))
      const jitter = Math.round(Math.sin(performance.now() / 700) * 1.2)
      const kmh = done || driveRaw <= 0 ? 0 : Math.max(4, Math.round((easeSlope(driveRaw) / 1.5) * 52) + jitter)
      set(f.speed, String(kmh))
      set(f.heading, COMPASS[Math.round((((90 + deg) % 360) + 360) % 360 / 45) % 8])
      set(f.street, streetAt(pt.x, pt.y, done))
      set(
        f.status,
        located > 0.6 ? "Ubicado · motor apagado" : done ? "Detenido" : driveRaw > 0 ? "En movimiento" : "Señal GPS fija",
      )
      const now = new Date()
      if (now.getSeconds() !== lastSecond) {
        lastSecond = now.getSeconds()
        set(f.clock, clockFmt.format(now))
      }

      if (visible) raf = requestAnimationFrame(frame)
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      cancelAnimationFrame(raf)
      if (visible) raf = requestAnimationFrame(frame)
    })
    io.observe(section)
    raf = requestAnimationFrame(frame)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section ref={sectionRef} id="inicio" className="hero-track relative" aria-labelledby="hero-title">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-[var(--map-land)]">
        {/* Capa 1: plano */}
        <div ref={cameraRef} className="absolute left-0 top-0 origin-top-left will-change-transform" style={{ width: MAP_W, height: MAP_H }}>
          <SantoDomingoMap className="absolute inset-0 h-full w-full" />
          <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path ref={routeRef} d={ROUTE_D} fill="none" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
            <path
              ref={trailRef}
              d={ROUTE_D}
              fill="none"
              stroke="var(--teal)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: "1400 1400", strokeDashoffset: 1400 }}
            />
            <g ref={carRef} transform="translate(400 467.5)">
              <circle ref={ringRef} className="locate-ring" r="34" fill="var(--teal)" fillOpacity="0.12" stroke="var(--teal)" strokeWidth="1.5" />
              <g ref={carBodyRef}>
                <rect x="-21" y="-9" width="44" height="22" rx="7" fill="var(--ink)" opacity="0.18" />
                <rect x="-22" y="-11" width="44" height="22" rx="7" fill="var(--ink)" />
                <rect x="3" y="-8.5" width="9" height="17" rx="2.5" fill="#55615e" />
                <rect x="-17" y="-8" width="6" height="16" rx="2" fill="#55615e" />
                <rect x="-10" y="-8" width="12" height="16" rx="2" fill="#222a28" />
                <rect x="19" y="-9.5" width="3" height="4" rx="1" fill="#f6eec8" />
                <rect x="19" y="5.5" width="3" height="4" rx="1" fill="#f6eec8" />
                <rect x="-22" y="-9.5" width="2" height="4" rx="1" fill="#d6453a" />
                <rect x="-22" y="5.5" width="2" height="4" rx="1" fill="#d6453a" />
              </g>
              <g ref={pinRef} style={{ opacity: 0 }}>
                {/* La punta del pin queda justo sobre el vehículo */}
                <image href={PIN_SRC} x={-24} y={-78} width={48} height={(48 * PIN_H) / PIN_W} />
              </g>
            </g>
          </svg>
        </div>

        {/* Capa 2: retícula de coordenadas, se mueve más lento que el plano */}
        <div ref={gridRef} className="hud-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div ref={fadeRef} className="hero-fade pointer-events-none absolute inset-0" aria-hidden="true" />

        {/* Capa 3: contenido */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 pb-6 pt-24 sm:px-6 md:justify-center md:pt-20">
          <div ref={copyRef} className="max-w-xl will-change-transform">
            <h1 id="hero-title">
              <span className="mono-label block text-[var(--teal-deep)]">GPS para carros, jeepetas y motores · República Dominicana</span>
              <span className="display mt-3 block text-[2.6rem] leading-[0.92] sm:text-6xl lg:text-7xl">
                Sabes dónde está.
                <span className="block text-[var(--teal)]">Siempre.</span>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              Ubicación en tiempo real desde tu celular, alertas al instante y el historial de cada ruta. Un solo pago de{" "}
              <strong className="text-[var(--ink)]">{rd(site.plan.price)}</strong> por todo el año.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={waLink("Hola, quiero instalar el GPS de EasyWay en mi vehículo.")} target="_blank" rel="noopener" className="btn-primary">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Lo quiero
              </a>
              <a href="#plan" className="btn-ghost">
                Ver el plan
              </a>
            </div>
          </div>

          <div
            ref={f.card}
            className="telemetry mt-auto w-full self-stretch md:absolute md:bottom-8 md:right-6 md:w-[340px]"
            aria-label="Ejemplo de telemetría en vivo"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]">
                <span className="live-dot" aria-hidden="true" />
                En vivo
              </span>
              <span className="font-mono text-[11px] text-white/60">Jeepeta · G482917</span>
            </div>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 px-4 py-3 font-mono text-[13px]">
              <div>
                <dt>Lat</dt>
                <dd ref={f.lat}>18.47273</dd>
              </div>
              <div>
                <dt>Lng</dt>
                <dd ref={f.lng}>-69.96900</dd>
              </div>
              <div>
                <dt>Velocidad</dt>
                <dd>
                  <span ref={f.speed}>0</span> km/h
                </dd>
              </div>
              <div>
                <dt>Rumbo</dt>
                <dd ref={f.heading}>E</dd>
              </div>
              <div className="col-span-2">
                <dt>Calle</dt>
                <dd ref={f.street}>Av. 27 de Febrero</dd>
              </div>
              <div className="hidden sm:block">
                <dt>Estado</dt>
                <dd ref={f.status} className="text-[var(--teal-bright)]">Señal GPS fija</dd>
              </div>
              <div className="hidden sm:block">
                <dt>Hora local</dt>
                <dd ref={f.clock}>—</dd>
              </div>
            </dl>
            <div className="border-t border-white/10 px-4 py-2 font-mono text-[11px] text-white/50">4G LTE · respaldo 2G · precisión ±3 m</div>
          </div>
        </div>

        <a
          href="#como-funciona"
          className="scroll-cue absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 md:flex"
        >
          Desliza y síguelo <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
