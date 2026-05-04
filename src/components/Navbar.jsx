import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'quien', 'ayudarte', 'portafolio', 'capacitaciones', 'contacto'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quién soy', href: '#quien', id: 'quien' },
    { name: 'Servicios', href: '#ayudarte', id: 'ayudarte' },
    { name: 'Portafolio', href: '#portafolio', id: 'portafolio' },
    { name: 'Capacitaciones', href: '#capacitaciones', id: 'capacitaciones' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-cream/90 backdrop-blur-xl border-b border-wine/15 px-[6vw]">
      <div className="flex items-center justify-between h-16">
        <div className="font-playfair text-xl font-bold text-wine tracking-tight">
          ADS<span className="text-pink">by</span>Gaby
        </div>
        
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href}
                className={`text-[0.85rem] font-medium tracking-wide transition-colors duration-200 ${
                  activeSection === link.id ? 'text-wine font-semibold' : 'text-text-medium hover:text-wine'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="#contacto" 
          className="bg-wine text-white text-[0.82rem] font-semibold px-5 py-[0.55rem] rounded-full tracking-wide transition-all duration-200 hover:bg-wine-dark hover:-translate-y-px"
        >
          Agendar llamada
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
