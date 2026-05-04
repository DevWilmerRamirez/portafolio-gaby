import React from 'react';

const Hero = () => {
  const stats = [
    { num: '+6', label: 'años de experiencia' },
    { num: '+20', label: 'clientes gestionados' },
    { num: '3', label: 'mercados globales' },
  ];

  const metrics = [
    { num: '-50%', desc: 'Reducción de CAC en turismo Chile' },
    { num: '20%', desc: 'Conversión Open House EEUU' },
    { num: '+30%', desc: 'Tráfico calificado inmobiliario' },
    { num: 'Magna', desc: 'Cum Laude · RRPP' },
  ];

  return (
    <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-[6vw] pt-[100px] pb-[60px] gap-16 relative overflow-hidden bg-cream">
      {/* Decorative gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,theme(colors.pink.light)_0%,transparent_60%)]"></div>

      <div className="relative z-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 bg-pink-light border border-pink rounded-full px-4 py-1.5 text-[0.78rem] font-semibold text-wine tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-wine animate-pulse"></span>
          Disponible para nuevos proyectos
        </div>
        
        <h1 className="font-playfair text-clamp-h1 font-black leading-[1.1] tracking-tighter text-wine-dark mb-4">
          Tu inversión<br />en ADS debe<br /><em className="not-italic text-wine-light">generar resultados.</em>
        </h1>
        
        <p className="text-base leading-relaxed text-text-medium max-w-[480px] mb-8">
          Paid Media Specialist con +6 años de experiencia en Meta Ads y Google Ads para empresas en Chile, EEUU y Latinoamérica. Estrategia basada en datos, potenciada por IA. 🤓
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a href="#contacto" className="bg-wine text-white px-7 py-3 rounded-full text-[0.9rem] font-semibold transition-all hover:bg-wine-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-wine/30">
            Agenda una llamada gratuita
          </a>
          <a href="#ayudarte" className="border-[1.5px] border-wine text-wine px-7 py-3 rounded-full text-[0.9rem] font-semibold transition-all hover:bg-pink-light">
            Ver servicios
          </a>
        </div>

        <div className="flex items-center gap-8">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="text-center">
                <div className="font-playfair text-3xl font-black text-wine leading-none">
                  {stat.num}
                </div>
                <div className="text-[0.72rem] text-text-light font-medium tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
              {idx < stats.length - 1 && <div className="w-px h-8 bg-wine/15 self-center"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex justify-center animate-fade-up delay-200">
        <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-wine/18 max-w-[340px] w-full relative before:absolute before:-inset-[2px] before:rounded-[26px] before:bg-gradient-to-br before:from-pink before:to-transparent before:-z-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wine-light to-wine-dark flex items-center justify-center font-playfair text-3xl text-white font-bold mb-4 shadow-inner">
            G
          </div>
          <div className="font-playfair text-xl font-bold text-wine-dark mb-0.5">
            María Gabriela Bravo
          </div>
          <div className="text-[0.78rem] text-text-light mb-5">
            Paid Media Specialist · @ADSbyGaby
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-5">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-pink-bg rounded-xl p-3">
                <div className="font-playfair text-lg font-bold text-wine leading-none">
                  {metric.num}
                </div>
                <div className="text-[0.68rem] text-text-light leading-tight mt-0.5">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {['🇻🇪 Venezuela', '🇨🇱 Chile', '🇺🇸 EEUU'].map((tag, idx) => (
              <span key={idx} className="bg-wine text-white text-[0.68rem] font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
