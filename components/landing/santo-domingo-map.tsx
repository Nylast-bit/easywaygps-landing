// Plano estilizado de Santo Domingo (Distrito Nacional). Las avenidas están colocadas
// según sus coordenadas reales aproximadas para que la telemetría del hero sea creíble.
// Proyección lineal: x 0–1600 = lng -69.975 → -69.895 · y 0–1000 = lat 18.495 → 18.445

export const MAP_W = 1600
export const MAP_H = 1000

export function toLatLng(x: number, y: number) {
  return {
    lat: 18.495 - (y / MAP_H) * 0.05,
    lng: -69.975 + (x / MAP_W) * 0.08,
  }
}

// Recorrido: Av. 27 de Febrero hacia el este → Av. Abraham Lincoln al sur → Av. Independencia al este.
export const ROUTE_D =
  "M400 467.5 L910 457.94 Q940 457.375 940 487 L940 663 Q940 693.2 970 692.6 L1220 687.6"

// Avenidas con leve inclinación (este–oeste) y verticales (norte–sur)
const ew = [
  { name: "Av. John F. Kennedy", y0: 205, y1: 168, w: 13 },
  { name: "Av. 27 de Febrero", y0: 475, y1: 445, w: 15 },
  { name: "Av. Sarasota", y0: 600, y1: 585, w: 8, to: 1000 },
  { name: "Av. Independencia", y0: 712, y1: 680, w: 9 },
]
const ns = [
  { name: "Av. Núñez de Cáceres", x: 400, w: 9 },
  { name: "Av. Winston Churchill", x: 700, w: 13 },
  { name: "Av. Abraham Lincoln", x: 940, w: 12 },
  { name: "Av. Tiradentes", x: 1080, w: 8, to: 470 },
  { name: "Av. Máximo Gómez", x: 1300, w: 11 },
]

const coast = (x: number) => 965 - (x / MAP_W) * 85 + Math.sin(x / 140) * 9

// Calles secundarias deterministas (sin Math.random para que SSR y cliente coincidan)
function minorStreets() {
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = []
  for (let i = 0; i < 34; i++) {
    const x = 18 + i * 47 + ((i * 37) % 13)
    lines.push({ x1: x, y1: 0, x2: x + ((i * 7) % 9) - 4, y2: coast(x) - 18 })
  }
  for (let j = 0; j < 22; j++) {
    const y = 22 + j * 43 + ((j * 29) % 11)
    lines.push({ x1: 0, y1: y, x2: MAP_W, y2: y - 22 - ((j * 5) % 7) })
  }
  return lines
}

function coastPath() {
  let d = `M0 ${coast(0).toFixed(1)}`
  for (let x = 40; x <= MAP_W; x += 40) d += ` L${x} ${coast(x).toFixed(1)}`
  return d
}

export function SantoDomingoMap({ className }: { className?: string }) {
  const coastD = coastPath()
  const slope = (a: { y0: number; y1: number }) => ((Math.atan2(a.y1 - a.y0, MAP_W) * 180) / Math.PI).toFixed(3)
  return (
    <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="sd-sea" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)">
          <line x1="0" y1="7" x2="14" y2="7" stroke="var(--map-sea-line)" strokeWidth="1.3" />
        </pattern>
        <clipPath id="sd-land">
          <path d={`${coastD} L${MAP_W} 0 L0 0 Z`} />
        </clipPath>
      </defs>

      <rect width={MAP_W} height={MAP_H} fill="var(--map-land)" />

      <g clipPath="url(#sd-land)">
        {minorStreets().map((l, i) => (
          <line key={i} {...l} stroke="var(--map-minor)" strokeWidth="3" />
        ))}

        {/* Parques reales como referencia visual */}
        <path d="M180 842 L620 812 L626 846 L186 878 Z" fill="var(--map-park)" />
        <rect x="1112" y="228" width="150" height="196" rx="6" fill="var(--map-park)" transform="rotate(-1 1187 326)" />
        <rect x="560" y="250" width="95" height="120" rx="4" fill="var(--map-block)" />
        <rect x="980" y="520" width="140" height="58" rx="4" fill="var(--map-block)" />
        <rect x="210" y="300" width="120" height="90" rx="4" fill="var(--map-block)" />

        {ew.map((a) => {
          const x2 = a.to ?? MAP_W
          const y2 = a.y0 + ((a.y1 - a.y0) * x2) / MAP_W
          return (
            <g key={a.name}>
              <line x1="0" y1={a.y0} x2={x2} y2={y2} stroke="var(--map-road-edge)" strokeWidth={a.w + 4} strokeLinecap="round" />
              <line x1="0" y1={a.y0} x2={x2} y2={y2} stroke="var(--map-road)" strokeWidth={a.w} strokeLinecap="round" />
            </g>
          )
        })}
        {ns.map((a) => (
          <g key={a.name}>
            <line x1={a.x} y1="0" x2={a.x} y2={a.to ?? MAP_H} stroke="var(--map-road-edge)" strokeWidth={a.w + 4} />
            <line x1={a.x} y1="0" x2={a.x} y2={a.to ?? MAP_H} stroke="var(--map-road)" strokeWidth={a.w} />
          </g>
        ))}

        {/* Malecón siguiendo la costa */}
        <path d={coastD} transform="translate(0 -16)" fill="none" stroke="var(--map-road-edge)" strokeWidth="16" />
        <path d={coastD} transform="translate(0 -16)" fill="none" stroke="var(--map-road)" strokeWidth="11" />
      </g>

      <path d={`${coastD} L${MAP_W} ${MAP_H} L0 ${MAP_H} Z`} fill="var(--map-sea)" />
      <path d={`${coastD} L${MAP_W} ${MAP_H} L0 ${MAP_H} Z`} fill="url(#sd-sea)" />
      <path d={coastD} fill="none" stroke="var(--map-coast)" strokeWidth="2" />

      <g className="map-labels" fill="var(--map-label)">
        {ew.map((a) => (
          <text key={a.name} x="60" y={a.y0 - a.w} transform={`rotate(${slope(a)} 60 ${a.y0})`}>
            {a.name.toUpperCase()}
          </text>
        ))}
        {ns.map((a) => (
          <text key={a.name} x={a.x + a.w + 6} y="120" transform={`rotate(90 ${a.x + a.w + 6} 120)`}>
            {a.name.toUpperCase()}
          </text>
        ))}
        <text x="1135" y="330" className="map-label-place">CENTRO OLÍMPICO</text>
        <text x="300" y="836" className="map-label-place" transform="rotate(-4 300 836)">PARQUE MIRADOR SUR</text>
        <text x="760" y="932" className="map-label-place" transform="rotate(-3 760 932)">MALECÓN</text>
        <text x="620" y="985" className="map-label-sea">MAR CARIBE</text>
      </g>
    </svg>
  )
}
