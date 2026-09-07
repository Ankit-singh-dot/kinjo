"use client";

import React from "react";
import { Quote, ShieldCheck } from "lucide-react";

export function CommunityStories() {
  const marqueeItems = [
    { quote: "Found my fintech co-founder in 20 minutes flat.", author: "Tomas", role: "Founder" },
    { quote: "Left with 3 intros to verified angel backers.", author: "Aisha", role: "Product Lead" },
    { quote: "My co-founder came from the Tuesday mixer at The Loft.", author: "Ben", role: "CEO" },
    { quote: "Zero awkward 'so what do you do' small talk.", author: "Priya", role: "Design Lead" },
    { quote: "Kinjo routed founders directly looking for payments expertise.", author: "Ankit", role: "Founding Engineer" },
    { quote: "New to Mumbai, now I have an executive circle.", author: "Lin", role: "Brand Architect" },
    { quote: "Booked 4 syndicate calls from one dinner.", author: "Zoe", role: "Pre-seed VC" },
    { quote: "The silent nudge broke the ice effortlessly.", author: "Marc", role: "CTO" },
    { quote: "Met my lead angel at the South Mumbai rooftop salon.", author: "Grace", role: "Partner" },
  ];

  return (
    <section id="stories" className="relative py-20 md:py-24 bg-[#FAFAFA] text-neutral-900 overflow-hidden border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-mono font-semibold text-neutral-700 mb-3 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
          <span className="uppercase tracking-wider">VERIFIED OUTCOMES · FIND YOUR KIND</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.04em] text-neutral-950 mb-3">
          Leaders who{" "}
          <span className="text-neutral-400">found their kind.</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-medium">
          Real outcomes from curated rooms. What happens when intentional connection replaces endless discovery.
        </p>
      </div>

      {/* 3 Main Spotlight Cards in clean light theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Story 1: Priya S */}
          <div className="rounded-[2rem] p-7 bg-white border border-neutral-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-neutral-950">2 met, 1 hired</span>
                <Quote className="w-6 h-6 text-[#6D28D9]" />
              </div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 mb-2">
                FROM A SINGLE MIXER
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-serif italic">
                &ldquo;I stated I needed a founding design lead. By the end of the evening I had met two verified designers and hired one. Zero cold prospecting.&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <div className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-bold text-neutral-800 text-xs font-mono">
                PS
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">Priya S.</h4>
                <p className="text-[11px] text-neutral-500">Founder, D2C Studio · Founders Mixer</p>
              </div>
            </div>
          </div>

          {/* Story 2: Leo M */}
          <div className="rounded-[2rem] p-7 bg-[#FFFDF8] border-2 border-amber-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-neutral-950">6 months in</span>
                <Quote className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6D28D9] mb-2">
                CO-FOUNDER MATCH
              </p>
              <p className="text-sm text-neutral-800 leading-relaxed mb-6 font-serif italic">
                &ldquo;Went looking for an enterprise fintech technical co-founder and connected with my current partner. The Room matched our goals with zero friction.&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-amber-100">
              <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center font-bold text-amber-900 text-xs font-mono">
                LM
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-950">Leo M.</h4>
                <p className="text-[11px] text-neutral-600">Co-founder & CEO · Leadership Mixer #12</p>
              </div>
            </div>
          </div>

          {/* Story 3: Devi R */}
          <div className="rounded-[2rem] p-7 bg-white border border-neutral-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-emerald-700">0 cold pitches</span>
                <Quote className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 mb-2">
                INBOUND VALUE
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-serif italic">
                &ldquo;I advise early-stage founders on regulatory compliance. Kinjo routed founders directly looking for legal advisory into my circle.&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <div className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-bold text-neutral-800 text-xs font-mono">
                DR
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900">Devi R.</h4>
                <p className="text-[11px] text-neutral-500">General Counsel · Founders Circle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Marquee Strip */}
      <div className="relative w-full overflow-hidden py-3 border-y border-neutral-200 bg-white">
        <div className="animate-marquee flex gap-4">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-200 shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
              <span className="text-xs text-neutral-700 font-medium whitespace-nowrap font-serif italic">
                &ldquo;{item.quote}&rdquo;
              </span>
              <span className="text-xs text-neutral-500 font-mono whitespace-nowrap">
                — {item.author} ({item.role})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
