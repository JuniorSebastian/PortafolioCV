const values = [
  {
    title: 'APIs empresariales listas para producción',
    detail: 'Diseño soluciones en Node.js, Java, C# y PHP conectadas a bases de datos relacionales, autenticación avanzada y métricas de negocio.',
  },
  {
    title: 'IA y automatización de procesos',
    detail: 'Integro Groq, Gemini y servicios IA en flujos que reducen tiempos operativos, generan contenido y mantienen trazabilidad.',
  },
  {
    title: 'Operación y soporte continuo',
    detail: 'Capacito a usuarios, documento el stack y monitoreo el uptime para que cada despliegue se sostenga en el tiempo.',
  },
];

function About() {
  return (
    <section id="sobre-mi" className="bg-white/80 scroll-mt-24">
      <div className="section-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="text-3xl font-semibold text-midnight sm:text-4xl">Full Stack developer con Node.js, Java, C#, PHP e IA aplicada.</h2>
          <p className="text-base leading-relaxed text-slate-700">
            Estudiante del último ciclo en TECSUP con experiencia construyendo sistemas empresariales end-to-end: levanto requerimientos, diseño arquitecturas, programo APIs, creo interfaces y despliego en AWS/Vercel con soporte permanente.
          </p>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">
            <span className="rounded-full border border-accent/30 px-4 py-2">Node.js</span>
            <span className="rounded-full border border-accent/30 px-4 py-2">Java</span>
            <span className="rounded-full border border-accent/30 px-4 py-2">C#</span>
            <span className="rounded-full border border-accent/30 px-4 py-2">PHP</span>
            <span className="rounded-full border border-accent/30 px-4 py-2">APIs REST</span>
            <span className="rounded-full border border-accent/30 px-4 py-2">IA aplicada</span>
            <span className="rounded-full border border-accent/30 px-4 py-2">AWS</span>
          </div>
        </div>
        <div className="space-y-4">
          {values.map((item) => (
            <article key={item.title} className="rounded-3xl border border-midnight/10 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/70 hover:shadow-glow">
              <h3 className="text-lg font-semibold text-midnight">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
