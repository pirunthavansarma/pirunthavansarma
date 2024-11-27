import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import mail from "../mp3/mail.mp3";

const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.play();
};

export default function Foot() {
  // const [darkMode, setDarkMode] = useState(() => {
  //   // Load theme preference from localStorage
  //   return localStorage.getItem("darkMode") === "true";
  // });
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    // Immediately apply dark or light mode to the body element
    if (darkMode) {
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white");
    }

    // Save theme preference to localStorage immediately
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]); // Effect runs when `darkMode` changes

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>

    <section
      className={`transition-all duration-300 min-h-screen flex items-center justify-center dark:bg-gray-900"
      }`}
    >
      <div className="md:w-2/3 w-full px-4 flex flex-col">
        <div className="w-full text-7xl font-bold">
          <motion.h3
            className="md:w-2/3 py-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Digital Experiences with Innovation
          </motion.h3>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <motion.p
            className="w-full md:w-2/3 text-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I strive to blend creativity with cutting-edge technology, delivering exceptional user experiences.
          </motion.p>
          <motion.div
            className="w-52 pt-12 md:pt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="mailto:pirunthavansarma@gmail.com"
              className={`flex items-center justify-center font-bold rounded-lg shadow py-4 text-2xl ${
                darkMode
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              } transition-colors`}
              onClick={() => playSound(mail)}
            >
              Send Mail
              <MdOutlineRocketLaunch className="ml-2 text-4xl" />
            </a>
          </motion.div>
        </div>
        <div className="flex flex-col mt-24">
          <motion.div
            className="flex justify-center space-x-8 mt-4 md:mt-0 my-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a
              href="https://www.linkedin.com/in/krishnamoorthyiyar-pirunthavan-3a2800310/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-5xl transition-colors ${
                darkMode ? "hover:text-red-500" : "hover:text-blue-500"
              }`}
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/pirunthavansarma"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-5xl transition-colors ${
                darkMode ? "hover:text-red-500" : "hover:text-blue-500"
              }`}
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
          </motion.div>
          <hr
            className={`border ${
              darkMode ? "border-gray-600" : "border-gray-300"
            }`}
          />
          <motion.p
            className="w-full text-center my-12 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            © 2024 Krishnamoorthyiyar Pirunthavan. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full transition"
        >
          Toggle Dark Mode
        </button>
      </div>
    </section>
    </div>
  );
}
