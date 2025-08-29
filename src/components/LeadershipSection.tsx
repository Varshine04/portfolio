import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Globe, Code, BookOpen, Star } from 'lucide-react';

interface LeadershipSectionProps {
  darkMode: boolean;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ darkMode }) => {
  const clubs = [
    {
      name: 'Innovation and Entrepreneurship Forum (IEF)',
      role: 'Active Member',
      icon: Star,
      description: 'Leading innovation initiatives and entrepreneurship programs',
      color: 'from-yellow-500 to-orange-500',
      achievements: [
        'Organized startup pitch competitions',
        'Mentored junior students in innovation projects',
        'Coordinated tech workshops and seminars'
      ]
    },
    {
      name: 'Rotaract Club',
      role: 'Engaged Member',
      icon: Heart,
      description: 'Community service and social impact initiatives',
      color: 'from-red-500 to-pink-500',
      achievements: [
        'Participated in community outreach programs',
        'Organized blood donation drives',
        'Led environmental awareness campaigns'
      ]
    },
    {
      name: 'Red Beard Club (RBC)',
      role: 'Member',
      icon: Users,
      description: 'Technical community and peer collaboration',
      color: 'from-blue-500 to-indigo-500',
      achievements: [
        'Collaborative coding projects',
        'Technical skill sharing sessions',
        'Peer mentoring programs'
      ]
    },
    {
      name: 'Cloud Users Group',
      role: 'Member',
      icon: Globe,
      description: 'Cloud computing and modern infrastructure',
      color: 'from-cyan-500 to-blue-500',
      achievements: [
        'AWS and GCP workshops',
        'Cloud architecture discussions',
        'DevOps best practices sharing'
      ]
    },
    {
      name: 'Mobile App Development Club',
      role: 'Member',
      icon: Code,
      description: 'Mobile development and emerging technologies',
      color: 'from-green-500 to-teal-500',
      achievements: [
        'React Native development projects',
        'Mobile UI/UX design workshops',
        'Cross-platform development tutorials'
      ]
    },
    {
      name: 'English Proficiency Club',
      role: 'Member',
      icon: BookOpen,
      description: 'Communication skills and professional development',
      color: 'from-purple-500 to-indigo-500',
      achievements: [
        'Public speaking workshops',
        'Technical presentation skills',
        'Professional communication training'
      ]
    }
  ];

  const leadershipStats = [
    { label: 'Clubs & Organizations', value: '10+' },
    { label: 'Events Organized', value: '30+' },
    { label: 'Students Mentored', value: '25+' },
    { label: 'Leadership Roles', value: '10+' }
  ];

  return (
    <section id="leadership" className={`relative py-20 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      
      {/* 🌈 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ backgroundSize: '400% 400%' }}
        animate={{ backgroundPosition: ['0% 50%', '50% 100%', '100% 50%', '50% 0%', '0% 50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(270deg, #fbbf24, #f97316, #3b82f6, #9333ea)',
            backgroundSize: '400% 400%',
            opacity: 0.2,
            borderRadius: '1rem'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Leadership & Community
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Active participation in various clubs and organizations, fostering innovation, community service, and technical excellence.
          </p>
        </motion.div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {leadershipStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-100'}`}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clubs & Organizations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group relative p-6 rounded-xl shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-100'}`}
            >
              {/* Club Header */}
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${club.color} flex items-center justify-center flex-shrink-0 mr-4`}>
                  <club.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {club.name}
                  </h3>
                  <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${club.color} text-white`}>
                    {club.role}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {club.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Key Contributions:
                </h4>
                <ul className="space-y-1">
                  {club.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (achievementIndex * 0.05) }}
                      viewport={{ once: true }}
                      className={`flex items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${club.color} mr-2 flex-shrink-0`} />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${club.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
            </motion.div>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-xl text-center ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-100'}`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Leadership Philosophy
          </h3>
          <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            "True leadership is not about being in charge, but about taking care of those in your charge. 
            Through my involvement in various clubs and organizations, I believe in fostering collaboration, 
            innovation, and positive impact in both technical and social spheres."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
