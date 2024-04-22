import React, { useState } from 'react';
import './headerr.css';

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`header ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className="left">
        <span className="weather" onClick={handleRefresh}>Hava Durumu Sorgulama</span>
      </div>
      {/* Butonu sadece sidebar bileşeninde kullanacağız */}
    </div>
  );
};

export default Header;
