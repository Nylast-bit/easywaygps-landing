import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EasyWayGPS Landing Page',
  description: 'La mejor manera de proteger tu vehículo con el sistema de monitoreo más confiable del mercado.',
  generator: 'EasyWayGPS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EasyWayGPS - Rastreo Vehicular Inteligente en RD</title>


        <meta name="description" content="EasyWayGPS ofrece rastreo vehicular en tiempo real, control total, historial, geocercas, alertas y más. Plataforma web y móvil moderna para tu seguridad." />
        <meta name="keywords" content="EasyWayGPS, rastreo GPS RD, localizador de vehículos, monitoreo vehicular, GPS en tiempo real, geocercas, alertas de movimiento, apagado remoto" />
        <meta name="author" content="EasyWayGPS Team" />


        <meta property="og:title" content="EasyWayGPS - Rastreo Vehicular Inteligente en RD" />
        <meta property="og:description" content="Monitorea, protege y gestiona tu vehículo con EasyWayGPS. Plataforma inteligente con alertas, historial y control total." />
        <meta property="og:url" content="https://easywagps.com" />
        <meta property="og:type" content="website" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EasyWayGPS - Rastreo Vehicular Inteligente en RD" />
        <meta name="twitter:description" content="Rastreo en tiempo real, alertas, historial, geocercas, y más. Controla tu flota o vehículo desde donde estés." />



        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
      </head>

      <body >{children}</body>
    </html>
  )
}
