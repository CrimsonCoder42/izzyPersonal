// App.tsx
import React from 'react';
import Layout from './components/layout/Layout';
import HeaderSection from './components/sections/HeaderSection';
import AboutSection from './components/sections/AboutSection';
import QualificationSection from './components/sections/QualificationSection';
import SkillsSection from './components/sections/SkillsSection';
import ServicesSection from './components/sections/ServicesSection';
import TestimonialSection from './components/sections/TestimonialSection';
import ContactSection from './components/sections/ContactSection';
import VideoModal from './components/sections/VideoModal';
import './App.css';

function App() {
  return (
    <Layout>
      <HeaderSection />
      <AboutSection />
      <QualificationSection />
      <SkillsSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <VideoModal />
    </Layout>
  );
}

export default App;