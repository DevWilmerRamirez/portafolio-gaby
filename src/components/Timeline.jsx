import React, { useEffect, useRef } from 'react';

const TimelineItem = ({ item, isFirst }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0');
          entry.target.classList.remove('opacity-0', '-translate-x-5');
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className="relative pl-10 pb-10 opacity-0 -translate-x-5 transition-all duration-700 ease-out"
    >
      <div className={`absolute left-[-8px] top-1.5 w-4 h-4 rounded-full border-4 border-cream z-10 ${item.current ? 'bg-pink shadow-[0_0_0_2px_#E8A0A8,0_0_12px_#E8A0A8]' : 'bg-wine-light shadow-[0_0_0_2px_#8C2238]'}`}>
      </div>
      
      {item.current && (
        <div className="inline-flex items-center gap-1.5 bg-wine text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-full mb-2 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          Actualmente
        </div>
      )}
      
      <div className="text-[0.72rem] font-bold text-wine-light tracking-widest uppercase mb-1.5">
        {item.date}
      </div>
      <div className="font-playfair text-lg font-bold text-wine-dark mb-0.5">
        {item.company}
      </div>
      <div className="text-[0.82rem] font-semibold text-text-medium mb-2.5">
        {item.role}
      </div>
      <div className="text-[0.82rem] leading-relaxed text-text-light max-w-[560px] mb-3">
        {item.desc}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {item.results.map((res, idx) => (
          <span key={idx} className="bg-pink-light rounded-full text-[0.7rem] font-semibold text-wine-dark px-3 py-0.5">
            {res}
          </span>
        ))}
      </div>
    </div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      date: 'Jun 2025 · Presente',
      company: 'Elite Travel',
      role: 'Paid Media Specialist · Chile / Remoto',
      desc: 'Optimización de campañas de turismo en Meta Ads. Implementación de Ventas Advantage+ con las últimas actualizaciones para maximizar rendimiento y reducir costos.',
      results: ['CAC -50% (900→300 CLP)', 'Advantage+', 'Turismo'],
      current: true
    },
    {
      date: 'Feb 2025 · Presente',
      company: 'Sunbeltus',
      role: 'Paid Media Specialist · EEUU / Remoto',
      desc: 'Diseño y ejecución de campañas de reconocimiento y eventos (Open House) en Meta Ads para el mercado inmobiliario americano. Segmentación ultra precisa para perfil de comprador en EEUU.',
      results: ['20% conversión Open House', '+30% tráfico', 'Inmobiliario EEUU'],
      current: true
    },
    {
      date: 'Ene 2024 · Ene 2025',
      company: 'Colortrasnfer',
      role: 'Mentora en Meta ADS · Venezuela',
      desc: 'Mentoría in situ enfocada en resolución de problemas de configuración, corrección de incidencias en campañas y actualización del equipo en nuevas funcionalidades como Advantage+.',
      results: ['Mentoría', 'Artes Gráficas'],
      current: false
    },
    {
      date: 'Ene 2019 · Dic 2024',
      company: 'DygitalBrand · Agencia Creativa',
      role: 'Fundadora & Directora de Estrategia',
      desc: 'Fundé y lideré la agencia desde cero. Definí visión, crecimiento y gestioné todas las operaciones — social media, campañas, administración. Meta/Google Ads para más de 20 clientes en EEUU y Venezuela.',
      results: ['+20 clientes', 'EEUU + Venezuela', '5 años'],
      current: false
    },
    {
      date: '2014 · 2018',
      company: 'IUDERP · Instituto de Relaciones Públicas',
      role: 'Licenciatura en Relaciones Públicas',
      desc: 'Base académica en comunicación estratégica, gestión de marca y relaciones institucionales. El punto de partida que lo cambió todo.',
      results: ['Magna Cum Laude', 'Caracas, Venezuela'],
      current: false
    }
  ];

  return (
    <section id="experiencia" className="py-24 px-[6vw] bg-cream">
      <div className="mb-14">
        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-wine-light mb-3">
          Experiencia
        </div>
        <h2 className="font-playfair text-clamp-title font-black text-wine-dark leading-tight mb-3">
          Mi camino en<br />el mundo digital
        </h2>
        <div className="w-12 h-[3px] rounded-full bg-wine-light"></div>
      </div>

      <div className="relative pl-0 md:pl-8">
        {/* Timeline Line */}
        <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-wine-light to-pink"></div>
        
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} item={exp} isFirst={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
