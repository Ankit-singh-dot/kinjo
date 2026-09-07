"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Check,
  Layers,
  Compass,
  Sparkles,
  Lock,
  MousePointer2,
  GitCommit,
  Radio,
} from "lucide-react";

export function VerifiedProfileCard() {
  const [activePrompt, setActivePrompt] = useState<number>(0);
  const phoneScrollRef = useRef<HTMLDivElement>(null);

  // Smoothly scroll the phone screen when an active prompt is clicked
  useEffect(() => {
    if (phoneScrollRef.current) {
      const scrollTargets = [0, 390, 780, 0];
      phoneScrollRef.current.scrollTo({
        top: scrollTargets[activePrompt] || 0,
        behavior: "smooth",
      });
    }
  }, [activePrompt]);

  return (
    <section
      id="profile"
      className="py-24 md:py-32 bg-[#FAFAFA] text-neutral-900 overflow-hidden border-t border-neutral-200"
    >
      {/* Editorial Masthead */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono font-semibold text-neutral-800 shadow-xs mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#6D28D9]" />
          <span className="uppercase tracking-wider">INTENTIONAL ARCHITECTURE · ZERO RESUME SLOP</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] leading-[0.9] text-neutral-950">
          Highlights that actually<br />
          <span className="font-serif italic font-normal text-neutral-400">break the ice.</span>
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl font-medium mt-4 leading-relaxed">
          Most networking profiles are dry PDF resumes. Kinjo profiles are built around real conversation triggers—verified work, curious obsessions, and unscripted icebreakers that start conversations before you take your first sip.
        </p>
      </div>

      {/* 3-Column Studio Exhibition (Tactile Physical Artifacts flanking the iPhone) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT FLANK: Physical Spec Ticket & Unfiltered Icebreaker */}
          <div className="lg:col-span-4 space-y-6">
            {/* Artifact 1: The Verified Ship (Perforated Physical Ticket Pass) */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: "0deg", y: -4 }}
              onClick={() => setActivePrompt(0)}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transform: "rotate(-1.2deg)" }}
              className={`p-6 sm:p-7 rounded-[2rem] bg-white border transition-all cursor-pointer shadow-sm hover:shadow-xl ${
                activePrompt === 0
                  ? "border-[#6D28D9] ring-2 ring-[#6D28D9]/20"
                  : "border-neutral-200 hover:border-neutral-300"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-neutral-200 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6D28D9] bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200">
                    PROMPT 01 · VERIFIED CRAFT
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 font-bold">
                  {activePrompt === 0 ? "FOCUSED ON PHONE" : "CLICK TO SYNC"}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug mb-3">
                &ldquo;Shipped an enterprise design system to 40+ engineering teams without a single review meeting.&rdquo;
              </h3>

              <p className="text-xs text-neutral-600 font-medium leading-relaxed mb-4">
                Skip the &ldquo;So what do you do?&rdquo; interview. Leads directly into war stories about component tokens, breaking migrations, and team adoption.
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-neutral-700 font-bold">
                  <GitCommit className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>GitHub & Figma Verified</span>
                </span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  40+ Teams
                </span>
              </div>
            </motion.div>

            {/* Artifact 2: The Unfiltered Icebreaker (Lounge Coaster / Evening Card) */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: "0deg", y: -4 }}
              onClick={() => setActivePrompt(2)}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transform: "rotate(1.4deg)" }}
              className={`p-6 sm:p-7 rounded-[2rem] bg-[#F7FDF9] border transition-all cursor-pointer shadow-sm hover:shadow-xl ${
                activePrompt === 2
                  ? "border-emerald-400 ring-2 ring-emerald-300/30"
                  : "border-emerald-200 hover:border-emerald-300"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-2.5 py-0.5 rounded-full border border-emerald-300">
                  PROMPT 03 · THE HOOK
                </span>
                <span className="text-[10px] font-mono text-emerald-700 font-bold">
                  {activePrompt === 2 ? "FOCUSED ON PHONE" : "CLICK TO SYNC"}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-neutral-950 font-serif italic leading-snug mb-3">
                &ldquo;Ask me why I once judged an authentic Mumbai street food contest and lived to tell the tale.&rdquo;
              </h3>

              <p className="text-xs text-neutral-700 font-medium leading-relaxed mb-4">
                Guaranteed 30-second laugh. Breaks the ice across the table before anyone opens an app or asks for a deck.
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-emerald-100 text-[11px] font-mono">
                <span className="text-neutral-600 font-medium">Lounge Entry Hook</span>
                <span className="text-emerald-800 font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">
                  94% Reply Rate
                </span>
              </div>
            </motion.div>
          </div>

          {/* CENTER: Hardware Titanium iPhone Displaying Aarav Mehta's Profile */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-[300px] sm:w-[330px] rounded-[50px] p-2.5 bg-gradient-to-b from-[#E2E8F0] via-[#F1F5F9] to-[#CBD5E1] border-2 border-neutral-300 shadow-2xl">
              {/* Inner Screen */}
              <div className="relative rounded-[42px] bg-white overflow-hidden border border-neutral-300 flex flex-col h-[560px] text-left shadow-inner">
                
                {/* Apple Status Bar + Dynamic Island */}
                <div className="bg-white/95 backdrop-blur-md px-6 pt-3 pb-2 flex items-center justify-between border-b border-neutral-100 z-20 shrink-0">
                  <span className="text-[11px] font-mono font-bold text-neutral-900">9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span className="text-[10px] font-mono text-neutral-500 font-bold">5G</span>
                </div>

                {/* Real Profile Screen Viewport (Scrollable Aarav Mehta img1.png) */}
                <div
                  ref={phoneScrollRef}
                  className="relative flex-1 overflow-y-auto scrollbar-none scroll-smooth bg-white"
                >
                  <div className="relative w-full h-[1420px]">
                    <Image
                      src="/img1.png"
                      alt="Aarav Mehta Profile Editor"
                      fill
                      priority
                      sizes="(max-width: 768px) 300px, 330px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Interactive Phone Dock with Click-to-Jump Pills */}
                <div className="p-3 bg-neutral-950 text-white flex flex-col gap-2 z-20 shrink-0">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="flex items-center gap-1 text-[#FFD45C] font-bold">
                      <Sparkles className="w-3 h-3" />
                      <span>SYNCED VIEWPORT</span>
                    </span>
                    <span className="text-neutral-400">Aarav Mehta</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setActivePrompt(0)}
                      className={`py-1 rounded-md text-[9px] font-mono font-bold transition-all ${
                        activePrompt === 0
                          ? "bg-white text-black shadow"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      Prompt 01
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePrompt(1)}
                      className={`py-1 rounded-md text-[9px] font-mono font-bold transition-all ${
                        activePrompt === 1
                          ? "bg-[#FFF9C4] text-neutral-900 shadow"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      Prompt 02
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePrompt(2)}
                      className={`py-1 rounded-md text-[9px] font-mono font-bold transition-all ${
                        activePrompt === 2
                          ? "bg-emerald-300 text-emerald-950 shadow"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      Prompt 03
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-[11px] font-mono text-neutral-400 mt-3 flex items-center gap-1.5">
              <MousePointer2 className="w-3 h-3 text-[#6D28D9]" />
              <span>Click any card or pill to navigate Aarav&apos;s profile</span>
            </p>
          </div>

          {/* RIGHT FLANK: Curious Obsession Linen Card & Double Opt-in Protocol */}
          <div className="lg:col-span-4 space-y-6">
            {/* Artifact 3: The Curious Obsession (Linen Index Card) */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: "0deg", y: -4 }}
              onClick={() => setActivePrompt(1)}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transform: "rotate(1.5deg)" }}
              className={`p-6 sm:p-7 rounded-[2rem] bg-[#FFFDF5] border transition-all cursor-pointer shadow-sm hover:shadow-xl ${
                activePrompt === 1
                  ? "border-amber-300 ring-2 ring-amber-300/30"
                  : "border-amber-200 hover:border-amber-300"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-amber-200/70 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-2.5 py-0.5 rounded-full border border-amber-300">
                  PROMPT 02 · CONTEXT ENGINE
                </span>
                <span className="text-[10px] font-mono text-amber-700 font-bold">
                  {activePrompt === 1 ? "FOCUSED ON PHONE" : "CLICK TO SYNC"}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug mb-3">
                &ldquo;Collect hand-drawn architectural maps across 12 countries. Still looking for a 1920s map of Ballard Estate.&rdquo;
              </h3>

              <p className="text-xs text-neutral-700 font-medium leading-relaxed mb-4">
                People don&apos;t want to debate job titles for 2 hours. This one detail started 3 co-founding discussions at our last rooftop mixer.
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-amber-200/70 text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-neutral-700 font-bold">
                  <Compass className="w-3.5 h-3.5 text-amber-600" />
                  <span>Curious Obsession</span>
                </span>
                <span className="text-amber-800 font-bold bg-white px-2 py-0.5 rounded border border-amber-300">
                  4.2x Deeper Talks
                </span>
              </div>
            </motion.div>

            {/* Artifact 4: The Chatham House & Double Opt-in Protocol */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: "0deg", y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transform: "rotate(-1deg)" }}
              className="p-6 sm:p-7 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200">
                  KINJO PROTOCOL · CLOSED DOOR
                </span>
                <Lock className="w-3.5 h-3.5 text-[#6D28D9]" />
              </div>

              <div className="space-y-3 text-xs text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-950">Double Opt-in Access</span>
                    <p className="text-neutral-500 text-[11px]">Private contact channels unlock only when both members mutually accept.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-950">50M Physical Geo-Fence</span>
                    <p className="text-neutral-500 text-[11px]">The Room activates strictly when present inside the physical venue.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
