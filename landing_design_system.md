# Sistema de Diseño y Estilos: Landing Page Rugby Silla de Ruedas Chile
*(Extraído de la implementación técnica y estructural del proyecto)*

Este documento consolida el estilo, tono y diseño aplicados en la estructura real de la aplicación web actual. Sirve como fuente de verdad para replicar el mismo diseño (Kinetic Brutalism V2) en otra herramienta o landing page externa, asegurando la consistencia visual y técnica.

---

## 1. Tono y Personalidad
Basado en los textos de la interfaz (`Hero.tsx`) y los comentarios de arquitectura (`App.tsx`):
- **Concepto Principal:** Máquina de alto rendimiento con bordes duros y claridad técnica ("Kinetic Brutalism V2").
- **Tono del Lenguaje:** Directo, competitivo, técnico e impactante.
- **Micro-copy estructural:** Uso de lenguaje de sistema o máquina. Ejemplos de la UI: `X-001.START`, `PRJ.QR_CHILE`, `MAP.REF_001`, `ESTADO.SISTEMA: ÓPTIMO`, `MODO: COMPETICIÓN`, `NIVEL DE IMPACTO: MÁXIMO`.
- **Sensación General:** Energía cruda, velocidad, sin elementos decorativos suaves (sin gradientes difuminados, sin esquinas redondeadas).

---

## 2. Paleta de Colores
Extraída de las variables CSS principales (`src/styles/theme.css`):

| Rol | Color / Hexadecimal | Uso estructural |
| :--- | :--- | :--- |
| **Blanco Absoluto** | `#ffffff` | Fondos de modo claro, texto sobre botones primarios, contrastes duros. |
| **Negro Absoluto** | `#000000` | Bordes estructurales (`3px`), texto principal, fondos de video/hero. |
| **Rojo Puro (Primary)** | `#ff0000` | CTAs de alto impacto, botones principales, marcadores de error, destellos de "glitch". |
| **Azul (Accent/Link)**| `#0057ff` | Enlaces, anillos de foco (focus rings), sombras de botones secundarios, destellos de "glitch". *(Nota: en modo oscuro cambia a `#5aa2ff`)*. |
| **Metal (Secondary)** | `#8a8d8f` | Líneas estructurales, texto silenciado (muted), grillas técnicas. |
| **Fondo Base Claro** | `#f9f9f9` (`surface`) | Fondo secundario para crear separación de contenedores. |

---

## 3. Tipografía
El código implementa 3 familias tipográficas estrictas (`fonts.css`, `theme.css`):

1. **Titulares y Display (Epilogue)**
   - Uso: Títulos principales (`<h1>`, `<h2>`, `<h3>`).
   - Peso: Heavy (`700` a `900`).
   - Estilo especial: El titular del Hero (`<h1>`) usa `font-style: italic`, tracking negativo (`letter-spacing: -0.04em`) y un line-height muy ajustado (`0.95`).
2. **Cuerpo de Texto y UI (Space Grotesk)**
   - Uso: Párrafos (`<p>`), botones (`<button>`), inputs, labels.
   - Peso: Medium/Regular (`450` para texto, `600` para botones).
   - Estilo: Limpio, altura de línea amplia (`1.55`).
3. **Etiquetas Técnicas (IBM Plex Mono)**
   - Uso: Tickers en movimiento, insignias (badges), coordenadas, estados de sistema.
   - Estilo (Clase `.technical-label`): Tamaño pequeño, peso bold (`700`), `text-transform: uppercase`, y un tracking súper amplio (`letter-spacing: 0.12em`).

---

## 4. Geometría y Layout (Brutalismo Estructural)
Basado en `theme.css` e `index.css`:

- **Bordes:** Sólidos y gruesos de `3px` (`border-[3px] border-border`).
- **Esquinas (Border Radius):** Totalmente puntiagudas (`0px`). No existe el `border-radius` suave.
- **Cortes Geométricos (Chamfer):** Uso sistemático de esquinas recortadas a 45 grados (`12px` de corte) usando `clip-path: polygon(...)` (Clases `.chamfer-card` o `.chamfer-cut-tl`).
- **Sombras (Hard Shadows):** Sombras duras sin ningún difuminado (blur `0`). Ejemplo en botones: `shadow-[6px_6px_0_#ffffff]` o offset de `var(--shadow-offset)` que equivale a `6px`.
- **Secciones Diagonales:** Separadores de secciones que usan `clip-path` para crear cortes diagonales duros en la parte superior o inferior (Clases `.diagonal-section-top`, `.diagonal-section-bottom`).
- **Cursor:** El cursor de la página entera es `crosshair` (mira de francotirador/sistema técnico).
- **Scrollbar:** Personalizado. Brutalista, barra cuadrada de `14px` con bordes gruesos de `3px`.

---

## 5. Componentes y Elementos de Interfaz
Patrones extraídos de `Hero.tsx`:

### Botones (CTAs)
- **Primario:** Fondo rojo (`bg-primary`), texto blanco, borde rojo grueso, sombra sólida desplazada hacia abajo/derecha (`6px_6px_0_#ffffff`).
- **Secundario:** Fondo blanco, texto negro, borde blanco, sombra desplazada azul (`6px_6px_0_var(--brand-blue)`).
- **Interacción (Hover/Active):** En hover los botones se trasladan arriba/izquierda (`-translate-x-1 -translate-y-1`) para igualar la posición de la sombra. En click (`active`) se devuelven a su origen y pierden la sombra momentáneamente, creando un efecto táctil mecánico.

### Overlays y Texturas Técnicas
La interfaz usa capas superpuestas (absolutas) para dar el "look" de máquina:
1. **Grilla Técnica (`.technical-grid`):** Un patrón cuadriculado de 40x40px generado con `linear-gradient` y `1px` de grosor, color `metal`, baja opacidad.
2. **Scanlines (`.scanlines`):** Líneas horizontales repetitivas que simulan monitores CRT antiguos (4px de alto).
3. **Ruido (`.noise-overlay`):** Textura de ruido de fondo, muy sutil (opacidad `0.03`), generada por SVG (fractalNoise) para romper los colores planos.

### Animaciones y Efectos (Motion)
- **Glitch Hover (`.glitch-text`):** Efecto de CSS puro que crea aberración cromática en texto al hacer hover. Usa los colores primario (rojo) y acento (azul) desfasados `2px` horizontalmente de forma rápida y cíclica.
- **Tickers Animados (`marquee`):** Cintas de texto (tipo noticias) en la parte inferior de la pantalla, moviéndose en bucle continuo de derecha a izquierda.
- **Transiciones Base:** Rápidas y tajantes (`180ms`), utilizando curvas matemáticas agresivas (`cubic-bezier(.2,.8,.2,1)`).
