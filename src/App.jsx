import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Stats from './components/Stats.jsx';
import Approach from './components/Approach.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import OtherProjects from './components/OtherProjects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Credentials from './components/Credentials.jsx';

const project = {
  id: 'teccreate',
  title: 'TecCreate - Generador de Presentaciones con IA',
  summary:
    'Sistema administrativo multi-rol desplegado en Render para TECSUP. Genera presentaciones PowerPoint automáticas mediante IA (Groq y Gemini), con +1200 PPTs creadas y en uso activo.',
  rolesCopy: 'Roles funcionales: Usuario, Admin y Soporte con permisos diferenciados.',
  featuresCopy:
    'Flujos clave: generación automática con IA, sistema multi-rol, dashboards analíticos, despliegue en producción en Render.',
  stackCopy: 'Tecnologías: Node.js, Vue.js, PostgreSQL, Groq, Gemini, Render, API REST.',
  achievementsCopy:
    'Resultados: +1200 presentaciones generadas en TECSUP, sistema multi-rol en producción desplegado en Render con alta disponibilidad.',
  previewHighlights: [
    'Genera PPT automáticos con IA (Groq y Gemini) integrada al backend.',
    'Sistema multi-rol: Usuario, Admin y Soporte con permisos diferenciados.',
    'Desplegado en Render con PostgreSQL, APIs REST y alta escalabilidad.',
  ],
  spotlightStats: [
    { value: '1200+', label: 'PPTs generadas', helper: 'En uso activo en TECSUP con sistema TecCreate.' },
    { value: 'Render', label: 'desplegado en producción', helper: 'Alta disponibilidad y escalabilidad automática.' },
    { value: '3 roles', label: 'Usuario · Admin · Soporte', helper: 'Sistema multi-rol con permisos diferenciados.' },
    { value: 'IA Integrada', label: 'Groq + Gemini', helper: 'Generación automática de contenido y diseño profesional.' },
  ],
  techBadges: ['Node.js', 'Vue.js', 'PostgreSQL', 'Groq', 'Gemini', 'Render', 'API REST', 'Sistema Multi-Rol'],
  roles: ['Usuario', 'Admin', 'Soporte'],
  features: [
    'Generación automática de PPT mediante IA con Groq y Gemini integrados.',
    'Sistema multi-rol con permisos diferenciados: Usuario, Admin y Soporte.',
    'Desplegado en Render con PostgreSQL, APIs REST y alta escalabilidad.',
  ],
  stack: ['Node.js', 'Vue.js', 'PostgreSQL', 'Groq', 'Gemini', 'Render', 'API REST', 'Tailwind CSS', 'Sistema Multi-Rol'],
  imageAlt: 'TecCreate - Sistema generador de presentaciones con IA',
  liveUrl: 'https://tec-create-fronted-deployed-p8as.vercel.app/',
  liveLabel: 'Ver TecCreate en vivo',
  frontendRepoUrl: 'https://github.com/JuniorSebastian/TecCreateFrontedDeployed.git',
  frontendRepoLabel: 'Repo frontend (Vue.js)',
  backendRepoUrl: 'https://github.com/JuniorSebastian/TecCreateBackendDeployed.git',
  backendRepoLabel: 'Repo backend (Node.js)',
  imageSrc: '/assets/screenshot-1.png',
};

const skills = [
  {
    title: 'Trabajo en equipo y comunicación',
    description: 'Scrum · Kanban · Facilitación',
    detail: 'Coordino dailies, reviews y retrospectivas con equipos multidisciplinarios manteniendo objetivos claros.',
  },
  {
    title: 'Liderazgo técnico y soporte',
    description: 'Mentoría · Mesa de ayuda',
    detail: 'Guío a usuarios y desarrolladores, documento soluciones y sostengo un uptime del 95% en producción.',
  },
  {
    title: 'Relación con stakeholders',
    description: 'Briefings · Reportes ejecutivos',
    detail: 'Traduzco necesidades de negocio en backlog priorizado con métricas y entregables medibles.',
  },
  {
    title: 'Empatía con el usuario final',
    description: 'Investigación · Capacitación',
    detail: 'Capto feedback en campo, adapto flujos y capacito para asegurar adopción de nuevas herramientas.',
  },
  {
    title: 'Gestión de cambios y documentación',
    description: 'Confluence · Manuales vivos',
    detail: 'Mantengo guías actualizadas, procedimientos de soporte y bitácoras de incidentes accesibles.',
  },
  {
    title: 'Aprendizaje continuo y resiliencia',
    description: 'IA · Automatización · Mejora continua',
    detail: 'Itero con IA aplicada (Groq, Gemini) y adopto nuevas tecnologías manteniendo enfoque pragmático.',
  },
];

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyecto', href: '#proyecto' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
];

function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-slate-900">
      <Navbar links={navLinks} />
      <main id="inicio">
        <Hero />
        <section id="logros" className="scroll-mt-24">
          <Stats />
        </section>
        <About />
    <OtherProjects />
    <section id="proyecto" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <SectionHeading
            eyebrow="Proyecto destacado"
            title="Generador de PPT con IA"
            description="Una solución full-stack que convierte ideas en presentaciones listas para compartir, combinando infraestructura estable con IA generativa."
          />
          <ProjectCard project={project} />
        </section>
        <Experience />
        <Education />
        <section id="proceso" className="scroll-mt-24">
          <Approach />
        </section>
        <section id="habilidades" className="bg-white/70 scroll-mt-24">
          <Skills items={skills} />
        </section>
        <Credentials />
        <section id="contacto" className="bg-midnight text-white scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
