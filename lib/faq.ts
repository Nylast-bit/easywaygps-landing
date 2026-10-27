import { rd, site } from "./site"

// Preguntas reales que la gente escribe en Google. Se usan en la página y en el JSON-LD.
export const faq = [
  {
    q: "¿Cuánto cuesta un GPS para carro en República Dominicana con EasyWay?",
    a: `El plan anual cuesta ${rd(site.plan.price)} e incluye el equipo, la instalación y 12 meses de servicio. Después del primer año renuevas por ${rd(site.plan.renewal)} al año. No pagas mensualidades.`,
  },
  {
    q: "¿Tengo que pagar mensualidad?",
    a: `No. Pagas una sola vez al año: ${rd(site.plan.price)} el primer año y ${rd(site.plan.renewal)} cada renovación. Eso es menos de RD$16 al día el primer año.`,
  },
  {
    q: "¿Funciona en todo el país o solo en Santo Domingo?",
    a: "El equipo usa la red celular 4G LTE con respaldo 2G, así que reporta la ubicación en cualquier parte de la República Dominicana donde haya cobertura móvil: Santo Domingo, Santiago, Punta Cana, La Romana y el resto del país.",
  },
  {
    q: "¿Sirve para motor, jeepeta o camión?",
    a: "Sí. Instalamos el GPS en carros, jeepetas, motores, camionetas y vehículos de trabajo. Escríbenos el tipo de vehículo y te decimos cómo queda la instalación.",
  },
  {
    q: "¿Cómo veo dónde está mi vehículo?",
    a: "Desde la app en tu celular o desde la plataforma web. Ves la ubicación en tiempo real, la velocidad, el historial de rutas y recibes alertas cuando el vehículo se mueve, se enciende o sale de una zona.",
  },
  {
    q: "¿Qué hago si me roban el vehículo?",
    a: "Abres la app, ves la ubicación exacta en tiempo real y compartes esa información con las autoridades. Nuestro soporte está disponible 24/7 para ayudarte en ese momento.",
  },
  {
    q: "¿La instalación está incluida?",
    a: `Sí, la instalación está incluida en los ${rd(site.plan.price)} del plan anual. Coordinamos contigo el día y el lugar por WhatsApp.`,
  },
]
