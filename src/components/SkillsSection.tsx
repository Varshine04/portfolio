import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Lightbulb, Users, Palette } from 'lucide-react';

interface SkillsSectionProps {
  darkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
      color: 'from-blue-700 to-blue-800'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Code,
      skills: ['React.js', 'React Native', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-green-700 to-green-800'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['SQL', 'MongoDB', 'Firebase', 'PostgreSQL'],
      color: 'from-purple-700 to-purple-800'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'Git'],
      color: 'from-orange-700 to-orange-800'
    },
    {
      title: 'AI/ML & Extended Tech',
      icon: Brain,
      skills: ['Scikit-learn', 'TensorFlow', 'Generative AI', 'NLP', 'Unity 3D', 'ARCore'],
      color: 'from-pink-700 to-pink-800'
    },
    {
      title: 'UI/UX & Design',
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Canva', 'Prototyping', 'Wireframing'],
      color: 'from-yellow-700 to-yellow-800'
    },
    {
      title: 'API & Testing',
      icon: Code,
      skills: ['REST API', 'GraphQL', 'Postman'],
      color: 'from-indigo-700 to-indigo-800'
    }
  ];

  const softSkills = [
    { name: 'Leadership & Teamwork', icon: Users },
    { name: 'Problem-Solving', icon: Lightbulb },
    { name: 'Critical Thinking', icon: Brain },
    { name: 'Communication', icon: Users },
    { name: 'Creativity & Innovation', icon: Lightbulb },
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(45deg, #1e3a8a, #9333ea, #f59e0b)',
            'linear-gradient(90deg, #0ea5e9, #22c55e, #f43f5e)',
            'linear-gradient(135deg, #9333ea, #14b8a6, #f59e0b)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{ filter: 'blur(80px)', opacity: 0.25 }}
      />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, yoyo: true }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mx-auto rounded-full"></div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`p-6 rounded-xl shadow-xl transition-all duration-300 backdrop-blur-md ${
                  darkMode ? 'bg-gray-800/70 border border-gray-700' : 'bg-white/80 border border-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`px-3 py-1 text-sm rounded-full cursor-pointer transition-colors duration-300 shadow-sm ${
                        darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-500 hover:text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-600 hover:text-white'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Soft & Professional Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl text-center transition-all duration-300 backdrop-blur-md ${
                  darkMode ? 'bg-gray-800/70 border border-gray-700 hover:border-gray-600' : 'bg-white/80 border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <skill.icon className={`w-8 h-8 mx-auto mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
