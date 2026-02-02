import React from "react";
import { FileText, BookOpen, Mail, Shield, Lock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="resources" className="relative bg-elevation-base border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="full" size="md" className="mb-6" />
            <p className="text-[14px] text-gray-500 leading-relaxed max-w-sm">
              Premium tools for financial analysis and long-form research. Built for clarity, rigor, and long-term thinking.
            </p>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-[13px] font-semibold text-white mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#finance" className="text-[14px] text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  Deepin Finance
                </a>
              </li>
              <li>
                <a href="#research" className="text-[14px] text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  Deepin Research
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="text-[14px] text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  Deepin ID
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-[13px] font-semibold text-white mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-[13px] font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors">
                  Principles
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Security & Privacy Note */}
        <div className="border-t border-white/5 pt-12 mb-12">
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-white mb-2">Security & Privacy</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">
                  Your data is encrypted at rest and in transit. We don't sell data, run ads, or share information with third parties. Each product operates independently with its own data boundaries. Read our full <a href="#" className="text-white underline hover:text-gray-300 transition-colors">privacy policy</a> and <a href="#" className="text-white underline hover:text-gray-300 transition-colors">security practices</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <p className="text-[13px] text-gray-600">
            © 2026 Deepin. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-[13px] text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[13px] text-gray-500 hover:text-white transition-colors">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
