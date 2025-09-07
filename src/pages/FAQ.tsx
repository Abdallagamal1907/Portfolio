import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, slideIn } from '../animations/variants';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, TypeScript, JavaScript, HTML, CSS, and modern web development frameworks. I also have experience in web security and penetration testing.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on complexity and requirements. A simple website typically takes 2-4 weeks, while more complex applications may take 6-12 weeks.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, I offer ongoing support and maintenance packages to ensure your website remains secure, updated, and performing optimally.',
    },
    {
      question: 'Can you help with website security?',
      answer: 'Absolutely! I provide web security audits, penetration testing, and security implementation to protect your website from vulnerabilities.',
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients worldwide. I\'m comfortable with remote collaboration and can adapt to different time zones for meetings and communication.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('faq.title')}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={slideIn('up', index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-light-text dark:text-text">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-muted-text">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;