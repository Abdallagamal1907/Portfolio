import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { fadeIn, zoomIn } from '../animations/variants';
import 'swiper/css';
import 'swiper/css/pagination';

const Certificates: React.FC = () => {
  const { t } = useTranslation();

  const certificates = [
    {
      id: 1,
      image: 'https://i.ibb.co/FLXt92g7/Whats-App-Image-2025-09-02-at-22-21-20-192b2e01.jpg',
      title: t('webDevelopmentCertificate'),
      issuer: 'IT Sharks',
      description: t('certificates.webDevelopmentDescription'),
    },
    // add more certificates if needed
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {t('certificates.title')}
          </h2>
        </motion.div>

        <motion.div
          variants={zoomIn()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="certificates-swiper"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id} className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mx-auto"
                  style={{ width: '350px' }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-contain object-center"
                    loading="lazy"
                  />
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg tracking-wide">
                      {cert.issuer}
                    </p>
                    {cert.description && (
                      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
