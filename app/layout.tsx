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
      <body >{children}</body>
    </html>
  )
}
