// components/InfinityCubesSection.tsx
'use client';

import React from 'react';

const InfinityCubesSection = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Infinity CUBEs</h2>
        <button className="bg-foreground text-white px-4 py-2 rounded-full hover:cursor-pointer hover:bg-foregroundPts">Open Collection</button>
      </div>
      <p className="mb-4 text-gray-400">Each Infinity CUBE unlocks an additional airdrop allocation at TGE for holders. Complete special quests from the Collection to progress.</p>
      <div className="relative bg-foreground p-4 rounded-lg flex justify-between items-center mb-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://app.layer3.xyz/images/airdrop/infinity-cubes-bg.png" alt="Background" className="w-full h-full object-cover filter blur-sm" />
        </div>
        <div className="relative flex-1">
          <p className="text-lg">Total Campaign Quests Completed by the community</p>
        </div>
        <div className="relative flex items-center space-x-2 text-4xl font-bold">
          <span className="bg-black bg-opacity-50 p-2 rounded-lg text-white">2</span>
          <span className="bg-black bg-opacity-50 p-2 rounded-lg text-white">7</span>
          <span className="bg-black bg-opacity-50 p-2 rounded-lg text-white">3</span>
          <span className="bg-black bg-opacity-50 p-2 rounded-lg text-white">4</span>
          <span className="bg-black bg-opacity-50 p-2 rounded-lg text-white">9</span>
          <span className="bg-black bg-opacity-50 p-2 rounded-lg text-white">1</span>
          <span className="bg-black bg-opacity-50 p-2 rounded-lg text-white">6</span>
          <span className="bg-black bg-opacity-50 p-2 rounded-lg text-white">0</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-foreground p-4 rounded-lg flex items-center h-50">
          <img src="https://app.layer3.xyz/images/airdrop/infinity-cube-blue.png" alt="Mind CUBE" className="w-36 h-36 mr-4 rounded-lg" />
          <div>
            <h3 className="text-lg font-bold">Mind CUBE</h3>
            <p>Collect 10 eligible CUBEs</p>
            <p className="mt-2">0/10</p>
          </div>
        </div>
        <div className="bg-foreground p-4 rounded-lg flex items-center h-50 filter grayscale">
          <img src="https://app.layer3.xyz/images/airdrop/infinity-cube-yellow.png" alt="Power CUBE" className="w-36 h-36 mr-4 rounded-lg" />
          <div>
            <h3 className="text-lg font-bold">Power CUBE</h3>
            <p>Unlock Mind CUBE first</p>
          </div>
        </div>
        <div className="bg-foreground p-4 rounded-lg flex items-center h-50 filter grayscale">
          <img src="https://app.layer3.xyz/images/airdrop/infinity-cube-red.png" alt="Space CUBE" className="w-36 h-36 mr-4 rounded-lg" />
          <div>
            <h3 className="text-lg font-bold">Space CUBE</h3>
            <p>Unlock Power CUBE first</p>
          </div>
        </div>
        <div className="bg-foreground p-4 rounded-lg flex items-center h-50 md:col-span-3 filter grayscale">
          <img src="https://app.layer3.xyz/images/airdrop/trident-cube.png" alt="Trident of Worlds" className="w-36 h-36 mr-4" />
          <div>
            <h3 className="text-lg font-bold">Trident of Worlds</h3>
            <p>Wield the Trident of Worlds NFT with the power of your three Infinity CUBEs</p>
            <button className="mt-2 bg-gray-600 text-white px-4 py-2 rounded-full" disabled>Locked</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfinityCubesSection;
