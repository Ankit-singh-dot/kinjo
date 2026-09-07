"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Users,
  QrCode,
  Sparkles,
  TrendingUp,
  UserCheck,
  CreditCard,
  Layers,
  ArrowRight,
  Clock,
  Radio,
} from "lucide-react";

export function OrganizerCommandCenter() {
  const [checkedInCount, setCheckedInCount] = useState(88);
  const [simulatingCheckin, setSimulatingCheckin] = useState(false);

  const handleSimulateCheckin = () => {
    if (simulatingCheckin) return;
    setSimulatingCheckin(true);
    setTimeout(() => {
      setCheckedInCount((prev) => prev + 1);
      setSimulatingCheckin(false);
    }, 600);
  };

  return (
    <section id="organizers" className="relative py-28 md:py-36 bg-black overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#6D28D9]/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6D28D9]/20 border border-[#6D28D9]/40 text-xs font-semibold text-[#FFD45C] mb-4">
            <Radio className="w-3.5 h-3.5 text-[#FFD45C] animate-pulse" />
            <span>FOR ORGANIZERS & COMMUNITY ARCHITECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Not just an event page — <br />
            <span className="text-gradient-violet">your whole command center.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Create public or private events, gauge interest before you commit, publish, and manage every RSVP, ticket payout, and door volunteer in one unified dashboard.
          </p>
        </div>

        {/* The Live Command Center Interactive Dashboard Window */}
        <div className="rounded-3xl p-6 sm:p-10 glass-panel border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.8)] max-w-5xl mx-auto mb-16">
          {/* Top Bar of Dashboard */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">Founders Mixer · Live Command</h3>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#6D28D9]/30 text-[#B892FF] border border-[#6D28D9]/40">
                    PUBLISHED
                  </span>
                </div>
                <p className="text-xs text-zinc-400">Fri · 7:00 PM · The Loft, Lower Parel</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleSimulateCheckin}
                disabled={simulatingCheckin}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/10 transition-colors flex items-center gap-2"
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{simulatingCheckin ? "Scanning..." : "Simulate Door Check-in"}</span>
              </button>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/30">
                PULSE: LIVE
              </span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-[#14141d] border border-white/10">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-medium mb-2">
                <span>Audience Interest</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">142</p>
              <p className="text-[11px] text-emerald-400 font-semibold mt-1">Trending up · 24h before launch</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#14141d] border border-white/10">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-medium mb-2">
                <span>RSVP&apos;d Going</span>
                <Users className="w-4 h-4 text-[#FFD45C]" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">94</p>
              <p className="text-[11px] text-zinc-400 mt-1">Cap: 100 maximum venue limit</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#14141d] border border-white/10">
              <div className="flex items-center justify-between text-zinc-400 text-xs font-medium mb-2">
                <span>Checked In At Door</span>
                <QrCode className="w-4 h-4 text-[#B892FF]" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                {checkedInCount}
              </p>
              <p className="text-[11px] text-zinc-400 mt-1">93.6% attendee arrival rate</p>
            </div>
          </div>

          {/* Two Columns: Live Activity Stream + Team Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Live Activity Stream */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Live Operations Feed
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">Real-time sync</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div>
                      <p className="text-white font-medium">New RSVP · Grace R.</p>
                      <p className="text-[10px] text-zinc-400">Angel investor (30+ deals)</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Just now</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CreditCard className="w-4 h-4 text-[#FFD45C]" />
                    <div>
                      <p className="text-white font-medium">Ticket Tier Sold · ₹499</p>
                      <p className="text-[10px] text-zinc-400">Paid out straight to bank account</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">2m ago</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-[#B892FF]" />
                    <div>
                      <p className="text-white font-medium">Dan checked in 12 guests</p>
                      <p className="text-[10px] text-zinc-400">Door QR fast scanner active</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">5m ago</span>
                </div>
              </div>
            </div>

            {/* Team Roles & Permissions */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Event Staff & Permissions
                </span>
                <span className="text-[10px] text-[#FFD45C] font-semibold">3 Active</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6D28D9] flex items-center justify-center font-bold text-white">
                      AA
                    </div>
                    <div>
                      <p className="text-white font-medium">Ava Sharma</p>
                      <p className="text-[10px] text-zinc-400">Co-organizer</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#6D28D9]/20 text-[#B892FF] font-semibold">
                    Full Admin
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center font-bold text-white">
                      DD
                    </div>
                    <div>
                      <p className="text-white font-medium">Dan Cooper</p>
                      <p className="text-[10px] text-zinc-400">Check-in Lead</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
                    Door Scanner
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#3b1b1e] flex items-center justify-center font-bold text-white">
                      MM
                    </div>
                    <div>
                      <p className="text-white font-medium">Mara V.</p>
                      <p className="text-[10px] text-zinc-400">Community Volunteer</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-zinc-400 font-semibold">
                    Roster View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Organizer Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl glass-panel border border-white/10">
            <span className="text-xs font-mono font-bold text-[#FFD45C] block mb-2">01 / DISCOVERY</span>
            <h4 className="text-base font-bold text-white mb-2">Gauge Interest First</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Preview an event to your community and see headcount demand before you commit to booking the venue.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-white/10">
            <span className="text-xs font-mono font-bold text-[#6D28D9] block mb-2">02 / PRIVACY</span>
            <h4 className="text-base font-bold text-white mb-2">Public or Private</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Open to the whole Kinjo network or invite-only with passcode gating. Free or paid ticketing with zero friction.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-white/10">
            <span className="text-xs font-mono font-bold text-[#FFD45C] block mb-2">03 / DAY OF EVENT</span>
            <h4 className="text-base font-bold text-white mb-2">Live Door Check-in</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Scan passes in 0.2 seconds at the door. As guests walk in, they instantly populate The Room matching radar.
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-panel border border-white/10">
            <span className="text-xs font-mono font-bold text-[#6D28D9] block mb-2">04 / COLLABORATION</span>
            <h4 className="text-base font-bold text-white mb-2">Delegated Roster</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Add co-hosts, sponsors, and registration desk volunteers with granular security permissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
