// components/Navbar.tsx
'use client';

import SearchBar from './SearchBar';
import LanguageDropdown from './LanguageDropdown';

export default function Navbar() {
  return (
    <header className="p-4 bg-background flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">LAYER3</div>
        <nav className="flex space-x-6">
          <a href="#" className="text-textPrimary hover:text-textSecondary">Trade</a>
          <a href="#" className="text-textPrimary hover:text-textSecondary">Bridge</a>
          <a href="#" className="text-textPrimary hover:text-textSecondary">Rewards</a>
        </nav>
      </div>
      <SearchBar />
      <div className="flex space-x-4 items-center">
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 pb-2 font-bold" style={{ marginLeft: '-175px' }}>
          Connect Wallet
        </button>
        <LanguageDropdown />
      </div>
    </header>
  );
}
