// app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/NavBar';
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
          </div>
        </main>
      </body>
    </html>
  );
}
