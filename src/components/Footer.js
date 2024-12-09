import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <span>©{currentYear} cheatsheetTmux.com</span>
          <span className="border-l border-gray-300 dark:border-gray-600 h-4"></span>
          <a 
            href="/privacy" 
            className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;