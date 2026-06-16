import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="bg-wine-dark py-24 px-[6vw] text-center relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,#E8A0A81F_0%,transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="font-playfair text-clamp-h1 font-black text-white leading-tight mb-4">
          ¿Lista para que tu inversión<br />en ADS trabaje de <em className="not-italic text-pink">verdad?</em>
        </h2>
        <p className="text-base text-white/65 max-w-[480px] mx-auto mb-10 leading-relaxed">
          Agenda una llamada gratuita de 30 minutos. Sin compromiso. Solo conversamos sobre tu negocio y cómo puedo ayudarte a crecer con pauta digital. 🎯
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ158Vmnhy7RJ4tuXGQc_Hb_jeASe5PF5oRqhMv6OKmwryQnEth-lIlrBUw_sb84JxLH7KUI1hYW?gv=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-pink text-wine-dark font-bold px-8 py-3.5 rounded-full text-[0.95rem] transition-all hover:bg-white hover:-translate-y-0.5 inline-block text-center shadow-lg hover:shadow-xl"
          >
            Agendar llamada gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
