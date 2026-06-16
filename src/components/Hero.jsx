import React from 'react';
import gabyHero from '../assets/Gaby-portafolio-3.jpg';

const Hero = () => {
  const stats = [
    { num: '+6', label: 'años de experiencia' },
    { num: '+20', label: 'clientes gestionados' },
    { num: '3', label: 'mercados globales' },
  ];

  return (
    <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-[6vw] pt-[100px] pb-[60px] gap-16 relative overflow-hidden bg-cream">
      {/* Decorative gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_70%_40%,#F5D5D9_0%,transparent_60%)]"></div>

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

      <div className="relative z-10 flex justify-center items-center animate-fade-up delay-200">
        {/* Background glow and decorative elements */}
        <div className="absolute w-[120%] h-[120%] -z-10 flex justify-center items-center pointer-events-none">
          {/* Main glowing orb */}
          <div className="absolute w-[280px] h-[280px] bg-gradient-to-tr from-pink/25 to-wine-light/15 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
          {/* Secondary glowing orb */}
          <div className="absolute w-[220px] h-[220px] bg-gradient-to-bl from-pink-light/35 to-transparent rounded-full blur-2xl translate-x-12 -translate-y-12"></div>
          {/* Decorative outline circles */}
          <div className="absolute w-[300px] h-[300px] border border-wine/10 rounded-full"></div>
          <div className="absolute w-[360px] h-[360px] border border-dashed border-wine/5 rounded-full animate-[spin_120s_linear_infinite]"></div>
        </div>

        {/* Image Frame */}
        <div className="relative max-w-[340px] w-full aspect-[4/5] bg-gradient-to-b from-pink-light to-cream rounded-t-[170px] rounded-b-[32px] p-2 shadow-2xl shadow-wine/15 transition-transform duration-500 hover:scale-[1.02]">
          {/* Inner border/frame */}
          <div className="w-full h-full rounded-t-[160px] rounded-b-[24px] overflow-hidden border border-wine/10 bg-white relative">
            <img 
              src={gabyHero} 
              alt="María Gabriela Bravo" 
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
            {/* Soft shadow vignette overlay on the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/15 via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating badge/sticker */}
          <div className="absolute -bottom-2 -right-4 bg-wine text-white rounded-2xl py-2.5 px-4 shadow-xl shadow-wine/25 border border-wine-light/20 transition-transform duration-300 hover:translate-y-[-2px]">
            <div className="text-[0.65rem] uppercase tracking-wider text-pink font-bold">Paid Media Specialist</div>
            <div className="font-playfair text-sm font-bold whitespace-nowrap">@ADSbyGaby</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
