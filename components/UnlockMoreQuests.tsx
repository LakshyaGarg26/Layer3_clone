// components/UnlockMoreQuests.tsx
'use client';

const unlockMoreQuestsItems = [
  { title: 'DeFi Staking on Avalanche', level: 5, image: 'https://l3img.b-cdn.net/ipfs/Qmei8K7tyBwimvdFTV9mRa1iA5mCrAWmgXRSPnQAsNWT1v?width=600&optimizer=image', platform: 'Trader Joe', platformImage: 'https://l3img.b-cdn.net/ipfs/QmVukXWqbydtFZE1juhoHLxhNXNc1JyS1eyy21XMzcktNu?width=72&optimizer=image' },
  { title: 'The Lightning Network', level: 5, image: 'https://l3img.b-cdn.net/ipfs/QmPHBoUHNo1xXtUVxGrYGtM6U796t2MzVG3gfY1Jnd8BbS?width=600&optimizer=image', platform: 'Bitcoin', platformImage: 'https://l3img.b-cdn.net/ipfs/QmY2gbqLZovY8NPSNycigW3GEBvXTL1zdmX4W6jMrV5iMM?width=72&optimizer=image' },
  { title: "Bitcoin's Taproot and Schno...", level: 5, image: 'https://l3img.b-cdn.net/ipfs/Qmc2p48CwYCt1F93onD6P9XzXyR8SpkddjPsoQyBRRUmGW?width=600&optimizer=image', platform: 'Bitcoin', platformImage: 'https://l3img.b-cdn.net/ipfs/QmY2gbqLZovY8NPSNycigW3GEBvXTL1zdmX4W6jMrV5iMM?width=72&optimizer=image' },
  // Add more items as needed
];

export default function UnlockMoreQuests() {
  return (
    <div className="relative mb-8 mr-5 ml-5">
      <h2 className="text-2xl font-bold mb-4">Unlock more quests</h2>
      <div className="flex overflow-x-scroll no-scrollbar space-x-4">
        {unlockMoreQuestsItems.map((item, index) => (
          <div key={index} className="flex-none w-72 h-108 bg-foreground rounded-lg overflow-hidden relative">
            <div className="relative w-full h-2/3 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent"></div>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <img src={item.platformImage} alt={item.platform} className="w-6 h-6 mr-2 rounded-full" />
                <span className="text-gray-400 text-sm">{item.platform}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M6.938 17h10.124A2.938 2.938 0 0019 14.062V9.938A2.938 2.938 0 0017.062 7H6.938A2.938 2.938 0 004 9.938v4.124A2.938 2.938 0 006.938 17z" />
                  </svg>
                  <span>Level {item.level}</span>
                </span>
                <span className="px-2 py-1 bg-gray-700 text-white text-xs rounded ml-2">Level Locked</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
