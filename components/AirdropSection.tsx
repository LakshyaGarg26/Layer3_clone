// components/AirdropSection.tsx
'use client';

const AirdropSection = () => {
  return (
    <div className="bg-background text-white rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-2">Airdrop 2</h2>
      <p className="text-textSecondary mb-4">Increase your share of the allocation for each Infinity CUBE. Stats start from <span className="font-bold">May 10, 2024, 7:30 PM</span></p>
      <div className="flex flex-wrap space-x-2 mb-6">
        <div className="bg-foreground py-1 px-2 rounded-full flex items-center space-x-2">
          <span className="bg-green-500 w-4 h-4 rounded-full"></span>
          <span className="text-sm">Level 0</span>
        </div>
        <div className="bg-foreground py-1 px-2 rounded-full flex items-center space-x-2">
          <span className="bg-purple-500 w-4 h-4 rounded-full"></span>
          <span className="text-sm">$0.00 Volume</span>
        </div>
        <div className="bg-foreground py-1 px-2 rounded-full flex items-center space-x-2">
          <span className="bg-yellow-500 w-4 h-4 rounded-full"></span>
          <span className="text-sm">0 Quests</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="bg-foreground p-4 rounded-lg flex flex-col items-center text-center">
          <h3 className="text-lg font-bold">Multiplier</h3>
          <p className="mt-2 text-sm text-textSecondary">Stay active to increase</p>
        </div>
        <div className="bg-foreground p-4 rounded-lg flex flex-col items-center text-center">
          <h3 className="text-lg font-bold">Referral Points</h3>
          <div className="flex items-center mt-2 space-x-2">
            <span className="bg-blue-500 w-4 h-4 rounded-full"></span>
            <span className="text-lg font-bold">0</span>
          </div>
          <p className="mt-2 text-sm text-textSecondary">Earn for successful referrals</p>
        </div>
        <div className="bg-foreground p-4 rounded-lg flex flex-col items-center text-center">
          <h3 className="text-lg font-bold">CUBEs</h3>
          <div className="flex items-center mt-2 space-x-2">
            <span className="bg-yellow-500 w-4 h-4 rounded-full"></span>
            <span className="text-lg font-bold">0</span>
          </div>
          <p className="mt-2 text-sm text-textSecondary">Mint CUBEs to increase</p>
        </div>
        <div className="bg-blue-500 p-4 rounded-lg flex flex-col items-center text-center">
          <h3 className="text-lg font-bold">XP</h3>
          <span className="text-2xl font-bold mt-2">0</span>
          <p className="mt-2 text-sm text-white">Total XP earned</p>
        </div>
      </div>
    </div>
  );
};

export default AirdropSection;
