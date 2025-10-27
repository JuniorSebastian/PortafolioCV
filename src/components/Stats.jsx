const highlights = [
  {
    value: '90%',
    label: 'optimización en gestión de clientes',
    description: 'Sistema integral que centraliza la información comercial para Pantaleon Toribio Graus SRL.',
  },
  {
    value: '75%',
    label: 'reducción en liquidaciones manuales',
    description: 'Automatización de comisiones y reportes diarios con APIs y Excel avanzado.',
  },
  {
    value: '95%',
    label: 'uptime con soporte continuo',
    description: 'Monitoreo y mantenimiento proactivo de sistemas implementados en producción.',
  },
  {
    value: '1200+',
    label: 'PPTs con IA en producción',
    description: 'Resultados de TecCreate con Groq + Gemini en uso activo en TECSUP.',
  },
];

function Stats() {
  return (
    <section aria-label="Logros clave" className="bg-white/70">
      <div className="section-wrapper">
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="glass-card relative overflow-hidden bg-card-gradient text-white shadow-glow"
            >
              <div className="absolute -left-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-accent/40 blur-3xl" aria-hidden="true" />
              <div className="relative flex flex-col gap-2 p-8">
                <span className="text-4xl font-bold tracking-tight">{item.value}</span>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">{item.label}</p>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
