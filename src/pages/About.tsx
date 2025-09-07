import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeIn, slideIn } from '../animations/variants';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('about.title')}
          </h2>
        </motion.div>

        <motion.div
          variants={slideIn('up')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-light-text dark:text-muted-text leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;