import type { Metadata, Viewport } from "next"
import { Archivo, JetBrains_Mono } from "next/font/google"
import { faq } from "@/lib/faq"
import { site } from "@/lib/site"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
})

const title = "GPS para carros en República Dominicana | EasyWayGPS"
const description =
  "Rastreo GPS para tu carro, jeepeta o motor en República Dominicana. Ubicación en tiempo real, alertas y apagado remoto desde tu celular. RD$5,500 el año con instalación incluida."

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | EasyWayGPS" },
  description,
  applicationName: site.name,
  keywords: [
    "GPS República Dominicana",
    "GPS para carro",
    "GPS para mi carro",
    "rastreador GPS vehicular",
    "GPS para motor",
    "GPS para jeepeta",
    "localizador de vehículos RD",
    "rastreo vehicular Santo Domingo",
    "EasyWayGPS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  // Pega aquí el código de Google Search Console cuando lo tengas:
  // verification: { google: "XXXXXXXX" },
}

export const viewport: Viewport = {
  themeColor: "#0d1312",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#negocio`,
      name: site.name,
      description,
      url: site.url,
      logo: `${site.url}/images/logo.png`,
      image: `${site.url}/opengraph-image`,
      telephone: site.phoneE164,
      email: site.email,
      priceRange: "RD$5,500",
      currenciesAccepted: "DOP",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      areaServed: { "@type": "Country", name: "República Dominicana" },
      openingHours: site.hours.map((h) => h.schema),
      sameAs: Object.values(site.social),
    },
    {
      "@type": "Product",
      name: "Plan anual de rastreo GPS vehicular",
      description: "Equipo GPS, instalación y 12 meses de servicio de rastreo en tiempo real para carros, jeepetas y motores.",
      brand: { "@type": "Brand", name: site.name },
      offers: {
        "@type": "Offer",
        price: site.plan.price,
        priceCurrency: "DOP",
        availability: "https://schema.org/InStock",
        url: `${site.url}/#plan`,
        seller: { "@id": `${site.url}/#negocio` },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-DO" className={`${archivo.variable} ${mono.variable} scroll-smooth`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
