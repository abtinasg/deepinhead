import Link from "next/link";
import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-900/50">
      <div className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto w-full">
        
        {/* Left: Logo */}
        <Link href="/" className="text-lg font-medium tracking-tight text-white">
          Deepin
        </Link>
        
        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
            Products
            <ChevronDown className="w-3 h-3" />
          </button>
          <Link href="#research" className="text-sm text-gray-400 hover:text-white transition-colors">
            Research
          </Link>
          <Link href="#approach" className="text-sm text-gray-400 hover:text-white transition-colors">
            Approach
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            Sign in
          </Link>
          <Link 
            href="#finance" 
            className="group inline-flex items-center gap-2 px-5 py-2 bg-amber-500 rounded-full text-sm font-medium text-black hover:bg-amber-400 transition-colors"
          >
            Open Finance
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
