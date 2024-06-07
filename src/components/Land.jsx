import React, { useState } from 'react';

const Welcome = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div style={{
      backgroundColor: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#000',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
    }}>
      <h1>Welcome to My Website!</h1>
      <p>This is a simple React component with dark mode toggle.</p>
      <button 
        onClick={toggleDarkMode} 
        style={{
          padding: '10px 20px',
          backgroundColor: darkMode ? '#666' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Welcome;
