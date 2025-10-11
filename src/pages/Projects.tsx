import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, zoomIn } from '../animations/variants';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.programmingWorld.title'),
      description: t('projects.programmingWorld.description'),
      image: 'https://i.ibb.co/wFxJJTdY/Screenshot-2025-10-11-164335.png',
      tech: ['React', 'TypeScript', 'Tailwind'],
      demoUrl: 'https://programming-world.vercel.app',
      sourceUrl: 'https://github.com/abdallagamal1907',
    },
    {
      id: 2,
      title: t('projects.myWebbTan.title'),
      description: t('projects.myWebbTan.description'),  // الوصف الجديد في ملف الترجمة
      image: 'https://i.ibb.co/MD5qzStr/Screenshot-2025-10-11-164741.png',
      tech: ['React', 'CSS', 'JavaScript'],
      demoUrl: 'https://my-webb-tan.vercel.app',
      sourceUrl: 'https://github.com/abdallagamal1907',
    },
   {
  id: 3,
  title: t('projects.clientPortfolio.title'),
  description: t('projects.clientPortfolio.description'),
  image: 'https://i.ibb.co/9kqZRkTh/Screenshot-2025-10-11-163537.png',
  tech: ['React', 'Tailwind', 'Framer Motion'],
  demoUrl: 'https://client-portfolio-dusky.vercel.app/',
  sourceUrl: 'https://github.com/abdallagamal1907/client-portfolio',
},

  ];

  return (
    <section id="projects" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('projects.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={zoomIn(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-3 bg-primary-light rounded-full text-white hover:bg-primary-dark transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-light-text dark:text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-muted-text mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-light text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-light hover:text-primary-dark transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('projects.demo')}
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-muted-text hover:text-light-text dark:hover:text-text transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t('projects.sourceCode')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;