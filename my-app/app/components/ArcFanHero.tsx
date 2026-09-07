"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";

interface FanCard {
  id: string;
  name: string;
  role: string;
  tag: string;
  category: "cofounders" | "design" | "tech" | "investors";
  matchScore: number;
  image: string;
  city: string;
  highlight: string;
  details: string;
  intent: string;
  skills: string[];
  color: string;
  badgeBg: string;
}

const arcCards: FanCard[] = [
  {
    id: "c1",
    name: "Vikram Kher",
    role: "Creative Director & 3D Lead",
    tag: "CREATIVE & 3D",
    category: "design",
    matchScore: 78,
    image: "/images/people_vikram_kher.jpg",
    city: "Bengaluru",
    highlight: "Available for product launch 3D creative direction & brand films",
    details:
      "Built visual systems for top global consumer tech brands. Deep expertise in 3D direction and interactive launch experiences.",
    intent: "Creative collaboration with funded tech teams",
    skills: ["3D Creative", "Motion Systems", "Brand Positioning"],
    color: "bg-[#FAF5FF] border-[#6D28D9]/20",
    badgeBg: "bg-[#6D28D9]/10 text-[#6D28D9]",
  },
  {
    id: "c2",
    name: "Ankit Kulkarni",
    role: "Founding Engineer · Core Payments",
    tag: "TECH LEAD",
    category: "tech",
    matchScore: 87,
    image: "/images/event_ai_builders.jpg",
    city: "Bengaluru",
    highlight: "Ex-Razorpay engineer building ultra-fast transaction pipelines",
    details:
      "Architected real-time settlement rails processing 10M+ daily transactions. Looking to join an early-stage fintech team as Founding Tech Lead / CTO.",
    intent: "Fintech Co-founder / Founding Engineer role",
    skills: ["Go / Rust", "UPI Settlement", "Distributed Rails"],
    color: "bg-[#F0FDF4] border-emerald-200",
    badgeBg: "bg-emerald-100 text-emerald-800",
  },
  {
    id: "c3",
    name: "Maya Joshi",
    role: "Product Design Lead · Ex-Razorpay",
    tag: "CO-FOUNDER SEEK",
    category: "cofounders",
    matchScore: 94,
    image: "/images/people_maya_joshi.jpg",
    city: "Mumbai",
    highlight: "Looking for a founder to build consumer fintech & checkout rails",
    details:
      "Shipped consumer payment checkouts used by 30M+ users. Specializes in frictionless verification, typography, and viral onboarding mechanics.",
    intent: "Pre-seed Fintech Co-founder & Equity Partner",
    skills: ["Design Systems", "Figma", "Fintech UX", "Pre-seed MVP"],
    color: "bg-[#FFFDF5] border-amber-300",
    badgeBg: "bg-[#FFD45C] text-neutral-950 font-bold",
  },
  {
    id: "c4",
    name: "Aarav Mehta",
    role: "Design Lead @ Freehand Labs",
    tag: "DESIGN SYSTEMS",
    category: "design",
    matchScore: 89,
    image: "/images/people_aarav_mehta.jpg",
    city: "Mumbai",
    highlight: "Shipped enterprise design systems deployed across 40+ engineering squads",
    details:
      "Specialist in zero-to-one design architecture, token pipelines, and accessibility. Mentor at Bombay Design Week.",
    intent: "Advising seed-stage tech teams & design leadership",
    skills: ["Design Tokens", "React Component UI", "Enterprise UX"],
    color: "bg-[#F8FAFC] border-slate-200",
    badgeBg: "bg-slate-100 text-slate-800",
  },
  {
    id: "c5",
    name: "Grace R.",
    role: "Managing Partner · First Cheques",
    tag: "PRE-SEED INVESTOR",
    category: "investors",
    matchScore: 96,
    image: "/images/people_grace_r.jpg",
    city: "Mumbai & London",
    highlight: "30+ pre-seed deals, writing ₹50L–₹2Cr lead cheques for Indian B2B tech",
    details:
      "Hands-on operator turned investor. Leads First Cheques syndicate backing repeat operators in fintech, logistics, and developer tooling.",
    intent: "Active deployment in early-stage founder rounds",
    skills: ["Pre-seed Deals", "Syndicate Lead", "Go-To-Market"],
    color: "bg-[#FFFBEB] border-amber-200",
    badgeBg: "bg-amber-100 text-amber-900",
  },
  {
    id: "c6",
    name: "Sneha Rao",
    role: "Brand Director & Editorial Lead",
    tag: "BRAND STRATEGY",
    category: "design",
    matchScore: 81,
    image: "/images/people_priya_rao.jpg",
    city: "Bengaluru",
    highlight: "Crafting distinct voice & category positioning for high-growth startups",
    details:
      "Helped 4 startups launch their global rebrands. Expert in narrative-driven launch films, typography standards, and press strategy.",
    intent: "Strategic narrative design & brand advisory",
    skills: ["Narrative Design", "Brand Architecture", "Media PR"],
    color: "bg-[#FFF7ED] border-orange-200",
    badgeBg: "bg-orange-100 text-orange-900",
  },
];

interface ArcFanHeroProps {
  onOpenJoinModal: (type?: string) => void;
  onExploreEvents: () => void;
}

export function ArcFanHero({ onOpenJoinModal, onExploreEvents }: ArcFanHeroProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Maya Joshi centered initially
  const [modalCard, setModalCard] = useState<FanCard | null>(null);
  const [nudgedCards, setNudgedCards] = useState<string[]>([]);
  const total = arcCards.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const handleQuickNudge = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!nudgedCards.includes(cardId)) {
      setNudgedCards((prev) => [...prev, cardId]);
      try {
        confetti({
          particleCount: 35,
          spread: 50,
          origin: { y: 0.6 },
          colors: ["#6D28D9", "#FFD45C", "#111827"],
        });
      } catch (err) {}
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalCard(null);
      if (!modalCard) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, modalCard]);

  const handleConnectInModal = () => {
    setModalCard(null);
    onOpenJoinModal("attendee");
    try {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.5 },
        colors: ["#6D28D9", "#FFD45C", "#111827"],
      });
    } catch (e) {}
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden flex flex-col items-center justify-center bg-[#FAFAFA] text-neutral-900 border-b border-neutral-200/80">
      {/* ========================================================================= */}
      {/* 1. ARCHITECTURAL BRAND WATERMARK (Kinjo Logo Backdrop)                   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <div className="relative w-[700px] sm:w-[950px] md:w-[1200px] h-[360px] opacity-[0.045] grayscale contrast-200">
          <Image
            src="/kinjo.svg"
            alt="Kinjo Brand"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. REAL APP SCREEN SILHOUETTES IN BACKGROUND (Subtle, compact dimensions) */}
      {/* ========================================================================= */}
      
      {/* LEFT FLANK: Real App Screens (Dashboard Map Radar & Kin-jod Chat) */}
      <div className="hidden lg:block absolute -left-8 xl:left-4 top-28 pointer-events-none select-none z-0">
        {/* Screen 1: Dashboard / Map Radar (Compact size) */}
        <div className="relative w-[130px] xl:w-[155px] h-[260px] xl:h-[310px] rounded-[22px] border border-neutral-300/60 shadow-md overflow-hidden [transform:perspective(1200px)_rotateY(14deg)_rotateZ(-5deg)] opacity-[0.14] transition-all duration-500">
          <Image
            src="/Dashboard.png"
            alt="Kinjo Map Radar"
            fill
            sizes="155px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAFAFA]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
        </div>

        {/* Screen 2: Kin-jod Double Opt-in Chat (Stacked slightly lower) */}
        <div className="relative -mt-24 ml-6 w-[105px] xl:w-[125px] h-[190px] xl:h-[225px] rounded-[18px] border border-neutral-300/60 shadow-sm overflow-hidden [transform:perspective(1200px)_rotateY(10deg)_rotateZ(3deg)] opacity-[0.11] transition-all duration-500">
          <Image
            src="/chat.png"
            alt="Kinjo Chat"
            fill
            sizes="125px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAFAFA]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
        </div>
      </div>

      {/* RIGHT FLANK: Real App Screens (The Room & Verified Profile Editor) */}
      <div className="hidden lg:block absolute -right-8 xl:right-4 top-28 pointer-events-none select-none z-0">
        {/* Screen 3: The Room Live Attendee Screen (Compact size) */}
        <div className="relative w-[130px] xl:w-[155px] h-[260px] xl:h-[310px] rounded-[22px] border border-neutral-300/60 shadow-md overflow-hidden [transform:perspective(1200px)_rotateY(-14deg)_rotateZ(5deg)] opacity-[0.14] transition-all duration-500">
          <Image
            src="/img3.png"
            alt="The Room"
            fill
            sizes="155px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FAFAFA]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
        </div>

        {/* Screen 4: Verified Profile Editor */}
        <div className="relative -mt-24 mr-6 w-[105px] xl:w-[125px] h-[190px] xl:h-[225px] rounded-[18px] border border-neutral-300/60 shadow-sm overflow-hidden [transform:perspective(1200px)_rotateY(-10deg)_rotateZ(-3deg)] opacity-[0.11] transition-all duration-500">
          <Image
            src="/img1.png"
            alt="Profile Editor"
            fill
            sizes="125px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FAFAFA]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN HERO CONTENT & EDITORIAL TYPOGRAPHY                               */}
      {/* ========================================================================= */}
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        {/* Clean Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 rounded-full shadow-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Intentional Live Networking · Find Your Kind</span>
        </div>

        {/* Bold Editorial Headline */}
        <h1 className="text-[11vw] sm:text-[8vw] md:text-[5.5vw] font-black tracking-[-0.05em] leading-[0.92] text-neutral-950 mb-5 max-w-5xl">
          People are<br />
          <span className="text-neutral-300">Possibilities.</span>
        </h1>

        {/* Brand Statement Description */}
        <p className="max-w-xl text-base md:text-lg text-neutral-600 font-medium leading-relaxed mb-8">
          Built on the philosophy of curation over abundance. Kinjo transforms accidental encounters into intentional connections.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-10 z-20 relative">
          <button
            type="button"
            onClick={() => onOpenJoinModal("attendee")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2.5 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get Kinjo Free</span>
            <ArrowRight className="w-4 h-4 text-[#FFD45C]" />
          </button>

          <button
            type="button"
            onClick={onExploreEvents}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 font-semibold text-sm border border-neutral-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:scale-105 active:scale-95"
          >
            <span>How an Evening Unfolds</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 4. 3D FAN ARC CAROUSEL WITH WORKING CONTROLS                              */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-[1250px] select-none my-2">
          <div className="relative w-full h-[380px] sm:h-[420px] md:h-[460px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
              {arcCards.map((card, idx) => {
                let diff = idx - activeIndex;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isVisible = Math.abs(diff) <= 3;
                if (!isVisible) return null;

                const isCenter = diff === 0;
                const xStep =
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? 160
                    : typeof window !== "undefined" && window.innerWidth < 1024
                    ? 220
                    : 280;
                const xPos = diff * xStep;
                const yPos = Math.pow(Math.abs(diff), 2) * 22;
                const rot = diff * 5.5;
                const scale = isCenter ? 1.02 : Math.max(0.78, 1 - Math.abs(diff) * 0.1);
                const opacity = isCenter ? 1 : Math.max(0.45, 1 - Math.abs(diff) * 0.22);
                const zIndex = 30 - Math.abs(diff) * 5;
                const isNudged = nudgedCards.includes(card.id);

                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={false}
                    animate={{
                      x: xPos,
                      y: yPos,
                      rotateZ: rot,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 28,
                      mass: 0.8,
                    }}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveIndex(idx);
                      } else {
                        setModalCard(card);
                      }
                    }}
                    className={`absolute top-4 md:top-8 cursor-pointer ${
                      isCenter ? "cursor-pointer" : "hover:brightness-95"
                    }`}
                    style={{
                      transformOrigin: "center bottom",
                      willChange: "transform, opacity",
                    }}
                  >
                    {/* Clean Pro Card Design */}
                    <div
                      className={`${
                        card.color
                      } w-[230px] sm:w-[270px] md:w-[310px] h-[310px] sm:h-[340px] md:h-[370px] rounded-[2rem] p-5 md:p-6 border flex flex-col justify-between transition-all duration-300 ${
                        isCenter
                          ? "shadow-2xl ring-4 ring-neutral-950/10 scale-[1.01]"
                          : "shadow-sm hover:shadow-md"
                      }`}
                    >
                      {/* Top Row: Category Badge & Match Score */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-black/5 uppercase tracking-wider ${card.badgeBg}`}
                        >
                          {card.tag}
                        </span>
                        <span className="text-[11px] font-mono font-bold text-neutral-800 bg-white px-2 py-0.5 rounded-full border border-neutral-200 shadow-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#6D28D9]" />
                          {card.matchScore}%
                        </span>
                      </div>

                      {/* Middle: Photo & Details */}
                      <div className="my-auto flex flex-col items-center text-center pt-2">
                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-white shadow-md mb-2">
                          <Image
                            src={card.image}
                            alt={card.name}
                            fill
                            sizes="72px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex items-center gap-1.5 justify-center">
                          <h3 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                            {card.name}
                          </h3>
                          <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />
                        </div>
                        <p className="text-xs text-neutral-600 font-medium line-clamp-1">
                          {card.role}
                        </p>
                        <p className="text-[11px] text-neutral-500 font-mono mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-neutral-400" />
                          {card.city}
                        </p>
                        <p className="text-[11.5px] text-neutral-700 leading-snug italic mt-2 line-clamp-2 px-1 font-serif">
                          &ldquo;{card.highlight}&rdquo;
                        </p>
                      </div>

                      {/* Bottom: Skill Chips & Tactile Nudge Button */}
                      <div className="border-t border-neutral-200/80 pt-3 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1 max-w-[150px]">
                          {card.skills.slice(0, 2).map((s) => (
                            <span
                              key={s}
                              className="text-[9px] font-mono font-medium text-neutral-600 bg-white/80 px-2 py-0.5 rounded-md border border-neutral-200"
                            >
                              #{s}
                            </span>
                          ))}
                        </div>

                        {isCenter ? (
                          <button
                            type="button"
                            onClick={(e) => handleQuickNudge(card.id, e)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-sm ${
                              isNudged
                                ? "bg-emerald-600 text-white"
                                : "bg-neutral-950 text-white hover:bg-neutral-800"
                            }`}
                          >
                            {isNudged ? (
                              <>
                                <Check className="w-3 h-3 text-[#FFD45C]" />
                                <span>Nudged!</span>
                              </>
                            ) : (
                              <>
                                <span>Nudge</span>
                                <ArrowRight className="w-3 h-3 text-[#FFD45C]" />
                              </>
                            )}
                          </button>
                        ) : (
                          <span className="text-[10px] font-mono text-neutral-400 bg-white/60 px-2 py-0.5 rounded-full border border-neutral-200">
                            Focus
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* SIDE FLOATING BUTTONS (High Z-Index, Instant Click) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handlePrev();
              }}
              aria-label="Previous Profile"
              className="absolute left-1 sm:left-4 md:left-8 z-[70] w-12 h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-xl border-2 border-neutral-200 hover:border-neutral-400 hover:scale-110 active:scale-90 transition-all cursor-pointer pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleNext();
              }}
              aria-label="Next Profile"
              className="absolute right-1 sm:right-4 md:right-8 z-[70] w-12 h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-xl border-2 border-neutral-200 hover:border-neutral-400 hover:scale-110 active:scale-90 transition-all cursor-pointer pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* DEDICATED CONTROLLER BAR WITH PREV/NEXT & PAGINATION DOTS */}
          <div className="flex items-center justify-center gap-3 mt-4 mb-2 z-[60] relative pointer-events-auto">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs font-mono font-bold shadow-xs hover:bg-neutral-100 flex items-center gap-1 cursor-pointer transition-all active:scale-95"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs">
              {arcCards.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(i);
                  }}
                  title={c.name}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === activeIndex
                      ? "w-7 h-2 bg-[#6D28D9]"
                      : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs font-mono font-bold shadow-xs hover:bg-neutral-100 flex items-center gap-1 cursor-pointer transition-all active:scale-95"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* QUICK-READ INSIGHTS MODAL (Zero Emojis, Bespoke Architectural Dialog) */}
      <AnimatePresence>
        {modalCard && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setModalCard(null)}
              className="fixed inset-0 bg-neutral-950/40 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl border border-neutral-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto text-left"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 pb-4 border-b border-neutral-100 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 shadow-sm shrink-0">
                    <Image
                      src={modalCard.image}
                      alt={modalCard.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${modalCard.badgeBg}`}>
                        {modalCard.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-600 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
                        {modalCard.matchScore}% Match
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-black text-neutral-950">
                        {modalCard.name}
                      </h3>
                      <ShieldCheck className="w-5 h-5 text-[#6D28D9]" />
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                      {modalCard.role} · {modalCard.city}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalCard(null)}
                  className="p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-5 overflow-y-auto flex-1 text-sm text-neutral-700">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 font-serif italic text-neutral-900">
                  &ldquo;{modalCard.highlight}&rdquo;
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Intent & Goal Tonight
                  </h4>
                  <div className="p-3.5 rounded-2xl bg-[#FFFDF5] border border-amber-200 text-neutral-900 font-medium">
                    {modalCard.intent}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Background & Track Record
                  </h4>
                  <p className="leading-relaxed text-neutral-600 text-xs sm:text-sm">
                    {modalCard.details}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Verified Competencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {modalCard.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-800"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 sm:p-8 pt-4 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between">
                <div className="text-[11px] font-mono text-neutral-500">
                  Double opt-in verification required
                </div>
                <button
                  type="button"
                  onClick={handleConnectInModal}
                  className="px-6 py-2.5 rounded-full bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-800 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD45C]" />
                  <span>Send Silent Nudge</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
