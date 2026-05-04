import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-wine-dark border-top border-white/10 py-8 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-playfair text-lg text-white font-bold">
        ADS<span className="text-pink">by</span>Gaby
      </div>
      
      <div className="flex gap-6">
        {['Quién soy', 'Servicios', 'Portafolio', 'Formación'].map((link, idx) => (
          <a 
            key={idx} 
            href={`#${['quien', 'ayudarte', 'portafolio', 'capacitaciones'][idx]}`} 
            className="text-[0.78rem] text-white/50 transition-colors hover:text-pink"
          >
            {link}
          </a>
        ))}
      </div>
      
      <div className="text-[0.78rem] text-pink font-semibold">
        @ADSbyGaby · adsbygaby.com
      </div>
    </footer>
  );
};

export default Footer;
