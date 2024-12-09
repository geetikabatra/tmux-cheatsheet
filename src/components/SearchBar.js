import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => (
  <div className="sticky top-4 z-50 mx-auto max-w-2xl">
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent 
          focus:border-blue-500 bg-transparent placeholder-gray-400 focus:outline-none
          transition duration-200 dark:text-gray-200"
        placeholder="Search commands, shortcuts, or descriptions..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

export default SearchBar;