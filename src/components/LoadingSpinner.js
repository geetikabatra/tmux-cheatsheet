import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-4 
        border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400"
        aria-label="Loading"
        role="status">
      </div>
    </div>
  );
};

export default LoadingSpinner;