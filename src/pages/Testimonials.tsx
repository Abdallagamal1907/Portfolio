import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn } from '../animations/variants';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      role: 'CEO, TechCorp',
      content: 'Abdalla delivered an exceptional website that exceeded our expectations. His attention to detail and technical skills are outstanding.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 2,
      name: 'Sarah Mohamed',
      role: 'Marketing Manager',
      content: 'Professional, reliable, and creative. Abdalla transformed our ideas into a beautiful, functional website.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 3,
      name: 'Omar Ali',
      role: 'Startup Founder',
      content: 'Great communication and fast delivery. The website looks amazing and works perfectly on all devices.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-muted-text mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-light-text dark:text-text">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-muted-text">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;