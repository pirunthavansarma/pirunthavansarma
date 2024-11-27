import { useState, useEffect } from 'react';
import hero from '../img/abd.gif';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa'; // Import all icons from one line
import { motion } from 'framer-motion';

const playSound = (sound) => {
  const audio = new Audio(sound); // Use the passed sound parameter
  audio.play();
};

export default function Index() {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state from local storage
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Update the class on the <html> element and save preference in local storage
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className='overflow-x-hidden'>
      <section className='flex flex-col md:flex-row px-5 py-48 bg-secondary dark:bg-gray-900 justify-center'>
        <motion.div 
          className='md:w-1/2'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className='py-16 text-red-500 dark:text-red-400 text-5xl font-hero hover:text-black dark:hover:text-white'
            initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and translate up
            animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
            transition={{ duration: 1 }}
          >
            Hi,<br/>
          </motion.h1>
          
          {/* Updated Text with Typing Effect */}
          <motion.div 
            className='text-black dark:text-white font-bold text-6xl py-4 typing-effect' // Added typing effect class
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0 }} // No transition needed as CSS animation handles typing
          >
            I'm Krishnamoorthyiyar Pirunthavan 
          </motion.div>
          
          <motion.p
            className='mt-2 text-xl text-gray-700 dark:text-gray-300'
            initial={{ opacity: 0, scale: 0.9 }} // Start with opacity 0 and scale down
            animate={{ opacity: 1, scale: 1 }}  // Fade in and scale up
            transition={{ duration: 1, delay: 1 }}
          >
            I am a Full-Stack Developer with a passion for building dynamic web applications and solutions. I specialize in building with MERN stack and creating intuitive user experiences.
          </motion.p>
          
          <motion.div 
            className='flex justify-center text-black dark:text-white py-16 text-5xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/krishnamoorthyiyar-pirunthavan-3a2800310/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-16 hover:text-red-500 dark:hover:text-red-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://pirunthavansarma.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-16 hover:text-red-500 dark:hover:text-red-400"
            >
              <FaGithub />
            </a>
            {/* <a
              href="https://www.facebook.com/share/b9Jve2Y7mKjJZVgL/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-16 hover:text-red-500 dark:hover:text-red-400"
            >
              <FaFacebookF />
            </a> */}
          </motion.div>
          <motion.p
            className='mt-6 text-2xl text-red-500 dark:text-red-400'
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and translate down
            animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
            transition={{ duration: 1, delay: 1.5 }}
          >
            Let's work together to bring your ideas to life!
          </motion.p>
        </motion.div>

        <motion.div 
          className='py-7 md:w-1/3'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={hero} alt="Hero" className='rounded-3xl'/>
        </motion.div>
      </section>

      {/* Dark Mode Toggle Button */}
      <div className='fixed top-4 right-4'>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full'
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}
