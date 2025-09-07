import React from 'react';
import { motion } from 'framer-motion';
import { Code, TypeIcon, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, scaleIn } from '../animations/variants';

const Knowledge: React.FC = () => {
  const { t } = useTranslation();

  const knowledgeCards = [
    {
      icon: Code,
      title: t('knowledge.spa.title'),
      description: t('knowledge.spa.description'),
    },
    {
      icon: TypeIcon,
      title: t('knowledge.typescript.title'),
      description: t('knowledge.typescript.description'),
    },
    {
      icon: Palette,
      title: t('knowledge.tailwind.title'),
      description: t('knowledge.tailwind.description'),
    },
  ];

  return (
    <section id="knowledge" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('knowledge.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeCards.map((card, index) => (
            <motion.div
              key={index}
              variants={scaleIn(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-light-bg dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 mx-auto">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-text mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-muted-text text-center">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;