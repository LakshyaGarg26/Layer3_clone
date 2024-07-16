// app/quests/featuredCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import { featuredQuests } from './list';

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === featuredQuests.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured</h2>
      <div className="flex items-center space-x-4 bg-foreground p-6 rounded-lg relative">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{featuredQuests[currentIndex].title}</h3>
          <p className="text-textSecondary mb-4">{featuredQuests[currentIndex].description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-accent font-bold">Reward</span>
            <span className="text-green-500">{featuredQuests[currentIndex].reward}</span>
          </div>
          <button className="bg-buttonBackground text-white px-4 py-2 rounded flex items-center justify-center leading-none h-8 pb-2.5 font-bold">
            Begin
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="ml-20"> {/* Added ml-4 to shift the image */}
            <img src={featuredQuests[currentIndex].image} alt={featuredQuests[currentIndex].title} className="rounded-lg object-cover h-full w-full max-h-96 max-w-96" />
          </div>
        </div>
        <div className="absolute -top-7 right-4 mr-4 flex space-x-2">
          {featuredQuests.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-gray-400' : 'bg-gray-700'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
