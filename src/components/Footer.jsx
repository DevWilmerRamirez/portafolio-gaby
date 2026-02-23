import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold text-white">
            Gaby<span className="text-purple-primary">.</span>
          </a>
          <p className="text-gray-400 text-sm mt-2">
            {t('footer.role')}
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#services" className="hover:text-purple-primary transition-colors">{t('nav.services')}</a>
          <a href="#portfolio" className="hover:text-purple-primary transition-colors">{t('nav.portfolio')}</a>
          <a href="#contact" className="hover:text-purple-primary transition-colors">{t('nav.contact')}</a>
        </div>

        <div className="text-gray-500 text-sm flex items-center gap-1">
          <Trans i18nKey="footer.rights">
             Made with <Heart size={14} className="text-red-500 fill-current" /> by Gaby
          </Trans>
          {/* Fallback copyright year if not in translation string or appended here */}
          <span className="ml-1">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
