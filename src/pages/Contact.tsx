import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, slideIn } from '../animations/variants';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdalla2024ag@gmail.com',
      href: 'mailto:abdalla2024ag@gmail.com',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '01284166815',
      href: 'https://wa.me/201284166815',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abdalla-gamal-258a4937a',
      href: 'https://linkedin.com/in/abdalla-gamal-258a4937a',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={slideIn('left')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-light-bg dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-text mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent bg-white dark:bg-gray-700 text-light-text dark:text-text"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-text mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent bg-white dark:bg-gray-700 text-light-text dark:text-text"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-text mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent bg-white dark:bg-gray-700 text-light-text dark:text-text resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-light hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-primary-light/25"
              >
                <Send className="w-5 h-5" />
                {t('contact.submit')}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideIn('right')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-light-text dark:text-text mb-6">
                {t('contact.info')}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center p-4 bg-light-bg dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-light-text dark:text-text">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 dark:text-muted-text">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;