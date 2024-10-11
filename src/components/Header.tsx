import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            Thairux
          </Link>
          <div className="flex items-center">
            <Link to="/" className="mx-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Home</Link>
            <Link to="/projects" className="mx-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</Link>
            <Link to="/about" className="mx-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</Link>
            <Link to="/contact" className="mx-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</Link>
            <Link to="/blog" className="mx-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Blog</Link>
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;