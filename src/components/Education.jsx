function Education() {
  return (
    <section id="educacion" className="bg-white/80 scroll-mt-24">
      <div className="section-wrapper space-y-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Educación</p>
          <h2 className="mt-3 text-3xl font-semibold text-midnight sm:text-4xl">Diseño y Desarrollo de Software en TECSUP</h2>
          <p className="mt-4 text-base text-slate-600">
            Estudiante de último ciclo (2023 - 2025). Desarrollo proyectos integradores con Node.js, Java, C#, PHP y enfoques de IA, cloud y metodologías ágiles.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Mantengo promedios sobresalientes, ubicándome en el tercio superior de la carrera en tres oportunidades consecutivas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-midnight">Proyecto de titulación</h3>
            <p className="mt-3 text-sm text-slate-600">
              TecCreate: Sistema generador de presentaciones con IA. Solución full-stack (Node.js + Vue.js) con Groq y Gemini, PostgreSQL y desplegado en Render. +1200 PPTs generadas en producción.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-accent">
              En producción activa en TECSUP con sistema multi-rol.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-midnight">Enfoque académico</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Programación orientada a objetos y patrones aplicados a Java, C# y PHP.</li>
              <li>• Diseño de bases de datos, APIs REST y microservicios desplegados en cloud.</li>
              <li>• Integración de metodologías ágiles (Scrum, Kanban) con métricas y tableros de seguimiento.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;
