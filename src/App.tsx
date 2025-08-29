import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import LeadershipSection from './components/LeadershipSection';
import ContactSection from './components/ContactSection';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const sectionIds = ['home', 'about', 'skills', 'projects', 'achievements', 'leadership', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === 'home' ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main>
        <section id="home">
          <HeroSection scrollToSection={scrollToSection} darkMode={darkMode} />
        </section>

        <AboutSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode} />
        <AchievementsSection darkMode={darkMode} />
        <LeadershipSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`py-8 border-t ${
          darkMode 
            ? 'bg-gray-900 border-gray-700 text-gray-300' 
            : 'bg-white border-gray-200 text-gray-600'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">
              © 2024 Varshine T. Built with React, Framer Motion, and ❤️
            </p>
            <p className="text-sm opacity-80">
              Designed & Developed with modern web technologies
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {activeSection !== 'home' && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => scrollToSection('home')}
            className={`fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg transition-all duration-300 z-40 ${
              darkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;