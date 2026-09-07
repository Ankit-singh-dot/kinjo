"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, X, Heart, Users, CheckCircle2, ArrowRight } from "lucide-react";

interface LiveToast {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  action: string;
  detail: string;
  location: string;
  timeAgo: string;
  badge: string;
  badgeColor: string;
}

const toastItems: LiveToast[] = [
  {
    id: "t1",
    name: "Riya S.",
    initials: "RS",
    avatar: "/images/people_priya_rao.jpg",
    action: "is looking for a technical co-founder",
    detail: "Fintech & Sustainable Commerce · Pre-seed stage",
    location: "Bandra, Mumbai",
    timeAgo: "just now",
    badge: "CO-FOUNDER SEEK",
    badgeColor: "#FFD45C",
  },
  {
    id: "t2",
    name: "Vikram & Maya",
    initials: "VM",
    avatar: "/images/people_maya_joshi.jpg",
    action: "just matched (94% match)",
    detail: "Design Nights #43 · Double opt-in nudge accepted",
    location: "NCPA, South Mumbai",
    timeAgo: "2m ago",
    badge: "THE ROOM MATCH",
    badgeColor: "#6D28D9",
  },
  {
    id: "t3",
    name: "Grace R.",
    initials: "GR",
    avatar: "/images/people_grace_r.jpg",
    action: "stepped inside The Room",
    detail: "Angel investor · Writing first cheques tonight",
    location: "The Loft, Lower Parel",
    timeAgo: "4m ago",
    badge: "FIRST CHEQUES",
    badgeColor: "#10B981",
  },
  {
    id: "t4",
    name: "Aarav Mehta",
    initials: "AM",
    avatar: "/images/people_aarav_mehta.jpg",
    action: "shipped a new design sprint",
    detail: "Collaborating with 2 founders matched on Kinjo",
    location: "Indiranagar, Bengaluru",
    timeAgo: "7m ago",
    badge: "COLLABORATION",
    badgeColor: "#B892FF",
  },
];

interface MatchRadarToastProps {
  onOpenJoinModal: () => void;
}

export function MatchRadarToast({ onOpenJoinModal }: MatchRadarToastProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      // Fade out, switch, fade in
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % toastItems.length);
        setVisible(true);
      }, 400);
    }, 6500);

    return () => clearInterval(interval);
  }, [dismissed]);

  const [isMinimized, setIsMinimized] = useState(false);

  if (dismissed) return null;

  const current = toastItems[currentIndex];

  if (isMinimized) {
    return (
      <aside
        aria-label="Live Match Radar Pill"
        className="fixed bottom-6 right-4 sm:right-6 z-30 animate-fade-in"
      >
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0d14]/90 border border-white/20 text-xs font-semibold text-white shadow-xl hover:border-[#6D28D9] transition-all backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] text-[#FFD45C]">LIVE RADAR (3)</span>
          <span className="text-[10px] text-zinc-400">Expand</span>
        </button>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Live Match Radar"
      className={`fixed bottom-6 right-4 sm:right-6 z-30 transition-all duration-500 ease-out max-w-[320px] sm:max-w-[350px] ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
      }`}
    >
      <div className="relative rounded-2xl p-3.5 glass-panel border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden">
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#6D28D9]/20 blur-[40px] rounded-full pointer-events-none" />

        {/* Action Controls */}
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(true)}
            className="text-zinc-500 hover:text-white p-1 rounded hover:bg-white/10 text-[10px] font-mono transition-colors"
            title="Minimize"
          >
            _
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-zinc-500 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span
            style={{ color: current.badgeColor }}
            className="text-[9px] font-black uppercase tracking-wider font-mono"
          >
            {current.badge}
          </span>
          <span className="text-[10px] text-zinc-600">•</span>
          <span className="text-[10px] text-zinc-400 font-mono">{current.timeAgo}</span>
        </div>

        {/* Body content */}
        <div className="flex items-start gap-2.5">
          {current.avatar ? (
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#6D28D9]/60 shrink-0">
              <Image src={current.avatar} alt={current.name} fill sizes="36px" className="object-cover" />
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-[#6D28D9]/30 border border-[#6D28D9] flex items-center justify-center text-xs font-bold text-white shrink-0">
              {current.initials}
            </div>
          )}

          <div className="flex-1 min-w-0 pr-3">
            <p className="text-xs text-white leading-snug">
              <span className="font-bold">{current.name}</span>{" "}
              <span className="text-zinc-300">{current.action}</span>
            </p>
            <p className="text-[10px] text-zinc-400 truncate mt-0.5">{current.detail}</p>
            <p className="text-[9px] text-zinc-500 font-mono mt-0.5">{current.location}</p>
          </div>
        </div>

        {/* Micro-CTA Footer */}
        <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between">
          <span className="text-[9px] text-zinc-500 font-mono">KINJO NETWORK</span>
          <button
            onClick={onOpenJoinModal}
            className="text-[10px] font-bold text-[#FFD45C] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Connect</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
}
