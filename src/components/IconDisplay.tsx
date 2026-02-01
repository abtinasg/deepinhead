import React from 'react';
import Image from 'next/image';

interface IconDisplayProps {
  icon: string;
  size?: number;
  alt?: string;
  className?: string;
}

export function IconDisplay({ 
  icon, 
  size = 24, 
  alt = "Icon", 
  className = "" 
}: IconDisplayProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <Image
        src={`/icons/${icon}`}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

// Helper component for common icon sizes
export function AppIcon({ className = "" }: { className?: string }) {
  return <IconDisplay icon="icon-96x96.png" size={96} alt="Deepin App" className={className} />;
}

export function SmallIcon({ className = "" }: { className?: string }) {
  return <IconDisplay icon="icon-32x32.png" size={32} alt="Deepin" className={className} />;
}

export function MediumIcon({ className = "" }: { className?: string }) {
  return <IconDisplay icon="icon-96x96.png" size={96} alt="Deepin" className={className} />;
}

export function LargeIcon({ className = "" }: { className?: string }) {
  return <IconDisplay icon="icon-192x192.png" size={192} alt="Deepin" className={className} />;
}