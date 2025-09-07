import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { fadeIn } from '../animations/variants';
import 'swiper/css';

const Skills: React.FC = () => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const frontendSkills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'GitHub', icon: '📂' },
  ];

  const softSkills = [
    { name: 'Communication', icon: '💬' },
    { name: 'Time Management', icon: '⏰' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Team Work', icon: '👥' },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('skills.title')}
          </h2>
        </motion.div>

        {/* Frontend Skills */}
        <div className="mb-16">
          <h3
            className={`text-2xl font-semibold text-light-text dark:text-text mb-8 ${
              isArabic ? 'text-right' : 'text-left'
            }`}
          >
            {t('skills.frontend')}
          </h3>

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            dir={isArabic ? 'rtl' : 'ltr'} // ✅ مهم جداً
            modules={[Autoplay]}
          >
            {frontendSkills.map((skill, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-light-bg dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-light-text dark:text-text">
                    {skill.name}
                  </h4>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Soft Skills */}
        <div>
          <h3
            className={`text-2xl font-semibold text-light-text dark:text-text mb-8 ${
              isArabic ? 'text-right' : 'text-left'
            }`}
          >
            {t('skills.softSkills')}
          </h3>

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            dir={isArabic ? 'rtl' : 'ltr'} // ✅ نفس التعديل
            modules={[Autoplay]}
          >
            {softSkills.map((skill, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-light-bg dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-lg font-semibold text-light-text dark:text-text">
                    {skill.name}
                  </h4>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
