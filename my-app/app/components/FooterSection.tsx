"use client";

import React from "react";
import { KinjoLogo } from "./KinjoLogo";
import { Apple, Smartphone } from "lucide-react";

interface FooterSectionProps {
  onOpenJoinModal: (type?: string) => void;
}

export function FooterSection({ onOpenJoinModal }: FooterSectionProps) {
  return (
    <footer className="relative bg-white text-neutral-900 border-t border-neutral-200 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Download CTA Box (Light Theme) */}
        <div className="rounded-[2.5rem] p-8 sm:p-14 bg-[#FAF5FF] border border-[#6D28D9]/20 mb-16 text-center relative overflow-hidden shadow-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#6D28D9]/20 text-xs font-mono text-[#6D28D9] mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
            <span className="uppercase tracking-wider font-semibold">FIND YOUR KIND · IOS & ANDROID</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.04em] text-neutral-950 mb-3">
            Someone who can help is already <br className="hidden sm:inline" />
            <span className="text-neutral-400">attending a room this week.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed font-medium">
            Set your strategic goals, and connect directly with the founders, investors, and leaders who can accelerate them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={() => onOpenJoinModal("ios")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-2.5 transition-colors shadow-sm cursor-pointer"
            >
              <Apple className="w-4 h-4 fill-current" />
              <div className="text-left">
                <span className="text-[9px] uppercase font-mono text-neutral-400 block leading-tight">
                  Download for
                </span>
                <span className="text-xs font-bold text-white">Apple iOS</span>
              </div>
            </button>

            <button
              onClick={() => onOpenJoinModal("android")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-xs border border-neutral-300 flex items-center justify-center gap-2.5 transition-colors cursor-pointer shadow-xs"
            >
              <Smartphone className="w-4 h-4 text-[#6D28D9]" />
              <div className="text-left">
                <span className="text-[9px] uppercase font-mono text-neutral-500 block leading-tight">
                  Get on
                </span>
                <span className="text-xs font-bold text-neutral-900">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-14 border-b border-neutral-200">
          {/* Brand Info */}
          <div className="col-span-2">
            <div className="mb-3">
              <KinjoLogo size="lg" markColor="#6D28D9" textColor="#111827" />
            </div>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed mb-3">
              Built on the philosophy of curation over abundance. Kinjo prioritizes intentional interactions over endless discovery.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] text-neutral-500 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Active in Mumbai, Bengaluru, London & Delhi</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4 font-mono">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>
                <a href="#how-it-works" className="hover:text-neutral-950 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-neutral-950 transition-colors">
                  Curated Rooms
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-neutral-950 transition-colors">
                  Verified Profiles
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-neutral-950 transition-colors">
                  Member Outcomes
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-950 transition-colors">
                  Brand Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-950 transition-colors flex items-center gap-1">
                  Careers <span className="text-[9px] px-1.5 py-0.2 rounded bg-neutral-100 text-neutral-700">Hiring</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@kinjo.live" className="hover:text-neutral-950 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Safety */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4 font-mono">
              Safety & Trust
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-950 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-950 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-950 transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono">
          <p>© 2026 Kinjo Inc. All rights reserved. Find your Kind.</p>
          <p className="mt-2 sm:mt-0">Curated in Mumbai & London</p>
        </div>
      </div>
    </footer>
  );
}
