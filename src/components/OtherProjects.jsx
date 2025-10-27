const projects = [
  {
    name: 'Sistema integral de clientes',
    context: 'Pantaleon Toribio Graus SRL',
    description:
      'Aplicación full stack que centraliza la información comercial y genera reportes en tiempo real para equipos de ventas y soporte.',
    impact: 'Optimización del registro y seguimiento en un 90%.',
    tech: ['Node.js', 'Java', 'Vue.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    name: 'Módulo de liquidación de ventas',
    context: 'Pantaleon Toribio Graus SRL',
    description:
      'Automatiza la liquidación diaria para distribuidores de agua con cálculos de comisiones, APIs REST y exportación a Excel.',
    impact: 'Reducción del tiempo manual en 75% y eliminación de errores de cálculo.',
    tech: ['C#', 'Node.js', 'PostgreSQL', 'Excel Automation'],
  },
  {
    name: 'Gestión de rutas y personal',
    context: 'Pantaleon Toribio Graus SRL',
    description:
      'Herramienta operativa para planificar rutas, asignar bidones y calcular pagos por comisiones con dashboards y alertas proactivas.',
    impact: 'Mejora del control logístico y visibilidad del rendimiento para choferes y coordinadores.',
    tech: ['PHP', 'Vue.js', 'Node.js', 'REST API', 'AWS'],
  },
];

function OtherProjects() {
  return (
    <section id="portafolio" className="bg-white/90 scroll-mt-24">
      <div className="section-wrapper space-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Otros proyectos</p>
          <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">Más allá del proyecto de titulación</h2>
          <p className="mt-4 text-base text-slate-600">
            Desarrollo soluciones empresariales que resuelven procesos críticos y se integran con equipos multidisciplinarios.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/70 hover:shadow-glow"
            >
              <header>
                <p className="text-xs uppercase tracking-[0.25em] text-accent">{project.context}</p>
                <h3 className="mt-2 text-lg font-semibold text-midnight">{project.name}</h3>
              </header>
              <p className="mt-3 text-sm text-slate-600">{project.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">{project.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {project.tech.map((tech) => (
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

export default OtherProjects;
