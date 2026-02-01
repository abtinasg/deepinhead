import React from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-elevation-base bg-noise">
      
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — Strong headline + Two-product CTAs
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-radial-subtle opacity-60" />
        
        <div className="max-w-6xl mx-auto px-8 py-32 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white mb-6 max-w-4xl mx-auto">
            Premium enterprise tools for finance and research
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Two independent products built for clarity, rigor, and long-term thinking.
          </p>
          
          {/* Two CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#finance" 
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-amber-500 rounded-full text-base font-medium text-black hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/30"
            >
              Open Finance
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a 
              href="#research" 
              className="group inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/10 hover:border-white/20 rounded-full text-base font-medium text-white hover:bg-white/5 transition-all"
            >
              Explore Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. PRODUCTS OVERVIEW — Split view Finance/Research
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-elevation-1 border-y border-white/5 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Finance */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative border border-white/10 rounded-2xl p-8 bg-elevation-2/50 backdrop-blur-sm hover:border-amber-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-amber-500 rounded-lg" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                  Deepin Finance
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                  Professional platform for structured financial analysis and long-term investing.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  • Fundamental analysis with institutional-grade metrics
                </p>
                <a 
                  href="#finance" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Research */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative border border-white/10 rounded-2xl p-8 bg-elevation-2/50 backdrop-blur-sm hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-blue-500 rounded-lg" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                  Deepin Research
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                  Long-form research for teams that value rigor over speed.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  • Methodology-driven with transparent structure
                </p>
                <a 
                  href="#research" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. DEEPIN FINANCE — Left text + Right preview with 4 capabilities
      ═══════════════════════════════════════════════════════════════ */}
      <section id="finance" className="bg-elevation-base py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Text content */}
            <div>
              <p className="text-amber-500 text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
                Deepin Finance
              </p>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
                Professional financial analysis platform
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Built for individuals and teams who work seriously with financial data. Focused on clarity, structure, and depth.
              </p>

              {/* 4 Capabilities as compact pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Fundamental analysis
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Institutional metrics
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Portfolio tracking
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Distraction-free
                </span>
              </div>
              
              <a 
                href="#finance" 
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber-500 rounded-full text-sm font-medium text-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
              >
                Go to Deepin Finance
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: Product Preview Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-radial opacity-30" />
              <div className="relative border border-white/10 rounded-2xl p-6 bg-elevation-2 shadow-2xl shadow-black/40">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Apple Inc.</h3>
                    <p className="text-xs text-gray-500 mt-0.5">NASDAQ: AAPL</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-white">$187.44</p>
                    <p className="text-xs text-emerald-400">+1.24%</p>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Revenue</p>
                    <p className="text-sm font-medium text-white">$383.3B</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Gross Margin</p>
                    <p className="text-sm font-medium text-white">44.1%</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Free Cash Flow</p>
                    <p className="text-sm font-medium text-white">$99.6B</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Net Debt</p>
                    <p className="text-sm font-medium text-white">$49.2B</p>
                  </div>
                </div>

                {/* Simple Chart */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide">Revenue Trend (5Y)</p>
                    <p className="text-[10px] text-gray-600">FY2020 — FY2024</p>
                  </div>
                  <div className="h-20 flex items-end gap-1">
                    <div className="flex-1 bg-white/10 rounded-t" style={{ height: '55%' }} />
                    <div className="flex-1 bg-white/10 rounded-t" style={{ height: '70%' }} />
                    <div className="flex-1 bg-white/15 rounded-t" style={{ height: '85%' }} />
                    <div className="flex-1 bg-white/20 rounded-t" style={{ height: '100%' }} />
                    <div className="flex-1 bg-amber-500/60 rounded-t" style={{ height: '95%' }} />
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-[9px] text-gray-600">2020</p>
                    <p className="text-[9px] text-gray-600">2024</p>
                  </div>
                </div>

                {/* Mini Table */}
                <div className="border border-white/5 rounded-lg overflow-hidden bg-white/[0.02]">
                  <table className="w-full text-xs">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="text-left py-2 px-3 font-medium text-gray-500">Metric</th>
                        <th className="text-right py-2 px-3 font-medium text-gray-500">TTM</th>
                        <th className="text-right py-2 px-3 font-medium text-gray-500">5Y Avg</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2 px-3 text-gray-400">ROE</td>
                        <td className="py-2 px-3 text-right text-white">147.3%</td>
                        <td className="py-2 px-3 text-right text-gray-500">103.4%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-gray-400">ROIC</td>
                        <td className="py-2 px-3 text-right text-white">56.2%</td>
                        <td className="py-2 px-3 text-right text-gray-500">42.8%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-gray-400">P/E Ratio</td>
                        <td className="py-2 px-3 text-right text-white">29.4x</td>
                        <td className="py-2 px-3 text-right text-gray-500">25.1x</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. BRIDGE/ECOSYSTEM — How it connects (Minimal diagram)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-elevation-1 py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Title + Explanation */}
            <div>
              <p className="text-gray-500 text-[11px] font-medium tracking-[0.2em] uppercase mb-4">
                How it connects
              </p>
              <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">
                One core. One identity. Independent products.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Deepin provides the foundation. Deepin ID handles access. Each product operates independently with clear purpose and scope.
              </p>
            </div>

            {/* Right: Minimal Flow Diagram */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="flex items-center gap-6">
                
                {/* Node 1: Core */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl border-2 border-white/10 bg-white/5 flex items-center justify-center mb-3 mx-auto backdrop-blur-sm">
                    <div className="w-5 h-5 bg-white/30 rounded-lg" />
                  </div>
                  <p className="text-white text-sm font-medium mb-0.5">Deepin</p>
                  <p className="text-gray-600 text-xs">Core</p>
                </div>

                {/* Connector */}
                <div className="w-10 h-px bg-gradient-to-r from-white/10 to-white/20" />

                {/* Node 2: ID */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl border-2 border-white/10 bg-white/5 flex items-center justify-center mb-3 mx-auto backdrop-blur-sm">
                    <div className="w-5 h-5 border-2 border-white/30 rounded-lg" />
                  </div>
                  <p className="text-white text-sm font-medium mb-0.5">Deepin ID</p>
                  <p className="text-gray-600 text-xs">Access</p>
                </div>

                {/* Connector */}
                <div className="w-10 h-px bg-gradient-to-r from-white/20 to-white/30" />

                {/* Node 3: Products */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl border-2 border-white/20 bg-white/5 flex flex-col items-center justify-center gap-1.5 mb-3 mx-auto backdrop-blur-sm">
                    <div className="w-10 h-2 bg-gradient-to-r from-amber-500/60 to-amber-500/40 rounded-sm" />
                    <div className="w-10 h-2 bg-gradient-to-r from-blue-500/60 to-blue-500/40 rounded-sm" />
                  </div>
                  <p className="text-white text-sm font-medium mb-0.5">Products</p>
                  <p className="text-gray-600 text-xs">Independent</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. DEEPIN RESEARCH — Latest widget + 4 focus areas
      ═══════════════════════════════════════════════════════════════ */}
      <section id="research" className="bg-elevation-base py-28 bg-noise border-y border-white/5">
        <div className="max-w-6xl mx-auto px-8 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-40 pointer-events-none z-0" aria-hidden="true">
            <div className="w-full h-full bg-gradient-radial opacity-40" />
          </div>
          <div className="relative z-10">
            <p className="text-blue-400 text-[11px] font-medium tracking-[0.2em] uppercase mb-5">
              Deepin Research
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
              Long-form research for serious teams
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-16 max-w-2xl">
              Methodology-driven research with transparent structure. Free from marketing incentives.
            </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left: Latest widget (3 cols) */}
            <div className="lg:col-span-3 border border-white/10 rounded-2xl p-8 bg-elevation-2 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-xs font-medium tracking-[0.2em] uppercase">
                  Latest
                </p>
                <a href="#all" className="group inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors">
                  View all
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
              
              {/* Featured Paper */}
              <div className="mb-6 pb-6 border-b border-white/10 group cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-medium tracking-wide text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">Paper</span>
                  <span className="text-gray-600 text-xs">Jan 2026</span>
                </div>
                <p className="text-white text-base font-medium group-hover:text-gray-300 transition-colors mb-1">
                  Structural Analysis in Volatile Markets
                </p>
                <p className="text-gray-500 text-sm">
                  A framework for long-term decision-making in uncertain environments.
                </p>
              </div>
              
              {/* Recent Items */}
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4 group cursor-pointer">
                  <div>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors mb-0.5">On Long-term Portfolio Construction</p>
                    <p className="text-gray-600 text-xs">Dec 2025</p>
                  </div>
                  <span className="text-[10px] font-medium tracking-wide text-gray-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full flex-shrink-0">Note</span>
                </div>
                <div className="flex items-start justify-between gap-4 group cursor-pointer">
                  <div>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors mb-0.5">Clear Assumptions in Financial Modeling</p>
                    <p className="text-gray-600 text-xs">Nov 2025</p>
                  </div>
                  <span className="text-[10px] font-medium tracking-wide text-gray-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full flex-shrink-0">Method</span>
                </div>
              </div>
            </div>

            {/* Right: 4 Focus Areas + CTAs (2 cols) */}
            <div className="lg:col-span-2">
              <p className="text-gray-500 text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Focus Areas
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-gray-300 text-sm">• Market structure analysis</p>
                <p className="text-gray-300 text-sm">• Long-term investment frameworks</p>
                <p className="text-gray-300 text-sm">• Financial modeling methods</p>
                <p className="text-gray-300 text-sm">• Risk assessment approaches</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="#research" 
                  className="group inline-flex items-center gap-2 px-5 py-3 border border-white/20 hover:border-white/30 rounded-full text-sm font-medium text-white hover:bg-white/5 transition-all"
                >
                  Explore Research
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a 
                  href="#methodology" 
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors px-5 py-3"
                >
                  Methodology
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. PRINCIPLES/APPROACH — 3-column grid
      ═══════════════════════════════════════════════════════════════ */}
      <section id="approach" className="bg-elevation-1 py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-gray-500 text-[11px] font-medium tracking-[0.2em] uppercase mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-16">
            How we build
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                Clarity over complexity
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Clear scope, transparent structure, and straightforward communication.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                Depth over speed
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Structured analysis, rigorous methodology, and long-term reliability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                Independence by design
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Each product operates independently with minimal coupling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. FOOTER — Simple enterprise footer
      ═══════════════════════════════════════════════════════════════ */}
      <footer className="bg-elevation-1 border-t border-white/5 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand */}
            <div>
              <p className="text-lg font-medium text-white mb-2">Deepin</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Premium enterprise tools for finance and research.
              </p>
            </div>

            {/* Column 2: Products */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Products</p>
              <div className="space-y-2">
                <a href="#finance" className="block text-sm text-gray-400 hover:text-white transition-colors">Deepin Finance</a>
                <a href="#research" className="block text-sm text-gray-400 hover:text-white transition-colors">Deepin Research</a>
              </div>
            </div>

            {/* Column 3: Company */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Company</p>
              <div className="space-y-2">
                <a href="#approach" className="block text-sm text-gray-400 hover:text-white transition-colors">Approach</a>
                <a href="#about" className="block text-sm text-gray-400 hover:text-white transition-colors">About</a>
              </div>
            </div>

            {/* Column 4: Resources */}
            <div id="resources">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Resources</p>
              <div className="space-y-2">
                <a href="#docs" className="block text-sm text-gray-400 hover:text-white transition-colors">Documentation</a>
                <a href="#support" className="block text-sm text-gray-400 hover:text-white transition-colors">Support</a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Deepin. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy</a>
              <a href="#terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
