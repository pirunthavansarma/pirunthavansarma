import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutimg from '../img/me.png'; // Update the image path as needed
import { motion } from 'framer-motion';
import mouse from '../mp3/mouse.mp3';

const playSound = () => {
  const audio = new Audio(mouse);
  audio.play();
};

export default function About() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects'); // Update with your desired route
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 bg-secondary1 dark:bg-gray-900">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutimg}
            alt="About Me"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left px-4 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Hi, I'm <strong>Krishnamoorthyiyar Pirunthavan</strong>, a web developer from Sri Lanka.
            I specialize in creating full-stack applications with a focus on user-friendly designs
            and seamless functionality. Currently, I’m completing my Full-Stack Development course at Uki Coding School while working on real-world projects like <strong>'PicReco'</strong>, an AI-powered event photo platform.
          </motion.p>
          <motion.p
            className="text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            My expertise includes working with the MERN stack, Cloudinary, and integrating AI-based technologies to solve diverse challenges.
          </motion.p>

          {/* Skills Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {['MERN Stack', 'React', 'Tailwind CSS', 'Node.js', 'Cloudinary', 'Git & GitHub'].map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex justify-center items-center text-center text-lg font-medium"
              >
                {skill}
              </div>
            ))}
          </motion.div>

          <motion.button
            className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 transition-all"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            onClick={handleClick}
          >
            View My Projects
          </motion.button>
        </motion.div>
      </section>

      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full transition"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}
