// components/UnlockMoreQuests.tsx
'use client';

const unlockMoreQuestsItems = [
  { title: 'ARB Drop: 300+ CUBEs', level: 5, image: 'https://l3img.b-cdn.net/ipfs/QmPAQqU5tdnFnJAZuyAGqXrKTuZSqFj4Pds8BFF9ksxjua?width=450&optimizer=image', platform: 'Layer3', platformImage: 'https://l3img.b-cdn.net/ipfs/QmZUYQnZb7g4VayUWGdwJ1cu3hhQvZszaHoTdLtZbh9F1H?width=72&optimizer=image' },
  { title: 'MODE Drop: 400+ CUBEs', level: 5, image: 'https://l3img.b-cdn.net/ipfs/QmPAQqU5tdnFnJAZuyAGqXrKTuZSqFj4Pds8BFF9ksxjua?width=450&optimizer=image', platform: 'Layer3', platformImage: 'https://l3img.b-cdn.net/ipfs/QmZUYQnZb7g4VayUWGdwJ1cu3hhQvZszaHoTdLtZbh9F1H?width=72&optimizer=image' },
  { title: 'ZRO Drop: 500+ CUBEs', level: 5, image: 'https://l3img.b-cdn.net/ipfs/QmPAQqU5tdnFnJAZuyAGqXrKTuZSqFj4Pds8BFF9ksxjua?width=450&optimizer=image', platform: 'Layer3', platformImage: 'https://l3img.b-cdn.net/ipfs/QmZUYQnZb7g4VayUWGdwJ1cu3hhQvZszaHoTdLtZbh9F1H?width=72&optimizer=image' },
  // Add more items as needed
];

export default function Drops() {
  return (
    <div className="relative mb-8 mr-5 ml-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Layer3 Drops</h2>
        {/* <button className="px-4 py-2 bg-foreground text-white rounded-full hover:bg-foregroundPts">Show all</button> */}
      </div>
      <div className="flex overflow-x-scroll no-scrollbar space-x-4">
        {unlockMoreQuestsItems.map((item, index) => (
          <div key={index} className="flex-none w-72 h-96 bg-foreground rounded-lg overflow-hidden relative">
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
