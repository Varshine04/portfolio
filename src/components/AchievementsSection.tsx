import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Briefcase } from 'lucide-react';

interface AchievementsSectionProps {
  darkMode: boolean;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ darkMode }) => {
  const achievementsLeft = [
    {
      category: 'Hackathons & Events',
      icon: Trophy,
      color: 'from-yellow-700 to-yellow-800',
      items: [
        "MINSKY'24 - AI/ML Innovation Challenge",
        'PSG Tech Fest - Technical Excellence',
        'SRiSHTi 2K23 - Creative Solutions',
        'RETRO CODE - Programming Competition',
        "AUTONIX'24 - Autonomous Systems",
        'IDEATHON - Innovation Challenge',
        'SIH Internal - Smart India Hackathon',
        "Technotron'24 - Technology Symposium"
      ]
    },
    {
      category: 'Internships',
      icon: Briefcase,
      color: 'from-green-700 to-green-800',
      items: [
        'DotWorld Technologies - Software Testing',
        'Nutz Technovation - Web Development'
      ]
    }
  ];

  const achievementsRight = [
    {
      category: 'Certifications',
      icon: Award,
      color: 'from-blue-700 to-blue-800',
      items: [
        'MongoDB Certified Developer',
        'GUVI-HCL Terraform Certification',
        'CodeChef DBMS Certification',
        'AWS Cloud Practitioner (In Progress)',
        'React Native Development'
      ]
    },
    {
      category: 'Event Coordination',
      icon: BookOpen,
      color: 'from-purple-700 to-purple-800',
      items: [
        'Science Expo 2024 - Lead Coordinator',
        'Ideathon 2K24 - Event Management',
        'Proof of Concept 2K24 - Technical Lead',
        'College Tech Symposium - Organizer'
      ]
    }
  ];

  return (
    <section id="achievements" className={`relative py-20 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-10 blur-3xl"
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid with Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          
          {/* Left Achievements */}
          <div className="space-y-8">
            {achievementsLeft.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center mr-4 shadow-md`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{section.category}</h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.2 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${darkMode ? 'hover:bg-gray-700/50 border-l-4 border-gray-600 hover:border-gray-500' : 'hover:bg-gray-50 border-l-4 border-gray-200 hover:border-gray-400'}`}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mr-3 flex-shrink-0`} />
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Center */}
          {/* Timeline Center */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
  className="flex flex-col items-center relative"
>
  {/* Vertical Line adjusted to content */}
  <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-700 rounded-full"
       style={{ top: '0', bottom: '0' }} />
  <div className="flex flex-col justify-between space-y-6"> {/* tighter spacing */}
    {['2022', '2023', '2024', '2025'].map((year, index) => (
      <motion.div
        key={year}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center shadow-lg">
          <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'}`} />
        </div>
        <div className={`mt-2 px-4 py-2 rounded-lg font-bold text-base ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-md`}>
          {year}
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>


          {/* Right Achievements */}
          <div className="space-y-8">
            {achievementsRight.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center mr-4 shadow-md`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{section.category}</h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.2 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: -5 }}
                      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${darkMode ? 'hover:bg-gray-700/50 border-l-4 border-gray-600 hover:border-gray-500' : 'hover:bg-gray-50 border-l-4 border-gray-200 hover:border-gray-400'}`}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mr-3 flex-shrink-0`} />
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
