function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 -z-20 bg-hero-grid opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.25),transparent_55%)]" aria-hidden="true" />
      <div className="section-wrapper flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="relative flex-1 space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-accent/70" aria-hidden="true" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            </span>
            Disponible para nuevos retos
          </div>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Full Stack Developer</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Junior Sebastián Osorio Toribio
            </h1>
            <p className="mt-6 text-lg text-slate-100 md:max-w-xl">
              Lima, Perú. Estudiante del último ciclo en TECSUP con experiencia real desarrollando backend y frontend en Node.js, Java, C#, JavaScript y PHP. Diseño, implemento y despliego sistemas empresariales con APIs seguras, IA aplicada y soporte operativo continuo.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#proyecto"
              className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-midnight shadow-soft transition hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Ver proyecto
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contacto
            </a>
          </div>
          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-5 text-sm text-slate-100 shadow-soft backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">CV actualizado</p>
                <p className="mt-2 text-base font-semibold text-white">Portafolio profesional en PDF</p>
                <p className="mt-2 text-xs text-slate-200/80">
                  Incluye experiencia, logros, certificaciones y enlaces directos a proyectos en producción.
                </p>
              </div>
              <a
                href="/assets/PortafolioCV.pdf"
                download
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Descargar CV en PDF"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    d="M12 4v12m0 0l-4-4m4 4 4-4M5 20h14"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid gap-5 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                · Node.js · Java · C# · IA · Cloud
              </p>
              <p className="mt-3 text-sm text-slate-100/80">
                Full Stack Developer con foco en APIs empresariales, dashboards intuitivos y automatización con IA. Integro todo el ciclo: levantamiento de requerimientos, desarrollo, despliegue y soporte.
              </p>
            </div>
            <div className="space-y-2 text-sm text-slate-200/90">
              <p className="font-semibold">Especializado en:</p>
              <ul className="space-y-1">
                <li>• Integraciones IA con Groq, Gemini y APIs multi-stack.</li>
                <li>• Experiencias UX accesibles para operaciones en campo y escritorio.</li>
                <li>• Despliegues orquestados en AWS, Vercel y entornos on-premise.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-200/90">
            <a href="https://github.com/JuniorSebastian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
              <span aria-hidden="true">↗</span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/juniorsebastian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
              <span aria-hidden="true">↗</span>
              LinkedIn
            </a>
            <a href="mailto:juniorosoriotoribio666@gmail.com" className="inline-flex items-center gap-2 hover:text-accent">
              <span aria-hidden="true">✉</span>
              juniorosoriotoribio666@gmail.com
            </a>
            <a href="tel:+51982706458" className="inline-flex items-center gap-2 hover:text-accent">
              <span aria-hidden="true">☎</span>
              +51 982 706 458
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative mx-auto flex max-w-sm flex-col items-center">
            <div className="absolute -right-6 top-6 hidden h-28 w-28 rounded-full bg-accent/40 blur-3xl md:block" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-card-gradient p-4 shadow-glow">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/assets/gas.png"
                  alt="Retrato de Junior Osorio"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-10 left-1/2 hidden w-[110%] -translate-x-1/2 rounded-full bg-midnight/60 blur-3xl sm:block" aria-hidden="true" />
            </div>
            <div className="-mt-6 w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-sm text-slate-100 shadow-soft backdrop-blur">
              <p className="font-semibold text-white">Generador de Presentaciones con IA</p>
              <p className="mt-2 text-xs text-slate-200">
                Orquesto backend, frontend y pipelines multi-stack (Node.js, Java, C#, PHP) con IA aplicada y soporte continuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
