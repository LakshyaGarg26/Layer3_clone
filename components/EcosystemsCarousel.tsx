'use client';

import { useState } from 'react';

const ecosystemsItems = [
  { name: 'Base', quests: 52, image: 'https://app.layer3.xyz/images/chains/base.svg' },
  { name: 'Arbitrum', quests: 44, image: 'https://app.layer3.xyz/images/chains/arbitrum.svg' },
  { name: 'OP Mainnet', quests: 33, image: 'https://app.layer3.xyz/images/chains/optimism.svg' },
  { name: 'Blast', quests: 25, image: 'https://app.layer3.xyz/images/chains/blast.svg' },
  { name: 'zkSync', quests: 21, image: 'https://app.layer3.xyz/images/chains/zksync.svg' },
  // Add more items as needed
];

export default function EcosystemsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? ecosystemsItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === ecosystemsItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mb-8 mr-5 ml-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Ecosystems</h2>
        <div className="flex space-x-2">
          <button onClick={prevSlide} className="p-2 bg-foreground text-white rounded-full hover:bg-foregroundPts">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextSlide} className="p-2 bg-foreground text-white rounded-full hover:bg-foregroundPts">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="px-4 py-2 bg-foreground text-white rounded-full hover:bg-foregroundPts">Show all</button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 20}%)`, width: `${ecosystemsItems.length * 20}%` }}
        >
          {ecosystemsItems.map((item, index) => (
            <div key={index} className="flex-none w-full sm:w-1/5 p-2 hover:cursor-pointer">
              <div className="bg-foreground rounded-lg overflow-hidden relative h-64 flex flex-col items-center justify-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-contain mb-4 rounded-full" />
                <div className="text-center">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-500">{item.quests} Quests</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
