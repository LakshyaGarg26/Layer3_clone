// components/Navigation.tsx
'use client';

import { useState } from 'react';

const Navigation = () => {
  const [selectedOption, setSelectedOption] = useState('Airdrop 2');

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
      <div className="flex space-x-4">
        <a
          href="#"
          className={`${
            selectedOption === 'Shop' ? 'bg-foreground text-white rounded-full' : 'text-gray-400 hover:text-white'
          } py-1 px-2`}
          onClick={() => setSelectedOption('Shop')}
        >
          Shop
        </a>
        <a
          href="#"
          className={`${
            selectedOption === 'Airdrop 1' ? 'bg-foreground text-white rounded-full' : 'text-gray-400 hover:text-white'
          } py-1 px-2 flex items-center`}
          onClick={() => setSelectedOption('Airdrop 1')}
        >
          <span className="mr-2">&#10003;</span> Airdrop 1
        </a>
        <a
          href="#"
          className={`${
            selectedOption === 'Airdrop 2' ? 'bg-foreground text-white rounded-full' : 'text-gray-400 hover:text-white'
          } py-1 px-2`}
          onClick={() => setSelectedOption('Airdrop 2')}
        >
          Airdrop 2
        </a>
        <a
          href="#"
          className={`${
            selectedOption === 'Trophy Road' ? 'bg-foreground text-white rounded-full' : 'text-gray-400 hover:text-white'
          } py-1 px-2`}
          onClick={() => setSelectedOption('Trophy Road')}
        >
          Trophy Road
        </a>
      </div>
      <div className="text-sm text-gray-400 flex items-center space-x-2">
        <span>Season 2 ends in</span>
        <span className="flex items-center bg-gray-800 py-1 px-2 rounded-full">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
          <span>21h 1m 11s</span>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
