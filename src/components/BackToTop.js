import React from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = ({ visible }) => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className={`fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white 
      rounded-full shadow-lg transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
  >
    <ChevronUp className="h-6 w-6" />
  </button>
);

export default BackToTop;