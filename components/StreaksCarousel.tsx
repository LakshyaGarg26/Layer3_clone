// components/StreaksCarousel.tsx
'use client';

import { useState } from 'react';
import { streaksItems } from '../app/quests/list';

export default function StreaksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? streaksItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === streaksItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mb-8 mr-5 ml-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Streaks</h2>
        <div className="flex items-center space-x-2">
          {streaksItems.length > 3 && (
            <>
              <button onClick={prevSlide} className="p-2 bg-foreground text-white rounded-lg hover:bg-foregroundPts">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={nextSlide} className="p-2 bg-foreground text-white rounded-lg hover:bg-foregroundPts">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          <button className="px-4 py-2 bg-foreground text-white rounded-lg hover:bg-foregroundPts">Show all</button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)`, width: `${streaksItems.length * 100 / 3}%` }}
        >
          {streaksItems.map((item, index) => (
            <div key={index} className="flex-none w-full sm:w-1/3 p-2 hover:cursor-pointer">
              <div className="bg-foreground rounded-lg overflow-hidden relative h-64">
                <div className="relative w-full h-40 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent"></div>
                </div>
                <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded">{item.frequency}</div>
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">{item.platform}</div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <div className="flex items-center mt-2">
                    <span className="icon icon-circle-fill text-green-500 mr-1">●</span>
                    <span className="icon icon-circle text-gray-500 mr-1">●</span>
                    <span className="icon icon-circle text-gray-500">●</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
