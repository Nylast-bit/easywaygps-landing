# 🚀 EasyWay GPS Landing

**EasyWay GPS Landing Page** es una aplicación web enfocada en ofrecer servicios de **rastreo GPS** para vehículos, selección de planes y contacto directo vía **WhatsApp**.

---

## 🚗 ¿Qué hace esta aplicación?

- Muestra información detallada de los **servicios de rastreo GPS**.
- Genera **mensajes personalizados** para atención vía **WhatsApp**.
- Ofrece soporte para **usuarios particulares y empresas**.

---

## 🛠️ Tecnologías utilizadas

- **Next.js / React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide-react** (íconos)
- **WhatsApp API** (wa.me)

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/easyway-gps-landing.git
```

### 2️⃣ Instalar las dependencias
```bash
npm install
```

### 3️⃣ Ejecutar en modo desarrollo
```bash
npm run dev
```

### 4️⃣ Abrir en el navegador
```bash
http://localhost:3000
```

## ⚙️ Configuración importante

- Cambia el número de WhatsApp en la variable **`phone`** si es necesario.
- Asegúrate de que las imágenes estén en la carpeta **`/public/images`**.
- Si deseas modificar los textos de los mensajes de WhatsApp, edita la función **`sendWhatsAppMessage`**.

## 📁 Estructura del proyecto
```bash
app/
  global.css
  layout.tsx
  page.tsx
hoooks/
  use-mobile.tsx
  use-toast.ts
public/
  images/

```
