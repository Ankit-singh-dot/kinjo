"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  venue: string;
  text: string;
  color: string;
  badge: string;
}

const row1: TestimonialItem[] = [
  {
    name: "Tomas Vance",
    role: "Co-Founder & CEO, Finlayer",
    venue: "The Loft Chapter",
    text: "Found my fintech technical co-founder in 20 minutes flat at The Loft. We had both listed regulatory payments under our active prompts. Zero awkward small talk.",
    color: "bg-[#E8F5E9]", // soft sage green
    badge: "Found Co-Founder",
  },
  {
    name: "Aisha Merchant",
    role: "Staff Product Lead, Hyperloop Labs",
    venue: "NCPA South Mumbai",
    text: "Left the South Mumbai rooftop salon with 3 warm intros to verified pre-seed angels who actually understand developer tooling. Best evening of my quarter.",
    color: "bg-white",
    badge: "3 Angel Intros",
  },
  {
    name: "Ben Sterling",
    role: "Repeat Founder, CloudMesh",
    venue: "Leadership Mixer #12",
    text: "Stated I needed a founding design lead. By 9:30 PM I had met two verified product designers and hired one the next week. No recruiter fees, zero LinkedIn spam.",
    color: "bg-[#E1F5FE]", // soft sky blue
    badge: "Hired Design Lead",
  },
  {
    name: "Priya S. Sharma",
    role: "Founder, D2C Studio",
    venue: "Koramangala Rooftop",
    text: "Every other mixer is flooded with service agency vendors selling SEO packages. Kinjo's 50m geo-fence and closed guest list meant every single chat was high-signal.",
    color: "bg-[#FFF9C4]", // soft warm cream
    badge: "Zero Vendor Noise",
  },
  {
    name: "Ankit Kulkarni",
    role: "Founding Engineer, VectorDB",
    venue: "Tinkerspace Bandra",
    text: "The quiet prompt nudge broke the ice immediately. We spent two hours debating distributed state machines over filter coffee instead of exchanging dry business cards.",
    color: "bg-[#F3E5F5]", // soft lavender
    badge: "CTO Partnered",
  },
];

const row2: TestimonialItem[] = [
  {
    name: "Grace Radcliffe",
    role: "Partner, North Syndicate",
    venue: "The Shard London",
    text: "Deployed our pre-seed cheque into an AI infrastructure startup I met at the London Shard summit. The double opt-in format saves our syndicate months of sourcing.",
    color: "bg-[#FCE4EC]", // soft blush rose
    badge: "Cheque Deployed",
  },
  {
    name: "Leo Mukherjee",
    role: "Co-Founder, LedgerScale",
    venue: "The Loft Chapter",
    text: "Went looking for an enterprise fintech partner. Connected with my current co-founder at Leadership Mixer #12. We just closed our seed round together.",
    color: "bg-white",
    badge: "Seed Closed",
  },
  {
    name: "Devi Ramanathan",
    role: "General Counsel, Pre-Seed Circle",
    venue: "BKC Private Dinner",
    text: "I advise early-stage builders on regulatory compliance. Kinjo routed founders directly looking for legal advisory into my circle. Pure mutual serendipity.",
    color: "bg-[#E8F5E9]", // soft sage
    badge: "Inbound Advisory",
  },
  {
    name: "Marc Dupont",
    role: "Head of Engineering, Monad",
    venue: "Koramangala Rooftop",
    text: "The silent nudge on the app when you enter the room is pure magic. You know exactly who is working on what you care about before you even say hello.",
    color: "bg-[#E1F5FE]", // soft sky blue
    badge: "Zero Awkwardness",
  },
  {
    name: "Zoe Chen",
    role: "Cross-Border Syndicate Lead",
    venue: "The Shard London",
    text: "Connecting Indian technical founders with European syndicate capital at The Shard was the most productive two hours I've had all year. High craft, zero fluff.",
    color: "bg-[#FFF9C4]", // soft warm cream
    badge: "Cross-Border Deals",
  },
];

function RatingPill() {
  return (
    <div className="flex items-center gap-1 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
      <span className="text-[10px] font-mono font-bold text-neutral-400 ml-1.5 uppercase tracking-wider">
        VERIFIED ROOM
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className="flex overflow-hidden py-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-6 shrink-0"
        animate={{
          x: direction === "left" ? [0, -(items.length * 390)] : [-(items.length * 390), 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            ...(paused && { duration: 0 }),
          },
        }}
        style={paused ? { animationPlayState: "paused" } : {}}
      >
        {doubled.map((t, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, rotate: "0deg", y: -6 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className={`${t.color} w-[300px] sm:w-[350px] md:w-[380px] shrink-0 rounded-[1.75rem] p-6 sm:p-7 border border-neutral-300/70 shadow-sm hover:shadow-xl transition-all cursor-default select-none`}
            style={{
              transform: `rotate(${(idx % 2 === 0 ? -1.2 : 1.2)}deg)`,
            }}
          >
            <RatingPill />

            <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed mb-6 font-serif italic min-h-[72px]">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="border-t border-neutral-950/10 pt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neutral-900/10 border border-neutral-900/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-black font-mono text-neutral-800">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-950">{t.name}</p>
                  <p className="text-[10px] text-neutral-500 font-medium">
                    {t.role} · <span className="font-mono">{t.venue}</span>
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-mono font-bold text-neutral-700 bg-neutral-950/5 border border-neutral-950/10 px-2.5 py-1 rounded-full whitespace-nowrap shadow-2xs">
                {t.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function CommunityStories() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-[#FAFAFA] overflow-hidden border-t border-neutral-200">
      <div className="px-6 md:px-12 mb-14 sm:mb-16">
        <div className="max-w-7xl mx-auto w-full text-left">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono font-semibold text-neutral-800 shadow-xs mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span className="uppercase tracking-wider">VERIFIED ROOM OUTCOMES · FIND YOUR KIND</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] leading-[0.9] text-neutral-950">
              What Leaders Are<br />
              <span className="font-serif italic font-normal text-neutral-400">Saying.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 max-w-xl font-medium mt-4 leading-relaxed">
              Real outcomes from curated rooms. What happens when intentional connection replaces endless cold discovery. Hover over any card to pause.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Double Marquee - two opposite flowing tracks */}
      <div className="space-y-4 sm:space-y-6">
        <MarqueeRow items={row1} direction="left" speed={42} />
        <MarqueeRow items={row2} direction="right" speed={46} />
      </div>
    </section>
  );
}
