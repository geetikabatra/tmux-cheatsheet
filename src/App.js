import React, { useState, useCallback, useEffect} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import BackToTop from './components/BackToTop';
import GoogleAd from './components/GoogleAd';
import Footer from './components/Footer';
import { tmuxData } from './data/tmuxCommands';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [filteredData, setFilteredData] = useState(tmuxData.categories);
  const [adsEnabled, setAdsEnabled] = useState(true);
  
  useEffect(() => {
    // Check if AdSense is blocked or failed to load
    const checkAdsense = setTimeout(() => {
      if (window.adsenseError || !window.adsbygoogle) {
        setAdsEnabled(false);
      }
    }, 2000); // Give it 2 seconds to load

    return () => clearTimeout(checkAdsense);
  }, []);

  //Dark mode effect
  useEffect(() => {
    // Check if user has dark mode preference
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  // Update dark mode class and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);


  // Handle search
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredData(tmuxData.categories);
      return;
    }

    const filtered = tmuxData.categories
      .map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.desc.toLowerCase().includes(term.toLowerCase()) ||
          item.keywords?.some(k => k.toLowerCase().includes(term.toLowerCase())) ||
          item.shell?.some(s => s.toLowerCase().includes(term.toLowerCase())) ||
          item.tmuxcmd?.some(c => c.toLowerCase().includes(term.toLowerCase()))
        )
      }))
      .filter(category => category.items.length > 0);

    setFilteredData(filtered);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <SearchBar 
          value={searchTerm} 
          onChange={handleSearch}
          placeholder="Search commands, shortcuts, or descriptions..."
        />
        {/* Top Ad */}
        {adsEnabled && <GoogleAd slot="4317038703" />}{/* Replace with your ad slot */}
        
        <div className="mt-12 space-y-12">
          {filteredData.map((category, index) => (
            <React.Fragment key={index}>
              <Category {...category} />
              {/* Insert ad after every third category */}
              {(index + 1) % 3 === 0 && <GoogleAd slot="9876543210" />}
            </React.Fragment>
          ))}
          
          {filteredData.length === 0 && (
            <div className="text-center py-12 text-gray-600 dark:text-gray-400">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
        
        {/* Bottom Ad */}
        {adsEnabled && <GoogleAd slot="4317038703" />}
        <div className="mt-12 space-y-12">
          {filteredData.map((category, index) => (
            <Category key={index} {...category} />
          ))}
          
          {filteredData.length === 0 && (
            <div className="text-center py-12 text-gray-600 dark:text-gray-400">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <BackToTop visible={showBackToTop} />
    </div>
  );
};

export default App;