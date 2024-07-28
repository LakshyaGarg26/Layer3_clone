// components/LanguageDropdown.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Russian', 'Italian'];

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener('resize', handleResize);

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-textSecondary focus:outline-none"
      >
        <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 text-white hover:text-textSecondary" />
      </button>
      {isOpen && (
        <div
          className={`absolute ${isSmallScreen ? 'left-0 mt-2' : 'right-0 mt-4'} w-48 bg-foreground rounded-lg shadow-2xl z-50`}
        >
          <ul className="py-2">
            {languages.map((language, index) => (
              <li
                key={index}
                className="px-4 py-2 text-textPrimary hover:bg-foregroundPts cursor-pointer rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
