import { useState, useEffect } from 'react';
import hero from '../img/abd.gif'; // Replace with your hero image path
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa'; // Social icons
import { motion } from 'framer-motion';

export default function Index() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state from localStorage
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Update the HTML class and save preference to localStorage
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-red-500 dark:text-red-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi,
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            I'm Krishnamoorthyiyar Pirunthavan
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8 }}
          >
            A passionate Full-Stack Developer specializing in the MERN stack. I
            create dynamic web applications with seamless user experiences.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start space-x-6 text-2xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/krishnamoorthyiyar-pirunthavan-3a2800310/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 dark:hover:text-red-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/pirunthavansarma/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 dark:hover:text-red-400"
            >
              <FaGithub />
            </a>
          </motion.div>
          <motion.p
            className="text-lg font-medium text-red-500 dark:text-red-400 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 1.2 }}
          >
            Let's collaborate and bring your ideas to life!
          </motion.p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={hero}
            alt="Hero"
            className="rounded-3xl shadow-lg max-w-full"
          />
        </motion.div>
      </section>

      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow-md transition-all hover:scale-105"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}
