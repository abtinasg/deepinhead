"use client";

import Link from "next/link";
import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [productsOpen, setProductsOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-elevation-1/90 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
        
        {/* Left: Logo */}
        <Logo variant="text" size="md" />
        
        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button 
              onClick={() => setProductsOpen(!productsOpen)}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Products
              <ChevronDown className="w-3 h-3" />
            </button>
            {productsOpen && (
              <div 
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 bg-elevation-2 border border-white/10 rounded-lg shadow-2xl overflow-hidden"
              >
                <Link 
                  href="#finance" 
                  className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <div className="font-medium">Deepin Finance</div>
                  <div className="text-xs text-gray-500 mt-0.5">Financial analysis</div>
                </Link>
                <Link 
                  href="#research" 
                  className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors border-t border-white/5"
                >
                  <div className="font-medium">Deepin Research</div>
                  <div className="text-xs text-gray-500 mt-0.5">Long-form research</div>
                </Link>
              </div>
            )}
          </div>
          <Link href="#research" className="text-sm text-gray-400 hover:text-white transition-colors">
            Research
          </Link>
          <Link href="#approach" className="text-sm text-gray-400 hover:text-white transition-colors">
            Approach
          </Link>
          <Link href="#resources" className="text-sm text-gray-400 hover:text-white transition-colors">
            Resources
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <Link href="#signin" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            Sign in
          </Link>
          <Link 
            href="#finance" 
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 rounded-full text-sm font-medium text-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
          >
            Open Finance
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
