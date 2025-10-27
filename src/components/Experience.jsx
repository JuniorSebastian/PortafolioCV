const experienceItems = [
  {
    company: 'TECSUP',
    period: 'Actualidad',
    location: 'Lima, Perú',
    role: 'Desarrollador Full Stack - TecCreate',
    summary:
      'Sistema administrativo multi-rol desplegado en producción en Render. Genera presentaciones PowerPoint automáticas mediante IA, revolucionando la creación de material educativo y corporativo.',
    highlights: [
      'Desarrollé TecCreate, generador de PPT con IA que alcanzó +1200 presentaciones generadas en uso activo.',
      'Implementé arquitectura multi-rol con permisos diferenciados: Usuario, Admin y Soporte.',
      'Integré APIs de IA (Groq y Gemini) para generación automatizada de contenido y diseño profesional.',
      'Desplegué el sistema completo en Render con alta disponibilidad y escalabilidad.',
      'Orquesté backend multi-stack (Node.js, Java, C#, PHP) con frontend Vue.js y base de datos PostgreSQL.',
    ],
    stack: ['Node.js', 'Vue.js', 'PostgreSQL', 'IA (Groq/Gemini)', 'Render', 'API REST', 'Sistema Multi-Rol'],
  },
  {
    company: 'Pantaleon Toribio Graus SRL',
    period: 'Mar 2024 - Actualidad',
    location: 'Lima, Perú',
    role: 'Desarrollador de Software y Soporte Técnico',
    summary:
      'Empresa líder en distribución de agua purificada. Lidero soluciones a medida que conectan áreas comerciales, logística y soporte, combinando backend multi-stack, IA y automatización operativa.',
    highlights: [
      'Diseñé un sistema integral de gestión de clientes que optimizó el seguimiento comercial en 90%.',
      'Automaticé la liquidación de ventas para distribuidores, reduciendo el procesamiento manual en 75%.',
      'Implementé un módulo de gestión de rutas y comisiones para trabajadores y choferes, conectado a PostgreSQL.',
      'Mantengo un uptime del 95% brindando soporte técnico continuo y resolviendo incidencias en campo.',
      'Capacité a usuarios clave para asegurar la adopción de las soluciones y su mejora continua.',
    ],
    stack: ['Node.js', 'Java', 'C#', 'PHP', 'Vue.js', 'PostgreSQL', 'Excel Avanzado', 'AWS', 'Scrum'],
  },
];

function Experience() {
  return (
    <section id="experiencia" className="bg-white scroll-mt-24">
      <div className="section-wrapper space-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Experiencia</p>
          <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">Proyectos reales en producción</h2>
          <p className="mt-4 text-base text-slate-600">
            Construyo y mantengo sistemas empresariales que impactan directamente en la operación y las métricas del negocio.
          </p>
        </div>
        <div className="space-y-8">
          {experienceItems.map((item) => (
            <article
              key={item.company}
              className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/70 hover:shadow-glow"
            >
              <header className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-midnight">{item.role}</h3>
                  <p className="text-sm text-slate-500">{item.company} · {item.location}</p>
                </div>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.period}
                </span>
              </header>
              <p className="mt-4 text-sm text-slate-600">{item.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
