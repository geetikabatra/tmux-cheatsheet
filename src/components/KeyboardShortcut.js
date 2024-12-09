import React from 'react';

const KeyboardShortcut = ({ htmlContent }) => {
  return (
    <div
      className="inline-flex items-center space-x-1 font-sans"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default KeyboardShortcut;