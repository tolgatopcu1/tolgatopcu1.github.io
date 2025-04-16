import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [language, setLanguage] = useState('tr');

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <AboutSection language={language} />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
      {/* Diğer bileşenleri buraya ekleyebilirsin */}
    </>
  );
}
