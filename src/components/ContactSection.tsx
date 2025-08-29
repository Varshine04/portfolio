import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Download, Send } from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'varshine12@gmail.com', href: 'mailto:varshine12@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 88256 79728', href: 'tel:+918825679728' },
    { icon: MapPin, label: 'Location', value: 'Erode, Tamil Nadu, India', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/VarshineT', color: 'hover:text-[#2ea44f]' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/varshine12/', color: 'hover:text-blue-600' },
    { icon: Code, label: 'LeetCode', href: 'https://leetcode.com/u/VARSHINE_T/', color: 'hover:text-orange-500' }
  ];

  // Safe viewport values for particles
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 768;

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      
      {/* 🌈 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-3xl" />
      </motion.div>

      {/* 🌟 Floating Particles */}
      <motion.div className="absolute inset-0 -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-20"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to collaborate on exciting projects or discuss opportunities? Let's turn ideas into reality together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Social Links */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="space-y-8">
            {/* Quick Contact */}
            <div className={`p-8 rounded-2xl backdrop-blur-md shadow-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100/50'}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{info.label}</p>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links & Resume */}
            <div className="space-y-4">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>

              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex flex-col items-center justify-center py-4 px-4 rounded-xl backdrop-blur-md shadow-lg border transition-all duration-300 ${darkMode ? 'bg-gray-800/50 border-gray-700/50 text-gray-300' : 'bg-white/50 border-gray-200/50 text-gray-600'} ${social.color}`}
                  >
                    <social.icon size={24} />
                    <span className="text-xs mt-2 font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className={`p-8 rounded-2xl backdrop-blur-md shadow-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.6 }} viewport={{ once: true }}>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className={`w-full px-4 py-3 rounded-lg backdrop-blur-md border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'}`} />
              </motion.div>
              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.7 }} viewport={{ once: true }}>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className={`w-full px-4 py-3 rounded-lg backdrop-blur-md border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'}`} />
              </motion.div>
              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.8 }} viewport={{ once: true }}>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} placeholder="Your message here..." required className={`w-full px-4 py-3 rounded-lg backdrop-blur-md border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${darkMode ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'}`} />
              </motion.div>
              <motion.button type="submit" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.9 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center space-x-3 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
