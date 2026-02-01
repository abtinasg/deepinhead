import React from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-elevation-base">
      
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — Core Brand
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center pt-20 bg-gradient-to-b from-[#050505] to-transparent">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-8">
            The core behind
            <br />
            <span className="text-gray-400">independent</span> products.
          </h1>
          <p className="text-gray-300 text-lg max-w-md leading-relaxed mb-10">
            Deepin builds focused products for finance and research — designed for clarity, rigor, and long-term thinking.
          </p>
          <p className="text-gray-600 text-sm tracking-wide">
            Finance · Research · Identity
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. DEEPIN FINANCE — Primary Product (Dominant)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="finance" className="bg-[#FAFAFA] py-28">
        <div className="max-w-5xl mx-auto px-8">
          
          <p className="text-amber-600 text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
            Primary Product
          </p>
          
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-6 tracking-tight">
            Deepin Finance
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-4 max-w-lg">
            A professional platform for structured financial analysis and long-term investing.
          </p>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-lg">
            Built for individuals and teams who work seriously with financial data. Focused on clarity, structure, and depth.
          </p>

          {/* Product Preview — Company Page Mock */}
          <div className="mb-12 rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <div className="p-6 md:p-8">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Apple Inc.</h3>
                  <p className="text-xs text-gray-400 mt-0.5">NASDAQ: AAPL</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-gray-900">$187.44</p>
                  <p className="text-xs text-emerald-600">+1.24%</p>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Revenue</p>
                  <p className="text-sm font-medium text-gray-900">$383.3B</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Gross Margin</p>
                  <p className="text-sm font-medium text-gray-900">44.1%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Free Cash Flow</p>
                  <p className="text-sm font-medium text-gray-900">$99.6B</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Net Debt</p>
                  <p className="text-sm font-medium text-gray-900">$49.2B</p>
                </div>
              </div>

              {/* Simple Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">Revenue Trend (5Y)</p>
                  <p className="text-[10px] text-gray-400">FY2020 — FY2024</p>
                </div>
                <div className="h-20 flex items-end gap-1">
                  <div className="flex-1 bg-gray-200 rounded-t" style={{ height: '55%' }} />
                  <div className="flex-1 bg-gray-200 rounded-t" style={{ height: '70%' }} />
                  <div className="flex-1 bg-gray-200 rounded-t" style={{ height: '85%' }} />
                  <div className="flex-1 bg-gray-300 rounded-t" style={{ height: '100%' }} />
                  <div className="flex-1 bg-gray-900 rounded-t" style={{ height: '95%' }} />
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-[9px] text-gray-300">2020</p>
                  <p className="text-[9px] text-gray-300">2024</p>
                </div>
              </div>

              {/* Mini Table */}
              <div className="border border-gray-100 rounded-lg overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-2 px-3 font-medium text-gray-500">Metric</th>
                      <th className="text-right py-2 px-3 font-medium text-gray-500">TTM</th>
                      <th className="text-right py-2 px-3 font-medium text-gray-500">5Y Avg</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="py-2 px-3 text-gray-700">ROE</td>
                      <td className="py-2 px-3 text-right text-gray-900">147.3%</td>
                      <td className="py-2 px-3 text-right text-gray-400">103.4%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-gray-700">ROIC</td>
                      <td className="py-2 px-3 text-right text-gray-900">56.2%</td>
                      <td className="py-2 px-3 text-right text-gray-400">42.8%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-gray-700">P/E Ratio</td>
                      <td className="py-2 px-3 text-right text-gray-900">29.4x</td>
                      <td className="py-2 px-3 text-right text-gray-400">25.1x</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div>
              <p className="text-gray-700 text-sm">Fundamental analysis</p>
            </div>
            <div>
              <p className="text-gray-700 text-sm">Institutional metrics</p>
            </div>
            <div>
              <p className="text-gray-700 text-sm">Portfolio tracking</p>
            </div>
            <div>
              <p className="text-gray-700 text-sm">Distraction-free</p>
            </div>
          </div>
          
          <button className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber-500 rounded-full text-sm font-medium text-black hover:bg-amber-400 transition-colors">
            Go to Deepin Finance
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ECOSYSTEM FLOW — How it connects (2-column, compact)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-elevation-1 py-24 border-b border-gray-800/30">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Title + Explanation */}
            <div>
              <p className="text-gray-500 text-[11px] font-medium tracking-[0.2em] uppercase mb-4">
                Ecosystem
              </p>
              <h2 className="text-2xl font-medium text-white mb-4 tracking-tight">
                How it connects
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                One core. One identity. Independent products.
              </p>
            </div>

            {/* Right: Compact Flow Diagram */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="flex items-center gap-4">
                
                {/* Node 1: Core */}
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center mb-2 mx-auto">
                    <div className="w-4 h-4 bg-gray-600 rounded-full" />
                  </div>
                  <p className="text-white text-sm font-medium">Deepin</p>
                  <p className="text-gray-600 text-xs">Core</p>
                </div>

                {/* Connector */}
                <div className="w-8 h-px bg-gray-700" />

                {/* Node 2: ID */}
                <div className="text-center">
                  <div className="w-14 h-14 rounded-lg border border-gray-700 flex items-center justify-center mb-2 mx-auto">
                    <div className="w-4 h-4 bg-gray-600 rounded" />
                  </div>
                  <p className="text-white text-sm font-medium">Deepin ID</p>
                  <p className="text-gray-600 text-xs">Access only</p>
                </div>

                {/* Connector */}
                <div className="w-8 h-px bg-gray-700" />

                {/* Node 3: Products */}
                <div className="text-center">
                  <div className="w-14 h-14 rounded-lg border border-gray-700 flex flex-col items-center justify-center gap-1 mb-2 mx-auto">
                    <div className="w-8 h-2.5 bg-gray-600 rounded-sm" />
                    <div className="w-8 h-2.5 bg-gray-700 rounded-sm" />
                  </div>
                  <p className="text-white text-sm font-medium">Products</p>
                  <p className="text-gray-600 text-xs">Independent</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. DEEPIN RESEARCH — Independent Research (Editorial, Primary)
      ═══════════════════════════════════════════════════════════════ */}
      <section id="research" className="bg-elevation-1 py-28 bg-noise">
        <div className="max-w-5xl mx-auto px-8 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-40 pointer-events-none z-0" aria-hidden="true">
            <div className="w-full h-full rounded-full bg-gradient-radial from-white/10 to-transparent" />
          </div>
          <div className="relative z-10">
            <p className="text-gray-500 text-[11px] font-medium tracking-[0.2em] uppercase mb-5">
              Independent Product
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
              Deepin Research
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-12 max-w-lg">
              Long-form research for teams that value rigor over speed.
            </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
            {/* Left: Editorial copy + CTAs (2 cols) */}
            <div className="lg:col-span-2">
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Methodology-driven. Transparent structure. Free from marketing incentives.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="group inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-gray-500 hover:text-white transition-colors">
                  Explore Research
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button className="group inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  Methodology
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Right: Research Preview Card (3 cols) */}
            <div className="lg:col-span-3 border border-gray-700/40 rounded-xl p-7 bg-elevation-2 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between mb-5">
                <p className="text-gray-500 text-[10px] font-medium tracking-[0.2em] uppercase">
                  Latest
                </p>
                <button className="group inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors">
                  View all
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              
              {/* Featured Paper */}
              <div className="mb-5 pb-5 border-b border-gray-800/60 group cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-medium tracking-wide text-gray-500 bg-gray-800/60 px-2 py-0.5 rounded">Paper</span>
                  <span className="text-gray-700 text-xs">Jan 2026</span>
                </div>
                <p className="text-white text-sm font-medium group-hover:text-gray-300 transition-colors">
                  Structural Analysis in Volatile Markets
                </p>
              </div>
              
              {/* Recent Items */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 group cursor-pointer">
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">On Long-term Portfolio Construction</p>
                  <span className="text-[10px] font-medium tracking-wide text-gray-600 bg-gray-800/40 px-2 py-0.5 rounded flex-shrink-0">Note</span>
                </div>
                <div className="flex items-start justify-between gap-4 group cursor-pointer">
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Clear Assumptions in Financial Modeling</p>
                  <span className="text-[10px] font-medium tracking-wide text-gray-600 bg-gray-800/40 px-2 py-0.5 rounded flex-shrink-0">Method</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          METHODOLOGY & TRUST
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-elevation-base py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-xl relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[400px] h-24 pointer-events-none z-0" aria-hidden="true">
              <div className="w-full h-full rounded-full bg-gradient-radial from-white/10 to-transparent" />
            </div>
            <div className="relative z-10">
              <p className="text-gray-500 text-[11px] font-medium tracking-[0.2em] uppercase mb-3">
                Principles
              </p>
              <h2 className="text-xl font-medium text-white mb-3 tracking-tight">
                Methodology over marketing
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                We prioritize repeatable work, clear assumptions, and long-term reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-200 text-sm">Structured analysis with clear assumptions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-200 text-sm">Research written with rigor and transparent structure</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-200 text-sm">Privacy-first identity with minimal coupling between products</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. HOW WE THINK
      ═══════════════════════════════════════════════════════════════ */}
      <section id="approach" className="bg-elevation-1 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[400px] h-20 pointer-events-none z-0" aria-hidden="true">
                <div className="w-full h-full rounded-full bg-gradient-radial from-white/10 to-transparent" />
              </div>
              <div className="relative z-10">
                <p className="text-gray-500 text-[11px] font-medium tracking-[0.2em] uppercase mb-3">
                  Approach
                </p>
                <h2 className="text-xl font-medium text-white tracking-tight">
                  How we think
                </h2>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                At Deepin, we design products by starting with the problem — not the trend.
              </p>
              <p className="text-gray-200 text-sm leading-relaxed">
                We prioritize clarity over speed, structure over noise, and long-term reliability over short-term gains. Each product is built independently, with a clear scope and purpose.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. AUDIENCE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-elevation-1 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div>
              <p className="text-gray-500 text-[11px] font-medium tracking-[0.2em] uppercase mb-4">
                Built for
              </p>
              <div className="space-y-1.5">
                <p className="text-gray-200 text-sm">Professionals working with financial data</p>
                <p className="text-gray-200 text-sm">Research-driven teams</p>
                <p className="text-gray-200 text-sm">Long-term decision-makers</p>
              </div>
            </div>

            <div>
              <p className="text-gray-700 text-[11px] font-medium tracking-[0.2em] uppercase mb-4">
                Not for
              </p>
              <div className="space-y-1.5">
                <p className="text-gray-600 text-sm">Hype-driven trading</p>
                <p className="text-gray-600 text-sm">Short-term speculation</p>
                <p className="text-gray-600 text-sm">Trend chasing</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. PRINCIPLES (Footer-level)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-elevation-base py-12">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-wrap gap-10 md:gap-16">
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] h-12 pointer-events-none z-0" aria-hidden="true">
                <div className="w-full h-full rounded-full bg-gradient-radial from-white/10 to-transparent" />
              </div>
              <div className="relative z-10">
                <p className="text-gray-300 text-xs mb-0.5">Independence</p>
                <p className="text-gray-400 text-xs">Each product stands alone.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] h-12 pointer-events-none z-0" aria-hidden="true">
                <div className="w-full h-full rounded-full bg-gradient-radial from-white/10 to-transparent" />
              </div>
              <div className="relative z-10">
                <p className="text-gray-300 text-xs mb-0.5">Clarity</p>
                <p className="text-gray-400 text-xs">Clear scope and purpose.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] h-12 pointer-events-none z-0" aria-hidden="true">
                <div className="w-full h-full rounded-full bg-gradient-radial from-white/10 to-transparent" />
              </div>
              <div className="relative z-10">
                <p className="text-gray-300 text-xs mb-0.5">Long-term</p>
                <p className="text-gray-400 text-xs">Designed for sustained use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-elevation-1 py-8 border-t border-gray-800/30">
        <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            © Deepin
          </p>
          <p className="text-gray-600 text-xs">
            Designed for professionals who value clarity.
          </p>
        </div>
      </footer>

    </div>
  );
}
