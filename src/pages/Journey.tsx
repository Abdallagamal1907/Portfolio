import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, slideIn } from '../animations/variants';

const Journey: React.FC = () => {
  const { t } = useTranslation();

  const journeySteps = [
    {
      icon: GraduationCap,
      title: t('journey.university'),
      description: 'Computer Science studies focusing on software development',
    },
    {
      icon: Award,
      title: t('journey.diploma'),
      description: 'Specialized training in web development technologies',
    },
    {
      icon: Briefcase,
      title: t('journey.freelancing'),
      description: 'Building websites and applications for clients worldwide',
    },
    {
      icon: Shield,
      title: t('journey.webSecurity'),
      description: 'Exploring cybersecurity and penetration testing',
    },
  ];

  return (
    <section id="journey" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('journey.title')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-light"></div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={slideIn(index % 2 === 0 ? 'left' : 'right')}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  } mb-6 md:mb-0`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary-light rounded-full">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-light-text dark:text-text">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-muted-text">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-primary-light rounded-full border-4 border-light-bg dark:border-dark-bg z-10 mb-6 md:mb-0"></div>

                {/* Empty spacer for alignment */}
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
