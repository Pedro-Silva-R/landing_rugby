# Demo Day - Wheelchair Rugby Chile 🏉

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Landing page oficial para el registro de participantes al "Demo Day" de Wheelchair Rugby Chile (FEDERUPA). Diseñada con una estética Neo-Brutalista para transmitir fuerza, competitividad e impacto.

## 🚀 Características Principales

- **Diseño Neo-Brutalista:** Alto contraste, bordes duros y sombras sólidas que reflejan el espíritu de un deporte de contacto total.
- **Modo Oscuro / Claro:** Sistema de temas nativo (`theme.js`) con detección de preferencias del sistema y persistencia mediante `localStorage`.
- **Formulario Inteligente & Accesible:** 
  - Validación de campos en tiempo real (blur/change).
  - Flexibilidad de contacto (WhatsApp o Email).
  - Manejo de foco automatizado y atributos ARIA completos para lectores de pantalla.
- **Integración con Google Sheets:** Backend serverless utilizando Google Apps Script para la recopilación instantánea de "leads" o registros.
- **Totalmente Responsivo:** Diseñado `mobile-first` garantizando excelente legibilidad y usabilidad en cualquier dispositivo.

## 📂 Estructura del Proyecto

```text
📦 Landing
 ┣ 📂 assets
 ┃ ┗ 📂 img          # Imágenes (logo, favicon)
 ┣ 📂 css
 ┃ ┗ 📜 styles.css   # Hoja de estilos principal (Tokens y Layout)
 ┣ 📂 js
 ┃ ┣ 📜 apps_script.js # Código Backend para Google Sheets
 ┃ ┣ 📜 main.js      # Lógica de formulario y validaciones
 ┃ ┗ 📜 theme.js     # Gestor de Dark/Light mode
 ┣ 📜 clinico.html   # Dossier para profesionales de la salud
 ┗ 📜 index.html     # Landing page principal
```

## 🛠️ Requisitos Previos

No se requieren dependencias, compiladores ni empaquetadores (Node.js, npm, Webpack, etc.). Es un proyecto puramente estático (Vanilla). Solo necesitas:

- Un navegador web moderno.
- Un editor de código (ej. VS Code).
- Extensión **Live Server** (Opcional, para desarrollo local).

## 💻 Instalación y Uso

1. **Clonar o descargar el proyecto:**
   ```bash
   git clone <url-del-repositorio>
   ```
2. **Ejecución Local:**
   Abre el proyecto en VS Code y lanza la extensión **Live Server** haciendo clic derecho sobre `index.html` y seleccionando *Open with Live Server*.
   
   *(Alternativamente, puedes simplemente hacer doble clic en `index.html` para abrirlo en tu navegador).*

## 🔌 Configuración del Backend (Google Sheets)

Para que el formulario de inscripción funcione:

1. Crea una nueva Hoja de Cálculo en Google Sheets.
2. En la Fila 1, coloca los siguientes encabezados (exactamente así): `timestamp`, `nombre`, `whatsapp`, `email`, `ciudad`, `movilidad`, `consent`.
3. Ve a **Extensiones > Apps Script** y pega el contenido del archivo `js/apps_script.js`.
4. Haz clic en **Implementar > Nueva implementación**.
5. Selecciona tipo **App web**. En *Quién tiene acceso*, selecciona **Cualquiera**.
6. Copia la URL generada y pégala en la variable `SCRIPT_URL` dentro del archivo `js/main.js`.

## 📄 Licencia

© 2026 FEDERUPA Chile. Sin fines de lucro.
