import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, Sun, Home, User, Code, Briefcase, Award, Users, Mail, Menu, X 
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  scrollToSection, 
  darkMode, 
  toggleDarkMode 
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              VT
            </div>
            <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Varshine T
            </span>
          </motion.div>

          {/* Desktop Nav (one-line, no wrapping) */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-blue-500/10 rounded-lg"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right side: Theme + Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col space-y-2 mt-2 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-left ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10'
                    : darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
