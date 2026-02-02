import React from "react";
import { Compass, Eye, Clock } from "lucide-react";

export function PrinciplesSection() {
  return (
    <section id="approach" className="relative py-40 overflow-hidden bg-elevation-1 bg-noise">
      <div className="absolute inset-0 bg-gradient-radial-spotlight opacity-40" />
      
      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-[11px] text-gray-500 font-medium tracking-[0.2em] uppercase mb-4">
            Principles
          </p>
          <h2 className="text-[48px] md:text-[56px] font-semibold text-white tracking-tight leading-tight mb-6">
            How we work
          </h2>
          <p className="text-[18px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Three principles that guide every product decision and feature we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Principle 1 */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.06) 0%, transparent 60%)" }} />
            <div className="relative glass-card rounded-3xl p-10 hover:border-white/20 transition-all h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-gray-400" />
              </div>
              
              <h3 className="text-[24px] font-semibold text-white mb-4 leading-tight">
                Methodology over marketing
              </h3>
              
              <p className="text-[15px] text-gray-400 leading-relaxed">
                We build tools based on clear investment principles and transparent frameworks, not trends or hype. Every feature serves a methodical approach to analysis, not engagement metrics.
              </p>
            </div>
          </div>
          
          {/* Principle 2 */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.06) 0%, transparent 60%)" }} />
            <div className="relative glass-card rounded-3xl p-10 hover:border-white/20 transition-all h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gray-400" />
              </div>
              
              <h3 className="text-[24px] font-semibold text-white mb-4 leading-tight">
                Clarity over speed
              </h3>
              
              <p className="text-[15px] text-gray-400 leading-relaxed">
                We prioritize clear presentation and thoughtful design over rapid content delivery. Markets move fast, but understanding compounds slowly. Our products reflect that reality.
              </p>
            </div>
          </div>
          
          {/* Principle 3 */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.06) 0%, transparent 60%)" }} />
            <div className="relative glass-card rounded-3xl p-10 hover:border-white/20 transition-all h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-gray-400" />
              </div>
              
              <h3 className="text-[24px] font-semibold text-white mb-4 leading-tight">
                Long-term by design
              </h3>
              
              <p className="text-[15px] text-gray-400 leading-relaxed">
                Every product is built for investors with multi-year time horizons. No day-trading features, no algorithmic feeds, no gamification. Just focused tools for serious work.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
