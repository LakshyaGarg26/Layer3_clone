// components/NewAndTrending.tsx
'use client';

import { newItems, trendingItems } from '../quests/list';

export default function NewAndTrending() {
  return (
    <div className="flex flex-col lg:flex-row justify-between ml-3">
      <div className="w-full lg:w-1/2 px-1.5">
        <h2 className="text-xl font-bold mb-5">New</h2>
        <div className="space-y-2 mb-5">
          {newItems.map((item, index) => (
            <div key={index} className="flex items-center bg-foreground p-4 rounded-lg h-24 hover:bg-foregroundPts hover:cursor-pointer">
              <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg mr-4" />
              <div className="flex-1">
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-textSecondary">{item.participants}</p>
                <p className="text-xs text-textSecondary">Participants</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-1.5 mr-3">
        <h2 className="text-xl font-bold mb-5">Trending Communities</h2>
        <div className="space-y-2 mb-5">
          {trendingItems.map((item, index) => (
            <div key={index} className="flex items-center bg-foreground p-4 rounded-lg h-24 hover:bg-foregroundPts hover:cursor-pointer">
              <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg mr-4" />
              <div className="flex-1">
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-textSecondary">{item.quests}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
