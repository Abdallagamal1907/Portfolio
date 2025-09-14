import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react'; // ← Globe اتحذفت من هنا
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../hooks/useLanguage';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage, isArabic } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: t('nav.about'),
      submenu: [
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.resume'), href: '#resume' },
        { name: t('nav.certificates'), href: '#certificates' },
        { name: t('nav.journey'), href: '#journey' },
        { name: t('nav.knowledge'), href: '#knowledge' },
      ]
    },
    {
      name: t('nav.portfolio'),
      submenu: [
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.skills'), href: '#skills' },
        { name: t('nav.testimonials'), href: '#testimonials' },
        { name: t('nav.services'), href: '#services' },
      ]
    },
    {
      name: t('nav.extras'),
      submenu: [
        { name: t('nav.blog'), href: '#blog' },
        { name: t('nav.stats'), href: '#stats' },
        { name: t('nav.faq'), href: '#faq' },
      ]
    },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleLanguageToggle = () => {
    changeLanguage(currentLanguage === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="sticky top-0 z-40 bg-header-bg/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 cursor-pointer text-xl font-bold text-primary-light"
            onClick={scrollToTop}
          >
            Abdalla Gamal
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center gap-x-6 space-x-8 ${isArabic ? 'space-x-reverse' : ''}`}
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div
                    className="cursor-pointer text-text hover:text-primary-light transition-colors duration-200"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`absolute top-full ${isArabic ? 'right-0' : 'left-0'} mt-2 w-48 bg-header-bg border border-gray-700 rounded-lg shadow-lg py-2`}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => scrollToSection(subItem.href)}
                              className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-primary-dark hover:text-primary-light transition-colors duration-200"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href!)}
                    className="text-text hover:text-primary-light transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary-dark hover:bg-primary-light transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* 🔇 تم إلغاء زر اللغة بالكامل من هنا */}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-primary-dark hover:bg-primary-light transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-text" />
              ) : (
                <Menu className="w-6 h-6 text-text" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-header-bg border-t border-gray-800"
          >
            <div className={`px-4 py-6 space-y-4 ${isArabic ? 'text-right' : 'text-left'}`} dir={isArabic ? 'rtl' : 'ltr'}>
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={`block w-full text-text hover:text-primary-light transition-colors duration-200 font-medium ${isArabic ? 'text-right' : 'text-left'}`}
                      >
                        {item.name}
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`mt-2 ${isArabic ? 'mr-4 space-y-2' : 'ml-4 space-y-2'}`}
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <button
                                key={subIndex}
                                onClick={() => scrollToSection(subItem.href)}
                                className={`block text-sm text-muted-text hover:text-primary-light transition-colors duration-200 ${isArabic ? 'text-right' : 'text-left'}`}
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href!)}
                      className={`block text-text hover:text-primary-light transition-colors duration-200 font-medium ${isArabic ? 'text-right' : 'text-left'}`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
