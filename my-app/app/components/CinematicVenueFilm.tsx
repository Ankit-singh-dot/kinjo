"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  MapPin,
  Users,
  ShieldCheck,
  ArrowRight,
  Plus,
  Check,
  Sparkles,
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);

  // APPLE-STYLE SCROLL ZOOM OUT ANIMATION:
  // As the user scrolls down and the section travels up the viewport ("when it goes up"),
  // the video zooms out smoothly from full-bleed scale (1.05) to a focused cinema frame (0.88),
  // and the border-radius expands into a sleek rounded container.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 0.94, 0.88]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.4, 1], ["0px", "28px", "48px"]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  const activeVenue = venueVideos[selectedIdx];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const progress =
      (videoRef.current.currentTime / (videoRef.current.duration || 1)) * 100;
    setVideoProgress(progress);
  };

  const handleSelectVenue = (idx: number) => {
    setSelectedIdx(idx);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[170vh] bg-black text-white selection:bg-[#6D28D9] selection:text-white"
    >
      {/* STICKY FULL SCREEN VIEWPORT CONTAINER */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* ZOOM-OUT MOTION CANVAS (Smoothly zooms out when going up) */}
        <motion.div
          style={{
            scale: videoScale,
            borderRadius: videoRadius,
            y: videoY,
          }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="relative w-full h-full overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] border border-white/10 flex items-center justify-center will-change-transform"
        >
          {/* THE FULL SCREEN HTML5 CINEMA VIDEO */}
          <video
            ref={videoRef}
            key={activeVenue.videoUrl}
            src={activeVenue.videoUrl}
            poster={activeVenue.posterImage}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Cinema Dark Gradient Vignette Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none" />

          {/* TOP BAR: Apple Header & Live Geo-fence Indicator */}
          <div className="absolute top-6 sm:top-10 left-6 sm:left-12 right-6 sm:right-12 flex items-center justify-between z-30 pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-white/70 uppercase">
                KINJO CINEMA · THE ROOM
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/30" />
              
            </div>

            {/* Live Audio Equalizer & Geo-fence */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 text-xs font-mono text-white shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>50M GEO-FENCE ACTIVE</span>
              <span className="text-white/30">•</span>
              <div className="flex items-end gap-[2.5px] h-3">
                <span className="w-[2.5px] h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                <span className="w-[2.5px] h-3 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                <span className="w-[2.5px] h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
              </div>
            </div>
          </div>

          {/* MAIN APPLE-STYLE INTERACTION ROW:
              Headline + Left-hand vertical pill buttons (matching user screenshot) */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-16 pointer-events-none">
            <div className="max-w-4xl text-left space-y-6">
              {/* Apple "Take a closer look." Headline */}
              <div>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-[-0.04em] leading-[0.92]">
                  Take a closer look.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 font-medium mt-3 max-w-lg leading-relaxed">
                  Real physical spaces. High-signal rooms. No cold approaches, no awkward corners.
                </p>
              </div>

              {/* VERTICAL APPLE PILL BUTTONS (EXACTLY MATCHING USER'S SCREENSHOT) */}
              <div className="flex flex-col items-start gap-2.5 pt-2 pointer-events-auto">
                {venueVideos.map((venue, idx) => {
                  const isSelected = selectedIdx === idx;
                  return (
                    <button
                      key={venue.id}
                      type="button"
                      onClick={() => handleSelectVenue(idx)}
                      className={`group flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer border ${
                        isSelected
                          ? "bg-white text-black border-white shadow-xl scale-105 font-bold"
                          : "bg-white/10 hover:bg-white/20 text-white/90 border-white/15 backdrop-blur-xl hover:border-white/30 font-medium"
                      }`}
                    >
                      {/* Plus icon inside small circle (Matching Apple UI in screenshot) */}
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

          {/* BOTTOM BAR: ACTIVE ROOM DETAILS & PLAY/PAUSE CONTROLS */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 right-6 sm:right-12 z-30 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left pointer-events-none">
            {/* Active Venue Details */}
            <div className="max-w-xl text-white space-y-1 drop-shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFD45C] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#FFD45C]" />
                <span>{activeVenue.city}</span>
                <span>•</span>
                <span>{activeVenue.roomType}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed max-w-md line-clamp-2">
                {activeVenue.description}
              </p>
            </div>

            {/* Apple-style Action & Audio Dock */}
            <div className="flex items-center gap-3 pointer-events-auto shrink-0">
              {/* Play/Pause Button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                )}
              </button>

              {/* Mute/Unmute Button */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                )}
              </button>

              {/* Request Key Button */}
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

          {/* Minimal Scrubber Line at the very bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 z-40">
            <div
              className="h-full bg-gradient-to-r from-[#6D28D9] via-emerald-400 to-[#FFD45C] transition-all duration-200"
              style={{ width: `${videoProgress}%` }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
