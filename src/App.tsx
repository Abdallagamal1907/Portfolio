import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import './i18n';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Set initial theme
    const savedTheme = localStorage.getItem('theme');
    document.documentElement.classList.add(savedTheme === 'light' ? 'light' : 'dark');
    
    // Set initial language direction
    const savedLanguage = localStorage.getItem('language') || 'en';
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            {isLoading ? (
              <Preloader onComplete={handlePreloaderComplete} />
            ) : (
              <>
                <Header />
                <Home />
                <Footer />
              </>
            )}
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;