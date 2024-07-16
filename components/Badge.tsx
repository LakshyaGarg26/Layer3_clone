// components/Badge.tsx
'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant: 'daily' | 'weekly';
}

export default function Badge({ children, variant }: BadgeProps) {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-bold';
  const variantClasses = variant === 'daily' ? 'bg-orange-500 text-white' : 'bg-blue-500 text-white';

  return <span className={`${baseClasses} ${variantClasses}`}>{children}</span>;
}
