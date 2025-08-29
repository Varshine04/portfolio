import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection, darkMode }) => {
  // Safe viewport values (avoid errors when window is unavailable during build)
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 768;

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, #3B82F6, #8B5CF6)',
              'linear-gradient(45deg, #8B5CF6, #06B6D4)',
              'linear-gradient(45deg, #06B6D4, #3B82F6)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 opacity-10"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30"
            initial={{ x: Math.random() * vw, y: Math.random() * vh }}
            animate={{ x: Math.random() * vw, y: Math.random() * vh }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Hello, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Varshine T
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Final-Year CSE Student | Aspiring Software Developer | Full-Stack Enthusiast
        </motion.div>

        {/* Main action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 border-2 font-semibold rounded-full transition-all duration-300 ${
              darkMode
                ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
            }`}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Social buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 flex justify-center gap-6"
        >

          <a
            href="mailto:varshine12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="flex items-center gap-2 px-6 py-3 rounded-full shadow-md transition-all duration-300
                       bg-gray-800 text-white hover:bg-gray-700"
          >
            <Github size={20} />
            <span className="font-medium">Email</span>
          </a>

        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
