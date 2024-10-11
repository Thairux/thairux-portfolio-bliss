import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">© 2023 Thairux. All rights reserved.</p>
          <div className="flex items-center">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-2">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-2">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mx-2">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;