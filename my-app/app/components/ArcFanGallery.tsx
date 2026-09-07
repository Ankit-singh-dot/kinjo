"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Check, Heart, MapPin, Star } from "lucide-react";

interface FanCard {
  id: string;
  name: string;
  role: string;
  tag: string;
  matchScore?: number;
  image: string;
  city: string;
  highlight: string;
  accentColor: string;
}

const fanCards: FanCard[] = [
  {
    id: "f1",
    name: "Vikram Kher",
    role: "Motion Designer",
    tag: "3D & MOTION",
    matchScore: 74,
    image: "/images/people_vikram_kher.jpg",
    city: "Bengaluru",
    highlight: "Available for product launch animation",
    accentColor: "#6D28D9",
  },
  {
    id: "f2",
    name: "Aarav Mehta",
    role: "Design Lead",
    tag: "FINTECH · DESIGN",
    matchScore: 89,
    image: "/images/people_aarav_mehta.jpg",
    city: "Mumbai",
    highlight: "Shipped design system used by 40 teams",
    accentColor: "#FFD45C",
  },
  {
    id: "f3",
    name: "Ankit Kulkarni",
    role: "Founding Engineer",
    tag: "FULLSTACK FINTECH",
    matchScore: 87,
    image: "/images/event_ai_builders.jpg",
    city: "Bengaluru",
    highlight: "Ex-Razorpay engineer building core infra",
    accentColor: "#6D28D9",
  },
  {
    id: "f4",
    name: "Maya Joshi",
    role: "Product Designer",
    tag: "CO-FOUNDER SEEK",
    matchScore: 94,
    image: "/images/people_maya_joshi.jpg",
    city: "Mumbai",
    highlight: "Looking for a founder to build with in fintech",
    accentColor: "#FFD45C",
  },
  {
    id: "f5",
    name: "Grace R.",
    role: "Angel Investor",
    tag: "FIRST CHEQUES",
    matchScore: 96,
    image: "/images/people_grace_r.jpg",
    city: "Mumbai & London",
    highlight: "30+ pre-seed deals written, backing founders",
    accentColor: "#6D28D9",
  },
  {
    id: "f6",
    name: "Priya Rao",
    role: "Sustainable D2C",
    tag: "BRAND ARCHITECT",
    matchScore: 94,
    image: "/images/people_priya_rao.jpg",
    city: "Goa & Mumbai",
    highlight: "Building eco-conscious consumer products",
    accentColor: "#FFD45C",
  },
  {
    id: "f7",
    name: "Sneha Rao",
    role: "Brand Studio",
    tag: "SOLO STUDIO",
    matchScore: 81,
    image: "/images/community_designers.jpg",
    city: "Indiranagar",
    highlight: "Identity craft for early consumer brands",
    accentColor: "#6D28D9",
  },
  {
    id: "f8",
    name: "Nayla Baig",
    role: "Illustrator → PM",
    tag: "CREATIVE PM",
    matchScore: 68,
    image: "/images/event_design_week.jpg",
    city: "South Mumbai",
    highlight: "Crafting story-driven digital products",
    accentColor: "#FFD45C",
  },
  {
    id: "f9",
    name: "The Loft Mixer",
    role: "Founders Night",
    tag: "LIVE EVENT",
    matchScore: 98,
    image: "/images/event_founders_mixer.jpg",
    city: "Lower Parel",
    highlight: "94 going · 18 co-founder seekers inside",
    accentColor: "#6D28D9",
  },
];

interface ArcFanGalleryProps {
  onOpenJoinModal: () => void;
}

export function ArcFanGallery({ onOpenJoinModal }: ArcFanGalleryProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>("f4");
  const [mouseOffset, setMouseOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    setMouseOffset(relativeX * 12); // subtle tilt
  };

  const handleMouseLeave = () => {
    setMouseOffset(0);
  };

  const totalCards = fanCards.length;
  const angleStep = 13.5; // degrees between cards
  const arcRadius = 520; // radius of the arc curve in px

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-visible py-8 flex flex-col items-center select-none"
    >
      {/* Curved Arc Fan Container */}
      <div className="relative w-full max-w-6xl h-[360px] sm:h-[420px] flex items-end justify-center perspective-[1200px]">
        {fanCards.map((card, idx) => {
          const midIndex = (totalCards - 1) / 2;
          const indexOffset = idx - midIndex;
          const baseAngle = indexOffset * angleStep;
          const angle = baseAngle + mouseOffset;
          const rad = (angle * Math.PI) / 180;

          // Compute X and Y positions along the arch
          const x = Math.sin(rad) * arcRadius;
          // Arch reaches apex at center, dips downward on edges
          const y = (1 - Math.cos(rad)) * (arcRadius * 0.42);

          const isHovered = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              style={{
                transform: `translateX(${x}px) translateY(${y - (isHovered ? 40 : 0)}px) rotate(${angle}deg) scale(${
                  isHovered ? 1.15 : 1
                })`,
                zIndex: isHovered ? 40 : 10 + Math.round(10 - Math.abs(indexOffset)),
                transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
              }}
              className="absolute bottom-10 origin-bottom cursor-pointer"
            >
              {/* Card Body */}
              <div
                className={`relative w-[130px] sm:w-[155px] md:w-[175px] h-[190px] sm:h-[225px] md:h-[250px] rounded-3xl overflow-hidden border transition-all duration-300 ${
                  isHovered
                    ? "border-[#FFD45C] shadow-[0_20px_50px_rgba(109,40,217,0.7),0_0_30px_rgba(255,212,92,0.4)]"
                    : "border-white/15 bg-[#14141c] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-white/40"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                {/* Top Pill on Card */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span
                    style={{ backgroundColor: `${card.accentColor}30`, borderColor: `${card.accentColor}60`, color: card.accentColor }}
                    className="px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider border backdrop-blur-md"
                  >
                    {card.tag}
                  </span>
                  {card.matchScore && (
                    <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-black/70 text-[#FFD45C] border border-[#FFD45C]/40 backdrop-blur-md">
                      {card.matchScore}%
                    </span>
                  )}
                </div>

                {/* Bottom Details on Card */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                  <p className="text-xs sm:text-sm font-bold text-white truncate drop-shadow-md">
                    {card.name}
                  </p>
                  <p className="text-[10px] text-zinc-300 truncate">{card.role}</p>
                  <p className="text-[9px] text-zinc-400 font-mono mt-0.5 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-[#FFD45C]" />
                    {card.city}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Active Card Info Bar underneath the arc */}
      {hoveredCard && (
        <div className="mt-4 px-6 py-3 rounded-2xl glass-panel border border-[#6D28D9]/40 bg-[#12121c]/90 backdrop-blur-xl shadow-xl flex items-center gap-4 text-left max-w-xl animate-fade-in">
          {(() => {
            const active = fanCards.find((c) => c.id === hoveredCard);
            if (!active) return null;
            return (
              <>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#6D28D9] shrink-0">
                  <Image src={active.image} alt={active.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">{active.name}</h4>
                    <span className="text-[10px] text-[#FFD45C] font-mono font-bold">
                      {active.matchScore}% Match
                    </span>
                    <span className="text-[10px] text-zinc-400">• {active.city}</span>
                  </div>
                  <p className="text-xs text-zinc-300 truncate mt-0.5">{active.highlight}</p>
                </div>
                <button
                  onClick={onOpenJoinModal}
                  className="px-3.5 py-1.5 rounded-full bg-[#6D28D9] hover:bg-[#7C3AED] text-white text-xs font-bold shrink-0 transition-colors"
                >
                  Nudge
                </button>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
