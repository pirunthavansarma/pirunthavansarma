import { CiLinkedin } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { AiFillGithub } from 'react-icons/ai'; 
import { CiInstagram } from "react-icons/ci";
import mail from '../mp3/mail.mp3';
import { MdOutlineRocketLaunch } from "react-icons/md";
import { motion } from "framer-motion"; 

const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.play();
};

export default function Foot() {
  return (
    <section className="bg-black text-white">
      <div className="min-h-screen flex items-center justify-center">
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
              className="w-full md:w-2/3 text-gray-400 text-3xl"
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
                className="bg-red-500 flex items-center justify-center text-white font-bold rounded-lg shadow py-4 text-2xl hover:bg-red-600 transition-colors"
                onClick={() => playSound(mail)}
              >
                Send Mail       
                <MdOutlineRocketLaunch className="mr-2 text-5xl" />
              </a>
            </motion.div>
          </div>
          <div className="flex flex-col mt-24">
            <div className="flex mb-12 flex-col md:flex-row justify-between items-center text-center">
              {/* Additional links or text can go here */}
            </div>
            <motion.div
              className="flex justify-center space-x-8 mt-4 md:mt-0 my-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="https://www.linkedin.com/in/krishnamoorthyiyar-pirunthavan-3a2800310/"
                target="_blank"
                className="text-gray-600 hover:text-white text-5xl transition-colors"
                aria-label="LinkedIn"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-gray-600 hover:text-white text-5xl transition-colors"
                aria-label="Facebook"
              >
                <RiFacebookBoxLine />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-gray-600 hover:text-white text-5xl transition-colors"
                aria-label="Instagram"
              >
                <CiInstagram />
              </a>
              <a
                href="https://github.com/pirunthavansarma"
                target="_blank"
                className="text-gray-600 hover:text-white text-5xl transition-colors"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </motion.div>
            <hr className="border-gray-600" />
            <motion.p
              className="w-full text-center my-12 text-gray-600 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              © 2024 Krishnamoorthyiyar Pirunthavan. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
