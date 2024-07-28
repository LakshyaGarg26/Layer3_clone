// app/rewards/page.tsx
'use client';

import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import AirdropSection from '../../components/AirdropSection';
import InfinityCUBEsSection from '../../components/InfinityCUBEsSection';
import LeaderboardSection from '../../components/LeaderboardSection';

const RewardsPage = () => {
  return (
    <div className="min-h-screen bg-background text-white p-6">
      <Header />
      <Navigation />
      <AirdropSection />
      <InfinityCUBEsSection />
      <LeaderboardSection />
    </div>
  );
};

export default RewardsPage;
