"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Zap,
  Check,
  CheckCircle2,
  Users,
  ShieldAlert,
  ArrowRight,
  FolderHeart,
  MessageCircle,
  Eye,
  Sliders,
} from "lucide-react";

interface MatchProfile {
  id: string;
  initials: string;
  name: string;
  role: string;
  city: string;
  matchScore: number;
  reason: string;
  tags: string[];
  status: "available" | "nudged" | "connected";
  avatarImage?: string;
  bucketCategory: string;
}

export function TheRoomDemo() {
  const [userIntent, setUserIntent] = useState<"investor" | "cofounder" | "designer">("cofounder");
  const [nudgedList, setNudgedList] = useState<Record<string, boolean>>({
    "maya-j": true,
  });
  const [activeTab, setActiveTab] = useState<"room" | "buckets">("room");

  const initialProfiles: MatchProfile[] = [
    {
      id: "maya-j",
      initials: "MJ",
      name: "Maya Joshi",
      role: "Product Designer · ex-Razorpay",
      city: "Mumbai",
      matchScore: userIntent === "cofounder" ? 94 : userIntent === "designer" ? 97 : 78,
      reason: "Designer looking for a founder to build with — and she's deep in fintech already.",
      tags: ["Fintech", "Design Systems", "Co-founder"],
      status: "nudged",
      avatarImage: "/images/people_maya_joshi.jpg",
      bucketCategory: "Co-founders",
    },
    {
      id: "grace-r",
      initials: "GR",
      name: "Grace R.",
      role: "Angel Investor · First Cheques",
      city: "Mumbai & London",
      matchScore: userIntent === "investor" ? 96 : userIntent === "cofounder" ? 82 : 75,
      reason: "Backs pre-seed consumer & fintech founders. 30+ deals, here to write first checks tonight.",
      tags: ["Pre-seed", "SaaS", "Advisor"],
      status: "available",
      avatarImage: "/images/people_grace_r.jpg",
      bucketCategory: "Investors",
    },
    {
      id: "ken-t",
      initials: "KT",
      name: "Ken T.",
      role: "Founder, Fintech · Hyderabad",
      city: "Hyderabad",
      matchScore: userIntent === "cofounder" ? 88 : userIntent === "investor" ? 91 : 70,
      reason: "He's raising a seed round and two angels in this room already backed his previous venture.",
      tags: ["Fintech", "Angels", "Seed"],
      status: "available",
      bucketCategory: "Co-founders",
    },
    {
      id: "priya-r",
      initials: "PR",
      name: "Priya Rao",
      role: "Product Designer · Mumbai",
      city: "Mumbai",
      matchScore: userIntent === "designer" ? 95 : userIntent === "cofounder" ? 89 : 80,
      reason: "You both build sustainable consumer brands and share exact distribution playbooks.",
      tags: ["Sustainable Brands", "Branding", "Co-working"],
      status: "available",
      avatarImage: "/images/people_priya_rao.jpg",
      bucketCategory: "Designers",
    },
    {
      id: "siddharth-k",
      initials: "SK",
      name: "Siddharth K.",
      role: "Partner, Elevation Capital",
      city: "Delhi NCR",
      matchScore: userIntent === "investor" ? 93 : userIntent === "cofounder" ? 76 : 68,
      reason: "He backs early consumer-tech founders at exactly your stage. In The Room tonight.",
      tags: ["Early-stage VC", "Consumer Tech"],
      status: "available",
      bucketCategory: "Investors",
    },
    {
      id: "vikram-k",
      initials: "VK",
      name: "Vikram Kher",
      role: "Freelance Motion Designer",
      city: "Bengaluru",
      matchScore: userIntent === "designer" ? 92 : userIntent === "cofounder" ? 84 : 74,
      reason: "3D visual craft fits the new product launch you are planning this quarter.",
      tags: ["Motion", "3D Web", "Launch"],
      status: "available",
      avatarImage: "/images/people_vikram_kher.jpg",
      bucketCategory: "Designers",
    },
  ];

  const handleNudge = (id: string) => {
    setNudgedList((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      if (!prev[id]) {
        try {
          confetti({
            particleCount: 35,
            spread: 45,
            origin: { y: 0.65 },
            colors: ["#6D28D9", "#FFD45C", "#FFFFFF"],
          });
        } catch (e) {
          // ignore
        }
      }
      return next;
    });
  };

  const nudgedCount = Object.values(nudgedList).filter(Boolean).length;

  return (
    <section id="room" className="relative py-28 md:py-36 bg-[#09090e] overflow-hidden">
      {/* Visual lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6D28D9]/12 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6D28D9]/20 border border-[#6D28D9]/40 text-xs font-semibold text-[#B892FF] mb-4">
            <Zap className="w-3.5 h-3.5 text-[#FFD45C]" />
            <span>LIVE INTERACTIVE SIMULATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            The Room. <br />
            <span className="text-gradient-violet">This is where it actually clicks.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            The hardest part is the first hello. The Room shows who in the venue matches your purpose right now — so you break the ice with the people you actually came to meet.
          </p>
        </div>

        {/* Intent Controller Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl glass-panel border border-white/10 max-w-4xl mx-auto mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
            <Sliders className="w-4 h-4 text-[#FFD45C]" />
            <span>Select Your Purpose:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setUserIntent("cofounder")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                userIntent === "cofounder"
                  ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              Seeking a Co-founder
            </button>
            <button
              onClick={() => setUserIntent("investor")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                userIntent === "investor"
                  ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              Raising Pre-seed Angel Check
            </button>
            <button
              onClick={() => setUserIntent("designer")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                userIntent === "designer"
                  ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              Hiring Lead Designer
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>24 in this venue</span>
          </div>
        </div>

        {/* The Room Active Match Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialProfiles.map((p) => {
            const isNudged = !!nudgedList[p.id];
            return (
              <div
                key={p.id}
                className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border shadow-2xl ${
                  isNudged
                    ? "bg-gradient-to-br from-[#1b122e] to-[#0d0d14] border-[#6D28D9]"
                    : "bg-[#111118] hover:bg-[#151520] border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {p.avatarImage ? (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#6D28D9] shrink-0">
                          <Image src={p.avatarImage} alt={p.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[#6D28D9]/30 border border-[#6D28D9] flex items-center justify-center font-bold text-sm text-white shrink-0">
                          {p.initials}
                        </div>
                      )}
                      <div>
                        <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                          {p.name}
                          {isNudged && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                        </h3>
                        <p className="text-xs text-zinc-400">{p.role}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-black text-[#FFD45C]">{p.matchScore}%</span>
                      <p className="text-[9px] uppercase font-bold text-zinc-500">MATCH</p>
                    </div>
                  </div>

                  {/* Why You Match Reason */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 mb-4">
                    <span className="text-[10px] font-mono text-[#B892FF] font-bold uppercase block mb-1">
                      WHY YOU MATCH
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{p.reason}</p>
                  </div>

                  {/* Skills / Offers */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#6D28D9]/15 text-zinc-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Nudge */}
                <button
                  onClick={() => handleNudge(p.id)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                    isNudged
                      ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40"
                      : "bg-white hover:bg-zinc-200 text-black shadow"
                  }`}
                >
                  {isNudged ? (
                    <>
                      <Check className="w-4 h-4 text-[#FFD45C]" />
                      <span>Nudge Sent · Added to {p.bucketCategory}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
                      <span>Send a private nudge</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Live Bottom Bucket Bar */}
        <div className="mt-12 p-4 sm:p-6 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#6D28D9]/30 border border-[#6D28D9] flex items-center justify-center text-[#FFD45C]">
              <FolderHeart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {nudgedCount} Active Nudges In Your Profile
              </p>
              <p className="text-xs text-zinc-400">
                Sorted automatically into buckets: Co-founders, Designers, and To follow up.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-mono">Private until both opt-in</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
