import React from "react";
import { ArrowRight, TrendingUp, FileText, Lock, Shield, Clock, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <div className="bg-[#0B0F14] bg-noise">
      
      {/* HERO — Headline + CTAs + Product Preview + Proof Points */}
      <section className="relative min-h-screen pt-20 overflow-hidden">
        {/* Subtle radial gradient backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(96,165,250,0.04),transparent)]" />
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            
            {/* Left: Content */}
            <div className="pt-8 lg:pt-16">
              <h1 className="text-display text-[#F9FAFB] mb-6 max-w-xl">
                Build <em className="not-italic font-medium text-[#F59E0B]">independent</em> clarity in finance and research
              </h1>
              <p className="text-subhead text-[#94A3B8] max-w-lg leading-relaxed mb-10">
                Two premium products built for teams that value rigor over speed. Methodology-driven. Long-term by design.
              </p>
              
              {/* Two CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <a 
                  href="#finance" 
                  className="group inline-flex items-center gap-2.5 px-7 py-4 bg-[#F59E0B] rounded-full text-[15px] font-medium text-[#0B0F14] hover:bg-[#FBBF24] transition-all shadow-xl shadow-[#F59E0B]/20 hover:shadow-2xl hover:shadow-[#F59E0B]/30"
                >
                  Open Finance
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a 
                  href="#research" 
                  className="group inline-flex items-center gap-2.5 px-7 py-4 border border-white/10 hover:border-white/20 rounded-full text-[15px] font-medium text-[#E5E7EB] hover:bg-white/[0.03] transition-all"
                >
                  Explore Research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* 3 Proof Points */}
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[#94A3B8]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#E5E7EB]">Enterprise-grade</p>
                    <p className="text-xs text-[#64748B]">Security &amp; privacy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#94A3B8]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#E5E7EB]">Long-term focus</p>
                    <p className="text-xs text-[#64748B]">Built to last</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-[#94A3B8]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#E5E7EB]">Methodology first</p>
                    <p className="text-xs text-[#64748B]">Rigorous approach</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product Preview Module */}
            <div className="relative">
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_60%)]" />
              
              {/* Split Preview Container */}
              <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                
                {/* Tab Switcher */}
                <div className="flex border-b border-white/[0.06]">
                  <div className="flex-1 px-5 py-3.5 bg-[#F59E0B]/5 border-b-2 border-[#F59E0B]">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span className="text-xs font-medium text-[#F59E0B]">Finance</span>
                    </div>
                  </div>
                  <div className="flex-1 px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-[#64748B]" />
                      <span className="text-xs font-medium text-[#64748B]">Research</span>
                    </div>
                  </div>
                </div>

                {/* Finance Preview */}
                <div className="p-5">
                  {/* Header with stock info */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-[#F9FAFB]">AAPL</p>
                      <p className="text-[11px] text-[#64748B]">Apple Inc.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#F9FAFB]">$187.44</p>
                      <p className="text-[11px] text-emerald-400">+1.24%</p>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="h-16 flex items-end gap-1 mb-4">
                    {[45, 52, 48, 61, 55, 72, 68, 78, 74, 82, 79, 85].map((h, i) => (
                      <div 
                        key={i}
                        className="flex-1 bg-[#F59E0B]/20 rounded-t transition-all hover:bg-[#F59E0B]/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5">
                      <p className="text-[10px] text-[#64748B] mb-1">Revenue</p>
                      <p className="text-xs font-medium text-[#E5E7EB]">$383.3B</p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5">
                      <p className="text-[10px] text-[#64748B] mb-1">Margin</p>
                      <p className="text-xs font-medium text-[#E5E7EB]">44.1%</p>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5">
                      <p className="text-[10px] text-[#64748B] mb-1">FCF</p>
                      <p className="text-xs font-medium text-[#E5E7EB]">$99.6B</p>
                    </div>
                  </div>

                  {/* Watchlist Preview */}
                  <div className="border border-white/[0.04] rounded-lg overflow-hidden">
                    <div className="px-3 py-2 bg-white/[0.02] border-b border-white/[0.04]">
                      <p className="text-[10px] font-medium text-[#64748B] uppercase tracking-wide">Watchlist</p>
                    </div>
                    <div className="divide-y divide-white/[0.04]">
                      <div className="flex items-center justify-between px-3 py-2">
                        <span className="text-[11px] font-medium text-[#E5E7EB]">MSFT</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-[#94A3B8]">$378.91</span>
                          <span className="text-[11px] text-emerald-400">+0.82%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2">
                        <span className="text-[11px] font-medium text-[#E5E7EB]">GOOGL</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-[#94A3B8]">$141.80</span>
                          <span className="text-[11px] text-red-400">-0.31%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2">
                        <span className="text-[11px] font-medium text-[#E5E7EB]">AMZN</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-[#94A3B8]">$178.25</span>
                          <span className="text-[11px] text-emerald-400">+1.15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Research Preview (overlay/offset card) */}
              <div className="absolute -bottom-8 -right-4 w-56 glass-card rounded-xl p-4 shadow-2xl shadow-black/40 border-[#60A5FA]/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-[#60A5FA]/10 flex items-center justify-center">
                    <FileText className="w-3 h-3 text-[#60A5FA]" />
                  </div>
                  <span className="text-[10px] font-medium text-[#64748B] uppercase tracking-wide">Latest</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="px-1.5 py-0.5 bg-[#60A5FA]/10 text-[#60A5FA] text-[9px] font-medium rounded">Paper</span>
                    <p className="text-[11px] text-[#E5E7EB] leading-tight">Structural Analysis in Volatile Markets</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="px-1.5 py-0.5 bg-white/[0.05] text-[#64748B] text-[9px] font-medium rounded">Note</span>
                    <p className="text-[11px] text-[#94A3B8] leading-tight">Portfolio Construction</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F14] to-transparent" />
      </section>

      {/* PRODUCTS OVERVIEW — Two glassy cards with differentiation */}
      <section className="bg-[#111827] section-padding border-y border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#64748B] mb-4">
              Our Products
            </p>
            <h2 className="text-headline text-[#F9FAFB] mb-4">
              Two products. One standard.
            </h2>
            <p className="text-subhead text-[#94A3B8] max-w-2xl mx-auto">
              Each operates independently with clear purpose. Built for professionals who value substance over noise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Finance Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.04),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative glass-card rounded-2xl p-8 lg:p-10 hover:border-[#F59E0B]/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <span className="px-3 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] text-[11px] font-medium rounded-full uppercase tracking-wide">
                    Finance
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#F9FAFB] mb-3 tracking-tight">
                  Deepin Finance
                </h3>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-6">
                  Professional platform for structured financial analysis and long-term investing. Institutional-grade metrics without the noise.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-sm text-[#64748B] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                    Fundamental analysis with deep metrics
                  </p>
                  <p className="text-sm text-[#64748B] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                    Portfolio tracking and watchlists
                  </p>
                  <p className="text-sm text-[#64748B] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                    Distraction-free interface
                  </p>
                </div>
                <a 
                  href="#finance" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#F59E0B] hover:text-[#FBBF24] transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Research Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.04),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative glass-card rounded-2xl p-8 lg:p-10 hover:border-[#60A5FA]/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#60A5FA]" />
                  </div>
                  <span className="px-3 py-1.5 bg-[#60A5FA]/10 text-[#60A5FA] text-[11px] font-medium rounded-full uppercase tracking-wide">
                    Research
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#F9FAFB] mb-3 tracking-tight">
                  Deepin Research
                </h3>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-6">
                  Long-form research for teams that value rigor over speed. Methodology-driven with transparent structure.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-sm text-[#64748B] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#60A5FA]" />
                    Structured research papers and notes
                  </p>
                  <p className="text-sm text-[#64748B] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#60A5FA]" />
                    Clear methodology documentation
                  </p>
                  <p className="text-sm text-[#64748B] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#60A5FA]" />
                    Free from marketing incentives
                  </p>
                </div>
                <a 
                  href="#research" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#60A5FA] hover:text-[#93C5FD] transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEEPIN FINANCE — Light surface for contrast */}
      <section id="finance" className="bg-[#F8FAFC] section-padding">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Text content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F59E0B]">
                  Deepin Finance
                </span>
              </div>
              
              <h2 className="text-headline text-[#0F172A] mb-6">
                Professional financial analysis platform
              </h2>
              
              <p className="text-subhead text-[#64748B] leading-relaxed mb-8">
                Built for individuals and teams who work seriously with financial data. Focused on clarity, structure, and depth—without the distractions.
              </p>

              {/* Capabilities */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="px-4 py-3 bg-[#0F172A]/[0.03] border border-[#0F172A]/[0.06] rounded-xl">
                  <p className="text-sm text-[#334155]">Fundamental analysis</p>
                </div>
                <div className="px-4 py-3 bg-[#0F172A]/[0.03] border border-[#0F172A]/[0.06] rounded-xl">
                  <p className="text-sm text-[#334155]">Institutional metrics</p>
                </div>
                <div className="px-4 py-3 bg-[#0F172A]/[0.03] border border-[#0F172A]/[0.06] rounded-xl">
                  <p className="text-sm text-[#334155]">Portfolio tracking</p>
                </div>
                <div className="px-4 py-3 bg-[#0F172A]/[0.03] border border-[#0F172A]/[0.06] rounded-xl">
                  <p className="text-sm text-[#334155]">Distraction-free UI</p>
                </div>
              </div>
              
              <a 
                href="#finance" 
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#F59E0B] rounded-full text-sm font-medium text-[#0B0F14] hover:bg-[#FBBF24] transition-all shadow-lg shadow-[#F59E0B]/20"
              >
                Go to Deepin Finance
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: Product Preview Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08),transparent_70%)]" />
              <div className="relative border border-[#E2E8F0] rounded-2xl p-6 bg-white shadow-2xl shadow-black/[0.08]">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2E8F0]">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">Apple Inc.</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">NASDAQ: AAPL</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-[#0F172A]">$187.44</p>
                    <p className="text-xs text-emerald-600">+1.24%</p>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3">
                    <p className="text-[10px] text-[#64748B] uppercase tracking-wide mb-1">Revenue</p>
                    <p className="text-sm font-medium text-[#0F172A]">$383.3B</p>
                  </div>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3">
                    <p className="text-[10px] text-[#64748B] uppercase tracking-wide mb-1">Gross Margin</p>
                    <p className="text-sm font-medium text-[#0F172A]">44.1%</p>
                  </div>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3">
                    <p className="text-[10px] text-[#64748B] uppercase tracking-wide mb-1">Free Cash Flow</p>
                    <p className="text-sm font-medium text-[#0F172A]">$99.6B</p>
                  </div>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3">
                    <p className="text-[10px] text-[#64748B] uppercase tracking-wide mb-1">Net Debt</p>
                    <p className="text-sm font-medium text-[#0F172A]">$49.2B</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] text-[#64748B] uppercase tracking-wide">Revenue Trend (5Y)</p>
                    <p className="text-[10px] text-[#94A3B8]">FY2020 — FY2024</p>
                  </div>
                  <div className="h-20 flex items-end gap-1.5">
                    <div className="flex-1 rounded-t bg-[#E2E8F0]" style={{ height: '55%' }} />
                    <div className="flex-1 rounded-t bg-[#E2E8F0]" style={{ height: '70%' }} />
                    <div className="flex-1 rounded-t bg-[#E2E8F0]" style={{ height: '85%' }} />
                    <div className="flex-1 rounded-t bg-[#E2E8F0]" style={{ height: '100%' }} />
                    <div className="flex-1 rounded-t bg-[#F59E0B]" style={{ height: '95%' }} />
                  </div>
                  <div className="flex justify-between mt-1">
                    <p className="text-[9px] text-[#94A3B8]">2020</p>
                    <p className="text-[9px] text-[#94A3B8]">2024</p>
                  </div>
                </div>

                {/* Mini Table */}
                <div className="border border-[#E2E8F0] rounded-lg overflow-hidden">
                  <table className="w-full text-xs">
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="text-left py-2 px-3 font-medium text-[#64748B]">Metric</th>
                        <th className="text-right py-2 px-3 font-medium text-[#64748B]">TTM</th>
                        <th className="text-right py-2 px-3 font-medium text-[#64748B]">5Y Avg</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0]">
                      <tr>
                        <td className="py-2 px-3 text-[#64748B]">ROE</td>
                        <td className="py-2 px-3 text-right text-[#0F172A] font-medium">147.3%</td>
                        <td className="py-2 px-3 text-right text-[#94A3B8]">103.4%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-[#64748B]">ROIC</td>
                        <td className="py-2 px-3 text-right text-[#0F172A] font-medium">56.2%</td>
                        <td className="py-2 px-3 text-right text-[#94A3B8]">42.8%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-[#64748B]">P/E Ratio</td>
                        <td className="py-2 px-3 text-right text-[#0F172A] font-medium">29.4x</td>
                        <td className="py-2 px-3 text-right text-[#94A3B8]">25.1x</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEEPIN RESEARCH — Dark surface with Latest list module */}
      <section id="research" className="bg-[#0B0F14] section-padding bg-noise border-y border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-60 pointer-events-none z-0" aria-hidden="true">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.06),transparent_70%)]" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-[#60A5FA]" />
              </div>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#60A5FA]">
                Deepin Research
              </span>
            </div>
            
            <h2 className="text-headline text-[#F9FAFB] mb-4">
              Long-form research for serious teams
            </h2>
            <p className="text-subhead text-[#94A3B8] leading-relaxed mb-16 max-w-2xl">
              Methodology-driven research with transparent structure. Free from marketing incentives. Built for teams that prioritize depth.
            </p>
          
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            
              {/* Left: Latest widget (3 cols) */}
              <div className="lg:col-span-3 glass-card rounded-2xl p-8 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#64748B] text-xs font-medium tracking-[0.2em] uppercase">
                    Latest Publications
                  </p>
                  <a href="#all" className="group inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors">
                    View all
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              
                {/* Featured Paper */}
                <div className="mb-6 pb-6 border-b border-white/[0.06] group cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-[#60A5FA]/10 text-[#60A5FA] text-[10px] font-medium tracking-wide rounded-full">Paper</span>
                    <span className="text-[#64748B] text-xs">January 2026</span>
                  </div>
                  <p className="text-[#F9FAFB] text-lg font-medium group-hover:text-[#E5E7EB] transition-colors mb-2">
                    Structural Analysis in Volatile Markets
                  </p>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    A comprehensive framework for long-term decision-making in uncertain environments. Covers market structure, risk assessment, and portfolio implications.
                  </p>
                </div>
              
                {/* Recent Items */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 group cursor-pointer p-3 -mx-3 rounded-lg hover:bg-white/[0.02] transition-colors">
                    <div>
                      <p className="text-[#E5E7EB] text-sm font-medium group-hover:text-[#F9FAFB] transition-colors mb-1">On Long-term Portfolio Construction</p>
                      <p className="text-[#64748B] text-xs">December 2025</p>
                    </div>
                    <span className="px-2.5 py-1 bg-white/[0.04] text-[#64748B] text-[10px] font-medium tracking-wide rounded-full flex-shrink-0">Note</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 group cursor-pointer p-3 -mx-3 rounded-lg hover:bg-white/[0.02] transition-colors">
                    <div>
                      <p className="text-[#E5E7EB] text-sm font-medium group-hover:text-[#F9FAFB] transition-colors mb-1">Clear Assumptions in Financial Modeling</p>
                      <p className="text-[#64748B] text-xs">November 2025</p>
                    </div>
                    <span className="px-2.5 py-1 bg-white/[0.04] text-[#64748B] text-[10px] font-medium tracking-wide rounded-full flex-shrink-0">Method</span>
                  </div>
                  <div className="flex items-start justify-between gap-4 group cursor-pointer p-3 -mx-3 rounded-lg hover:bg-white/[0.02] transition-colors">
                    <div>
                      <p className="text-[#E5E7EB] text-sm font-medium group-hover:text-[#F9FAFB] transition-colors mb-1">Risk Assessment Frameworks</p>
                      <p className="text-[#64748B] text-xs">October 2025</p>
                    </div>
                    <span className="px-2.5 py-1 bg-[#60A5FA]/10 text-[#60A5FA] text-[10px] font-medium tracking-wide rounded-full flex-shrink-0">Paper</span>
                  </div>
                </div>
              </div>

              {/* Right: Focus Areas + CTAs (2 cols) */}
              <div className="lg:col-span-2">
                <p className="text-[#64748B] text-xs font-medium tracking-[0.2em] uppercase mb-5">
                  Focus Areas
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                    <p className="text-[#E5E7EB] text-[15px]">Market structure analysis</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                    <p className="text-[#E5E7EB] text-[15px]">Long-term investment frameworks</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                    <p className="text-[#E5E7EB] text-[15px]">Financial modeling methods</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                    <p className="text-[#E5E7EB] text-[15px]">Risk assessment approaches</p>
                  </div>
                </div>
              
                <div className="flex flex-col gap-3">
                  <a 
                    href="#research" 
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/10 hover:border-white/20 rounded-full text-sm font-medium text-[#E5E7EB] hover:bg-white/[0.03] transition-all"
                  >
                    Explore Research
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a 
                    href="#methodology" 
                    className="inline-flex items-center justify-center gap-2 text-sm text-[#64748B] hover:text-[#94A3B8] transition-colors px-6 py-3"
                  >
                    View Methodology
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM — How it connects */}
      <section className="bg-[#111827] section-padding border-y border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Title + Explanation */}
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#64748B] mb-4">
                How it connects
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#F9FAFB] mb-6 tracking-tight leading-tight">
                One core. One identity.<br />Independent products.
              </h2>
              <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-6">
                Deepin provides the foundation and shared principles. Deepin ID handles authentication and access management. Each product operates independently with clear purpose, minimal coupling, and its own roadmap.
              </p>
              <p className="text-[#64748B] text-sm leading-relaxed">
                This architecture ensures that improvements to one product don&apos;t create dependencies on another. You can use Finance, Research, or both—each works on its own terms.
              </p>
            </div>

            {/* Right: Flow Diagram */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                
                {/* Node 1: Core */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-xl" />
                  </div>
                  <p className="text-[#F9FAFB] text-sm font-medium mb-1">Deepin</p>
                  <p className="text-[#64748B] text-xs">Core foundation</p>
                </div>

                {/* Connector */}
                <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
                <div className="lg:hidden h-8 w-px bg-gradient-to-b from-white/10 via-white/20 to-white/10" />

                {/* Node 2: ID */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Lock className="w-6 h-6 text-[#94A3B8]" />
                  </div>
                  <p className="text-[#F9FAFB] text-sm font-medium mb-1">Deepin ID</p>
                  <p className="text-[#64748B] text-xs">Access layer</p>
                </div>

                {/* Connector */}
                <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
                <div className="lg:hidden h-8 w-px bg-gradient-to-b from-white/10 via-white/20 to-white/10" />

                {/* Node 3: Products */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl border border-white/15 bg-white/[0.03] flex flex-col items-center justify-center gap-2 mb-4 mx-auto backdrop-blur-sm">
                    <div className="w-12 h-2.5 bg-gradient-to-r from-[#F59E0B]/60 to-[#F59E0B]/30 rounded-sm" />
                    <div className="w-12 h-2.5 bg-gradient-to-r from-[#60A5FA]/60 to-[#60A5FA]/30 rounded-sm" />
                  </div>
                  <p className="text-[#F9FAFB] text-sm font-medium mb-1">Products</p>
                  <p className="text-[#64748B] text-xs">Independent</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRINCIPLES — How we build */}
      <section id="approach" className="bg-[#0B0F14] section-padding bg-noise border-y border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#64748B] mb-4">
              Our Principles
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#F9FAFB] tracking-tight">
              How we build
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <span className="text-lg font-semibold text-[#94A3B8]">01</span>
              </div>
              <h3 className="text-xl font-semibold text-[#F9FAFB] mb-3 tracking-tight">
                Methodology over marketing
              </h3>
              <p className="text-[#64748B] text-[15px] leading-relaxed">
                We prioritize rigorous methodology and transparent processes over promotional messaging. Substance first.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <span className="text-lg font-semibold text-[#94A3B8]">02</span>
              </div>
              <h3 className="text-xl font-semibold text-[#F9FAFB] mb-3 tracking-tight">
                Clarity over speed
              </h3>
              <p className="text-[#64748B] text-[15px] leading-relaxed">
                Clear scope, transparent structure, and straightforward communication. We take time to get things right.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <span className="text-lg font-semibold text-[#94A3B8]">03</span>
              </div>
              <h3 className="text-xl font-semibold text-[#F9FAFB] mb-3 tracking-tight">
                Long-term by design
              </h3>
              <p className="text-[#64748B] text-[15px] leading-relaxed">
                Built to last, not to chase trends. Each decision considers long-term implications and sustainability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER — Resources, Security, Contact */}
      <footer className="bg-[#111827] border-t border-white/[0.06] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div className="col-span-2 lg:col-span-1">
              <p className="text-lg font-semibold text-[#F9FAFB] mb-3">Deepin</p>
              <p className="text-sm text-[#64748B] leading-relaxed max-w-xs">
                Premium enterprise tools for finance and research. Built for clarity, rigor, and long-term thinking.
              </p>
            </div>

            {/* Column 2: Products */}
            <div>
              <p className="text-xs font-medium text-[#64748B] uppercase tracking-wider mb-4">Products</p>
              <div className="space-y-3">
                <a href="#finance" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">Deepin Finance</a>
                <a href="#research" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">Deepin Research</a>
                <a href="#" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">Deepin ID</a>
              </div>
            </div>

            {/* Column 3: Company */}
            <div>
              <p className="text-xs font-medium text-[#64748B] uppercase tracking-wider mb-4">Company</p>
              <div className="space-y-3">
                <a href="#approach" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">Approach</a>
                <a href="#about" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">About</a>
                <a href="#careers" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">Careers</a>
              </div>
            </div>

            {/* Column 4: Resources */}
            <div id="resources">
              <p className="text-xs font-medium text-[#64748B] uppercase tracking-wider mb-4">Resources</p>
              <div className="space-y-3">
                <a href="#docs" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">Documentation</a>
                <a href="#api" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">API Reference</a>
                <a href="#support" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">Support</a>
              </div>
            </div>

            {/* Column 5: Contact */}
            <div>
              <p className="text-xs font-medium text-[#64748B] uppercase tracking-wider mb-4">Contact</p>
              <div className="space-y-3">
                <a href="mailto:hello@deepin.com" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">hello@deepin.com</a>
                <a href="#press" className="block text-sm text-[#94A3B8] hover:text-[#E5E7EB] transition-colors">Press</a>
              </div>
            </div>

          </div>

          {/* Security & Privacy Note */}
          <div className="flex items-start gap-4 p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl mb-12">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-[#64748B]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#E5E7EB] mb-1">Security &amp; Privacy</p>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Your data security is our priority. All data is encrypted in transit and at rest. We never sell your data. SOC 2 Type II compliant. Read our <a href="#security" className="text-[#94A3B8] hover:text-[#E5E7EB] underline underline-offset-2">security policy</a>.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#64748B]">
              © {new Date().getFullYear()} Deepin. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-xs text-[#64748B] hover:text-[#94A3B8] transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
