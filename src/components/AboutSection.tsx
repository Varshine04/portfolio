import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";


interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const techIcons = [
    { name: "React", color: "text-blue-500" },
    { name: "Python", color: "text-green-500" },
    { name: "Firebase", color: "text-orange-500" },
    { name: "Java", color: "text-red-500" },
    { name: "JavaScript", color: "text-yellow-500" },
    { name: "Node.js", color: "text-green-600" },
    { name: "Machine Learning", color: "text-red-500" },
    { name: "Power BI", color: "text-blue-500" },
  ];

  const vw = typeof window !== "undefined" ? window.innerWidth : 1024;
  const vh = typeof window !== "undefined" ? window.innerHeight : 768;

  return (
    <section
      id="about"
      className={`min-h-screen pt-16 py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            "linear-gradient(135deg, #8B5CF6, #3B82F6)",
            "linear-gradient(135deg, #3B82F6, #8B5CF6)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-20"
          initial={{ x: Math.random() * vw, y: Math.random() * vh }}
          animate={{ x: Math.random() * vw, y: Math.random() * vh }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className={`text-lg leading-relaxed space-y-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p>
                Hi, I'm{" "}
                <strong className={darkMode ? "text-white" : "text-gray-900"}>
                  Varshine T
                </strong>
                , a Final-Year CSE student and Emerging Software Developer with a
                strong passion for technology and innovation. Proficient in React
                Native, React.js, Firebase, Python, and Java, I enjoy building
                solutions that address real-world challenges. My interests span AI,
                Full-Stack Development, and emerging technologies like AR/VR/XR.
              </p>

              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-700/50" : "bg-gray-50"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Career Goal
                </h3>
                <p className="italic">
                  Aspiring to be a Software Developer / Full-Stack Engineer,
                  creating impactful products that merge technology with human
                  needs.
                </p>
              </div>
            </div>

            {/* Tech Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Technical Expertise
              </h4>
              <div className="flex flex-wrap gap-3">
                {techIcons.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-full border-2 ${
                      darkMode
                        ? "border-gray-600 bg-gray-700/50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <span className={`font-medium ${tech.color}`}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="/Varshine_T_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

         {/* Right: Animated Concentric Circles with Initials "VT" */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
  className="flex justify-center"
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    animate={{
      scale: [1, 1.03, 1],
      boxShadow: [
        "0 0 20px rgba(59,130,246,0.25), 0 0 40px rgba(139,92,246,0.25)",
        "0 0 30px rgba(59,130,246,0.35), 0 0 50px rgba(139,92,246,0.35)",
        "0 0 20px rgba(59,130,246,0.25), 0 0 40px rgba(139,92,246,0.25)",
      ],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-64 h-64 flex items-center justify-center rounded-full 
               bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl"
  >
    {/* Inner Circle 1 */}
    <motion.div
      className="absolute inset-4 rounded-full border-2 border-white/20"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />

    {/* Inner Circle 2 */}
    <motion.div
      className="absolute inset-8 rounded-full border-2 border-white/10"
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />

    {/* Initials with Gradient Text */}
    <span className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      VT
    </span>
  </motion.div>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
