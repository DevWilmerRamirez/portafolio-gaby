import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Search, Layout, Users, BarChart3, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const staticServiceData = [
  {
    icon: <Facebook size={32} />,
    color: 'bg-blue-600'
  },
  {
    icon: <Search size={32} />,
    color: 'bg-green-600'
  },
  {
    icon: <Layout size={32} />,
    color: 'bg-purple-primary'
  },
  {
    icon: <Users size={32} />,
    color: 'bg-pink-500'
  },
  {
    icon: <PenTool size={32} />,
    color: 'bg-orange-500'
  },
  {
    icon: <BarChart3 size={32} />,
    color: 'bg-indigo-600'
  }
];

const Services = () => {
  const { t } = useTranslation();

  // Merge translated text with static icons/colors
  // We use safeguard '|| []' to prevent errors if translation isn't loaded yet
  const serviceItems = (t('services.items', { returnObjects: true }) || []).map((item, index) => ({
    ...item,
    ...(staticServiceData[index] || {})
  }));

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-primary font-bold tracking-wider uppercase text-sm">
            {t('services.section_badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-wine">
             {t('services.section_title')}
          </h2>
          <p className="text-gray-600 text-lg">
             {t('services.section_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-full ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
