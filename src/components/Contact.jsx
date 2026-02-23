import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <span className="text-purple-300 font-bold tracking-wider uppercase text-sm">
                {t('contact.section_badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                {t('contact.section_title')}
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
                {t('contact.section_desc')}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t('contact.email_title')}</h4>
                  <a href="mailto:gaby@example.com" className="text-gray-300 hover:text-white transition-colors">gaby@example.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t('contact.call_title')}</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

               <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t('contact.location_title')}</h4>
                  <span className="text-gray-300">{t('contact.location_val')}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-purple-900 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-purple-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-purple-900 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl text-gray-800 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-wine">{t('contact.form_title')}</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.label_name')}</label>
                    <input type="text" placeholder={t('contact.placeholder_name')} className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.label_email')}</label>
                    <input type="email" placeholder={t('contact.placeholder_email')} className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/20 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.label_subject')}</label>
                  <input type="text" placeholder={t('contact.placeholder_subject')} className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/20 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t('contact.label_message')}</label>
                  <textarea rows="4" placeholder={t('contact.placeholder_message')} className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/20 outline-none transition-all"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-wine to-purple-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <Send size={20} />
                  {t('contact.btn_submit')}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
