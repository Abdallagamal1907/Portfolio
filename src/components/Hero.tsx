import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerText, textChild, fadeIn, slideIn } from '../animations/variants';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(153, 15, 61, 0.3)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a dummy CV download link
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Abdalla_Gamal_CV.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerText}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={textChild}
              className="text-primary-light text-lg md:text-xl mb-4 font-medium"
            >
              {t('hero.greeting')}
            </motion.p>
            
            <motion.h1
              variants={textChild}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight"
            >
              Frontend Developer
              <span className="text-primary-light block">& Freelancer</span>
            </motion.h1>
            
            <motion.p
              variants={textChild}
              className="text-muted-text text-lg md:text-xl mb-8 max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div
              variants={textChild}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="bg-primary-light hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-primary-light/25"
              >
                <Download className="w-5 h-5" />
                {t('hero.downloadCV')}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <ArrowDown className="w-5 h-5" />
                {t('hero.viewProjects')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(153, 15, 61, 0.3)',
                  '0 0 40px rgba(153, 15, 61, 0.5)',
                  '0 0 20px rgba(153, 15, 61, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <img
                src="https://i.postimg.cc/PNHShNV0/Whats-App-Image-2025-08-27-at-19-51-31-2c2afe7f.jpg"
                alt="Abdalla Gamal"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary-light"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-light opacity-30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;