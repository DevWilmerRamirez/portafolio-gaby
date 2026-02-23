import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-bold ${isScrolled ? 'text-wine' : 'text-white'}`}>
          Gaby<span className="text-purple-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-purple-primary transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
             <button
               onClick={() => changeLanguage('en')}
               className={`text-xs font-bold uppercase transition-colors ${i18n.language === 'en' ? 'text-purple-primary' : (isScrolled ? 'text-gray-500 hover:text-gray-800' : 'text-white/60 hover:text-white')}`}
             >
               EN
             </button>
             <span className={`text-xs ${isScrolled ? 'text-gray-300' : 'text-white/30'}`}>|</span>
             <button
               onClick={() => changeLanguage('es')}
               className={`text-xs font-bold uppercase transition-colors ${i18n.language === 'es' ? 'text-purple-primary' : (isScrolled ? 'text-gray-500 hover:text-gray-800' : 'text-white/60 hover:text-white')}`}
             >
               ES
             </button>
          </div>

          <a
            href="/cv.pdf"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              isScrolled
                ? 'bg-wine text-white hover:bg-purple-dark'
                : 'bg-white text-wine hover:bg-neutral-100'
            }`}
          >
            <Download size={16} />
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Language Switcher (Visible on mobile header) */}
             <div className="flex items-center gap-2">
                 <button
                   onClick={() => changeLanguage('en')}
                   className={`text-xs font-bold uppercase ${i18n.language === 'en' ? 'text-purple-primary' : (isScrolled ? 'text-gray-500' : 'text-white/70')}`}
                 >
                   EN
                 </button>
                 <span className={`text-xs ${isScrolled ? 'text-gray-300' : 'text-white/30'}`}>|</span>
                 <button
                   onClick={() => changeLanguage('es')}
                   className={`text-xs font-bold uppercase ${i18n.language === 'es' ? 'text-purple-primary' : (isScrolled ? 'text-gray-500' : 'text-white/70')}`}
                 >
                   ES
                 </button>
              </div>

            <button
              className="text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium hover:text-purple-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/cv.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-wine text-white rounded-full text-sm font-medium"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
