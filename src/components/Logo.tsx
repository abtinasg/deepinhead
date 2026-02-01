import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'icon' | 'text' | 'full';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

export function Logo({ 
  variant = 'text', 
  size = 'md', 
  className = '', 
  href = '/' 
}: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-6 h-6',
      text: 'text-base',
      container: 'gap-2'
    },
    md: {
      icon: 'w-8 h-8',
      text: 'text-lg',
      container: 'gap-2.5'
    },
    lg: {
      icon: 'w-10 h-10',
      text: 'text-xl',
      container: 'gap-3'
    }
  };

  const logoContent = (
    <div className={`flex items-center ${sizeClasses[size].container} ${className}`}>
      {(variant === 'icon' || variant === 'full') && (
        <div className={`${sizeClasses[size].icon} relative flex-shrink-0`}>
          <Image
            src="/icons/icon-96x96.png"
            alt="Deepin"
            width={96}
            height={96}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      )}
      {(variant === 'text' || variant === 'full') && (
        <span className={`font-medium tracking-tight text-white hover:text-gray-300 transition-colors ${sizeClasses[size].text}`}>
          Deepin
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}