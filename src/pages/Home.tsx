import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Resume from './Resume';
import Certificates from './Certificates';
import Journey from './Journey';
import Knowledge from './Knowledge';
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Services from './Services';
import Blog from './Blog';
import Stats from './Stats';
import FAQ from './FAQ';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Resume />
      <Certificates />
      <Journey />
      <Knowledge />
      <Projects />
      <Skills />
      <Testimonials />
      <Services />
      <Blog />
      <Stats />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;