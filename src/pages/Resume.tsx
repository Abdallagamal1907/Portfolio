import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, zoomIn } from '../animations/variants';

const Resume: React.FC = () => {
  const { t } = useTranslation();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Abdalla_Gamal_CV.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('resume.title')}
          </h2>
        </motion.div>

        <motion.div
          variants={zoomIn()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(153, 15, 61, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCV}
            className="bg-primary-light hover:bg-primary-dark text-white px-12 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto transition-all duration-300 shadow-lg"
          >
            <Download className="w-6 h-6" />
            {t('resume.download')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;