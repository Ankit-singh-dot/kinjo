"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Smartphone,
  Check,
  CheckCircle2,
  Heart,
  Share2,
  MapPin,
  Search,
  Bell,
  ArrowRight,
  User,
  History,
  MessageSquare,
  ChevronDown,
  Globe,
  Plus,
  Compass,
  Star,
} from "lucide-react";

export function RealAppScreensShowcase() {
  const [selectedScreen, setSelectedScreen] = useState<"theRoom" | "profile" | "discovery" | "onboarding">("theRoom");
  const [mayaNudged, setMayaNudged] = useState(true);
  const [ankitNudged, setAnkitNudged] = useState(false);
  const [snehaNudged, setSnehaNudged] = useState(false);
  const [activeTabRoom, setActiveTabRoom] = useState<"matches" | "everyone">("matches");
  const [discoveryCategory, setDiscoveryCategory] = useState("All Events");

  const handleNudgeMaya = () => {
    setMayaNudged(!mayaNudged);
    if (!mayaNudged) {
      try {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.6 },
          colors: ["#6D28D9", "#FFD45C", "#FFFFFF"],
        });
      } catch (e) {}
    }
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#08080d] overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#6D28D9]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFD45C]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6D28D9]/20 border border-[#6D28D9]/40 text-xs font-semibold text-[#FFD45C] mb-4">
            <Smartphone className="w-3.5 h-3.5 text-[#FFD45C]" />
            <span>AUTHENTIC APP EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Designed for live spaces. <br />
            <span className="text-gradient-violet">Explore the real UI.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Switch between the four core screens of Kinjo: The Room live matching, verified highlight profiles, real-time discovery maps, and custom onboarding.
          </p>
        </div>

        {/* Screen Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setSelectedScreen("theRoom")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              selectedScreen === "theRoom"
                ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40 scale-105"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#FFD45C]" />
            <span>The Room (Design Nights #43)</span>
          </button>

          <button
            onClick={() => setSelectedScreen("profile")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              selectedScreen === "profile"
                ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40 scale-105"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>Verified Profile (Aarav Mehta)</span>
          </button>

          <button
            onClick={() => setSelectedScreen("discovery")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              selectedScreen === "discovery"
                ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40 scale-105"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>Discovery & Map (Hi! Parth 👋)</span>
          </button>

          <button
            onClick={() => setSelectedScreen("onboarding")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              selectedScreen === "onboarding"
                ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40 scale-105"
                : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>Make It Yours (Onboarding)</span>
          </button>
        </div>

        {/* Central Display: iPhone Mockup Container with Screen Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          {/* Left: Screen Contextual Explainer */}
          <div className="lg:col-span-6 text-left space-y-5">
            {selectedScreen === "theRoom" && (
              <div className="animate-fade-in space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#6D28D9]/20 text-[#B892FF] border border-[#6D28D9]/30">
                  SCREEN 01 · VENUE MATCHING
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  The Room: Design Nights #43
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  &ldquo;5 people match <strong>&lsquo;designer co-founder, fintech&rsquo;</strong> — scroll: cards roll up from behind, through the front, and back over the top.&rdquo;
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-zinc-300">
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFD45C]" />
                    <span><strong>Maya Joshi (94% Match)</strong>: Ex-Razorpay product designer seeking fintech co-founder</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFD45C]" />
                    <span><strong>Ankit Kulkarni (87% Match)</strong>: Founding engineer, fintech</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFD45C]" />
                    <span><strong>Sneha Rao (81% Match)</strong>: Brand studio of one</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFD45C]" />
                    <span><strong>Vikram Kher (74% Match)</strong>: Freelance motion designer</span>
                  </p>
                </div>
              </div>
            )}

            {selectedScreen === "profile" && (
              <div className="animate-fade-in space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#FFD45C]/20 text-[#FFD45C] border border-[#FFD45C]/30">
                  SCREEN 02 · HIGHLIGHTS & INTENT
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Aarav Mehta · Product Designer
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  &ldquo;Designing fintech things by day, sketching strangers at events by night. Ask me about my ever-growing map collection.&rdquo;
                </p>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-[#171724] border border-[#FFD45C]/30">
                    <span className="text-[10px] font-bold text-[#FFD45C] uppercase block mb-0.5">
                      ACHIEVEMENT
                    </span>
                    <p className="text-white font-medium">Shipped a design system used by 40 teams</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171724] border border-[#6D28D9]/40">
                    <span className="text-[10px] font-bold text-[#B892FF] uppercase block mb-0.5">
                      ICEBREAKER
                    </span>
                    <p className="text-white font-medium">Ask me why I once judged a vada pav contest</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171724] border border-white/10">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase block mb-0.5">
                      FUN FACT
                    </span>
                    <p className="text-white font-medium">I collect hand-drawn maps of cities I visit</p>
                  </div>
                </div>
              </div>
            )}

            {selectedScreen === "discovery" && (
              <div className="animate-fade-in space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  SCREEN 03 · MAP & VENUE RADAR
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Hi! Parth 👋 · Discovery
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Browse verified events near you with real-time purple beacons. View attendee headcounts, RSVP status, and popular venues like The Shard (London) & The Grand Bhagwati.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-zinc-300">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#6D28D9]" />
                    <span>Location: Ahmedabad with global chapters (Mumbai, London, Bengaluru)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#FFD45C]" />
                    <span>Interactive map beacons with live pulse</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFD45C]" />
                    <span>Curated Popular Venues with 4.5+ star rating</span>
                  </p>
                </div>
              </div>
            )}

            {selectedScreen === "onboarding" && (
              <div className="animate-fade-in space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#6D28D9]/20 text-[#B892FF] border border-[#6D28D9]/30">
                  SCREEN 04 · ONBOARDING FLOW
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Make It Yours
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  &ldquo;Your handle is a little gift. First come first served.&rdquo; Build your intentional profile in under 2 minutes with SMS OTP verification.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-zinc-300">
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFD45C]" />
                    <span>Handle: @aarav_m (Locked for 30 days)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFD45C]" />
                    <span>Headline: Design lead — I collect odd maps</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FFD45C]" />
                    <span>Company: Freehand Labs</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right: The Interactive Phone Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[340px] sm:w-[375px] rounded-[50px] p-3.5 bg-gradient-to-b from-[#2e2e3d] via-[#161622] to-[#0a0a10] shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_70px_rgba(109,40,217,0.3)] border border-white/20">
              <div className="relative rounded-[42px] bg-black overflow-hidden border border-white/10 flex flex-col h-[670px] text-left">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-6 pt-3.5 pb-2 text-[11px] font-semibold text-white/90 select-none">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full border border-white/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px]">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-white/80 rounded-2xs p-[0.5px]">
                      <div className="h-full w-full bg-white" />
                    </div>
                  </div>
                </div>

                {/* Dynamic Screen Content */}
                {selectedScreen === "theRoom" && (
                  <div className="flex-1 flex flex-col overflow-y-auto scrollbar-none animate-fade-in">
                    {/* Header */}
                    <div className="px-5 pt-2 pb-3 border-b border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-400 text-xs font-mono uppercase">THE ROOM</span>
                          <span className="text-white text-xs font-bold">Design Nights #43</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFD45C]/15 text-[#FFD45C] border border-[#FFD45C]/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD45C] animate-pulse" />
                          42 IN
                        </span>
                      </div>

                      {/* Tabs */}
                      <div className="flex rounded-full bg-[#151520] p-1 border border-white/5">
                        <button
                          onClick={() => setActiveTabRoom("matches")}
                          className={`flex-1 py-1 text-center text-xs font-semibold rounded-full transition-all ${
                            activeTabRoom === "matches"
                              ? "bg-[#6D28D9] text-white shadow"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          Your matches · 5
                        </button>
                        <button
                          onClick={() => setActiveTabRoom("everyone")}
                          className={`flex-1 py-1 text-center text-xs font-semibold rounded-full transition-all ${
                            activeTabRoom === "everyone"
                              ? "bg-[#6D28D9] text-white shadow"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          Everyone · 42
                        </button>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 space-y-3 flex-1 overflow-y-auto scrollbar-none">
                      <div>
                        <h4 className="text-base font-black text-white">Your ride tonight</h4>
                        <p className="text-[11px] text-zinc-400 leading-snug">
                          5 people match &ldquo;designer co-founder, fintech&rdquo; — scroll: cards roll up from behind.
                        </p>
                      </div>

                      {/* Maya Card */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1d1333] to-[#101018] border-2 border-[#6D28D9] shadow-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#6D28D9]">
                              <Image src="/images/people_maya_joshi.jpg" alt="Maya" fill className="object-cover" />
                            </div>
                            <div>
                              <h5 className="text-xs font-bold text-white">Maya Joshi</h5>
                              <p className="text-[10px] text-zinc-400">Product designer · ex-Razorpay</p>
                            </div>
                          </div>
                          <span className="text-sm font-black text-[#FFD45C]">94%</span>
                        </div>
                        <p className="text-[11px] text-zinc-300 mb-3">
                          Designer looking for a founder to build with — and she&apos;s deep in fintech already.
                        </p>
                        <button
                          onClick={handleNudgeMaya}
                          className="w-full py-2 rounded-xl bg-[#6D28D9] hover:bg-[#7C3AED] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow"
                        >
                          {mayaNudged ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#FFD45C]" />
                              <span>Nudged — they&apos;ll feel it</span>
                            </>
                          ) : (
                            <span>Send a nudge</span>
                          )}
                        </button>
                      </div>

                      {/* Ankit Kulkarni Card */}
                      <div className="p-3 rounded-2xl bg-[#121219] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-emerald-800/60 border border-emerald-500/50 flex items-center justify-center text-xs font-bold text-white">
                            AK
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Ankit Kulkarni</h5>
                            <p className="text-[10px] text-zinc-400">Founding engineer, fintech</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#FFD45C]">87%</span>
                      </div>

                      {/* Sneha Rao Card */}
                      <div className="p-3 rounded-2xl bg-[#121219] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-[#3d2c16] border border-[#FFD45C]/50 flex items-center justify-center text-xs font-bold text-[#FFD45C]">
                            SR
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Sneha Rao</h5>
                            <p className="text-[10px] text-zinc-400">Brand studio of one</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-zinc-300">81%</span>
                      </div>

                      {/* Vikram Kher Card */}
                      <div className="p-3 rounded-2xl bg-[#121219] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-[#1b253b] border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                            VK
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Vikram Kher</h5>
                            <p className="text-[10px] text-zinc-400">Freelance motion designer</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-zinc-400">74%</span>
                      </div>

                      <p className="text-[10px] text-center text-zinc-500 pt-1">
                        37 more are in the room — new matches hop on the ride.
                      </p>
                    </div>
                  </div>
                )}

                {selectedScreen === "profile" && (
                  <div className="flex-1 flex flex-col overflow-y-auto scrollbar-none animate-fade-in p-4 text-xs">
                    <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                      <span className="text-zinc-400 text-xs font-bold">Edit profile</span>
                      <button className="px-3 py-1 rounded-full bg-[#6D28D9] text-white text-[11px] font-bold">
                        Save
                      </button>
                    </div>

                    {/* Avatar */}
                    <div className="flex flex-col items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#6D28D9] mb-1">
                        <Image src="/images/people_aarav_mehta.jpg" alt="Aarav" fill className="object-cover" />
                      </div>
                      <span className="text-[10px] text-[#B892FF] font-semibold">Change photo</span>
                    </div>

                    {/* Name & Headline */}
                    <div className="space-y-2 mb-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[9px] text-zinc-500 uppercase font-mono">NAME</span>
                        <p className="text-white font-bold text-xs">Aarav Mehta</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[9px] text-zinc-500 uppercase font-mono">HEADLINE</span>
                        <p className="text-white font-bold text-xs">Product designer, Mumbai</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[9px] text-zinc-500 uppercase font-mono">ABOUT</span>
                        <p className="text-zinc-300 text-[11px] leading-relaxed">
                          Designing fintech things by day, sketching strangers at events by night. Ask me about my ever-growing map collection.
                        </p>
                      </div>
                    </div>

                    {/* Highlights 3 of 10 */}
                    <div className="mb-3">
                      <span className="text-[10px] text-zinc-400 font-bold block mb-1.5">HIGHLIGHTS (3 OF 10)</span>
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-lg bg-[#FFD45C]/15 border border-[#FFD45C]/30 text-white text-[10px]">
                          <span className="font-extrabold text-[#FFD45C] block">ACHIEVEMENT</span>
                          Shipped a design system used by 40 teams
                        </div>
                        <div className="p-2 rounded-lg bg-[#6D28D9]/20 border border-[#6D28D9]/40 text-white text-[10px]">
                          <span className="font-extrabold text-[#B892FF] block">FUN FACT</span>
                          I collect hand-drawn maps of cities I visit
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-white text-[10px]">
                          <span className="font-extrabold text-emerald-400 block">ICEBREAKER</span>
                          Ask me why I once judged a vada pav contest
                        </div>
                      </div>
                    </div>

                    {/* Interests */}
                    <div className="mb-2">
                      <span className="text-[10px] text-zinc-400 font-bold block mb-1">INTERESTS</span>
                      <div className="flex flex-wrap gap-1">
                        {["Design", "Film", "Food walks", "Indie music", "AI"].map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-[9px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedScreen === "discovery" && (
                  <div className="flex-1 flex flex-col overflow-y-auto scrollbar-none animate-fade-in text-xs">
                    {/* Top App Header */}
                    <div className="p-4 pb-2 border-b border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-white">Hi! Parth 👋</h4>
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded-full bg-white/5 text-zinc-400">
                            <Search className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 rounded-full bg-white/5 text-zinc-400">
                            <Bell className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-zinc-300">
                        <MapPin className="w-3 h-3 text-[#FFD45C]" />
                        <span className="font-bold">Ahmedabad</span>
                        <ChevronDown className="w-3 h-3 text-zinc-500" />
                      </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="p-3 pb-1 flex gap-1.5 overflow-x-auto scrollbar-none">
                      {["All Events", "Networking", "Startups", "Tech"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setDiscoveryCategory(cat)}
                          className={`px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${
                            discoveryCategory === cat
                              ? "bg-[#6D28D9] text-white"
                              : "bg-white/5 text-zinc-400"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Current Events */}
                    <div className="p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-[11px]">Current Events</span>
                        <span className="text-[10px] text-[#B892FF] font-semibold">View All</span>
                      </div>

                      <div className="rounded-2xl overflow-hidden bg-[#13131c] border border-white/10">
                        <div className="relative h-24 w-full">
                          <Image src="/images/event_founders_mixer.jpg" alt="Event" fill className="object-cover" />
                        </div>
                        <div className="p-2.5">
                          <span className="text-[9px] text-zinc-400 font-mono">THU, OCT 24 • 7:00PM</span>
                          <h5 className="font-bold text-white text-xs">Tech Leader Meetup</h5>
                          <p className="text-[10px] text-zinc-400">The Shard, London</p>
                        </div>
                      </div>
                    </div>

                    {/* Events Near You - Map Simulation */}
                    <div className="p-3 pt-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white text-[11px]">Events Near You</span>
                        <span className="text-[10px] text-[#FFD45C] font-semibold">Open in Map</span>
                      </div>
                      <div className="h-28 rounded-2xl bg-[#161622] border border-white/10 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                        {/* Purple Map Beacons */}
                        <div className="absolute top-6 left-12 w-4 h-4 rounded-full bg-[#6D28D9] flex items-center justify-center animate-ping opacity-75" />
                        <div className="absolute top-6 left-12 w-4 h-4 rounded-full bg-[#6D28D9] border-2 border-white shadow-lg" />

                        <div className="absolute bottom-8 right-16 w-4 h-4 rounded-full bg-[#6D28D9] flex items-center justify-center animate-ping opacity-75 [animation-delay:0.5s]" />
                        <div className="absolute bottom-8 right-16 w-4 h-4 rounded-full bg-[#6D28D9] border-2 border-white shadow-lg" />

                        <div className="absolute top-10 right-28 w-3.5 h-3.5 rounded-full bg-[#FFD45C] border-2 border-black" />
                        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[9px] font-bold border border-white/20 z-10">
                          3 Venues Active
                        </span>
                      </div>
                    </div>

                    {/* Discovery Bottom Nav */}
                    <div className="mt-auto border-t border-white/10 py-2 px-4 flex items-center justify-around text-[9px] text-zinc-400 bg-black">
                      <div className="flex flex-col items-center text-[#6D28D9] font-bold">
                        <Compass className="w-4 h-4" />
                        <span>Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <History className="w-4 h-4" />
                        <span>History</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <MessageSquare className="w-4 h-4" />
                        <span>Kin-jod</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedScreen === "onboarding" && (
                  <div className="flex-1 flex flex-col overflow-y-auto scrollbar-none animate-fade-in p-4 text-xs">
                    <div className="mb-4">
                      <h4 className="text-base font-black text-white">
                        Make it <span className="text-[#6D28D9]">yours</span>
                      </h4>
                      <p className="text-[10px] text-zinc-400">
                        Your handle is your identity. Everything else just makes better introductions.
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-4">
                      <div className="flex items-center justify-between mb-1 text-[10px]">
                        <span className="text-zinc-400">YOUR PROFILE</span>
                        <span className="text-[#FFD45C] font-bold">80%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[80%] bg-gradient-to-r from-[#6D28D9] to-[#FFD45C]" />
                      </div>
                      <p className="text-[9px] text-zinc-500 mt-1">People can easily meet you now</p>
                    </div>

                    {/* Form elements */}
                    <div className="space-y-2.5">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-[#6D28D9]/40">
                        <span className="text-[9px] text-[#B892FF] font-mono">YOUR HANDLE — A LITTLE GIFT</span>
                        <p className="text-white font-bold text-xs">@aarav_m</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[9px] text-zinc-500 font-mono">HEADLINE</span>
                        <p className="text-white font-bold text-xs">Design lead — I collect odd maps</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[9px] text-zinc-500 font-mono">COMPANY</span>
                        <p className="text-white font-bold text-xs">Freehand Labs</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-[9px] text-zinc-500 font-mono">SMS VERIFICATION</span>
                        <div className="flex items-center justify-between text-[11px] mt-1">
                          <span className="text-zinc-300 font-mono">+91 98765 43210</span>
                          <span className="text-[#FFD45C] font-mono font-bold">[ 8 3 5 8 ]</span>
                        </div>
                      </div>
                    </div>

                    <button className="mt-auto py-2.5 rounded-xl bg-[#6D28D9] text-white font-bold text-xs shadow">
                      Continue to The Room →
                    </button>
                  </div>
                )}

                {/* Home Indicator */}
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
