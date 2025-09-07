import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeIn, zoomIn } from '../animations/variants';

const Blog: React.FC = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React and TypeScript',
      excerpt: 'Learn how to set up a modern React project with TypeScript for better development experience.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-15',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Web Security Best Practices',
      excerpt: 'Essential security measures every web developer should implement to protect their applications.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-10',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'The Future of Frontend Development',
      excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-05',
      readTime: '6 min read',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-text mb-6">
            {t('blog.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={zoomIn(index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-muted-text mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-light-text dark:text-text mb-3 group-hover:text-primary-light transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-muted-text mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary-light group-hover:text-primary-dark transition-colors">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;