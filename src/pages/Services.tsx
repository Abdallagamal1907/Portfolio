import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Shield, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, scaleIn } from '../animations/variants';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.webDev'),
      description: 'Custom websites and web applications built with modern technologies',
    },
    {
      icon: Palette,
      title: t('services.uiux'),
      description: 'Beautiful, user-friendly interfaces designed for optimal user experience',
    },
    {
      icon: Shield,
      title: t('services.webSec'),
      description: 'Security testing and vulnerability assessment for web applications',
    },
    {
      icon: Settings,
      title: t('services.maintenance'),
      description: 'Ongoing support, updates, and maintenance for existing websites',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('services.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn(index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-light-bg dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-text mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-muted-text">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;