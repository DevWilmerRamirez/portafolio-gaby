import React from 'react';
import gabyAbout from '../assets/Gaby-portafolio-1.jpg';

const About = () => {
  const highlights = [
    { title: 'Meta Ads + Google Ads', desc: 'Campañas orientadas a conversión y ROI real' },
    { title: 'IA aplicada al Paid Media', desc: 'Advantage+, automatización y optimización' },
    { title: 'Mercados globales', desc: 'Chile, EEUU, Venezuela — culturas distintas' },
    { title: 'Liderazgo de equipos', desc: 'Fundadora y directora de agencia creativa' },
  ];

  return (
    <section id="quien" className="py-24 px-[6vw] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-20 items-center">
        <div className="relative">
          <div className="w-full aspect-[3/4] bg-gradient-to-br from-pink-light to-wine-light rounded-[20px] overflow-hidden relative">
            <img 
              src={gabyAbout} 
              alt="María Gabriela Bravo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
              <div className="font-playfair text-lg font-bold text-wine-dark">
                María Gabriela Bravo
              </div>
              <div className="text-[0.75rem] text-text-light mt-0.5">
                Licenciada en RRPP · Paid Media Specialist
              </div>
            </div>
          </div>
          <div className="absolute top-6 -right-6 bg-wine text-white rounded-2xl p-4 text-center shadow-xl shadow-wine/30">
            <span className="font-playfair text-2xl font-black block leading-tight">Magna</span>
            <span className="text-[0.75rem] font-semibold">Cum Laude</span>
          </div>
        </div>

        <div>
          <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-wine-light mb-3">
            Quién soy
          </div>
          <h2 className="font-playfair text-clamp-title font-black text-wine-dark leading-tight mb-3">
            Hola, soy Gaby 🙋🏼‍♀️
          </h2>
          <div className="w-12 h-[3px] rounded-full bg-wine-light mb-6"></div>
          
          <div className="space-y-4 text-[0.95rem] leading-relaxed text-text-medium mb-8">
            <p>
              Llegué al mundo digital sin planearlo. Me gradué <strong className="text-wine-dark font-bold">Magna Cum Laude en Relaciones Públicas</strong> con un plan muy claro en mente: agencia de RR.PP. clásica. Punto.
            </p>
            <p>
              Pero antes de graduarme, una profesora que me cambió la vida me propuso ser Community Manager para unos abogados. Yo, que nunca fui muy farandulera — y sigo sin serlo, por eso casi siempre se me olvida tomarme fotos con clientes 📸😅 — dije que sí. Sin saber nada. Absolutamente nada.
            </p>
            <p>
              Hoy llevo <strong className="text-wine-dark font-bold">más de 6 años</strong> diseñando estrategias de Paid Media para empresas en Venezuela, Chile y Estados Unidos. Disfruto pelear con Meta para recuperar cuentas 😤 y celebrar cada vez que el costo de conversión cae donde debe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-pink-bg border-l-[3px] border-wine-light rounded-r-xl p-3 px-4">
                <div className="text-[0.8rem] font-semibold text-wine-dark mb-1">
                  {item.title}
                </div>
                <div className="text-[0.75rem] text-text-light leading-snug">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <a href="#contacto" className="inline-block bg-wine text-white px-8 py-3 rounded-full text-[0.95rem] font-semibold transition-all hover:bg-wine-dark hover:-translate-y-0.5">
            Hablemos 👋
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
