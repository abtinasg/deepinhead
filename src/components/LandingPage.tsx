import React from "react";
import { ArrowRight, TrendingUp, FileText, Shield, Lock, Users } from "lucide-react";

export function LandingPage() {
  return (
    <div className="bg-elevation-base bg-noise">
      
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — Headline + CTAs + Product Preview + Proof Points
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-hero opacity-70" />
        
        <div className="max-w-[1280px] mx-auto px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left: Content */}
            <div>
              <h1 className="text-[64px] md:text-[72px] lg:text-[80px] font-semibold leading-[1.05] tracking-tight text-white mb-6">
                Premium enterprise tools for finance and research
              </h1>
              <p className="text-[20px] text-gray-400 leading-relaxed mb-12 max-w-xl">
                Two <em className="italic font-normal">independent</em> products built for clarity, rigor, and long-term thinking.
              </p>
              
              {/* Two CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
                <a 
                  href="#finance" 
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-amber-500 rounded-full text-[15px] font-medium text-black hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/30"
                >
                  Open Finance
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a 
                  href="#research" 
                  className="group inline-flex items-center gap-2.5 px-8 py-4 border border-white/10 hover:border-white/20 rounded-full text-[15px] font-medium text-white hover:bg-white/5 transition-all"
                >
                  Explore Research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Proof Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-white mb-1">Institutional-grade</p>
                    <p className="text-[13px] text-gray-500">Financial metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-white mb-1">Long-form research</p>
                    <p className="text-[13px] text-gray-500">Methodology-driven</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-white mb-1">Privacy-first</p>
                    <p className="text-[13px] text-gray-500">No data selling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product Preview Split View */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-radial-subtle opacity-50" />
              <div className="relative space-y-4">
                
                {/* Finance Preview */}
                <div className="glass-card rounded-2xl p-6 group hover:border-amber-500/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 uppercase tracking-wider">Deepin Finance</p>
                        <p className="text-[13px] font-medium text-white">Portfolio Dashboard</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">+12.4%</span>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="mb-4">
                    <div className="h-20 flex items-end gap-1">
                      <div className="flex-1 bg-amber-500/20 rounded-t" style={{ height: '45%' }} />
                      <div className="flex-1 bg-amber-500/30 rounded-t" style={{ height: '60%' }} />
                      <div className="flex-1 bg-amber-500/25 rounded-t" style={{ height: '55%' }} />
                      <div className="flex-1 bg-amber-500/40 rounded-t" style={{ height: '75%' }} />
                      <div className="flex-1 bg-amber-500/50 rounded-t" style={{ height: '85%' }} />
                      <div className="flex-1 bg-amber-500/60 rounded-t" style={{ height: '100%' }} />
                      <div className="flex-1 bg-amber-500/55 rounded-t" style={{ height: '95%' }} />
                      <div className="flex-1 bg-amber-500/70 rounded-t" style={{ height: '90%' }} />
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
                      <p className="text-[10px] text-gray-500 mb-1">P/E Ratio</p>
                      <p className="text-[13px] font-medium text-white">24.3x</p>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
                      <p className="text-[10px] text-gray-500 mb-1">ROE</p>
                      <p className="text-[13px] font-medium text-white">32.1%</p>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5">
                      <p className="text-[10px] text-gray-500 mb-1">FCF Yield</p>
                      <p className="text-[13px] font-medium text-white">4.8%</p>
                    </div>
                  </div>
                </div>

                {/* Research Preview */}
                <div className="glass-card rounded-2xl p-6 group hover:border-blue-400/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider">Deepin Research</p>
                      <p className="text-[13px] font-medium text-white">Latest Publications</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/5">
                      <div>
                        <p className="text-[13px] font-medium text-white mb-1 line-clamp-1">Structural Analysis in Volatile Markets</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">Paper</span>
                          <span className="text-[10px] text-gray-600">Jan 2026</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/5">
                      <div>
                        <p className="text-[13px] text-gray-300 mb-1 line-clamp-1">Portfolio Construction Framework</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">Note</span>
                          <span className="text-[10px] text-gray-600">Dec 2025</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[13px] text-gray-300 mb-1 line-clamp-1">Clear Assumptions in Modeling</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">Method</span>
                          <span className="text-[10px] text-gray-600">Nov 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. PRODUCTS OVERVIEW — Two Product Cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 section-separator">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-20">
            <p className="text-[11px] text-gray-500 font-medium tracking-[0.2em] uppercase mb-4">
              Our Products
            </p>
            <h2 className="text-[48px] font-semibold text-white tracking-tight leading-tight">
              Two independent platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Finance Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-radial-finance opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card rounded-3xl p-10 hover:border-amber-500/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-8">
                  <TrendingUp className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-[32px] font-semibold text-white mb-4 tracking-tight">
                  Deepin Finance
                </h3>
                <p className="text-[16px] text-gray-400 leading-relaxed mb-6">
                  Professional platform for structured financial analysis and long-term investing.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="text-[15px] text-gray-500 flex items-start">
                    <span className="mr-3">•</span>
                    <span>Fundamental analysis with institutional-grade metrics</span>
                  </li>
                  <li className="text-[15px] text-gray-500 flex items-start">
                    <span className="mr-3">•</span>
                    <span>Portfolio tracking and position management</span>
                  </li>
                  <li className="text-[15px] text-gray-500 flex items-start">
                    <span className="mr-3">•</span>
                    <span>Distraction-free, data-focused interface</span>
                  </li>
                </ul>
                <a 
                  href="#finance" 
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-amber-500 hover:text-amber-400 transition-colors group/link"
                >
                  Learn more about Finance
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Research Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-radial-research opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card rounded-3xl p-10 hover:border-blue-400/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-[32px] font-semibold text-white mb-4 tracking-tight">
                  Deepin Research
                </h3>
                <p className="text-[16px] text-gray-400 leading-relaxed mb-6">
                  Long-form research for teams that value rigor over speed.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="text-[15px] text-gray-500 flex items-start">
                    <span className="mr-3">•</span>
                    <span>Methodology-driven with transparent structure</span>
                  </li>
                  <li className="text-[15px] text-gray-500 flex items-start">
                    <span className="mr-3">•</span>
                    <span>Market structure and investment frameworks</span>
                  </li>
                  <li className="text-[15px] text-gray-500 flex items-start">
                    <span className="mr-3">•</span>
                    <span>Independent analysis, free from marketing bias</span>
                  </li>
                </ul>
                <a 
                  href="#research" 
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  Learn more about Research
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Continued in next part... */}
    </div>
  );
}
