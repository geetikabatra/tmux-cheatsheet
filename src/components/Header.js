import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => (
  <header className="w-full py-6 px-4 bg-white dark:bg-gray-800 shadow-sm">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center w-full">
          Tmux Cheat Sheet
        </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
          dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
            <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600" />
          )}
      </button>
    </div>
  </header>
);

export default Header;