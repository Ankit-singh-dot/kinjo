"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Check,
  ArrowUpRight,
  MousePointer2,
} from "lucide-react";

export function VerifiedProfileCard() {
  const [activeHighlight, setActiveHighlight] = useState<number>(0);

  const highlights = [
    {
      type: "ACHIEVEMENT",
      color: "text-[#6D28D9] bg-violet-50 border-violet-200",
      content: "Shipped an enterprise design system used by 40+ teams",
      note: "Verified by Freehand Labs github commits & Figma library sync",
    },
    {
      type: "CURIOUS OBSESSION",
      color: "text-amber-800 bg-amber-50 border-amber-200",
      content: "Collect hand-drawn maps of cities visited across 12 countries",
      note: "Triggers 4.2x more genuine live conversations than job title",
    },
    {
      type: "ICEBREAKER",
      color: "text-emerald-800 bg-emerald-50 border-emerald-200",
      content: "Ask me why I once judged an authentic Mumbai street food contest",
      note: "Zero awkward silence: instant relatable entry point",
    },
  ];

  return (
    <section
      id="profile"
      className="relative py-20 md:py-28 bg-white text-neutral-900 overflow-hidden border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Highlight Inspectors */}
          <div className="lg:col-span-6 text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-semibold text-neutral-700 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span className="uppercase tracking-wider">
                AUTHENTIC PROFILES · FIND YOUR KIND
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.04em] text-neutral-950 leading-tight">
              Highlights that actually <br />
              <span className="text-neutral-400">break the ice.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-medium">
              No generic resume summaries or endless feeds. Kinjo profiles prioritize intentional interactions over endless discovery, built on verified projects, shared goals, and real accomplishments.
            </p>

            {/* Interactive Highlight Inspector Chips */}
            <div className="space-y-2.5 pt-1">
              <span className="text-[11px] font-mono font-bold uppercase text-neutral-400 tracking-wider block">
                Verified Highlights Architecture (3 of 10)
              </span>
              {highlights.map((h, i) => (
                <div
                  key={h.type}
                  onClick={() => setActiveHighlight(i)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    activeHighlight === i
                      ? "bg-[#FFFDF8] border-amber-300 shadow-sm ring-2 ring-amber-300/30 scale-[1.01]"
                      : "bg-neutral-50/70 border-neutral-200 hover:bg-neutral-100/70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${h.color}`}
                    >
                      {h.type}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {activeHighlight === i ? "Active Spec" : "Click to inspect"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-neutral-900">
                    {h.content}
                  </p>
                  <p className="text-[11px] text-neutral-500 font-mono mt-1">
                    💡 {h.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#F9FAFB] border border-neutral-200 space-y-2 text-xs text-neutral-700">
              <p className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Double opt-in unlocks verified portfolios & direct private channels</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#6D28D9] shrink-0" />
                <span>Zero unsolicited spam — intentional connections over abundance</span>
              </p>
            </div>
          </div>

          {/* Right Column: Titanium iPhone Shell Featuring img1.png */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-[310px] sm:w-[340px] rounded-[48px] p-2.5 bg-gradient-to-b from-[#E5E7EB] via-[#F3F4F6] to-[#D1D5DB] border-2 border-neutral-300 shadow-2xl ring-1 ring-black/5">
              {/* Inner Phone Viewport */}
              <div className="relative rounded-[40px] bg-black overflow-hidden border border-neutral-300 flex flex-col h-[560px] text-left shadow-inner">
                {/* Scrollable Container for Tall img1.png (444 x 1800) */}
                <div className="relative flex-1 overflow-y-auto scrollbar-none">
                  {/* Real img1.png screenshot */}
                  <div className="relative w-full h-[1350px]">
                    <Image
                      src="/img1.png"
                      alt="13 Edit profile - all editing lives here / Aarav Mehta"
                      fill
                      priority
                      sizes="(max-width: 768px) 310px, 340px"
                      className="object-cover object-top"
                    />

                    {/* Fold Marker Overlay */}
                    <div className="absolute top-[630px] left-0 right-0 py-1 bg-red-500/10 border-y border-red-500/40 text-center pointer-events-none">
                      <span className="text-[9px] font-mono font-bold text-red-600 bg-white/90 px-2 py-0.5 rounded border border-red-200">
                        --- fold · 844px ---
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle Scroll Hint Bar */}
                <div className="py-2 px-3 bg-neutral-900/90 backdrop-blur-sm border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-300">
                  <span className="flex items-center gap-1">
                    <MousePointer2 className="w-3 h-3 text-[#FFD45C]" />
                    <span>Scroll inside phone to view full screen</span>
                  </span>
                  <span className="text-[#FFD45C] font-bold">1800px</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
