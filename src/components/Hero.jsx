function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 -z-20 bg-hero-grid opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.25),transparent_55%)]" aria-hidden="true" />
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
      <div className="section-wrapper flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="relative flex-1 space-y-8">
          <div className="animate-slide-up inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs uppercase tracking-[0.35em] text-white/80 shadow-lg backdrop-blur transition-all hover:scale-105 hover:border-accent/40 hover:shadow-accent/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" aria-hidden="true" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
            </span>
            Disponible para nuevos retos
          </div>
          <div className="max-w-2xl space-y-6">
            <p className="animate-slide-up stagger-1 text-sm font-bold uppercase tracking-[0.25em] text-accent">Full Stack Developer</p>
            <h1 className="animate-slide-up stagger-2 bg-gradient-to-r from-white via-white to-accent bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Junior Sebastián<br />Osorio Toribio
            </h1>
            <p className="animate-slide-up stagger-3 text-lg leading-relaxed text-slate-100 md:max-w-xl md:text-xl">
              Lima, Perú. 🎓 TECSUP — Tercio superior 3x. Desarrollo <span className="font-bold text-white">backend</span> y <span className="font-bold text-white">frontend</span> con Node.js, Java, C#, PHP. Especializado en <span className="font-bold text-accent">IA aplicada</span>, APIs empresariales y soporte operativo 24/7.
            </p>
          </div>
          <div className="animate-slide-up stagger-4 flex flex-wrap items-center gap-4">
            <a
              href="#proyecto"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-orange-500 px-8 py-4 text-base font-bold text-midnight shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="relative z-10">Ver proyecto destacado</span>
              <span className="absolute inset-0 -z-0 animate-shine"></span>
            </a>
            <a
              href="#contacto"
              className="rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold transition-all hover:-translate-y-1 hover:border-accent hover:bg-white/10 hover:text-accent hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Hablemos
            </a>
          </div>
          <div className="animate-slide-up stagger-5 group w-full max-w-md cursor-pointer rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-lg backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">CV actualizado</p>
                <p className="mt-2 text-xl font-bold text-white">Portafolio profesional</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200/90">
                  Experiencia completa, logros medibles y enlaces directos a proyectos en producción.
                </p>
              </div>
              <a
                href="/assets/PortafolioCV.pdf"
                download
                className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white shadow-lg transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-midnight hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Descargar CV en PDF"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M12 4v12m0 0l-4-4m4 4 4-4M5 20h14"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="animate-slide-up stagger-6 grid gap-6 rounded-3xl border border-white/10 bg-white/10 p-7 shadow-lg backdrop-blur sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-wide text-white">
                🚀 Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Java', 'C#', 'PHP', 'Vue.js', 'IA'].map((tech, i) => (
                  <span key={tech} className={`animate-slide-up stagger-${i + 1} rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent`}>
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-100/90">
                Desarrollo end-to-end: levantamiento, arquitectura, implementación, despliegue y soporte continuo.
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-white">⚡ Especializado en:</p>
              <ul className="space-y-2 text-sm text-slate-200/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>IA con <strong className="text-white">Groq & Gemini</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>APIs REST seguras y escalables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>Despliegues en <strong className="text-white">AWS/Vercel</strong></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-200/90">
            <a href="https://github.com/JuniorSebastian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:-translate-y-0.5 hover:text-accent">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/juniorsebastian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:-translate-y-0.5 hover:text-accent">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:juniorosoriotoribio666@gmail.com" className="inline-flex items-center gap-2 transition hover:-translate-y-0.5 hover:text-accent">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Email
            </a>
            <a href="tel:+51982706458" className="inline-flex items-center gap-2 transition hover:-translate-y-0.5 hover:text-accent">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Teléfono
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="animate-float relative mx-auto flex max-w-md flex-col items-center">
            <div className="absolute -right-6 top-6 hidden h-32 w-32 animate-pulse rounded-full bg-accent/30 blur-3xl md:block" aria-hidden="true" />
            <div className="animate-glow-pulse relative overflow-hidden rounded-[2.5rem] border-2 border-white/20 bg-card-gradient p-5 shadow-2xl">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/assets/gas.png"
                  alt="Junior Osorio"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-10 left-1/2 hidden w-[110%] -translate-x-1/2 rounded-full bg-midnight/60 blur-3xl sm:block" aria-hidden="true" />
            </div>
            
            <div className="-mt-8 w-full space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-white/10">
                <p className="text-sm leading-relaxed text-slate-200">
                  <span className="font-semibold text-white">19 años.</span> Desarrollador con valores profesionales sólidos: 
                  <span className="text-accent"> puntualidad, responsabilidad y compromiso</span>. Me especializo en 
                  <span className="font-semibold text-white"> implementar APIs de IA en proyectos reales</span>, transformando conceptos en soluciones escalables en producción.
                </p>
              </div>

              <div className="group rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-purple-500/10 px-6 py-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  <p className="text-base font-bold text-white">TecCreate</p>
                  <span className="ml-auto rounded-full bg-green-500/20 px-2.5 py-0.5 text-xs font-semibold text-green-300">En Producción</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-slate-200">
                  Sistema administrativo multi-rol desplegado en <span className="font-semibold text-accent">Render</span> para TECSUP. 
                  Genera presentaciones PowerPoint automáticas mediante IA, con <span className="font-semibold text-white">+1200 PPTs creadas</span> y en uso activo.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-200">👤 Usuario</span>
                  <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-200">⚙️ Admin</span>
                  <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-200">🛠️ Soporte</span>
                  <span className="rounded-lg bg-accent/20 px-2.5 py-1 text-xs font-semibold text-accent">Groq + Gemini</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
