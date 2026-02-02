import React from "react";
import { ArrowRight, Database, Key, Package } from "lucide-react";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="relative py-40 overflow-hidden section-separator">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-[11px] text-gray-500 font-medium tracking-[0.2em] uppercase mb-4">
            Ecosystem
          </p>
          <h2 className="text-[48px] md:text-[56px] font-semibold text-white tracking-tight leading-tight mb-6">
            How it connects
          </h2>
          <p className="text-[18px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A unified identity layer that keeps products <em className="italic">independent</em> while providing seamless access.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Deepin Core */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 text-center hover:border-white/20 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-2">Deepin</h3>
                <p className="text-[14px] text-gray-500">Core platform</p>
              </div>
              
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full">
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            
            {/* Deepin ID */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 text-center hover:border-amber-500/30 transition-all border-amber-500/20">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-2">Deepin ID</h3>
                <p className="text-[14px] text-gray-500">Access layer only</p>
              </div>
              
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full">
                <ArrowRight className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            
            {/* Products */}
            <div>
              <div className="glass-card rounded-2xl p-8 text-center hover:border-blue-400/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-2">Products</h3>
                <p className="text-[14px] text-gray-500">Independent tools</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Explanation */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-10">
            <h3 className="text-[24px] font-semibold text-white mb-6">One account, multiple products</h3>
            
            <div className="space-y-6 text-[15px] text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Deepin ID</strong> is a shared identity layer that provides secure access to all Deepin products. It's not a social network, data broker, or advertising platform—it's simply authentication.
              </p>
              
              <p>
                Each product remains fully <em className="italic">independent</em> in design, purpose, and operation. Finance and Research don't share data, don't cross-promote, and serve different use cases. Deepin ID exists only to remove the friction of multiple logins.
              </p>
              
              <p>
                This separation ensures that each product can evolve based on its own merit and user needs, without platform lock-in or bundled features you didn't ask for.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Key className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-white">Privacy by design</p>
                  <p className="text-[13px] text-gray-500">Your data stays in the product you're using</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
