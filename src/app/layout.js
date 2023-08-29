'use client';

import './globals.css';
import { Roboto } from 'next/font/google';
import SideBar from '@/components/SideBar';
import TopNavigation from '@/components/TopNavigation';
import { useState } from 'react';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-100`}>
        <div className="flex flex-col min-h-screen">
          <TopNavigation
            isExpanded={isExpanded}
            toggleExpand={() => setIsExpanded(!isExpanded)}
          />
          <div className="flex flex-1">
            <SideBar isExpanded={isExpanded} />
            <main className="flex-1 lg:container mx-auto px-5 py-3 lg:px-20 flex flex-col gap-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
