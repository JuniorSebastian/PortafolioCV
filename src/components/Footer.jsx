function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-wrapper flex flex-col gap-6 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold text-midnight">© {currentYear} Junior Osorio. MIT License.</p>
          <p className="mt-1 text-xs text-slate-500">Construido con React + Tailwind y optimizado para Vercel.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#inicio" className="underline-offset-4 transition hover:text-accent">
            Inicio
          </a>
          <a href="#proyecto" className="underline-offset-4 transition hover:text-accent">
            Proyecto
          </a>
          <a href="#contacto" className="underline-offset-4 transition hover:text-accent">
            Contacto
          </a>
          <a href="/LICENSE" className="underline-offset-4 transition hover:text-accent">
            Ver licencia
          </a>
          <a href="/assets/CV-Junior-Osorio.pdf" className="underline-offset-4 transition hover:text-accent">
            CV actualizado
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
