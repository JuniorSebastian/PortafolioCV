# Portafolio — Junior Osorio

Portafolio personal construido con Vite + React + Tailwind CSS para destacar el proyecto **TecCreate - Generador de Presentaciones con IA**. El sitio es responsive, accesible y está listo para desplegarse en Vercel.

## ✨ Características principales
- Single-page con navegación anclada, menú responsive y estados activos dinámicos.
- Secciones: Hero, Sobre mí, Logros, Proyecto destacado, Experiencia, Habilidades, Contacto y Footer.
- Copy oficial del proyecto TecCreate con roles, funcionalidades, stack y logros en producción.
- Imágenes optimizadas en `public/assets` (incluye foto de perfil `gas.png`) y `loading="lazy"` en el proyecto.
- Contact form sin backend que envía a `mailto:juniorosoriotoribio666@gmail.com`.

## 🛠️ Tech stack
- [Vite](https://vitejs.dev/) + React (JSX)
- [Tailwind CSS](https://tailwindcss.com/)
- Node.js 18+

## 📦 Requisitos previos
- Node.js ≥ 18
- npm ≥ 9

## 🚀 Comandos disponibles
Todos los comandos se ejecutan desde la raíz del proyecto (`c:\Users\PC\Desktop\Portafolio`).

```bash
npm install      # instala dependencias
npm run dev      # modo desarrollo con hot reload
npm run build    # genera build optimizada en dist/
npm run preview  # sirve la carpeta dist en http://localhost:4173 (ideal para pruebas locales)
npm run start    # alias de preview
```

## 🧩 Estructura de carpetas clave
```
public/
  assets/
    PortafolioCV.pdf
    gas.png
    logo.png
    og-image.png
    screenshot-1.png
  favicon.ico
  manifest.json
src/
  components/
    About.jsx
    Contact.jsx
    Education.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    ProjectShowcase.jsx
    Skills.jsx
    Stats.jsx
  styles/
    index.css
  App.jsx
  main.jsx
```

## 📝 Contenido del proyecto destacado
```
TecCreate - Generador de Presentaciones con IA
Sistema administrativo multi-rol que genera presentaciones PowerPoint automáticas mediante IA.

Roles: Usuario, Admin, Soporte.
Funcionalidades: generación automática con Groq + Gemini, sistema multi-rol, dashboards, desplegado en Render.
Stack: Node.js, Vue.js, PostgreSQL, Groq, Gemini, Render, API REST.
Logros: +1200 PPTs generadas en producción activa en TECSUP; sistema multi-rol con alta disponibilidad.
```

## 🌐 Despliegue en Vercel
1. Haz push del repositorio a GitHub.
2. En [Vercel](https://vercel.com/new), elige **Importar proyecto** desde GitHub.
3. Configura:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Despliega. El botón `Ver demo` ya apunta a `https://tec-create-fronted-deployed-p8as.vercel.app/`.
5. Para mantener los assets livianos en Vercel, `.vercelignore` excluye archivos innecesarios (`node_modules`, `dist`, `.env`, scripts auxiliares, etc.).

## ✅ Buenas prácticas implementadas
- Meta tags (SEO y Open Graph) en `index.html` + `manifest.json`.
- Paleta blanco + azul marino + acento naranja.
- Tipografía [Inter](https://fonts.google.com/specimen/Inter).
- Animaciones y transiciones sutiles con Tailwind.
- Accesibilidad: labels, `aria-` attributes, `target="_blank"` con `rel="noopener noreferrer"`.

## 📄 Licencia
El proyecto se distribuye bajo licencia [MIT](LICENSE).

---
¿Quieres colaborar o contratarme? Escríbeme a [junior.osorio@example.com](mailto:junior.osorio@example.com) o visita mis perfiles en [LinkedIn](https://www.linkedin.com/in/juniorosorio) y [GitHub](https://github.com/juniorosorio).
