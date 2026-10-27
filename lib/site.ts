// Datos del negocio en un solo lugar: los usan la página, los metadatos y el JSON-LD.
export const site = {
  name: "EasyWayGPS",
  url: "https://easywagps.com",
  tagline: "Es tu vuelta",
  phoneDisplay: "809-973-0250",
  phoneE164: "+18099730250",
  whatsapp: "18099730250",
  email: "easywaygps.info@gmail.com",
  address: {
    street: "Av. Prolongación 27 de Febrero",
    city: "Santo Domingo",
    region: "Distrito Nacional",
    country: "DO",
  },
  hours: [
    { days: "Lunes a viernes", time: "9:00 a.m. – 6:00 p.m.", schema: "Mo-Fr 09:00-18:00" },
    { days: "Sábados", time: "10:00 a.m. – 2:00 p.m.", schema: "Sa 10:00-14:00" },
  ],
  social: {
    instagram: "https://www.instagram.com/easywaygps/",
    facebook: "https://www.facebook.com/people/Easywaygps/61560188848980/",
    tiktok: "https://www.tiktok.com/@easywaygps",
  },
  plan: {
    price: 5500,
    renewal: 3000,
  },
} as const

export const rd = (n: number) => `RD$${n.toLocaleString("en-US")}`

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
