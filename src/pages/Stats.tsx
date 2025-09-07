import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, scaleIn } from '../animations/variants';

const Stats: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Code,
      value: 50,
      label: t('stats.projects'),
    },
    {
      icon: Users,
      value: 25,
      label: t('stats.clients'),
    },
    {
      icon: Clock,
      value: 2000,
      label: t('stats.hours'),
    },
    {
      icon: Award,
      value: 10,
      label: t('stats.certificates'),
    },
  ];

  const Counter: React.FC<{ target: number; isVisible: boolean }> = ({ target, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      const stepTime = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, [target, isVisible]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <section id="stats" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          onViewportEnter={() => setIsVisible(true)}
          onViewportLeave={() => setIsVisible(false)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('stats.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn(index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-light mb-2">
                <Counter target={stat.value} isVisible={isVisible} />+
              </div>
              <p className="text-gray-600 dark:text-muted-text text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;