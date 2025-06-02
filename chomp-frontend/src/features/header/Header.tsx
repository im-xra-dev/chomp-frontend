import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CHOMP from '../../assets/images/temp chomp logo.png';

export function Header() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled more than 50px
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up
    };
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 bg-black shadow transition-all duration-300 
        ${isShrunk ? 'py-2' : 'py-4'}`}
    >
      <div className="flex items-center justify-between w-full px-6">
        {/* Left: Search bar */}
        <div className="flex-1">
          <input
            id="site-search"
            type="text"
            placeholder="Search..."
            className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        {/* Center: Logo */}
        <div className="flex-1 text-center">
          <Link to="/" data-testid="header-home" className="text-xl font-bold">
            <img
              src={CHOMP}
              alt="CHOMP Logo"
              className={`inline-block align-middle transition-all duration-300 
                ${isShrunk ? 'h-12' : 'h-20'}`}
            />
          </Link>
        </div>

        {/* Right: Profile icon */}
        <div className="flex-1 flex justify-end">
          <div
            id="profile-settings"
            className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
          >
            👤
          </div>
        </div>
      </div>
    </header>
  );
}
