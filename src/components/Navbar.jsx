import { useEffect, useState } from 'react';

const NAVBAR_ID = 'primary-navigation';

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.2,
      }
    );

    const observed = links
      .map((link) => (link.href.startsWith('#') ? link.href.substring(1) : null))
      .map((id) => (id ? document.getElementById(id) : null))
      .filter(Boolean);

    observed.forEach((section) => observer.observe(section));

    return () => {
      observed.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [links]);

  return (
    <header
      className={`sticky top-0 z-40 overflow-hidden text-white transition duration-200 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent ${
        isScrolled ? 'bg-midnight/95 shadow-lg backdrop-blur' : 'bg-midnight/70 backdrop-blur'
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-lg font-semibold tracking-tight" aria-label="Ir al inicio">
          Junior Osorio
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeSection === link.href ? 'text-accent' : 'text-white/80 hover:text-accent'
              }`}
            >
              {activeSection === link.href ? (
                <span
                  className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-8 rounded-full bg-accent"
                  aria-hidden="true"
                />
              ) : null}
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/assets/CV-Junior-Osorio.pdf"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Descargar CV
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          aria-expanded={isOpen}
          aria-controls={NAVBAR_ID}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                d="M6 6l12 12M6 18L18 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          )}
          <span className="sr-only">{isOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>
      {isOpen && (
        <nav
          id={NAVBAR_ID}
          className="border-t border-white/10 bg-midnight/95 px-6 pb-6 pt-4 md:hidden"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-lg px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    activeSection === link.href ? 'bg-white/10 text-accent' : 'hover:bg-white/10'
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/assets/CV-Junior-Osorio.pdf"
                className="block rounded-lg px-3 py-2 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={closeMenu}
              >
                Descargar CV
              </a>
            </li>
            <li>
              <a
                href="mailto:juniorosoriotoribio666@gmail.com"
                className="block rounded-lg px-3 py-2 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={closeMenu}
              >
                Contacto directo
              </a>
            </li>
            <li>
              <a
                href="tel:+51982706458"
                className="block rounded-lg px-3 py-2 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={closeMenu}
              >
                Llamar ahora
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
