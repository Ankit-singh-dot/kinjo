"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FolderHeart,
  MessageSquare,
  Zap,
  Layers,
  Repeat,
} from "lucide-react";

interface StepData {
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  mockupHeader: string;
  mockupContent: React.ReactNode;
}

export function CircleSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const steps: StepData[] = [
    {
      step: "01",
      title: "Meet",
      subtitle: "Curated Rooms over Crowded Venues",
      badge: "DISCOVERY & PURPOSE",
      description:
        "No more scanning room corners wondering who to talk to. Kinjo curates gatherings where every attendee is verified and shares their real objective: looking for a co-founder, hiring, raising, or collaborating.",
      mockupHeader: "Hi! Parth 👋 · Discovery Feed",
      mockupContent: (
        <div className="space-y-3">
          <div className="p-3 rounded-2xl bg-[#1a1a24] border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase text-[#FFD45C] tracking-wider">
                CURATED TONIGHT
              </span>
              <span className="text-[10px] text-zinc-400">Ahmedabad & Mumbai</span>
            </div>
            <p className="text-sm font-bold text-white mb-1">Tech Leader & Founders Meetup</p>
            <p className="text-[11px] text-zinc-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              94 going · 18 co-founder seekers
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-gradient-to-br from-[#211738] to-[#12121c] border border-[#6D28D9]/40">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6D28D9] animate-ping" />
              <span className="text-xs font-bold text-white">Live Venue Radar</span>
            </div>
            <div className="h-24 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />
              {/* Radar rings */}
              <div className="w-20 h-20 rounded-full border border-[#6D28D9]/40 absolute animate-ping" />
              <div className="w-12 h-12 rounded-full border border-[#FFD45C]/50 absolute" />
              <span className="px-2 py-1 rounded-full bg-[#6D28D9] text-white text-[10px] font-bold z-10 shadow-lg">
                42 inside The Loft
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      title: "Connect",
      subtitle: "The Room & Double Opt-in Nudges",
      badge: "INTENTIONAL MATCHING",
      description:
        "When you walk into the venue, 'The Room' activates. It maps your purpose to who can help right now. You send a private nudge. When both accept, you're connected — no awkward cold approaches, no guesswork.",
      mockupHeader: "THE ROOM · Design Nights #43",
      mockupContent: (
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1c1233] to-[#101018] border border-[#6D28D9]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#6D28D9] flex items-center justify-center font-bold text-xs">
                  MJ
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Maya Joshi</h4>
                  <p className="text-[10px] text-zinc-400">Product Designer · Razorpay</p>
                </div>
              </div>
              <span className="text-xs font-black text-[#FFD45C]">94% match</span>
            </div>
            <p className="text-[11px] text-zinc-300 mb-2.5">
              “Looking for a fintech co-founder to build something new.”
            </p>
            <div className="p-2 rounded-xl bg-[#6D28D9]/20 border border-[#6D28D9]/50 flex items-center justify-center gap-1.5 text-xs text-[#B892FF] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD45C]" />
              <span>Nudge accepted · Private channel open</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#14141c] border border-white/5 flex items-center justify-between">
            <span className="text-xs text-zinc-400">Next match rolling in...</span>
            <span className="text-xs font-mono font-bold text-emerald-400">Leo E. (91%)</span>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      title: "Collaborate",
      subtitle: "Skip Small Talk, Start Building",
      badge: "SHARED HIGHLIGHTS",
      description:
        "Meet with total context. Kinjo profiles show verified highlights: 'Shipped a design system for 40 teams', 'Ask me why I judged a vada pav contest', tech stacks, and active fundraising goals. Meet and make it happen.",
      mockupHeader: "Aarav Mehta · Shared Profile",
      mockupContent: (
        <div className="space-y-2.5">
          <div className="p-3 rounded-xl bg-[#171722] border border-white/10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#FFD45C]/20 text-[#FFD45C]">
                ACHIEVEMENT
              </span>
            </div>
            <p className="text-xs font-medium text-white">
              Shipped design system used by 40+ engineering teams
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#171722] border border-white/10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#6D28D9]/25 text-[#B892FF]">
                ICEBREAKER
              </span>
            </div>
            <p className="text-xs font-medium text-white">
              Ask me why I once judged an underground vada pav contest
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-400 font-medium">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            Project started: Fintech MVP Design Sprint
          </div>
        </div>
      ),
    },
    {
      step: "04",
      title: "Complete the Circle",
      subtitle: "Walk Out With Everyone in Buckets",
      badge: "AUTO-ORGANIZED CIRCLE",
      description:
        "No more phones full of half-remembered names or business cards lost in pockets. Every person you connect with lands in your profile, auto-sorted into buckets: Co-founders, Designers, Follow-ups. Circle complete.",
      mockupHeader: "My Network · Buckets Sorted",
      mockupContent: (
        <div className="space-y-2.5">
          <div className="p-3 rounded-xl bg-[#171722] border border-[#6D28D9]/40 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-white">Co-founders</p>
              <p className="text-[10px] text-zinc-400">From Startup Night #12</p>
            </div>
            <div className="flex -space-x-1.5">
              <div className="w-6 h-6 rounded-full bg-[#6D28D9] text-[9px] font-bold flex items-center justify-center border border-black">
                MJ
              </div>
              <div className="w-6 h-6 rounded-full bg-[#FFD45C] text-black text-[9px] font-bold flex items-center justify-center border border-black">
                LE
              </div>
              <span className="text-xs font-mono font-bold text-[#FFD45C] pl-2">2</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#171722] border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-white">Designers & Creatives</p>
              <p className="text-[10px] text-zinc-400">To collaborate with this month</p>
            </div>
            <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-white/10">
              3
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#171722] border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-white">To Follow Up</p>
              <p className="text-[10px] text-zinc-400">Nudges to message this week</p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/20">
              5
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Auto-advance step every 6s unless user interacts
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, steps.length]);

  return (
    <section id="circle" className="relative py-28 md:py-36 bg-[#07070b] overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#6D28D9]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6D28D9]/15 border border-[#6D28D9]/30 text-xs font-semibold text-[#B892FF] mb-4">
            <Repeat className="w-3.5 h-3.5 text-[#FFD45C]" />
            <span>THE KINJO CYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Meet → Connect → Collaborate → <br />
            <span className="text-gradient-gold">Complete the circle.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Intentional networking is a closed loop. Step through each phase to see how Kinjo transforms fleeting hellos into enduring partnerships.
          </p>
        </div>

        {/* The 4-Step Interactive Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive Stepper Selector */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {steps.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={item.step}
                  onClick={() => {
                    setActiveStep(index);
                    setIsAutoPlay(false);
                  }}
                  className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 text-left border ${
                    isActive
                      ? "bg-gradient-to-r from-[#171724] to-[#12121c] border-[#6D28D9] shadow-[0_8px_30px_rgba(109,40,217,0.25)] scale-[1.01]"
                      : "bg-[#0e0e15]/60 hover:bg-[#14141e]/80 border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-extrabold transition-colors ${
                          isActive
                            ? "bg-[#6D28D9] text-white"
                            : "bg-white/10 text-zinc-400"
                        }`}
                      >
                        {item.step}
                      </span>
                      <h3
                        className={`text-xl font-bold transition-colors ${
                          isActive ? "text-white" : "text-zinc-300"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                        isActive
                          ? "bg-[#FFD45C]/15 border-[#FFD45C]/30 text-[#FFD45C]"
                          : "bg-white/5 border-white/5 text-zinc-500"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p
                    className={`text-sm font-semibold mb-2 transition-colors ${
                      isActive ? "text-[#B892FF]" : "text-zinc-400"
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Progress Indicator for Active step */}
                  {isActive && isAutoPlay && (
                    <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#6D28D9] to-[#FFD45C] animate-[marquee_6s_linear_infinite]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Synchronized Mobile Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[320px] sm:w-[350px] rounded-[44px] p-3.5 bg-gradient-to-b from-[#2d2d3a] to-[#0e0e14] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(109,40,217,0.2)] border border-white/15">
              <div className="relative rounded-[36px] bg-black overflow-hidden border border-white/10 flex flex-col h-[580px]">
                {/* iOS Header */}
                <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-semibold text-white/80 select-none">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full border border-white/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                  </div>
                  <span>100%</span>
                </div>

                {/* Mockup Top Banner */}
                <div className="px-5 py-3 border-b border-white/10 bg-[#12121a]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-zinc-400">
                      PHASE {steps[activeStep].step}
                    </span>
                    <span className="text-[11px] font-bold text-[#FFD45C]">
                      {steps[activeStep].title}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white mt-0.5 truncate">
                    {steps[activeStep].mockupHeader}
                  </p>
                </div>

                {/* Mockup Interactive Content */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-between">
                  {steps[activeStep].mockupContent}

                  {/* Complete Circle Visual Pill */}
                  <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-[#6D28D9]/15 to-[#FFD45C]/15 border border-white/10 text-center">
                    <p className="text-[10px] text-zinc-400 font-medium">Kinjo Loop Integrity</p>
                    <p className="text-xs font-bold text-white">
                      Step {activeStep + 1} of 4 · Verified Intent
                    </p>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full pb-2 pt-1 flex justify-center bg-black">
                  <div className="w-24 h-1 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
