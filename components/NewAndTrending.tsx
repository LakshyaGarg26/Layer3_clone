'use client';

import { newItems, trendingItems } from '../app/quests/list';

export default function NewAndTrending() {
  return (
    <div className="flex flex-col lg:flex-row justify-between ml-3">
      <div className="w-full lg:w-1/2 px-1.5">
        <h2 className="text-xl font-bold mb-5">New</h2>
        <div className="space-y-2 mb-5">
          {newItems.map((item, index) => (
            <div key={index} className="group relative flex items-center bg-foreground p-4 rounded-lg h-24 hover:bg-foregroundPts hover:cursor-pointer overflow-hidden">
              <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg mr-4" />
              <div className="flex-1 relative">
                <div className="absolute top-0 left-0 w-full bg-foregroundPts text-xs text-foreground px-2 rounded opacity-0 group-hover:opacity-100">
                  {item.title.split(' ')[0]}
                </div>
                <div className="transition-transform duration-300 ease-in-out group-hover:transform group-hover:translate-y-4">
                  <h3 className="font-bold text-sm mb-1 text-white">{item.title}</h3>
                  <p className="text-xs text-white">{item.participants}</p>
                  <p className="text-xs text-white">Participants</p>
                </div>
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
                <h3 className="font-bold text-sm mb-1 text-white">{item.title}</h3>
                <p className="text-xs text-white">{item.quests}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
