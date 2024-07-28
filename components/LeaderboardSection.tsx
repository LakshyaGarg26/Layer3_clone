// components/LeaderboardSection.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';

const LeaderboardSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Daily Leaderboard</h2>
      <div className="bg-foreground p-8 rounded-lg flex items-center justify-center h-20">
        <FontAwesomeIcon icon={faSkull} className="text-white mr-3 text-xl" />
        <p className="text-xl">Sybil accounts do not count and will be removed once detected</p>
      </div>
    </section>
  );
};

export default LeaderboardSection;
