import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Bot, ShoppingCart, Cloud } from 'lucide-react';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Direct Market Access App',
      description: 'A React Native mobile app connecting farmers directly to consumers, eliminating middlemen and boosting farmer income. Integrated with Firebase for real-time data management.',
      tech: ['React Native', 'Firebase', 'JavaScript', 'Mobile Dev'],
      icon: Smartphone,
      color: 'from-green-800 to-green-900',
      impact: 'Boosted farmer income by 30%',
      type: 'Mobile App'
    },
    {
      title: 'VR Guest House Booking',
      description: 'Immersive VR booking system built with Unity 3D and Firebase. Users can take 360° virtual tours of guest houses before booking.',
      tech: ['Unity 3D', 'Firebase', 'C#', 'VR/AR'],
      icon: Globe,
      color: 'from-purple-800 to-purple-900',
      impact: 'Increased bookings by 45%',
      type: 'VR Application'
    },
    {
      title: 'Generative AI Chatbot',
      description: 'Fine-tuned LLM chatbot for college Q&A system. Provides instant, accurate responses to student queries about courses, admissions, and campus life.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Generative AI'],
      icon: Bot,
      color: 'from-blue-800 to-blue-900',
      impact: 'Reduced query response time by 80%',
      type: 'AI System'
    },
    {
      title: 'Food Ordering Web App',
      description: 'Full-stack web application for online food ordering with real-time order tracking, payment integration, and restaurant management dashboard.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      icon: ShoppingCart,
      color: 'from-orange-800 to-orange-900',
      impact: 'Served 1000+ orders',
      type: 'Web Application'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with interactive maps, forecasts, and weather alerts. Built with modern web technologies.',
      tech: ['React.js', 'API Integration', 'Chart.js', 'CSS3'],
      icon: Cloud,
      color: 'from-cyan-800 to-cyan-900',
      impact: 'Real-time weather data',
      type: 'Dashboard'
    }
  ];

  const additionalProjects = [
    'Predictive Analytics & Forecasting',
    'Real-time Data Visualization',
    'Expense Trackers & Budgeting Tools'
  ];

  const vw = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 768;

  return (
    <section id="projects" className={`relative py-20 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      
      {/* Animated Blue-Purple Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            'linear-gradient(135deg, #8B5CF6, #3B82F6)',
            'linear-gradient(135deg, #3B82F6, #8B5CF6)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-20"
          initial={{ x: Math.random() * vw, y: Math.random() * vh }}
          animate={{ x: Math.random() * vw, y: Math.random() * vh }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      ))}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Some of my recent projects showcasing skills in full-stack, AI/ML, and emerging tech.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5, rotateZ: [0, 2, -2, 0] }}
              className={`group relative rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-100'}`}
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="w-8 h-8 text-white" />
                  <span className="text-white text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm font-medium">{project.impact}</p>
              </div>

              {/* Project Content */}
              <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                      darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Additional Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((proj, index) => (
              <motion.div
                key={proj}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-white border border-gray-100 hover:border-gray-200'}`}
              >
                <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{proj}</h4>
                <div className="flex space-x-2 mt-2">
                  <Github size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                  <ExternalLink size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
