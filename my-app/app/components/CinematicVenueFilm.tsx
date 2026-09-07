"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Plus,
  Radio,
} from "lucide-react";

interface VenueVideo {
  id: string;
  pillLabel: string;
  name: string;
  city: string;
  roomType: string;
  attendeeCount: number;
  stats: string;
  description: string;
  videoUrl: string;
  posterImage: string;
  highlightTag: string;
}

const venueVideos: VenueVideo[] = [
  {
    id: "ncpa",
    pillLabel: "NCPA South Mumbai",
    name: "NCPA South Mumbai",
    city: "South Mumbai",
    roomType: "Architectural Evening Lounge",
    attendeeCount: 42,
    stats: "8 Angel Leads · 14 Fintech Founders · 20 Product Designers",
    description:
      "Intimate evening gatherings where ambient lighting, warm acoustic spaces, and curated guest lists turn casual espresso conversations into multi-crore seed rounds.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-people-in-a-coffee-shop-talking-and-working-4882-large.mp4",
    posterImage: "/images/event_design_week.jpg",
    highlightTag: "42 Inside · Seed Deals",
  },
  {
    id: "rooftop",
    pillLabel: "Koramangala Rooftop",
    name: "Koramangala Rooftop",
    city: "Bengaluru",
    roomType: "Sunset Skyline & Founders Terrace",
    attendeeCount: 52,
    stats: "18 Repeat Operators · 12 AI Researchers · 22 Tech Leads",
    description:
      "Open-air golden hour salons looking out over Bengaluru's tech corridor. Zero vendor noise, no name tags—just high-signal builders connecting under open skies.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-having-drinks-on-a-rooftop-41662-large.mp4",
    posterImage: "/images/event_creative_rooftop.jpg",
    highlightTag: "52 Inside · Golden Hour",
  },
  {
    id: "shard",
    pillLabel: "The Shard London",
    name: "The Shard",
    city: "London Chapter",
    roomType: "Cross-Border Syndicate Summit",
    attendeeCount: 60,
    stats: "24 Pre-seed Partners · 36 Cross-border Operators",
    description:
      "32 floors above the Thames. Connecting Indian technical founders with European syndicates and global pre-seed capital in a closed-door private suite.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-city-traffic-and-buildings-at-night-4286-large.mp4",
    posterImage: "/images/event_founders_mixer.jpg",
    highlightTag: "60 Inside · Global Capital",
  },
  {
    id: "tinkerspace",
    pillLabel: "Tinkerspace Bandra",
    name: "Tinkerspace Bandra",
    city: "Bandra West, Mumbai",
    roomType: "Creative & Hardware Salon",
    attendeeCount: 38,
    stats: "16 Design System Leads · 12 Mobile Architects · 10 Angels",
    description:
      "A raw, minimalist workshop space where creative directors, hardware tinkerers, and software founders prototype together over hand-brewed filter roast.",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-creative-team-working-together-in-an-office-4876-large.mp4",
    posterImage: "/images/community_designers.jpg",
    highlightTag: "38 Inside · Prototyping",
  },
];

interface CinematicVenueFilmProps {
  onOpenJoinModal: (type?: string) => void;
}

export function CinematicVenueFilm({ onOpenJoinModal }: CinematicVenueFilmProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  // SCROLL-DRIVEN 4-IMAGE ZOOM IN:
  // As the user scrolls down through the runway, scrollYProgress progresses from 0 to 1.
  // The active venue image switches smoothly at [0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1.0].
  // Simultaneously, the image zooms in smoothly from 1.0 to 1.22 as it travels up the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Camera push-in / zoom-in as user scrolls down and section travels up
  const imageZoom = useTransform(scrollYProgress, [0, 1], [1.0, 1.22]);
  const containerRadius = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], ["0px", "0px", "0px", "0px"]);

  // Dynamically update active venue as user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let newIdx = 0;
    if (latest >= 0.75) newIdx = 3;
    else if (latest >= 0.50) newIdx = 2;
    else if (latest >= 0.25) newIdx = 1;
    else newIdx = 0;

    if (newIdx !== selectedIdx) {
      setSelectedIdx(newIdx);
    }
  });

  const activeVenue = venueVideos[selectedIdx];

  // Smooth click-to-jump to specific venue stage
  const handleSelectVenue = (idx: number) => {
    setSelectedIdx(idx);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const targetOffset = scrollTop + rect.top + (idx * 0.25 + 0.03) * totalScrollable;
        window.scrollTo({ top: targetOffset, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[350vh] bg-black text-white selection:bg-[#6D28D9] selection:text-white"
    >
      {/* STICKY FULL SCREEN VIEWPORT CONTAINER */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* ZOOM-IN MOTION CANVAS (Smoothly zooms in as user scrolls down & travels up) */}
        <motion.div
          style={{
            borderRadius: containerRadius,
          }}
          className="relative w-full h-full overflow-hidden flex items-center justify-center will-change-transform"
        >
          {/* THE 4 HIGH-RESOLUTION VENUE IMAGES WITH CONTINUOUS SCROLL ZOOM */}
          <motion.div
            style={{ scale: imageZoom }}
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            {venueVideos.map((venue, idx) => {
              const isActive = selectedIdx === idx;
              return (
                <motion.div
                  key={venue.id}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <Image
                    src={venue.posterImage}
                    alt={venue.name}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    quality={90}
                    className="object-cover object-center"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Cinema Dark Gradient Vignette Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/75 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none z-10" />

          {/* TOP BAR: Apple Header & Live Geo-fence Indicator (Zero AI Dots) */}
          <div className="absolute top-6 sm:top-10 left-6 sm:left-12 right-6 sm:right-12 flex items-center justify-between z-30 pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-white/70 uppercase">
                KINJO CINEMA · THE ROOM
              </span>
              <span className="text-white/30 font-mono text-xs hidden sm:inline">|</span>
              <span className="text-xs font-mono text-[#FFD45C] hidden sm:inline">
                STAGE 0{selectedIdx + 1} OF 04
              </span>
            </div>

            {/* Live Geo-fence Status Indicator (Clean Lucide Icon, Zero AI Dot Balls) */}
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-xs font-mono text-white shadow-xl">
              <Radio className="w-3.5 h-3.5 text-emerald-400" />
              <span className="tracking-wide">50M GEO-FENCE ACTIVE</span>
              <span className="text-white/30 font-mono">·</span>
              <span className="text-white/70 font-mono text-[11px]">{activeVenue.city}</span>
            </div>
          </div>

          {/* MAIN APPLE-STYLE INTERACTION ROW:
              Headline + Left-hand vertical pill buttons (Synchronized to scroll) */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-16 pointer-events-none">
            <div className="max-w-4xl text-left space-y-6">
              {/* Apple "Take a closer look." Headline */}
              <div>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-[-0.04em] leading-[0.92]">
                  Take a closer look.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-medium mt-3 max-w-lg leading-relaxed">
                  Real physical spaces. High-signal rooms. Scroll to explore all four flagship chapters.
                </p>
              </div>

              {/* VERTICAL APPLE PILL BUTTONS (SCROLL SYNCHRONIZED + CLICKABLE) */}
              <div className="flex flex-col items-start gap-2.5 pt-2 pointer-events-auto">
                {venueVideos.map((venue, idx) => {
                  const isSelected = selectedIdx === idx;
                  return (
                    <button
                      key={venue.id}
                      type="button"
                      onClick={() => handleSelectVenue(idx)}
                      className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer border ${
                        isSelected
                          ? "bg-white text-black border-white shadow-2xl scale-105 font-bold"
                          : "bg-white/10 hover:bg-white/20 text-white/90 border-white/15 backdrop-blur-xl hover:border-white/30 font-medium"
                      }`}
                    >
                      {/* Plus / Active icon */}
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isSelected
                            ? "bg-black text-white rotate-45"
                            : "bg-white/20 text-white group-hover:scale-110"
                        }`}
                      >
                        <Plus className="w-2.5 h-2.5 stroke-[3]" />
                      </span>

                      <span className="text-xs sm:text-sm tracking-tight whitespace-nowrap">
                        {venue.pillLabel}
                      </span>

                      {/* Active count badge */}
                      {isSelected && (
                        <span className="ml-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/10 text-black">
                          {venue.attendeeCount} Inside
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* BOTTOM BAR: ACTIVE ROOM DETAILS & ACTIONS */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 z-30 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left pointer-events-none">
            {/* Active Venue Details with Smooth Spring Fade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVenue.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl text-white space-y-1.5 drop-shadow-md"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFD45C] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#FFD45C]" />
                  <span>{activeVenue.city}</span>
                  <span className="text-white/30">·</span>
                  <span>{activeVenue.roomType}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed max-w-md">
                  {activeVenue.description}
                </p>
                <div className="text-[11px] font-mono text-white/60 tracking-wider">
                  {activeVenue.stats}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Apple-style Action Dock */}
            <div className="flex items-center gap-3 pointer-events-auto shrink-0">
              <button
                type="button"
                onClick={() => onOpenJoinModal("attendee")}
                className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-100 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
              >
                <span>Request Access to The Room</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Minimal Vertical Scroll Progress Strip on Right Edge */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2 z-30 pointer-events-none">
            {venueVideos.map((_, i) => (
              <div
                key={i}
                className={`w-1 transition-all duration-300 rounded-full ${
                  selectedIdx === i
                    ? "h-8 bg-white"
                    : "h-2 bg-white/25"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
