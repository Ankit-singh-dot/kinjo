"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Check,
  MapPin,
  Users,
  Compass,
} from "lucide-react";

interface StepScene {
  id: number;
  time: string;
  stageBadge: string;
  headline: string;
  tagline: string;
  description: string;
  callout: string;
  pillColor: string;
  curatorNote: string;
}

const scenes: StepScene[] = [
  {
    id: 0,
    time: "7:00 PM",
    stageBadge: "STAGE 01 · VENUE ARRIVAL",
    headline: "You step inside. The Room activates.",
    tagline: "No scanning corners. No awkward small talk.",
    description:
      "When you walk into a partner venue like The Loft or NCPA Mumbai, Kinjo's geo-fence verifies your check-in and unlocks The Room. 42 verified founders, designers, and investors are inside tonight — with clear objectives front and center.",
    callout: "Geo-fence Verified · NCPA South Mumbai",
    pillColor: "#6D28D9",
    curatorNote:
      "The Room activates via geo-fence. 42 attendees verified. Live rides compute compatibility immediately without awkward cold intros.",
  },
  {
    id: 1,
    time: "7:15 PM",
    stageBadge: "STAGE 02 · PURPOSE MATCHING",
    headline: "Matched to what you need tonight.",
    tagline: "Intent over job titles. Who can actually help?",
    description:
      "Looking for a fintech co-founder? Kinjo computes live purpose compatibility across the room. Maya Joshi rolls up: Ex-Razorpay product designer, deep in consumer payments, looking to co-found. 94% strategic compatibility.",
    callout: "94% Strategic Compatibility · Co-founder seeking",
    pillColor: "#B45309",
    curatorNote:
      "Purpose compatibility weights shared goals (98%) and stage fit over shallow vanity job titles.",
  },
  {
    id: 2,
    time: "7:30 PM",
    stageBadge: "STAGE 03 · DOUBLE OPT-IN NUDGE",
    headline: "You send a nudge. Both say yes.",
    tagline: "Zero cold rejection. Zero guessing who is open.",
    description:
      "You tap 'Send Silent Nudge'. Maya receives a discreet notification on her phone. She accepts. A direct private channel unlocks with mutual context: 'saw your background in fintech — coffee near the patio in 5 min?' Ice broken effortlessly.",
    callout: "Double opt-in accepted · Private channel live",
    pillColor: "#6D28D9",
    curatorNote:
      "Double opt-in unlocks Kin-jod messaging. Channels stay discreet until mutual interest is established.",
  },
  {
    id: 3,
    time: "9:30 PM",
    stageBadge: "STAGE 04 · COMPLETE THE CIRCLE",
    headline: "Walk out with everyone in buckets.",
    tagline: "Your whole network organized before you leave.",
    description:
      "No lost business cards or unsaved numbers. Maya lands in your 'Co-founders' bucket. Grace lands in 'Angel Backers'. Vikram in 'Designers'. Your entire evening's outcomes are structured and exportable.",
    callout: "3 High-value connections structured",
    pillColor: "#0F766E",
    curatorNote:
      "Every encounter structures automatically into buckets: Co-founders, Angel Backers, and Designers.",
  },
];

export function InteractiveEventJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [chatReplies, setChatReplies] = useState<string[]>([]);
  // Stage 1 screen toggle: The Room (img3.png) vs Venue Guide (img2.png)
  const [stage1Screen, setStage1Screen] = useState<"theRoom" | "venueGuide">("theRoom");
  const lastScrollTime = useRef<number>(0);

  // BUTTER-SMOOTH WHEEL SCROLL LOGIC WITH STEP-LOCKING:
  // When scrolling over the theater, advances steps 0 -> 1 -> 2 -> 3 smoothly!
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 480) {
        return;
      }

      if (e.deltaY > 25) {
        // Scrolling DOWN
        if (activeStep < 3) {
          e.preventDefault();
          lastScrollTime.current = now;
          setActiveStep((prev) => prev + 1);
        }
      } else if (e.deltaY < -25) {
        // Scrolling UP
        if (activeStep > 0) {
          e.preventDefault();
          lastScrollTime.current = now;
          setActiveStep((prev) => prev - 1);
        }
      }
    },
    [activeStep]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const handleQuickReply = (text: string) => {
    if (!chatReplies.includes(text)) {
      setChatReplies((prev) => [...prev, text]);
    }
  };

  const current = scenes[activeStep];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative py-16 md:py-24 bg-[#FAFAFA] text-neutral-900 border-t border-neutral-200 overflow-hidden"
    >
      {/* Architectural Brand Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <div className="relative w-[600px] sm:w-[850px] md:w-[1100px] h-[340px] opacity-[0.035] grayscale contrast-200">
          <Image
            src="/kinjo.svg"
            alt="Kinjo Watermark"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP: Section Header & Step Switcher */}
        <div className="w-full flex flex-col items-center shrink-0 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-700 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6D28D9] animate-pulse" />
            <span className="uppercase tracking-wider font-semibold">
              HOW AN EVENING WITH KINJO UNFOLDS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-950 mb-2">
            From stepping in to walking out sorted.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium max-w-lg mb-6">
            Scroll with trackpad/mouse wheel, or click any stage to advance through the live venue experience.
          </p>

          {/* 4 Step Switcher Tabs (Clickable anywhere, 100% reliable) */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-4xl">
            {scenes.map((scene, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={scene.time}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-3 rounded-2xl text-left transition-all duration-200 border overflow-hidden cursor-pointer ${
                    isActive
                      ? "bg-white border-neutral-400 shadow-md ring-2 ring-[#6D28D9]/20 scale-[1.01]"
                      : "bg-white/60 border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[11px] font-mono font-bold ${
                        isActive ? "text-[#6D28D9]" : "text-neutral-500"
                      }`}
                    >
                      {scene.time}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-emerald-500" : "bg-neutral-300"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-xs font-bold truncate ${
                      isActive ? "text-neutral-950" : "text-neutral-500"
                    }`}
                  >
                    {scene.stageBadge.split("· ")[1]}
                  </p>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#6D28D9]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* MIDDLE: 2-Column Stage Theater with Apple-Grade Pro Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-4 max-w-lg">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-mono font-black text-neutral-300">
                0{activeStep + 1}
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border bg-white border-neutral-200 text-neutral-800 shadow-xs">
                {current.stageBadge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-neutral-950 tracking-[-0.03em] leading-tight">
              {current.headline}
            </h3>

            <p className="text-sm sm:text-base font-bold text-[#6D28D9]">
              {current.tagline}
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
              {current.description}
            </p>

            {/* CURATOR'S NOTE / ARCHITECTURE SPEC */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs text-left relative space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold text-[#6D28D9] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                  Event Architecture Spec
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  Stage 0{activeStep + 1} / 04
                </span>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                &ldquo;{current.curatorNote}&rdquo;
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {activeStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs flex items-center gap-2.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Next: {scenes[activeStep + 1].time}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFD45C]" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveStep(0)}
                  className="px-6 py-3 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold text-xs flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Replay Evening Journey</span>
                </button>
              )}

              {activeStep > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => prev - 1)}
                  className="px-4 py-3 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs active:scale-95"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              )}

              <span className="text-[11px] font-mono text-neutral-500 px-3 py-2 rounded-full bg-white border border-neutral-200 shadow-xs">
                Scroll wheel enabled ↕
              </span>
            </div>
          </div>

          {/* RIGHT: Apple-Grade Titanium Device Frame with Real App Screens */}
          <div className="lg:col-span-7 flex justify-center items-center relative py-4">
            {/* Device Titanium Frame */}
            <div className="relative w-[310px] sm:w-[340px] rounded-[50px] p-2.5 bg-gradient-to-b from-[#E5E7EB] via-[#F3F4F6] to-[#D1D5DB] border-2 border-neutral-300 shadow-2xl ring-1 ring-black/5">
              {/* Inner Screen Container */}
              <div className="relative rounded-[42px] bg-black overflow-hidden border border-neutral-300 flex flex-col h-[540px] text-left shadow-inner">
                {/* THE PHYSICAL STACKED CARD DECK */}
                <div className="relative flex-1 overflow-hidden">
                  {/* ======================================================== */}
                  {/* LAYER 0: STAGE 01 (img3.png - THE ROOM & img2.png VENUE) */}
                  {/* ======================================================== */}
                  <motion.div
                    animate={{
                      scale: activeStep === 0 ? 1 : 0.94,
                      opacity: activeStep === 0 ? 1 : 0.35,
                      y: activeStep === 0 ? 0 : -10,
                    }}
                    transition={{ type: "spring", stiffness: 280, damping: 30 }}
                    className="absolute inset-0 bg-black overflow-hidden flex flex-col"
                  >
                    {/* Screen Toggle Bar inside Phone Header */}
                    <div className="absolute top-2 left-3 right-3 z-30 flex items-center justify-between p-1 bg-black/80 backdrop-blur-md rounded-full border border-white/20">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setStage1Screen("theRoom");
                        }}
                        className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold transition-all ${
                          stage1Screen === "theRoom"
                            ? "bg-[#6D28D9] text-white shadow"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        The Room (42 In)
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setStage1Screen("venueGuide");
                        }}
                        className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold transition-all ${
                          stage1Screen === "venueGuide"
                            ? "bg-[#6D28D9] text-white shadow"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Venue Guide
                      </button>
                    </div>

                    {/* Screenshot Display */}
                    <div className="relative w-full h-full pt-10">
                      {stage1Screen === "theRoom" ? (
                        <div className="relative w-full h-full">
                          <Image
                            src="/img3.png"
                            alt="The Room Screen"
                            fill
                            priority
                            sizes="(max-width: 768px) 310px, 340px"
                            className="object-cover object-top"
                          />
                          {/* Inspection Hotspot */}
                          <div className="absolute top-[44%] left-3 right-3 p-1 rounded-2xl pointer-events-auto">
                            <div className="flex justify-end">
                              <span
                                onClick={() => setActiveStep(1)}
                                className="px-2 py-0.5 rounded-md bg-[#6D28D9] text-white text-[9px] font-mono font-bold shadow-md animate-bounce cursor-pointer"
                              >
                                Inspect Maya (94% Match) →
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src="/img2.png"
                            alt="Tinkerspace Venue Screen"
                            fill
                            sizes="(max-width: 768px) 310px, 340px"
                            className="object-cover object-top"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* ======================================================== */}
                  {/* LAYER 1: STAGE 02 (Purpose Matching - Slides UP)        */}
                  {/* ======================================================== */}
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{
                      y: activeStep >= 1 ? "0%" : "100%",
                      scale: activeStep === 1 ? 1 : (activeStep > 1 ? 0.94 : 1),
                      opacity: activeStep === 1 ? 1 : (activeStep > 1 ? 0.35 : 0),
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="absolute inset-0 p-3.5 flex flex-col justify-between overflow-hidden bg-white rounded-t-[36px] border-t-2 border-[#6D28D9] shadow-2xl z-10 text-neutral-900"
                  >
                    <div>
                      {/* Pull handle */}
                      <div className="w-16 h-1 bg-neutral-300 rounded-full mx-auto mb-3" />

                      <div className="flex items-center justify-between pb-1.5 border-b border-neutral-100 mb-2.5">
                        <span className="font-mono text-[9px] text-[#6D28D9] font-bold">
                          MATCH #1 OF 42 · PURPOSE ENGINE
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#FFD45C] text-neutral-950 font-mono font-bold text-[9px]">
                          94% COMPATIBILITY
                        </span>
                      </div>

                      {/* Maya Joshi Profile Card */}
                      <div className="p-3 rounded-2xl bg-[#FFFDF5] border border-amber-200 shadow-xs space-y-2">
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-200 shadow-xs">
                            <Image
                              src="/images/people_maya_joshi.jpg"
                              alt="Maya"
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <h5 className="font-black text-neutral-950 text-xs">Maya Joshi</h5>
                              <ShieldCheck className="w-3.5 h-3.5 text-[#6D28D9]" />
                            </div>
                            <p className="text-[10px] text-neutral-600">Product Designer · ex-Razorpay</p>
                            <span className="text-[8px] font-mono text-amber-900 font-semibold">
                              Goal: Pre-seed Fintech Co-founder
                            </span>
                          </div>
                        </div>

                        {/* Direct Quote */}
                        <p className="text-[10.5px] text-neutral-800 leading-relaxed italic bg-white p-2.5 rounded-xl border border-neutral-200 font-serif">
                          &ldquo;Designer looking for a founder to build consumer fintech with — deep in checkout UX and UPI rails.&rdquo;
                        </p>

                        {/* Compatibility Breakdown */}
                        <div className="bg-white p-2.5 rounded-xl border border-neutral-200 space-y-1.5 text-[9px]">
                          <div className="flex justify-between font-mono">
                            <span className="text-neutral-500">Goal Alignment</span>
                            <span className="text-[#6D28D9] font-bold">98% (Fintech Founder)</span>
                          </div>
                          <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                            <div className="w-[98%] h-full bg-[#6D28D9]" />
                          </div>
                          <div className="flex justify-between font-mono text-neutral-500 text-[8px]">
                            <span>Stage Focus</span>
                            <span className="text-neutral-800 font-semibold">Pre-seed / MVP Launch</span>
                          </div>
                        </div>

                        {/* Verified Tags */}
                        <div className="flex flex-wrap gap-1">
                          {["Design Systems", "Figma", "Fintech MVP", "UPI Rails"].map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded bg-neutral-100 text-[8px] font-mono text-neutral-700 border border-neutral-200"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action to nudge */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="w-full py-2.5 rounded-xl bg-neutral-950 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:bg-neutral-800"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FFD45C]" />
                      <span>Send Silent Nudge</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>

                  {/* ======================================================== */}
                  {/* LAYER 2: STAGE 03 (chat.png - REAL KIN-JOD SCREENSHOT)   */}
                  {/* ======================================================== */}
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{
                      y: activeStep >= 2 ? "0%" : "100%",
                      scale: activeStep === 2 ? 1 : (activeStep > 2 ? 0.94 : 1),
                      opacity: activeStep === 2 ? 1 : (activeStep > 2 ? 0.35 : 0),
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="absolute inset-0 bg-white rounded-t-[36px] border-t-2 border-[#6D28D9] shadow-2xl z-20 overflow-hidden"
                  >
                    {/* Real Chat Screenshot as Background */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/chat.png"
                        alt="Kin-jod Messages"
                        fill
                        sizes="(max-width: 768px) 310px, 340px"
                        className="object-cover object-top"
                      />

                      {/* Sliding In-App Chat Modal Overlay */}
                      <div className="absolute bottom-12 left-2.5 right-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#6D28D9]/40 shadow-xl space-y-2 text-neutral-900">
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-1">
                          <span className="text-[9px] font-mono text-[#6D28D9] font-bold uppercase flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Double Opt-In Live
                          </span>
                          <span className="text-[8px] text-neutral-400 font-mono">Just now</span>
                        </div>

                        {/* Incoming Message from Maya */}
                        <div className="flex items-start gap-2">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-neutral-300">
                            <Image
                              src="/images/people_maya_joshi.jpg"
                              alt="Maya"
                              fill
                              sizes="24px"
                              className="object-cover"
                            />
                          </div>
                          <div className="p-2 rounded-xl rounded-tl-none bg-neutral-100 border border-neutral-200 text-[10px] text-neutral-900 leading-snug">
                            <strong className="text-neutral-950">Maya:</strong> &ldquo;Hey Aarav! Saw you build fintech rails too — coffee near the patio in 5 min?&rdquo;
                          </div>
                        </div>

                        {/* Sent Replies */}
                        {chatReplies.map((reply, i) => (
                          <div key={i} className="flex justify-end">
                            <div className="p-2 rounded-xl rounded-tr-none bg-neutral-950 text-[10px] text-white leading-snug max-w-[80%] flex items-center gap-1.5 shadow-xs">
                              <span>{reply}</span>
                              <Check className="w-3 h-3 text-emerald-400" />
                            </div>
                          </div>
                        ))}

                        {/* Quick Reply Chips */}
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {["☕ On my way!", "See you at patio", "Grabbing a cup!"].map((chip) => (
                            <button
                              key={chip}
                              type="button"
                              onClick={() => handleQuickReply(chip)}
                              className="px-2 py-1 rounded-lg bg-neutral-100 hover:bg-[#6D28D9] hover:text-white text-[9px] font-bold text-neutral-800 transition-colors cursor-pointer border border-neutral-200"
                            >
                              {chip}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Button to proceed to Stage 4 */}
                      <div className="absolute top-3 right-3 z-30">
                        <button
                          type="button"
                          onClick={() => setActiveStep(3)}
                          className="px-2.5 py-1 rounded-full bg-neutral-950 text-white text-[9px] font-mono font-bold shadow-md cursor-pointer hover:bg-neutral-800 flex items-center gap-1"
                        >
                          <span>Outcomes</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FFD45C]" />
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* ======================================================== */}
                  {/* LAYER 3: STAGE 04 (Complete the Circle - Slides UP)      */}
                  {/* ======================================================== */}
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{
                      y: activeStep >= 3 ? "0%" : "100%",
                      scale: 1,
                      opacity: activeStep >= 3 ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className="absolute inset-0 p-3.5 flex flex-col justify-between overflow-hidden bg-white rounded-t-[36px] border-t-2 border-emerald-500 shadow-2xl z-30 text-neutral-900"
                  >
                    <div>
                      {/* Pull handle */}
                      <div className="w-16 h-1 bg-neutral-300 rounded-full mx-auto mb-3" />

                      <div className="flex items-center justify-between pb-1.5 border-b border-neutral-100 mb-2">
                        <span className="font-mono text-[9px] text-[#6D28D9] font-bold">
                          MY BUCKETS · CIRCLE COMPLETE
                        </span>
                        <span className="text-[9px] text-emerald-700 font-mono font-bold">
                          ✓ 3 STRUCTURED
                        </span>
                      </div>
                      <h4 className="font-black text-neutral-950 text-sm">Your Night, Sorted.</h4>

                      {/* 3 Tactile Physical CRM Buckets */}
                      <div className="space-y-2 mt-2.5">
                        {/* Co-founders Bucket */}
                        <div className="p-2.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                              🤝
                            </div>
                            <div>
                              <p className="text-neutral-900 font-bold text-xs">Co-founders</p>
                              <p className="text-[9px] text-neutral-600">Maya Joshi + Ankit Kulkarni</p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold text-[9px] border border-emerald-300">
                            2 VERIFIED
                          </span>
                        </div>

                        {/* Angel Backers Bucket */}
                        <div className="p-2.5 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                              💼
                            </div>
                            <div>
                              <p className="text-neutral-900 font-bold text-xs">Angel Backers</p>
                              <p className="text-[9px] text-neutral-600">Grace R. (First Cheques)</p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono font-bold text-[9px] border border-amber-300">
                            1 LEAD
                          </span>
                        </div>

                        {/* Designers Bucket */}
                        <div className="p-2.5 rounded-2xl bg-violet-50/80 border border-violet-200 flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-violet-100 text-[#6D28D9] flex items-center justify-center font-bold text-sm">
                              🎨
                            </div>
                            <div>
                              <p className="text-neutral-900 font-bold text-xs">Designers</p>
                              <p className="text-[9px] text-neutral-600">Vikram Kher (3D Lead)</p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-800 font-mono font-bold text-[9px] border border-violet-300">
                            1 CONTACT
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="space-y-1.5 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          try {
                            confetti({
                              particleCount: 50,
                              spread: 60,
                              origin: { y: 0.7 },
                              colors: ["#6D28D9", "#FFD45C", "#059669"],
                            });
                          } catch (e) {}
                        }}
                        className="w-full py-2.5 rounded-xl bg-neutral-950 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:bg-neutral-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Export All Outcomes (CSV / Notion)</span>
                      </button>
                      <p className="text-[9px] text-neutral-400 text-center font-mono">
                        Direct sync to your personal CRM
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
