import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-8 w-full">
      <div className="container mx-auto px-4 py-4 max-w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 sm:mb-0">© 2023 Thairux. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Thairux" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com/in/peter-muigai-5518412a9" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">
              LinkedIn
            </a>
            <a href="https://x.com/Peterptm1" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;