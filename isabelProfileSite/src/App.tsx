// src/App.tsx

import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Qualification from './components/sections/Qualification';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default App;
