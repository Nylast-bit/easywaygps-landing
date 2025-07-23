"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Star,
  Phone,
  Mail,
  MapIcon,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CheckCircle,
  Users,
  Zap,
  Battery,
  Wifi,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const phone = "8099730250";

const sendWhatsAppMessage = (message: string) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};



export default function LandingPage() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [mensaje, setMensaje] = useState("");
    return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
           <Image
                    src="/images/logo.png"
                    alt="EasyWayGPS Logo"
                    width={150}
                    height={150}
                  />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-teal-600 transition-colors">
              Inicio
            </Link>
            <Link href="#ventajas" className="text-gray-700 hover:text-teal-600 transition-colors">
              Ventajas
            </Link>
            <Link href="#servicios" className="text-gray-700 hover:text-teal-600 transition-colors">
              Servicios
            </Link>
            <Link href="#testimonios" className="text-gray-700 hover:text-teal-600 transition-colors">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contacto
            </Link>
          </nav>
          <Button
            className="bg-teal-500 hover:bg-teal-600 text-white"
            onClick={() => sendWhatsAppMessage("Hola, Quiero más información de sus productos y servicios!")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contactar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="scroll-mt-20 relative bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 text-white py-20"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center text-center lg:text-left">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Rastreo GPS
                <span className="block text-[#000000]">Inteligente</span> 
                para tu Vehículo
              </h1>
              <p className="text-xl text-teal-50 leading-relaxed">
                Tecnología avanzada de localización en tiempo real. Protege tu inversión con el sistema de monitoreo más
                confiable del mercado.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <div className="text-3xl font-bold mb-2">Planes desde RD$3,000.00</div>
                <div className="text-lg">Mensualidad de RD$300.00</div>
                <div className="text-sm text-teal-100 mt-1">Instalación incluida</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => sendWhatsAppMessage("Hola, me gustaría adquirir su servicio, más información por favor!")}
                  className="bg-white hover:bg-gray-300 text-black font-semibold text-teal-600 px-8"
                >
                  <MapPin className="w-5 h-5 mr-2 text-teal-600" />
                  Comenzar Ahora
                </Button>
                
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero.png"
                alt="Fortuner con sistema GPS"
                width={600}
                height={400}
                className="rounded-lg"  
              />
            </div>
          </div>
        </div>
      </section>

      


      {/* Ventajas Section */}
      <section id="ventajas" className="scroll-mt-20 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir EasyWayGPS?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología de vanguardia combinada con un servicio excepcional para brindarte la mejor experiencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Alertas Inteligentes</h3>
                <p className="text-gray-600">Notificaciones instantáneas por movimiento, velocidad y geocercas</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Precisión GPS</h3>
                <p className="text-gray-600">Localización exacta con precisión de hasta 3 metros en tiempo real</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Batería Duradera</h3>
                <p className="text-gray-600">Hasta 18 días de autonomía </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Conectividad 4G + 2G</h3>
                <p className="text-gray-600">Red 4G LTE para comunicación rápida y confiable en todo momento</p>
              </CardContent>
            </Card>

          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
                <div className="text-gray-600">Clientes Activos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">99.99%</div>
                <div className="text-gray-600">Tiempo de Actividad</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                <div className="text-gray-600">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Servicios Section */}
      <section id="servicios" className=" scroll-mt-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Planes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades y protege tu vehículo hoy mismo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plan Mensual */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Plan Mensual
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">RD$3,000.00 inicial</h3>
                <div className="text-gray-600 mb-2">RD$300.00 por mes</div>
                <ul className="space-y-3 mb-8 mt-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Ubicación en tiempo real
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Alertas de movimiento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Historial de Ruta
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    App móvil
                  </li>
                </ul>
                <Button
                  className="w-full bg-teal-500 hover:bg-teal-600"
                  onClick={() =>
                    sendWhatsAppMessage("Hola, quiero más información acerca de su plan mensual: RD$3,000 inicial + RD$300 cada mes.")
                  }
                >
                  Elegir Plan
                </Button>

              </CardContent>
            </Card>

            {/* Plan Anual */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Plan Anual
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">RD$4,500.00</h3>
                <div className="text-gray-600 mb-2">Renovación RD$3,000.00 luego del año</div>
                <ul className="space-y-3 mb-8 mt-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Todo un año de servicio
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Geocercas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Reportes detallados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Soporte 24/7
                  </li>
                </ul>
                <Button
                  className="w-full bg-teal-500 hover:bg-teal-600"
                  onClick={() =>
                    sendWhatsAppMessage("Hola, quiero más información acerca de su plan anual: RD$4,500 inicial y RD$3,000 de renovación luego del año.")
                  }
                >
                  Elegir Plan
                </Button>
              </CardContent>
            </Card>

            {/* Plan Empresarial */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Plan Empresarial
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Personalizado</h3>
                <div className="text-gray-600 mb-2">Según flota</div>
                <ul className="space-y-3 mb-8 mt-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Precios ajustados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Dashboard empresarial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Asistencia 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Soporte 24/7
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent"
                  onClick={() =>
                    sendWhatsAppMessage(
                      "Hola, soy una empresa interesada en un plan personalizado según mi flota, con precios ajustados, dashboard empresarial y soporte 24/7. Me gustaría recibir más información, por favor."
                    )
                  }
                >
                  Contactar Ventas
                </Button>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Testimonios */}
      <section id="testimonios" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonios de Clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre por qué miles de usuarios confían en EasyWayGPS para proteger sus vehículos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "El sistema es increíblemente preciso y fácil de usar. La app móvil es intuitiva y las alertas llegan
                  al instante. Definitivamente recomendado."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ana Martínez</div>
                    <div className="text-gray-600 text-sm">Propietaria de Moto</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Perfecto para mi flota de delivery. Puedo monitorear todas las rutas en tiempo real y optimizar los
                  tiempos de entrega. Excelente inversión."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Roberto Silva</div>
                    <div className="text-gray-600 text-sm">Gerente de Logística</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "La instalación fue súper rápida y el soporte técnico es excepcional. Me siento mucho más tranquila
                  sabiendo dónde está mi vehículo."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Carmen López</div>
                    <div className="text-gray-600 text-sm">Cliente Particular</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-10 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Listo para comenzar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contáctanos hoy mismo y descubre cómo EasyWayGPS puede proteger tu vehículo. Nuestro equipo está aquí para
              ayudarte.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Teléfono</div>
                      <div className="text-gray-600">809-973-0250</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">easywaygps.info@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <MapIcon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Oficina</div>
                      <div className="text-gray-600">Av. Prolongación 27 de Febrero, Santo Domingo</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-200 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Horarios de Atención</h4>
                <div className="text-gray-600">
                  <div>Lunes - Viernes: 9:00 AM - 6:00 PM</div>
                  <div>Sábados: 10:00 AM - 2:00 PM</div>
                  <div>Soporte técnico: 24/7</div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita Información</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                      <Input 
                        placeholder="Tu nombre completo" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                      <Input 
                        placeholder="Tu número de teléfono"
                        value={telefono}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {  // Solo acepta dígitos
                            setTelefono(value);
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input 
                        type="email" 
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Vehículo</label>
                    <Input 
                      placeholder="Motocicleta, auto, camión, etc."
                      value={vehiculo}
                      onChange={(e) => setVehiculo(e.target.value)}
                    />

                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <Textarea 
                      placeholder="Cuéntanos sobre tus necesidades..." 
                      rows={4}
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                    />
                  </div>

                  <Button 
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3"
                    onClick={() => {
                      if (!nombre || !telefono || !email || !vehiculo || !mensaje) {
                        alert("Por favor completa todos los campos.");
                        return;
                      }

                      const text = `Hola, me gustaría solicitar información.\n\n` +
                        `Nombre: ${nombre}\n` +
                        `Teléfono: ${telefono}\n` +
                        `Email: ${email}\n` +
                        `Tipo de Vehículo: ${vehiculo}\n` +
                        `Mensaje: ${mensaje}\n`;

                      sendWhatsAppMessage(text);
                    }}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Enviar Consulta
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                
                <Image
                    src="/images/logo.png"
                    alt="EasyWayGPS Logo"
                    width={150}
                    height={150}
                  />
              </div>
              <p className="text-white mb-6 max-w-md">
                Es tu vuelta.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/easywaygps/?g=5" className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://www.facebook.com/people/Easywaygps/61560188848980/" className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="https://www.tiktok.com/@easywaygps" className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/256/1946/1946552.png"
                    alt="Tiktok Icon"
                    width={20}
                    height={20}
                    className="invert"
                  />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#inicio" className="hover:text-teal-400 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#ventajas" className="hover:text-teal-400 transition-colors">
                    Ventajas
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-teal-400 transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="hover:text-teal-400 transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-teal-400 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  809-973-0250
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  easywaygps.info@gmail.com
                </li>
                <li className="flex items-center">
                  <MapIcon className="w-4 h-4 mr-2" />
                  Av. Prolongación 27 de Febrero, Santo Domingo
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
            <p>&copy; 2025 EasyWayGPS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
