// components/Icon.tsx
'use client';

interface IconProps {
  name: 'circle' | 'circleFill';
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  const iconPaths = {
    circle: 'M12 20C7.58 20 4 16.42 4 12S7.58 4 12 4s8 3.58 8 8-3.58 8-8 8z',
    circleFill: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  };

  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24">
      <path d={iconPaths[name]} />
    </svg>
  );
}
