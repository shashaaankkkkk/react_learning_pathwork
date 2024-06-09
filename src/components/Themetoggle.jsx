import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply the theme to the body when it changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>Click the button below to toggle the theme.</p>
      <button 
        onClick={toggleTheme} 
        style={{
          padding: '10px 20px',
          backgroundColor: isDarkMode ? '#666' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
