import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      emoji: '✈️',
      industry: 'Turismo · Chile',
      title: 'Elite Travel — Reducción de CAC a la mitad',
      desc: 'Optimización de campañas de turismo en Meta Ads. Ajustes de puja, segmentación precisa y creatividades optimizadas con Advantage+.',
      kpis: ['CAC: 900→300 CLP', 'Meta Ads', 'Advantage+'],
      gradient: 'from-pink-bg to-pink'
    },
    {
      emoji: '🏠',
      industry: 'Inmobiliario · EEUU',
      title: 'Sunbeltus — Open House con 20% de conversión',
      desc: 'Campañas de reconocimiento y recordatorio de eventos inmobiliarios. Segmentación precisa para el perfil comprador americano.',
      kpis: ['20% conversión', '+30% tráfico', 'Meta Ads'],
      gradient: 'from-pink-light to-wine'
    },
    {
      emoji: '🎨',
      industry: 'Múltiples industrias · Venezuela + EEUU',
      title: 'DygitalBrand — +20 clientes, 2 mercados',
      desc: 'Gestión integral de campañas de Meta y Google Ads para marcas de servicios y productos. Crecimiento sostenido de comunidades y ventas.',
      kpis: ['+20 clientes', 'Meta + Google Ads', '5 años'],
      gradient: 'from-pink to-wine-dark'
    }
  ];

  return (
    <section id="portafolio" className="py-24 px-[6vw] bg-white">
      <div className="mb-14">
        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-wine-light mb-3">
          Portafolio
        </div>
        <h2 className="font-playfair text-clamp-title font-black text-wine-dark leading-tight mb-3">
          Casos que generaron<br />resultados reales
        </h2>
        <div className="w-12 h-[3px] rounded-full bg-wine-light"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="group rounded-[20px] overflow-hidden border border-wine/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-wine/15">
            <div className={`h-[180px] flex items-center justify-center text-5xl bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}>
              {project.emoji}
            </div>
            <div className="p-6">
              <div className="text-[0.68rem] font-bold tracking-widest uppercase text-wine-light mb-2">
                {project.industry}
              </div>
              <div className="font-playfair text-lg font-bold text-wine-dark mb-2 leading-snug">
                {project.title}
              </div>
              <p className="text-[0.8rem] leading-relaxed text-text-medium mb-4">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.kpis.map((kpi, kIdx) => (
                  <span key={kIdx} className="bg-pink-bg rounded-lg px-2.5 py-1 text-[0.72rem] font-semibold text-wine">
                    {kpi}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
