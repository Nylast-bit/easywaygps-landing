"use client"

import { useEffect, useState } from "react"

// Puntos reales del país; a cada uno se le suma un pequeño desplazamiento para que nunca se repita igual
const places = [
  { city: "Santiago", lat: 19.45082, lng: -70.69471 },
  { city: "Santo Domingo Este", lat: 18.48855, lng: -69.85707 },
  { city: "Punta Cana", lat: 18.58193, lng: -68.40431 },
  { city: "La Romana", lat: 18.42734, lng: -68.97285 },
  { city: "San Francisco de Macorís", lat: 19.30099, lng: -70.25259 },
  { city: "Puerto Plata", lat: 19.79344, lng: -70.6941 },
  { city: "Higüey", lat: 18.61501, lng: -68.70798 },
  { city: "Baní", lat: 18.27964, lng: -70.33185 },
  { city: "La Vega", lat: 19.22207, lng: -70.52956 },
  { city: "San Cristóbal", lat: 18.41662, lng: -70.10658 },
  { city: "Distrito Nacional", lat: 18.47186, lng: -69.93146 },
  { city: "Bávaro", lat: 18.68246, lng: -68.45305 },
]

const jitter = () => (Math.random() - 0.5) * 0.006

export function LiveCoords() {
  const [fix, setFix] = useState({ ...places[0], ago: 4 })

  useEffect(() => {
    let i = 0
    const id = window.setInterval(() => {
      i = (i + 1 + Math.floor(Math.random() * 3)) % places.length
      const p = places[i]
      setFix({ city: p.city, lat: p.lat + jitter(), lng: p.lng + jitter(), ago: 1 + Math.floor(Math.random() * 4) })
    }, 2800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <p className="mt-6 font-mono text-sm tabular-nums" aria-live="off">
      <span key={fix.city + fix.lat} className="inline-block animate-in fade-in duration-500">
        {fix.lat.toFixed(5)}, {fix.lng.toFixed(5)} <span className="opacity-75">· {fix.city} · hace {fix.ago} s</span>
      </span>
    </p>
  )
}
