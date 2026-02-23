import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-wine to-purple-dark overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-primary rounded-full blur-3xl filter mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-wine rounded-full blur-3xl filter mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-0 relative z-10 items-center">

        {/* 1. Header Text (Title, Desc) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-none lg:row-start-1 lg:self-end lg:mb-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              {t('hero.greeting')} <br />
              {t('hero.im')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">{t('hero.name')}</span>
            </h1>
            <p className="text-lg text-gray-200 lg:mb-0 max-w-lg leading-relaxed mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>

        {/* 2. Image Area */}
        <div className="col-span-1 lg:col-span-7 h-[50vh] lg:h-screen flex justify-center items-center lg:items-center min-[1440px]:items-end relative order-2 lg:order-none lg:col-start-6 lg:row-span-2 mt-4 mb-4 lg:mt-0 lg:mb-0">
           {/* Background Brush Shape */}
           <img
              src="/assets/shape1.png"
              alt=""
              className="absolute top-1/2 left-1/2 min-[1440px]:top-auto min-[1440px]:left-auto min-[1440px]:bottom-0 min-[1440px]:left-0 transform -translate-x-1/2 -translate-y-1/2 min-[1440px]:translate-x-0 min-[1440px]:translate-y-0 w-[140%] md:w-[100%] lg:w-[120%] h-auto object-contain -z-10 opacity-60 mix-blend-screen max-w-none"
            />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 w-full h-full flex items-center justify-center min-[1440px]:items-end min-[1440px]:justify-end min-[1440px]:pr-10"
          >
             {/* Dynamic Frame Image Container */}
            <div className={`
                relative flex justify-center items-center overflow-hidden transition-all duration-300
                max-[1439px]:border-4 max-[1439px]:border-white/20 max-[1439px]:rounded-[2.5rem] max-[1439px]:bg-white/5 max-[1439px]:backdrop-blur-sm max-[1439px]:shadow-2xl
                max-[1439px]:w-full max-[1439px]:max-w-md max-[1439px]:aspect-[4/5]
                min-[1440px]:w-auto min-[1440px]:h-[90%]
            `}>
              <img
                src="/assets/gaby3.jpg"
                alt="Gaby - Media Buyer"
                className={`
                  object-contain drop-shadow-2xl
                  max-[1439px]:w-full max-[1439px]:h-full max-[1439px]:object-cover
                  min-[1440px]:h-full min-[1440px]:w-auto
                `}
              />
            </div>
          </motion.div>
        </div>

        {/* 3. Actions (Buttons, Stats) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col items-center lg:items-start order-3 lg:order-none lg:row-start-2 lg:self-start lg:mt-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="w-full flex flex-col items-center lg:items-start"
           >
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center lg:justify-start">
              <a
                href="#portfolio"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-wine rounded-full font-bold hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                {t('hero.cta_work')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto"
              >
                {t('hero.cta_contact')}
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 w-full">
              <div className="text-center lg:text-left">
                <span className="block text-3xl md:text-4xl font-bold text-white">5+</span>
                <span className="text-sm text-gray-300">{t('hero.stat_years')}</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center lg:text-left">
                <span className="block text-3xl md:text-4xl font-bold text-white">100+</span>
                <span className="text-sm text-gray-300">{t('hero.stat_clients')}</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
