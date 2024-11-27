import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import aboutimg from '../img/me.png'; // Replace with your profile image path
import { motion } from 'framer-motion';
import mouse from '../mp3/mouse.mp3';

const playSound = (sound) => {
  const audio = new Audio(mouse);
  audio.play();
};

export default function About() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about'); // Adjust the route to your projects page
  };

  const darkModeClass = darkMode ? 'dark' : '';

  return (
    <div className={`h-screen ${darkModeClass}`}>
      {/* Container for the About section */}
      <section className="flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16 py-12 space-y-8 md:space-y-0 bg-secondary1 dark:bg-gray-900">
        {/* Image Section */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={aboutimg} alt="About Me" className="rounded-lg shadow-lg w-full max-w-lg md:max-w-xl mx-auto" />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="md:w-1/2 flex flex-col justify-center items-center px-5 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 p-4 rounded-full max-w-max mx-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-3xl md:text-3xl font-bold mt-4 text-gray-800 dark:text-gray-300 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
Hi, I'm Krishnamoorthyiyar Pirunthavan, a web developer based in Sri Lanka. I specialize in building full-stack applications with a focus on user-friendly designs and seamless functionality. Currently, I’m completing my Full-Stack Development course at Uki Coding School while applying my skills to real-world projects like 'PicReco,' a face recognition-powered event photo platform.
          </motion.p>
          
          <motion.div 
              className="text-blue-700 dark:text-blue-400 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              My expertise includes working with the MERN stack, Cloudinary, and integrating AI-based technologies to create impactful solutions for diverse needs.
            </motion.div>
            <motion.div 
  className="my-4 text-left text-gray-700 dark:text-gray-300"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.8 }}
>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {/* Skill Box 1 */}
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex justify-center items-center text-center">
      <p className="text-lg font-medium">MERN Stack</p>
    </div>

    {/* Skill Box 2 */}
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex justify-center items-center text-center">
      <p className="text-xl font-medium">React</p>
    </div>

    {/* Skill Box 3 */}
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex justify-center items-center text-center">
      <p className="text-lg font-medium">Tailwind CSS</p>
    </div>

    {/* Skill Box 4 */}
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex justify-center items-center text-center">
      <p className="text-lg font-medium">Node.js</p>
    </div>

    {/* Skill Box 5 */}
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex justify-center items-center text-center">
      <p className="text-lg font-medium">Cloudinary</p>
    </div>
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex justify-center items-center text-center">
      <p className="text-lg font-medium">Git & GitHub</p>
    </div>
  </div>
</motion.div>


            
          <motion.button 
            className="mt-4 px-6 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-all"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            onClick={handleClick}
          >
            View My Projects
          </motion.button>
        </motion.div>
      </section>

      {/* Dark Mode Toggle Button */}
      <div className='fixed top-4 right-4'>
        <button
          onClick={() => setDarkMode(prevMode => !prevMode)}
          className='bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full'
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}
