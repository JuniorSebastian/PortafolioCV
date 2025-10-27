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
  id: 'proyecto',
  title: 'Generador de Presentaciones con IA',
  summary:
    'Suite full stack que orquesta IA generativa con Groq y Gemini para crear presentaciones listas en minutos, respaldada por APIs seguras y despliegues automatizados.',
  rolesCopy: 'Roles funcionales: Administrador, Soporte y Usuario final.',
  featuresCopy:
    'Flujos clave: prompts inteligentes, publicación vía enlaces/QR, dashboards analíticos y soporte omnicanal.',
  stackCopy: 'Tecnologías: Node.js, Java, C#, PHP, Vue.js, React, PostgreSQL, Groq, Gemini, AWS, Vercel.',
  achievementsCopy:
    'Resultados: +1200 presentaciones generadas, 75% menos tiempo operativo y CI/CD con despliegues menores a 15 minutos.',
  previewHighlights: [
    'Genera PPT en minutos con Groq y Gemini integrados al backend Node.js.',
    'Frontend Vue.js con dashboards en tiempo real y controles de acceso.',
    'APIs REST y Webhooks listas para integrarse con otros sistemas empresariales.',
  ],
  spotlightStats: [
    { value: '1200+', label: 'presentaciones automáticas', helper: 'Generadas en pilotos internos de TECSUP.' },
    { value: '15 min', label: 'deploy automatizado', helper: 'Pipelines CI/CD con pruebas y monitoreo.' },
    { value: '3 entornos', label: 'dev · staging · prod', helper: 'Infraestructura replicable en AWS y Vercel.' },
    { value: 'Nivel soporte 24/7', label: 'operación estable', helper: 'Alertas, soporte remoto y documentación viva.' },
  ],
  techBadges: ['Node.js', 'Java', 'C#', 'PHP', 'Vue.js', 'React', 'Groq', 'Gemini', 'PostgreSQL', 'AWS', 'Vercel'],
  roles: ['Admin', 'Soporte', 'Usuario'],
  features: [
    'Orquestación de IA con Groq y Gemini para componer diapositivas, notas y assets descargables.',
    'APIs REST aseguradas con JWT, versionado y documentación lista con OpenAPI.',
    'Dashboards Vue.js para roles administrativos, métricas en vivo y gestión de usuarios sobre PostgreSQL.',
  ],
  stack: ['Node.js', 'Java', 'C#', 'PHP', 'Vue.js', 'React', 'Vite', 'Groq', 'Gemini', 'PostgreSQL', 'AWS', 'Vercel', 'Tailwind CSS'],
  imageAlt: 'Panel operativo del generador de presentaciones con IA',
  liveUrl: 'https://tec-create-fronted-deployed-p8as.vercel.app/',
  liveLabel: 'Previsualizar app',
  frontendRepoUrl: 'https://github.com/JuniorSebastian/TecCreateFrontedDeployed.git',
  frontendRepoLabel: 'Repo frontend (Vue + Vite)',
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
  { label: 'Logros', href: '#logros' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proyecto', href: '#proyecto' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Certificaciones', href: '#certificaciones' },
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
