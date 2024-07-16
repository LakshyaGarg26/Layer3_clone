// components/SearchDropdown.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchDropdown() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-full max-w-md bg-foreground rounded-lg shadow-2xl p-4 z-50" >
      <div className="flex items-center mb-4 hover:bg-foregroundPts rounded-lg p-2">
        <FontAwesomeIcon icon={faSearch} className="w-5 h-5 mr-2 text-buttonBackground" />
        <span className="text-buttonBackground">Open Advanced Search</span>
      </div>
      <div className="text-textSecondary mb-2">Filter by rewards</div>
      <ul>
        <li className="flex items-center mb-2 hover:bg-foregroundPts rounded-lg p-2">
          <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span> Tokens
        </li>
        <li className="flex items-center mb-2 hover:bg-foregroundPts rounded-lg p-2">
          <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span> CUBEs
        </li>
        <li className="flex items-center mb-2 hover:bg-foregroundPts rounded-lg p-2">
          <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span> XP
        </li>
        <li className="flex items-center hover:bg-foregroundPts rounded-lg p-2">
          <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span> NFTs
        </li>
      </ul>
    </div>
  );
}
