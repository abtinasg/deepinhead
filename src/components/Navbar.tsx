"use client";

import Link from "next/link";
import React from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#0B0F14]/95 backdrop-blur-xl border-b border-white/[0.06]" 
        : "bg-transparent"
    }`}>
      <div className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-[1280px] mx-auto w-full">
        
        {/* Left: Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-[#F9FAFB] hover:text-white transition-colors">
          Deepin
        </Link>
        
        {/* Center: Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative">
            <button 
              onClick={() => setProductsOpen(!productsOpen)}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              className="flex items-center gap-1.5 text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors"
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div 
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="absolute top-full left-0 mt-3 w-56 glass-card rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
              >
                <Link 
                  href="#finance" 
                  className="block px-4 py-3.5 text-sm text-[#E5E7EB] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
                      <div className="w-3.5 h-3.5 bg-[#F59E0B] rounded" />
                    </div>
                    <div>
                      <div className="font-medium text-[#F9FAFB]">Deepin Finance</div>
                      <div className="text-xs text-[#64748B] mt-0.5">Professional financial analysis</div>
                    </div>
                  </div>
                </Link>
                <div className="h-px bg-white/[0.06]" />
                <Link 
                  href="#research" 
                  className="block px-4 py-3.5 text-sm text-[#E5E7EB] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center">
                      <div className="w-3.5 h-3.5 bg-[#60A5FA] rounded" />
                    </div>
                    <div>
                      <div className="font-medium text-[#F9FAFB]">Deepin Research</div>
                      <div className="text-xs text-[#64748B] mt-0.5">Long-form methodology-driven</div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <Link href="#research" className="text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">
            Research
          </Link>
          <Link href="#approach" className="text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">
            Approach
          </Link>
          <Link href="#resources" className="text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">
            Resources
          </Link>
        </div>

        {/* Right: Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="#signin" className="text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">
            Sign in
          </Link>
          <Link 
            href="#finance" 
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#F59E0B] rounded-full text-sm font-medium text-[#0B0F14] hover:bg-[#FBBF24] transition-all shadow-lg shadow-[#F59E0B]/20 hover:shadow-[#F59E0B]/30"
          >
            Open Finance
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#94A3B8] hover:text-[#E5E7EB] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-white/[0.06]">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="#finance" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[15px] text-[#E5E7EB] hover:text-white transition-colors"
            >
              Deepin Finance
            </Link>
            <Link 
              href="#research" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[15px] text-[#E5E7EB] hover:text-white transition-colors"
            >
              Deepin Research
            </Link>
            <div className="h-px bg-white/[0.06]" />
            <Link 
              href="#research" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors"
            >
              Research
            </Link>
            <Link 
              href="#approach" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors"
            >
              Approach
            </Link>
            <Link 
              href="#resources" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors"
            >
              Resources
            </Link>
            <div className="h-px bg-white/[0.06]" />
            <Link 
              href="#signin" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[15px] text-[#94A3B8] hover:text-[#E5E7EB] transition-colors"
            >
              Sign in
            </Link>
            <Link 
              href="#finance" 
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F59E0B] rounded-full text-sm font-medium text-[#0B0F14]"
            >
              Open Finance
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
