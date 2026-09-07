"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { ArcFanGallery } from "./ArcFanGallery";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Check,
  Flame,
  Users,
  Calendar,
  Compass,
  Heart,
  ChevronRight,
  Smartphone,
  Star,
} from "lucide-react";

interface HeroSectionProps {
  onOpenJoinModal: (type?: string) => void;
  onExploreEvents: () => void;
}

export function HeroSection({ onOpenJoinModal, onExploreEvents }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"matches" | "everyone">("matches");
  const [nudgedMaya, setNudgedMaya] = useState(false);
  const [nudgedVikram, setNudgedVikram] = useState(false);
  const [bucketCount, setBucketCount] = useState(3);

  const handleNudgeMaya = () => {
    if (!nudgedMaya) {
      setNudgedMaya(true);
      setBucketCount((prev) => prev + 1);

      // Trigger celebratory micro-confetti
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.65, x: 0.65 },
          colors: ["#6D28D9", "#FFD45C", "#A78BFA", "#FFFFFF"],
        });
      } catch (e) {}
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden flex flex-col items-center justify-center">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#6D28D9]/18 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#FFD45C]/8 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-20" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-violet text-xs font-semibold text-[#FFD45C] tracking-wide mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD45C]" />
          <span>CURATION OVER ENDLESS ABUNDANCE</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="text-zinc-300">LIVE SOCIAL EXPERIENCES</span>
        </div>

        {/* RADIAL ARC FAN GALLERY (like user reference!) */}
        <div className="w-full max-w-6xl mb-6">
          <ArcFanGallery onOpenJoinModal={() => onOpenJoinModal("attendee")} />
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl leading-[1.08] mb-6">
          People are possibilities. <br className="hidden sm:inline" />
          <span className="text-gradient-violet">
            Kinjo turns them into something real.
          </span>
        </h1>

        {/* The 4 Core Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-medium text-zinc-400 mb-6">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" /> People
          </span>
          <span className="text-zinc-700">•</span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD45C]" /> Communities
          </span>
          <span className="text-zinc-700">•</span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" /> Events
          </span>
          <span className="text-zinc-700">•</span>
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD45C]" /> Opportunities
          </span>
        </div>

        {/* Sub-headline description */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal mb-8">
          From discovering who is in the room to meeting the right people there — Kinjo runs your whole night. Curation over noise. Intentional interactions over accidental encounters.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
          <button
            onClick={() => onOpenJoinModal("attendee")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#7C3AED] hover:to-[#9333EA] text-white font-semibold text-base shadow-[0_12px_36px_rgba(109,40,217,0.45)] hover:shadow-[0_16px_44px_rgba(109,40,217,0.6)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3"
          >
            <span>Get the App — Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold text-base border border-white/15 transition-all duration-200 flex items-center justify-center gap-2.5"
          >
            <Compass className="w-4 h-4 text-[#FFD45C]" />
            <span>Explore Tonight&apos;s Events</span>
          </button>
        </div>

        {/* 3 Metric Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full mx-auto mb-16 pt-4 border-t border-white/10">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-white">94%</span>
            <span className="text-xs text-[#FFD45C] font-semibold mt-0.5">Average Match Accuracy</span>
            <span className="text-[11px] text-zinc-500">Based on verified purpose</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-white">0 Cold</span>
            <span className="text-xs text-[#B892FF] font-semibold mt-0.5">Awkward Pitches</span>
            <span className="text-[11px] text-zinc-500">Double opt-in nudges only</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-white">100%</span>
            <span className="text-xs text-emerald-400 font-semibold mt-0.5">Automated Buckets</span>
            <span className="text-[11px] text-zinc-500">Walk out already organized</span>
          </div>
        </div>

        {/* Central Phone Mockup with Maya Joshi featured */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Floating Badges */}
          <div className="hidden md:flex absolute -left-12 top-24 z-20 flex-col gap-3 text-left">
            <div className="glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl max-w-[240px] animate-float">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                  Live · NCPA Mumbai
                </span>
              </div>
              <p className="text-xs font-bold text-white mb-0.5">Bombay Design Week 2026</p>
              <p className="text-[11px] text-zinc-400">120 designers & founders inside</p>
            </div>
          </div>

          <div className="hidden md:flex absolute -right-12 top-32 z-20 flex-col gap-3 text-left">
            <div className="glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl max-w-[250px] animate-float [animation-delay:0.8s]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-zinc-300">My Buckets</span>
                <span className="text-[10px] font-semibold text-[#B892FF] px-2 py-0.5 rounded-full bg-[#6D28D9]/20">
                  {bucketCount} saved
                </span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-white font-medium">Co-founders</span>
                  <span className="text-[#FFD45C] font-mono font-bold">2</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-white font-medium">Lead Designers</span>
                  <span className="text-[#FFD45C] font-mono font-bold">{nudgedMaya ? "2" : "1"}</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-white font-medium">To Follow Up</span>
                  <span className="text-zinc-400 font-mono font-bold">5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Central Phone Device */}
          <div className="relative mx-auto w-[330px] sm:w-[370px] rounded-[48px] p-3.5 bg-gradient-to-b from-[#2a2a35] via-[#15151c] to-[#0a0a0e] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_80px_rgba(109,40,217,0.3)] border border-white/15">
            <div className="relative rounded-[40px] bg-[#000000] overflow-hidden text-left border border-white/10 flex flex-col h-[670px]">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-7 pt-3.5 pb-2 text-[12px] font-semibold text-white/90 select-none">
                <span>9:41</span>
                <div className="w-24 h-5 bg-black rounded-full border border-white/10 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#6D28D9]" />
                  <span className="text-[9px] text-zinc-400 font-mono">ROOM · 42</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px]">5G</span>
                  <div className="w-5 h-2.5 border border-white/80 rounded-sm p-[1px] flex items-center">
                    <div className="h-full w-full bg-white rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Room Header */}
              <div className="px-5 pt-3 pb-2 border-b border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-xs font-mono tracking-widest uppercase">THE ROOM</span>
                    <span className="text-white text-xs font-bold">Design Nights #43</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFD45C]/15 text-[#FFD45C] border border-[#FFD45C]/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD45C] animate-pulse" />
                    42 IN
                  </span>
                </div>

                {/* Sub-tabs */}
                <div className="flex rounded-full bg-[#16161f] p-1 border border-white/5">
                  <button
                    onClick={() => setActiveTab("matches")}
                    className={`flex-1 py-1.5 text-center text-xs font-semibold rounded-full transition-all ${
                      activeTab === "matches"
                        ? "bg-[#6D28D9] text-white shadow-md shadow-[#6D28D9]/40"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Your matches · 5
                  </button>
                  <button
                    onClick={() => setActiveTab("everyone")}
                    className={`flex-1 py-1.5 text-center text-xs font-semibold rounded-full transition-all ${
                      activeTab === "everyone"
                        ? "bg-[#6D28D9] text-white shadow-md shadow-[#6D28D9]/40"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Everyone · 42
                  </button>
                </div>
              </div>

              {/* Scrollable Room Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-none">
                <div className="mb-2">
                  <h3 className="text-base font-bold text-white tracking-tight">Your ride tonight</h3>
                  <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">
                    5 people match <span className="text-[#FFD45C] font-semibold">&ldquo;designer co-founder, fintech&rdquo;</span> — cards roll up from behind.
                  </p>
                </div>

                {/* Match Card 1: Maya Joshi (FEATURED) */}
                <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#1c142e] via-[#12121a] to-[#0f0f15] border-2 border-[#6D28D9] shadow-lg shadow-[#6D28D9]/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#6D28D9]">
                        <Image
                          src="/images/people_maya_joshi.jpg"
                          alt="Maya Joshi"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-white">Maya Joshi</h4>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <p className="text-[11px] text-zinc-400">Product designer · ex-Razorpay</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-black text-[#FFD45C]">94%</span>
                      <p className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">MATCH</p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                    Designer looking for a founder to build with — and she&apos;s deep in fintech already.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/5">
                      Fintech
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/5">
                      Design Systems
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#6D28D9]/20 text-[#B892FF] border border-[#6D28D9]/30">
                      Co-founder seek
                    </span>
                  </div>

                  <button
                    onClick={handleNudgeMaya}
                    className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 ${
                      nudgedMaya
                        ? "bg-[#6D28D9] text-white shadow-md shadow-[#6D28D9]/50"
                        : "bg-white hover:bg-zinc-200 text-black shadow"
                    }`}
                  >
                    {nudgedMaya ? (
                      <>
                        <Check className="w-4 h-4 text-[#FFD45C]" />
                        <span>Nudged — they&apos;ll feel it</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
                        <span>Send a nudge</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Match Card 2: Ankit Kulkarni */}
                <div className="rounded-2xl p-3.5 bg-[#121218] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center font-bold text-xs text-emerald-400">
                      AK
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Ankit Kulkarni</h4>
                      <p className="text-[10px] text-zinc-400">Founding engineer, fintech</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#FFD45C]">87%</span>
                    <p className="text-[8px] uppercase font-bold text-zinc-500">MATCH</p>
                  </div>
                </div>

                {/* Match Card 3: Sneha Rao */}
                <div className="rounded-2xl p-3.5 bg-[#121218] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#3d2c16] border border-[#FFD45C]/50 flex items-center justify-center font-bold text-xs text-[#FFD45C]">
                      SR
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Sneha Rao</h4>
                      <p className="text-[10px] text-zinc-400">Brand studio of one</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-zinc-300">81%</span>
                    <p className="text-[8px] uppercase font-bold text-zinc-500">MATCH</p>
                  </div>
                </div>

                {/* Match Card 4: Vikram Kher */}
                <div className="rounded-2xl p-3.5 bg-[#121218] border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15">
                        <Image
                          src="/images/people_vikram_kher.jpg"
                          alt="Vikram Kher"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Vikram Kher</h4>
                        <p className="text-[10px] text-zinc-400">Freelance motion designer</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-zinc-300">74%</span>
                      <p className="text-[8px] uppercase font-bold text-zinc-500">MATCH</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setNudgedVikram(!nudgedVikram)}
                    className="w-full py-1.5 rounded-lg text-[11px] font-medium border border-white/15 text-zinc-300 hover:bg-white/5 transition-colors flex items-center justify-center gap-1"
                  >
                    {nudgedVikram ? "✓ Nudge Sent" : "Say Hello (Private Nudge)"}
                  </button>
                </div>

                {/* Match Card 5: Nayla Baig */}
                <div className="rounded-2xl p-3.5 bg-[#121218] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#291e3b] border border-[#B892FF]/50 flex items-center justify-center font-bold text-xs text-[#B892FF]">
                      NB
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Nayla Baig</h4>
                      <p className="text-[10px] text-zinc-400">Illustrator turned PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-zinc-400">68%</span>
                    <p className="text-[8px] uppercase font-bold text-zinc-500">MATCH</p>
                  </div>
                </div>

                {/* Room Footer pill */}
                <div className="pt-2 text-center">
                  <p className="text-[10px] text-zinc-500">
                    37 more are in the room — new matches hop on the ride as they walk in.
                  </p>
                </div>
              </div>

              {/* Home Bar */}
              <div className="w-full pb-2 pt-1 flex justify-center bg-black">
                <div className="w-28 h-1 bg-white/25 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
