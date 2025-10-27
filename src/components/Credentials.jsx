const credentials = [
  {
    title: 'Inglés (Nivel Intermedio Completo)',
    issuer: 'CONVERSA · 2025',
    detail: 'Comunicación efectiva con equipos internacionales y documentación técnica en inglés.',
  },
  {
    title: 'Microsoft Excel (Nivel Intermedio)',
    issuer: '2024 - 2025',
    detail: 'Modelado de datos, fórmulas avanzadas y análisis de métricas operativas.',
  },
  {
    title: 'NDG Linux Unhatched',
    issuer: 'Cisco Networking Academy · Nov 2023',
    detail: 'Fundamentos de administración Linux y scripting para automatizaciones básicas.',
  },
  {
    title: 'Algoritmos y Estructuras de Datos',
    issuer: 'Universidad Nacional de Ingeniería · Feb 2024',
    detail: 'Análisis de complejidad, estructuras lineales y no lineales para soluciones eficientes.',
  },
  {
    title: 'Metodologías Ágiles',
    issuer: 'Scrum · Kanban',
    detail: 'Aplicación práctica en proyectos académicos y empresariales para iteraciones rápidas.',
  },
];

function Credentials() {
  return (
    <section id="certificaciones" className="bg-white scroll-mt-24">
      <div className="section-wrapper space-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Certificaciones y formación</p>
          <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">Aprendizaje continuo y multidisciplinario</h2>
          <p className="mt-4 text-base text-slate-600">
            Refuerzo mis habilidades técnicas con certificaciones y cursos que potencian la entrega de soluciones integrales.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {credentials.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-midnight">{item.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-accent">{item.issuer}</p>
              <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
