import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    isArabic: i18n.language === 'ar'
  };
};