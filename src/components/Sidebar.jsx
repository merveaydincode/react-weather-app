import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const handleBackdropClick = () => {
    setIsOpen(false);
};

  const handleHomeClick = () => {
    // Anasayfaya gitmek için tarayıcıyı doğrudan yönlendiriyoruz
    window.location.href = '/';
  };

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
    
    document.body.classList.toggle('dark-theme');
  };

  return (
    <>
      {!isOpen ? (
        <button
          className='fixed z-30 flex items-center cursor-pointer right-96 top-2 bg-blue-900 p-2 w-8 h-8 rounded-lg'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="#f5f6f7" viewBox='0 0 100 80' width='40' height='40'>
            <rect width='100' height='10' fill='white'></rect>
            <rect y='30' width='75' height='10' fill='white'></rect>
            <rect y='60' width='60' height='10' fill='white'></rect>
          </svg>
        </button>
      ) : (
        <button
          className='text-2xl text-black fixed top-4 right-4 z-10 rounded-md cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          x
        </button>
      )}
       {isOpen && (
                <div 
                    className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-25'
                    onClick={handleBackdropClick}
                />
            )}

      <div
        className={`top-0 right-0 fixed bg-white w-[35vw] h-full p-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        <button className='text-md text-black bg-zinc-300 rounded-md p-1 w-20 h-8 cursor-pointer' onClick={handleHomeClick}>
          Home
        </button>
        <br />
        <button className='text-md text-black bg-sky-950 rounded-md p-1 w-10 h-9 cursor-pointer' onClick={handleThemeChange}>
          {isDarkTheme ? '☽' : '☼'}
        </button>
      </div>
    </>
  );
}

export default Sidebar;
