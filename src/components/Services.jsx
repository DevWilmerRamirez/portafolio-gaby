import React from 'react';

const Services = () => {
  const painPoints = [
    'Inviertes en ADS pero no ves el retorno esperado',
    'Tu costo por resultado sube y no sabes por qué',
    'Tienes campañas activas pero sin estrategia real',
    'Quieres escalar pero no sabes por dónde empezar',
    'Mides impresiones pero no conversiones reales',
    'Tu equipo no tiene claridad sobre qué métricas importan',
  ];

  const serviceCards = [
    {
      icon: '📊',
      name: 'Gestión de campañas',
      desc: 'Meta Ads y Google Ads con estrategia, ejecución y optimización continua. Cada peso invertido debe trabajar de verdad.',
      tag: 'Meta Ads · Google Ads'
    },
    {
      icon: '🔍',
      name: 'Auditoría publicitaria',
      desc: 'Revisión completa de tus campañas actuales. Identifico exactamente qué falla y qué oportunidades estás dejando pasar.',
      tag: 'Diagnóstico completo'
    },
    {
      icon: '🎯',
      name: 'Consultoría estratégica',
      desc: 'Sesión 1:1 para definir tu estrategia de pauta, presupuesto óptimo y métricas de éxito alineadas a tu negocio.',
      tag: 'Sesión 1:1'
    },
    {
      icon: '🚀',
      name: 'Mentoría en ADS',
      desc: 'Acompaño a tu equipo para que aprenda a gestionar y optimizar sus propias campañas con criterio propio.',
      tag: 'Equipos y freelancers'
    }
  ];

  return (
    <section id="ayudarte" className="py-24 px-[6vw] bg-pink-bg">
      <div className="mb-14">
        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-wine-light mb-3">
          En qué puedo ayudarte
        </div>
        <h2 className="font-playfair text-clamp-title font-black text-wine-dark leading-tight mb-3">
          ¿Esto te suena familiar?
        </h2>
        <div className="w-12 h-[3px] rounded-full bg-wine-light"></div>
      </div>

      <div className="bg-white rounded-[20px] p-8 md:p-10 mb-12 border-l-4 border-wine-light shadow-sm">
        <div className="font-playfair text-xl font-bold text-wine-dark mb-4">
          Si marcas alguno de estos, estás en el lugar correcto 👇
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {painPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 text-[0.88rem] text-text-medium">
              <span className="text-wine-light font-bold flex-shrink-0">→</span>
              {point}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {serviceCards.map((card, idx) => (
          <div key={idx} className="group bg-white rounded-[18px] p-7 border border-wine/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-wine/12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-wine-light to-pink opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center text-xl mb-4">
              {card.icon}
            </div>
            <div className="font-playfair text-lg font-bold text-wine-dark mb-2">
              {card.name}
            </div>
            <p className="text-[0.82rem] leading-relaxed text-text-medium mb-4">
              {card.desc}
            </p>
            <span className="inline-block text-[0.7rem] font-semibold text-wine-light bg-pink-bg px-3 py-1 rounded-full">
              {card.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
