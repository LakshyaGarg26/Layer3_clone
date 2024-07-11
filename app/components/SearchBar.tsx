// components/SearchBar.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchDropdown from './SearchDropdown';

export default function SearchBar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === '/') {
      if (!isSearchActive) {
        event.preventDefault();
        setIsSearchActive(true);
        searchRef.current?.focus();
      }
    }
    if (event.key === 'Escape') {
      setIsSearchActive(false);
      searchRef.current?.blur();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsSearchActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchActive]);

  return (
    <div className="relative" style={{ marginLeft: '-300px' }}>
      <div className="relative flex items-center bg-foreground px-3 py-1 rounded-full text-textSecondary custom-translate-x">
        <FontAwesomeIcon icon={faSearch} className="w-4 h-4 mr-2 text-textSecondary" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-textPrimary pb-0.5"
          ref={searchRef}
          onFocus={() => setIsSearchActive(true)}
          onBlur={() => setTimeout(() => setIsSearchActive(false), 200)} // Delay to allow clicking dropdown items
        />
       <span className="text-xs">Press</span><span className="ml-2 text-base font-bold pb-0.5">/</span>

      </div>
      {isSearchActive && <SearchDropdown />}
    </div>
  );
}
