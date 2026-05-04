import React from 'react';

const Training = () => {
  const trainings = [
    {
      badge: '🏆 Formación destacada',
      title: 'Taller de Ventas Digitales',
      provider: 'Vilma Núñez · 2022',
      desc: 'Capacitación con una de las mayores referentes del marketing digital hispanohablante. Estrategia de ventas, funnel y conversión digital.',
      topics: ['Ventas digitales', 'Funnel', 'Conversión']
    },
    {
      badge: '📚 Formación continua',
      title: 'Marketing Digital · Transforma tu Negocio',
      provider: 'Benowu · España · 2020',
      desc: 'Curso completo de marketing digital orientado a resultados de negocio. Estrategia, implementación y medición de campañas digitales.',
      topics: ['Marketing digital', 'Estrategia', 'Métricas']
    },
    {
      badge: '🎓 Base académica',
      title: 'Licenciatura en Relaciones Públicas',
      provider: 'IUDERP · Venezuela · 2014–2018',
      desc: 'Formación universitaria en comunicación estratégica y gestión de marca. Graduada Magna Cum Laude — la base que diferencia mi visión comunicacional.',
      topics: ['Comunicación', 'Estrategia de marca', 'Magna Cum Laude']
    }
  ];

  return (
    <section id="capacitaciones" className="py-24 px-[6vw] bg-pink-bg">
      <div className="mb-14">
        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-wine-light mb-3">
          Formación
        </div>
        <h2 className="font-playfair text-clamp-title font-black text-wine-dark leading-tight mb-3">
          Aprendo para poder<br />enseñar mejor
        </h2>
        <div className="w-12 h-[3px] rounded-full bg-wine-light"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {trainings.map((card, idx) => (
          <div key={idx} className="bg-white rounded-[18px] p-7 border border-wine/10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-wine/10">
            <div className="inline-flex items-center gap-2 bg-wine text-white text-[0.7rem] font-semibold px-3 py-1 rounded-full mb-4">
              {card.badge}
            </div>
            <div className="font-playfair text-base font-bold text-wine-dark mb-1">
              {card.title}
            </div>
            <div className="text-[0.78rem] text-wine-light font-semibold mb-2">
              {card.provider}
            </div>
            <p className="text-[0.8rem] leading-relaxed text-text-medium mb-4">
              {card.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {card.topics.map((topic, tIdx) => (
                <span key={tIdx} className="bg-pink-light rounded-full text-[0.68rem] text-wine-dark px-2.5 py-0.5 font-medium">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-br from-wine-dark to-wine-light rounded-[20px] p-10 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(232,160,168,0.2)_0%,transparent_60%)] pointer-events-none"></div>
        <h3 className="font-playfair text-2xl font-bold text-white mb-2 relative z-10">
          ¿Quieres aprender a gestionar tus propias campañas? 🤓
        </h3>
        <p className="text-[0.88rem] text-white/70 mb-6 relative z-10 max-w-[600px] mx-auto">
          Ofrezco mentorías 1:1 y acompañamiento para equipos que quieran dominar el mundo de los ADS con criterio propio.
        </p>
        <a 
          href="#contacto" 
          className="inline-block bg-pink text-wine-dark text-[0.88rem] font-bold px-7 py-3 rounded-full transition-all relative z-10 hover:bg-white hover:-translate-y-0.5"
        >
          Quiero la mentoría →
        </a>
      </div>
    </section>
  );
};

export default Training;
