import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const staticProjectData = [
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  }
];

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = (t('portfolio.items', { returnObjects: true }) || []).map((item, index) => ({
    ...item,
    ...(staticProjectData[index] || {})
  }));

  return (
    <section id="portfolio" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-purple-primary font-bold tracking-wider uppercase text-sm">
                {t('portfolio.section_badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-wine">
                {t('portfolio.section_title')}
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
                {t('portfolio.section_desc')}
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-wine font-bold border-b-2 border-wine pb-1 hover:text-purple-primary hover:border-purple-primary transition-colors">
            {t('portfolio.view_all')} <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer aspect-video"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-purple-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-purple-200 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.stats}
                  </span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-wine">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
           <a href="#" className="inline-flex items-center gap-2 text-wine font-bold border-b-2 border-wine pb-1">
            {t('portfolio.view_all')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
