// components/Superchain.tsx
'use client';

import { useState } from 'react';

const streaksItems = [
  { 
    title: 'Superchain Evolution: Across', 
    participants: '12K', 
    image: 'https://l3img.b-cdn.net/ipfs/QmNUrMGVrLLyTtPKEWVgSMY8cXYBrNah4D74uCpPxUNJAi?width=450&optimizer=image', 
    platform: 'Across', 
    platformImage: 'https://l3img.b-cdn.net/ipfs/QmUopFdvdr4RFPuczQbxqNKph7LqWA7pg5Aix3vGSc7BNX?width=72&optimizer=image' 
  },
  { 
    title: 'Superchain Evolution: Co...', 
    participants: '8K', 
    image: 'https://l3img.b-cdn.net/ipfs/QmNUrMGVrLLyTtPKEWVgSMY8cXYBrNah4D74uCpPxUNJAi?width=450&optimizer=image', 
    platform: 'Compound', 
    platformImage: 'https://l3img.b-cdn.net/ipfs/QmUopFdvdr4RFPuczQbxqNKph7LqWA7pg5Aix3vGSc7BNX?width=72&optimizer=image' 
  },
  { 
    title: 'Superchain Evolution: Kelp...', 
    participants: '5.4K', 
    image: 'https://l3img.b-cdn.net/ipfs/QmNUrMGVrLLyTtPKEWVgSMY8cXYBrNah4D74uCpPxUNJAi?width=450&optimizer=image', 
    platform: 'KelpDAO', 
    platformImage: 'https://l3img.b-cdn.net/ipfs/QmYjpYD7V62L2pbZfHbzUMEUbtVspi5dgQJqEjyc4VMyLf?width=72&optimizer=image' 
  },
  // Add more items as needed
];

export default function Superchain() {
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
        <h2 className="text-2xl font-bold">Superchain Evolution</h2>
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
          <button className="px-4 py-2 bg-foreground text-white rounded-full hover:bg-foregroundPts">Show all</button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)`, width: `${streaksItems.length * 100 / 3}%` }}
        >
          {streaksItems.map((item, index) => (
            <div key={index} className="flex-none w-full sm:w-1/3 p-2 hover:cursor-pointer">
              <div className="bg-foreground rounded-lg overflow-hidden relative h-90"> {/* Increase the height by 25% */}
                <div className="relative w-full h-48 overflow-hidden"> {/* Adjust the height of the image container */}
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent"></div>
                  <div className="absolute bottom-2 left-2 bg-foreground text-white px-2 py-1 text-xs rounded-full flex items-center space-x-2">
                    <img src={item.platformImage} alt={item.platform} className="w-4 h-4 rounded-full" />
                    <span>{item.platform}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-gray-500 text-center">
                      <div className="font-bold text-white">{item.participants}</div>
                      <div>Participants</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="icon icon-circle-fill text-green-500">●</span>
                      <span className="icon icon-circle text-gray-500">●</span>
                      <span className="icon icon-circle text-gray-500">●</span>
                    </div>
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
