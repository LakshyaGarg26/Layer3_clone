'use client';

import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import LanguageDropdown from './LanguageDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faGlobe, faExchangeAlt, faGift, faStore, faChartBar, faTrophy, faUserFriends, faRedo } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="p-4 bg-background flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold">LAYER3</div>
        <nav className="hidden sm:flex space-x-6">
          <a href="#" className="text-textPrimary hover:text-textSecondary">Trade</a>
          <a href="#" className="text-textPrimary hover:text-textSecondary">Bridge</a>
          <a href="/rewards" className="text-textPrimary hover:text-textSecondary">Rewards</a>
        </nav>
      </div>
      <div className="hidden sm:flex items-center space-x-4 flex-grow justify-center">
        <SearchBar />
      </div>
      <div className="hidden sm:flex items-center space-x-4 mr-2">
        
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-bold">
          Connect Wallet
        </button>
        <LanguageDropdown />
      </div>
      <div className="flex sm:hidden items-center space-x-4">
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-bold">
          Connect Wallet
        </button>
        {isSmallScreen ? (
          <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-textPrimary" />
        ) : (
          <LanguageDropdown />
        )}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-textPrimary" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-foreground flex flex-col items-center space-y-4 sm:hidden p-4 rounded-lg shadow-lg ">
          <div className="flex items-center space-x-2">
            {/* <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 text-textPrimary" /> */}
            {/* <LanguageDropdown /> */}
          </div>
          <nav className="flex flex-col space-y-4">
          <a  className="flex items-center space-x-2 text-textPrimary hover:text-textSecondary">
              <LanguageDropdown />
              <span>Language</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-textPrimary hover:text-textSecondary">
              <FontAwesomeIcon icon={faExchangeAlt} />
              <span>Trade</span>
            </a>
            <a href="/rewards" className="flex items-center space-x-2 text-textPrimary hover:text-textSecondary">
              <FontAwesomeIcon icon={faGift} />
              <span>Rewards</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-textPrimary hover:text-textSecondary">
              <FontAwesomeIcon icon={faStore} />
              <span>Shop</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-textPrimary hover:text-textSecondary">
              <FontAwesomeIcon icon={faChartBar} />
              <span>Leaderboard</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-textPrimary hover:text-textSecondary">
              <FontAwesomeIcon icon={faTrophy} />
              <span>Achievements</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-textPrimary hover:text-textSecondary">
              <FontAwesomeIcon icon={faUserFriends} />
              <span>Refer a friend</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-textPrimary hover:text-textSecondary">
              <FontAwesomeIcon icon={faRedo} />
              <span>View Legacy App</span>
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-bold w-full">
            Explore
          </button>
        </div>
      )}
    </header>
  );
}
