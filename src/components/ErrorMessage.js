import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-4 max-w-md mx-auto">
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded shadow-sm w-full">
        <div className="flex items-center">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-red-800 dark:text-red-200 font-medium">Error</h3>
            <p className="text-red-700 dark:text-red-300 mt-1 text-sm">
              {message || 'An unexpected error occurred. Please try again later.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;