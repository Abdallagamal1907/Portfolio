import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/abdallagamal1907',
      label: 'GitHub',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/abdallagamal',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/abdalla.gamal.83513',
      label: 'Facebook',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/abdalla-gamal-258a4937a',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="bg-header-bg border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <img
              src="https://i.postimg.cc/PNHShNV0/Whats-App-Image-2025-08-27-at-19-51-31-2c2afe7f.jpg"
              alt="Abdalla Gamal"
              className="w-16 h-16 rounded-full object-cover border-2 border-primary-light"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-primary-dark hover:bg-primary-light rounded-full transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-text text-center"
          >
            © 2024 Abdalla Gamal. {t('footer.rights')}.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;