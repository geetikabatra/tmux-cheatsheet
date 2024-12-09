import React, { useEffect, useState } from 'react';

const GoogleAd = ({ slot, format = 'auto', responsive = true }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      // Check if adsbygoogle is defined
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } else {
        console.log('AdSense not loaded yet');
      }
    } catch (e) {
      console.error('AdSense error:', e);
      setError(true);
    }
  }, []);

  if (error) return null;

  return (
    <div className="ad-container my-8">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          minHeight: '90px'
        }}
        data-ad-client="ca-pub-9609948936748481"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default GoogleAd;