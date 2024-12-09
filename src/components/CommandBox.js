import React, { useState } from 'react';
import { Copy, Command, Terminal } from 'lucide-react';

const CommandBox = ({ command, type }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div 
      className={`group relative overflow-hidden ${
        type === 'shell' ? 'bg-slate-800' : 'bg-emerald-900'
      } rounded-lg p-3 cursor-pointer hover:translate-x-1 transition-all duration-200`}
      onClick={handleCopy}
    >
      <div className="flex items-center space-x-2">
        {type === 'shell' ? (
          <Terminal className="h-4 w-4 text-slate-400" />
        ) : (
          <Command className="h-4 w-4 text-emerald-400" />
        )}
        <span className="font-mono text-white">
          {type === 'shell' ? '$ ' : ': '}
          {command}
        </span>
      </div>
      
      <div className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-200 ${
        copied ? 'text-green-400' : 'text-gray-400'
      } ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <Copy className="h-4 w-4" />
      </div>
      
      {copied && (
        <div className="absolute inset-0 bg-green-500/10 animate-pulse" />
      )}
    </div>
  );
};

export default CommandBox;