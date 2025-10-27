const steps = [
  {
    title: 'Descubrimiento técnico y de negocio',
    detail: 'Mapeo procesos, usuarios y sistemas actuales para definir métricas de éxito y arquitectura objetivo.',
    time: 'Semana 1',
  },
  {
    title: 'Arquitectura y APIs multi-stack',
    detail: 'Diseño esquemas de datos, endpoints REST y contratos para Node.js, Java, C# o PHP según el entorno.',
    time: 'Semana 2',
  },
  {
    title: 'IA aplicada y experiencia de usuario',
    detail: 'Integro Groq, Gemini y automatizaciones, construyo dashboards Vue/React y valido con usuarios clave.',
    time: 'Semanas 3-4',
  },
  {
    title: 'Despliegue, monitoreo y entrenamiento',
    detail: 'Configuro CI/CD en AWS/Vercel, documento, capacito al equipo y establezco soporte continuo.',
    time: 'Semana 5+',
  },
];

function Approach() {
  return (
    <section aria-label="Proceso de trabajo" className="bg-white">
      <div className="section-wrapper space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Proceso</p>
          <h2 className="mt-2 text-3xl font-semibold text-midnight sm:text-4xl">Cómo llevo las ideas a producción</h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Transparencia, iteración y métricas para entregar software confiable y listo para escalar.
          </p>
        </div>
        <ol className="relative mx-auto max-w-5xl space-y-8 border-l border-slate-200 pl-6 lg:pl-10">
          {steps.map((step) => (
            <li key={step.title} className="group relative pl-4">
              <span className="absolute -left-[18px] flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-midnight shadow-sm group-hover:border-accent group-hover:text-accent">{step.time}</span>
              <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-200 group-hover:-translate-y-1 group-hover:border-accent/70 group-hover:shadow-glow">
                <h3 className="text-lg font-semibold text-midnight">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Approach;
