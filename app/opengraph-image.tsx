import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "EasyWayGPS — GPS para carros en República Dominicana. RD$5,500 el año."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Imagen para WhatsApp, Facebook y Google cuando comparten el enlace
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f3f0e7",
          backgroundImage:
            "linear-gradient(rgba(13,19,18,0.07) 2px, transparent 2px), linear-gradient(90deg, rgba(13,19,18,0.07) 2px, transparent 2px)",
          backgroundSize: "80px 80px",
          color: "#0d1312",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#0b6e5e" }}>GPS · REPÚBLICA DOMINICANA</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, fontWeight: 900, lineHeight: 0.95 }}>
          <span>Sabes dónde está.</span>
          <span style={{ color: "#15a38c" }}>Siempre.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 34 }}>
          <span style={{ fontWeight: 800 }}>EasyWayGPS</span>
          <span style={{ background: "#0d1312", color: "#fff", padding: "14px 28px", borderRadius: 999 }}>
            RD$5,500 el año · instalación incluida
          </span>
        </div>
      </div>
    ),
    size,
  )
}
