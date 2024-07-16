// components/StickyCard.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faTrophy, faUserFriends } from '@fortawesome/free-solid-svg-icons';

export default function StickyCard() {
  return (
    <div className="sticky top-20 bg-foreground p-6 rounded-lg shadow-lg h-[calc(106vh-140px)] w-96 mr-4">
      <img src={'https://app.layer3.xyz/images/profiles.png'} alt={'layer3'} className="rounded-lg w-full mb-4" />
      <h2 className="text-2xl font-bold text-white mb-4">Explore, earn and trade in one place</h2>
      <p className="text-gray-400 mb-4">Earn tokens, level-up and build your omnichain identity</p>
      <ul className="mb-4 space-y-4">
        <li className="flex items-center bg-foregroundPts p-3 rounded-md">
          <FontAwesomeIcon icon={faBolt} className="w-5 h-5 text-white mr-3" />
          <span className="text-white">Complete quests and earn rewards</span>
        </li>
        <li className="flex items-center bg-foregroundPts p-3 rounded-md">
          <FontAwesomeIcon icon={faTrophy} className="w-5 h-5 text-white mr-3" />
          <span className="text-white">Compete with other players</span>
        </li>
        <li className="flex items-center bg-foregroundPts p-3 rounded-md">
          <FontAwesomeIcon icon={faUserFriends} className="w-5 h-5 text-white mr-3" />
          <span className="text-white">Invite friends and earn ETH</span>
        </li>
      </ul>
      <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 pb-4 font-bold">Connect Wallet</button>
    </div>
  );
}
