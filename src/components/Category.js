import React from 'react';
import { Info } from 'lucide-react';
import CommandBox from './CommandBox';
import KeyboardShortcut from './KeyboardShortcut';

const Category = ({ name, items }) => (
  <div className="mb-12">
    <div className="flex items-center space-x-3 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{name}</h2>
      <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
            
            <div className="space-y-3">
              {item.shell?.map((cmd, i) => (
                <CommandBox key={i} command={cmd} type="shell" />
              ))}
              
              {item.tmuxcmd?.map((cmd, i) => (
                <CommandBox key={i} command={cmd} type="tmux" />
              ))}
              
              {item.shortcut?.length > 0 && (
              <div className="my-2 space-y-2">
                {item.shortcut.map((shortcut, i) => (
                  <KeyboardShortcut key={i} htmlContent={shortcut} />
                ))}
              </div>
            )}
              
              <div className="flex items-start space-x-2 mt-4">
                <Info className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Category;