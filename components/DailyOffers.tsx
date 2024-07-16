// components/DailyOffers.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function DailyOffers() {
  return (
    <div className="relative mb-8 mr-5 ml-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Daily Offers</h2>
        <div className="flex items-center space-x-2">
          <span className="text-foreground">Restarts in</span>
          <span className="ml-2 flex items-center justify-center text-white rounded-full bg-foregroundPts h-8 w-28">
            <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2 text-foreground" />
            3h 53m
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4 text-foreground">
        <span className="flex-1 text-left">Protocol & Task</span>
        <span className="flex-1 text-center ml-22-custom">Chains</span>
        <span className="flex-1 text-center">Participants</span>
        <span className="flex-1 text-center">Reward</span>
        <span className="flex-1 text-right mr-8">Action</span>
      </div>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-lg flex justify-between items-center">
        <div className="flex items-center flex-2">
          <img src="https://l3img.b-cdn.net/ipfs/QmU6vaKS7h6FEWsQ8VGrzsis4vPyG1KPAcGpgT7GTGtYiP?width=72&optimizer=image" alt="Polygon" className="w-12 h-12 rounded-lg" />
          <span className="text-white font-bold ml-4">Claim your Free gas</span>
        </div>
        <div className="flex items-center flex-1 justify-center ml-7">
          <img src="https://app.layer3.xyz/images/chains/polygon.svg" alt="Polygon" className="w-8 h-8" />
        </div>
        <div className="flex items-center flex-1 justify-center">
          <span className="text-white">50k / 50k</span>
        </div>
        <div className="flex items-center flex-1 justify-center">
          <img src="https://app.layer3.xyz/images/chains/polygon.svg" alt="Polygon" className="w-6 h-6 mr-2" />
          <span className="text-white">0.01 MATIC</span>
        </div>
        <div className="flex-1 text-right">
          <button className="px-4 py-2 bg-foreground text-white rounded-lg hover:bg-foregroundPts">Claim</button>
        </div>
      </div>
    </div>
  );
}
