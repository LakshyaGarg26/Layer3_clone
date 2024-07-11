// app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/NavBar';
import StickyCard from './components/StickyCard';
import NewAndTrending from './components/NewAndTrending';

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
            <NewAndTrending /> {/* Add the NewAndTrending component here */}
            
          </div>
          <StickyCard />
        </main>
      </body>
    </html>
  );
}
