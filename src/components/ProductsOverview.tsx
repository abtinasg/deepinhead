import React from "react";
import { TrendingUp, FileText, ArrowRight } from "lucide-react";

export function ProductsOverview() {
  return (
    <section id="products" className="relative py-40 section-separator">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] text-gray-500 font-medium tracking-[0.2em] uppercase mb-4">
            Our Products
          </p>
          <h2 className="text-[48px] md:text-[56px] font-semibold text-white tracking-tight leading-tight mb-6">
            Two independent platforms
          </h2>
          <p className="text-[18px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Built separately, designed for different needs, unified by a shared commitment to clarity and long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Finance Card */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%)" }} />
            <div className="relative glass-card rounded-3xl p-12 hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-8">
                <TrendingUp className="w-8 h-8 text-amber-500" />
              </div>
              
              <h3 className="text-[36px] font-semibold text-white mb-4 tracking-tight">
                Deepin Finance
              </h3>
              
              <p className="text-[17px] text-gray-400 leading-relaxed mb-8">
                Professional platform for structured financial analysis and long-term investing. Track fundamentals, manage portfolios, and make decisions based on data, not noise.
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="text-[15px] text-gray-400 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">●</span>
                  <span>Institutional-grade metrics and financial data</span>
                </li>
                <li className="text-[15px] text-gray-400 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">●</span>
                  <span>Portfolio tracking and position management</span>
                </li>
                <li className="text-[15px] text-gray-400 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">●</span>
                  <span>Distraction-free, data-focused interface</span>
                </li>
                <li className="text-[15px] text-gray-400 flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">●</span>
                  <span>Real-time updates without social media clutter</span>
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
            <div className="absolute -inset-4 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at center, rgba(96, 165, 250, 0.1) 0%, transparent 70%)" }} />
            <div className="relative glass-card rounded-3xl p-12 hover:border-blue-400/30 transition-all duration-300 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              
              <h3 className="text-[36px] font-semibold text-white mb-4 tracking-tight">
                Deepin Research
              </h3>
              
              <p className="text-[17px] text-gray-400 leading-relaxed mb-8">
                Long-form research for teams that value rigor over speed. Methodology-driven analysis, market frameworks, and investment principles—not hot takes or predictions.
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="text-[15px] text-gray-400 flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">●</span>
                  <span>Transparent methodology and clear assumptions</span>
                </li>
                <li className="text-[15px] text-gray-400 flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">●</span>
                  <span>Market structure and investment frameworks</span>
                </li>
                <li className="text-[15px] text-gray-400 flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">●</span>
                  <span>Independent analysis, no marketing bias</span>
                </li>
                <li className="text-[15px] text-gray-400 flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">●</span>
                  <span>Weekly publications for serious investors</span>
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
  );
}
