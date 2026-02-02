import React from "react";
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react";

export function FinanceSection() {
  return (
    <section id="finance" className="relative py-32 overflow-hidden bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div>
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                <span className="text-[13px] font-medium text-amber-900">Deepin Finance</span>
              </div>
            </div>
            
            <h2 className="text-[56px] md:text-[64px] font-semibold leading-[1.05] tracking-tight text-gray-900 mb-6">
              Analysis built for the long term
            </h2>
            
            <p className="text-[18px] text-gray-600 leading-relaxed mb-8">
              Professional financial analysis platform designed for investors who value clarity and rigor over noise. Track fundamentals, build conviction, and manage portfolios with institutional-grade data.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-gray-900 mb-2">Comprehensive metrics</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    Track key financial ratios, valuation multiples, and growth metrics in one distraction-free interface.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <PieChart className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-gray-900 mb-2">Portfolio management</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    Monitor positions, track performance, and maintain watchlists with tools designed for focused investors.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-gray-900 mb-2">Real-time data</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    Access updated fundamentals and market data without the clutter of social feeds or trading noise.
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gray-900 rounded-full text-[15px] font-medium text-white hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/10 hover:shadow-2xl hover:shadow-gray-900/20"
            >
              Open Deepin Finance
            </a>
          </div>
          
          {/* Right: Visual showcase */}
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-900/5 mb-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[13px] text-gray-500 mb-1">Total Portfolio Value</p>
                    <p className="text-[32px] font-semibold text-gray-900">$2,847,392</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] text-gray-500 mb-1">Total Return</p>
                    <p className="text-[20px] font-semibold text-emerald-600">+18.4%</p>
                  </div>
                </div>
                
                <div className="h-32 flex items-end gap-1.5 mb-6">
                  {[65, 70, 68, 75, 72, 78, 85, 82, 88, 92, 95, 100].map((height, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-sm" 
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-[11px] text-gray-500 mb-1">Avg P/E</p>
                    <p className="text-[16px] font-semibold text-gray-900">22.4x</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-[11px] text-gray-500 mb-1">Avg ROE</p>
                    <p className="text-[16px] font-semibold text-gray-900">28.7%</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-[11px] text-gray-500 mb-1">Cash Flow</p>
                    <p className="text-[16px] font-semibold text-gray-900">Strong</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-900/5">
                <p className="text-[13px] font-semibold text-gray-900 mb-4">Watchlist</p>
                <div className="space-y-3">
                  {[
                    { ticker: "AAPL", name: "Apple Inc.", change: "+2.3%" },
                    { ticker: "MSFT", name: "Microsoft", change: "+1.8%" },
                    { ticker: "GOOGL", name: "Alphabet", change: "-0.4%" },
                  ].map((stock, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-[14px] font-semibold text-gray-900">{stock.ticker}</p>
                        <p className="text-[12px] text-gray-500">{stock.name}</p>
                      </div>
                      <p className={`text-[14px] font-medium ${stock.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                        {stock.change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
