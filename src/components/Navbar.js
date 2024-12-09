import React from 'react';
import { Sun, Moon, ExternalLink} from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-gray-800 dark:text-white font-bold">Home</a>
            <a href="/how-to-install-tmux" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Install Tmux
            </a>
            <a href="/theming-and-customizing" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Theming & Customizing
            </a>
            <a href="/tmux-plugins-tools" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Plugins & Tools
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/l9c/tmux_cheat_sheet_data" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <span className="mr-2">Submit Cheats</span>
              <ExternalLink size={16} />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

export default Navbar;
