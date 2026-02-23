import React from 'react';
import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const staticTestimonialsData = [
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = (t('testimonials.items', { returnObjects: true }) || []).map((item, index) => ({
    ...item,
    ...(staticTestimonialsData[index] || {})
  }));

  return (
    <section id="testimonials" className="py-20 bg-wine/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-primary font-bold tracking-wider uppercase text-sm">
            {t('testimonials.section_badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-wine">
            {t('testimonials.section_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative"
            >
              <Quote className="text-purple-primary/20 absolute top-6 right-6" size={40} />

              <p className="text-gray-600 mb-6 italic relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-primary"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <span className="text-sm text-purple-primary font-medium">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
