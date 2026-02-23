import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experience.roles', { returnObjects: true }) || [];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-primary font-bold tracking-wider uppercase text-sm">
            {t('experience.section_badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-wine">
            {t('experience.section_title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-wine/20 via-purple-primary/20 to-wine/20"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="hidden md:block w-5/12"></div>

              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-primary rounded-full z-10 shadow-lg"></div>

              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center gap-2 mb-2 text-sm text-purple-primary font-semibold">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
