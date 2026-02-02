import React from "react";
import { FileText, BookOpen, TrendingUp } from "lucide-react";

export function ResearchSection() {
  return (
    <section id="research" className="relative py-40 overflow-hidden bg-elevation-base bg-noise">
      <div className="absolute inset-0 bg-gradient-radial-subtle opacity-50" />
      
      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Visual showcase */}
          <div className="relative order-2 lg:order-1">
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white">Latest Research</p>
                  <p className="text-[11px] text-gray-500">Updated weekly</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2.5 py-1 rounded-full font-medium">Paper</span>
                    <span className="text-[11px] text-gray-500">Jan 28, 2026</span>
                  </div>
                  <h3 className="text-[17px] font-semibold text-white mb-3 leading-tight">
                    Structural Analysis in Volatile Markets
                  </h3>
                  <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
                    A methodical approach to understanding market behavior through fundamental structure rather than short-term noise.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-600 bg-white/5 px-2 py-1 rounded-full">Methodology</span>
                    <span className="text-[11px] text-gray-600 bg-white/5 px-2 py-1 rounded-full">Markets</span>
                  </div>
                </div>
                
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[10px] text-gray-500 bg-white/5 px-2.5 py-1 rounded-full font-medium">Framework</span>
                    <span className="text-[11px] text-gray-500">Jan 15, 2026</span>
                  </div>
                  <h3 className="text-[17px] font-medium text-gray-300 mb-3 leading-tight">
                    Portfolio Construction for Long-Term Investors
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-4">
                    Building resilient portfolios through clear assumptions and transparent decision frameworks.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-600 bg-white/5 px-2 py-1 rounded-full">Portfolio</span>
                    <span className="text-[11px] text-gray-600 bg-white/5 px-2 py-1 rounded-full">Strategy</span>
                  </div>
                </div>
                
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[10px] text-gray-500 bg-white/5 px-2.5 py-1 rounded-full font-medium">Note</span>
                    <span className="text-[11px] text-gray-500">Dec 20, 2025</span>
                  </div>
                  <h3 className="text-[17px] font-medium text-gray-300 mb-3 leading-tight">
                    Clear Assumptions in Financial Modeling
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">
                    Why transparency in assumptions matters more than precision in outputs.
                  </p>
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-[14px] font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                View all research
                <span>→</span>
              </a>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span className="text-[13px] font-medium text-blue-400">Deepin Research</span>
              </div>
            </div>
            
            <h2 className="text-[56px] md:text-[64px] font-semibold leading-[1.05] tracking-tight text-white mb-6">
              Research that values depth over speed
            </h2>
            
            <p className="text-[18px] text-gray-400 leading-relaxed mb-8">
              Long-form investment research platform for teams that prioritize methodology and clear thinking. We publish frameworks, market analysis, and investment methodology—not hot takes.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white mb-2">Methodology-driven</h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed">
                    Every piece of research starts with clear assumptions and transparent reasoning, not conclusions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white mb-2">Market structure focus</h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed">
                    Understanding how markets work structurally, rather than chasing daily narratives or predictions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white mb-2">Independent perspective</h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed">
                    No sell-side bias, no marketing language. Just clear analysis for serious investors.
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-blue-500 rounded-full text-[15px] font-medium text-white hover:bg-blue-400 transition-all shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Explore Research
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
