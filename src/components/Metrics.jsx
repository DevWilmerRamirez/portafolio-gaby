import React from 'react';

const Metrics = () => {
  const metrics = [
    { num: '-50%', label: 'Reducción de costo por resultado', context: 'Turismo · Chile · Elite Travel' },
    { num: '20%', label: 'Conversión recordatorio → asistencia', context: 'Inmobiliario · EEUU · Sunbeltus' },
    { num: '+30%', label: 'Tráfico calificado generado', context: 'Sector inmobiliario · EEUU' },
    { num: '+20', label: 'Clientes gestionados simultáneamente', context: 'Venezuela · EEUU · DygitalBrand' },
  ];

  return (
    <section id="resultados" className="py-24 px-[6vw] bg-wine-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,#E8A0A81A_0%,transparent_60%)] pointer-events-none"></div>

      <div className="mb-14 relative z-10">
        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-pink mb-3">
          Resultados reales
        </div>
        <h2 className="font-playfair text-clamp-title font-black text-white leading-tight mb-3">
          Números que hablan<br />por sí solos
        </h2>
        <div className="w-12 h-[3px] rounded-full bg-pink mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 rounded-[18px] p-7 text-center backdrop-blur-md transition-all hover:bg-white/10 hover:-translate-y-1">
            <div className="font-playfair text-[2.8rem] font-black text-pink leading-none mb-2">
              {metric.num}
            </div>
            <div className="text-[0.8rem] text-white/70 leading-relaxed">
              {metric.label}
            </div>
            <div className="text-[0.7rem] text-white/40 mt-2 italic">
              {metric.context}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
