// app/quests/featuredCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import { featuredQuests } from './list';

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === featuredQuests.length - 1 ? 0 : prevIndex + 1));
        setIsAnimating(false);
      }, 500); // Transition duration
    }, 2500); // Change slide every 2.5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured</h2>
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out transform ${isAnimating ? 'translate-x-[-100%]' : ''}`}
          style={{ width: `${featuredQuests.length * 100}%` }}
        >
          {featuredQuests.map((quest, index) => (
            <div
              key={index}
              className="flex-none w-full"
              style={{ width: `${100 / featuredQuests.length}%` }}
            >
              <div className="flex items-center space-x-4 bg-secondary p-6 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{quest.title}</h3>
                  <p className="text-textSecondary mb-4">{quest.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent font-bold">Reward</span>
                    <span className="text-green-500">{quest.reward}</span>
                  </div>
                  <button className="bg-buttonBackground text-white px-4 py-2 rounded hover:bg-buttonHover">Begin</button>
                </div>
                <div className="flex-1">
                  <img src={quest.image} alt={quest.title} className="rounded-lg w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -top-7 right-4 mr-4 flex space-x-2">
        {featuredQuests.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-700'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
