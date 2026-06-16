import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

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
      
      <div className="flex items-center gap-4 text-[0.78rem] text-pink font-semibold">
        <span>@ADSbyGaby · adsbygaby.com</span>
        <div className="flex items-center gap-3 border-l border-white/20 pl-4">
          <a 
            href="https://www.instagram.com/adsbygaby" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/50 hover:text-pink transition-colors p-0.5"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/50 hover:text-pink transition-colors p-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
