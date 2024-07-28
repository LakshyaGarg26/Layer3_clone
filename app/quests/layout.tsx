// app/layout.tsx
'use client';

import '../globals.css';
import { ReactNode } from 'react';
import Navbar from '../../components/NavBar';
import StickyCard from '../../components/StickyCard';
import NewAndTrending from '../../components/NewAndTrending';
import StreaksCarousel from '../../components/StreaksCarousel';
import DailyOffers from '../../components/DailyOffers';
import EcosystemsCarousel from '../../components/EcosystemsCarousel';
import UnlockMoreQuests from '../../components/UnlockMoreQuests';
import Drops from '../../components/Drops';
import InfinityCUBEs from '../../components/InfinityCUBEs'
import Superchain  from '../../components/Superchain'
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-background text-textPrimary">
        <Navbar />
        <main className="flex">
          <div className="flex-grow">
            {children}
            <NewAndTrending />
            <StreaksCarousel />
            <DailyOffers />
            <EcosystemsCarousel />
            <UnlockMoreQuests />
            <Drops />
            <InfinityCUBEs />
            <Superchain />
          </div>
          <StickyCard />
        </main>
      </body>
    </html>
  );
}
