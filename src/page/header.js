import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import resume from '../img/resume.png'; // Correct path to your resume file
import logo from '../img/logo.jpg'; // Correct path to your logo image

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state based on local storage
    return localStorage.getItem('darkMode') === 'true';
  });

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Save dark mode preference
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Save light mode preference
    }
  }, [darkMode]);

  // Handle download resume
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume; // Correct path to your resume file
    link.download = 'Krishnamoorthyiyar Pirunthavan\'s Resume'; // Name the file when downloaded
    link.click();
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-5 py-5 bg-primary text-white shadow-md">
      {/* Logo */}
      <a href="/about" className="flex items-center">
        <img 
          src={logo} 
          alt="Krishnamoorthyiyar Pirunthavan Logo" 
          className="h-14 w-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-12 font-bold text-2xl">
          <li><a href="/" className="hover:text-yellow-500">Home</a></li>
          <li><a href="/about" className="hover:text-yellow-500">About</a></li>
          <li><a href="/projects" className="hover:text-yellow-500">Projects</a></li>
          <li>
            <button onClick={handleDownloadResume} className="hover:text-yellow-500">
              My Resume
            </button>
          </li>
          <li><a href="/footer" className="hover:text-yellow-500">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="absolute top-16 left-0 right-0 bg-primary text-center md:hidden z-10">
          <ul className="flex flex-col space-y-4 py-4 font-bold">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About</a></li>
            <li><a href="/projects" className="hover:text-yellow-500">Projects</a></li>
            <li><a href="/footer" className="hover:text-yellow-500">Contact</a></li>
            <li>
              <button
                onClick={handleDownloadResume}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
              >
                Download Resume
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Toggle Buttons */}
      <div className="flex space-x-4 transform -translate-x-2">
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
          {darkMode ? (
            <SunIcon className="h-8 w-8 text-yellow-500" />
          ) : (
            <MoonIcon className="h-8 w-8 pr-2" />
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {toggleMenu ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
}
