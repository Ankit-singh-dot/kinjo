"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Users,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Check,
  CheckCircle2,
  X,
  ExternalLink,
  Flame,
} from "lucide-react";

interface CommunityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  memberCount: string;
  badge: string;
  badgeColor: string;
  image: string;
  roles: string[];
}

const communities: CommunityItem[] = [
  {
    id: "founders-circle",
    title: "Pre-Seed & Seed Founders Circle",
    subtitle: "Built for founders seeking co-founders, angel checks, and early talent.",
    description:
      "A closed syndicate of ambitious founders. Share real metrics, get unvarnished feedback, find technical co-founders, and meet angels writing first cheques.",
    stats: "$45M+ Cumulative Raised",
    memberCount: "320+ Active Founders",
    badge: "FOUNDERS ONLY",
    badgeColor: "#6D28D9",
    image: "/images/community_founders.jpg",
    roles: ["Technical Co-founder", "Solo Founder", "Repeat Entrepreneur"],
  },
  {
    id: "design-collective",
    title: "Product Designers & Systems Collective",
    subtitle: "Crafting digital experiences, design systems, and award-winning products.",
    description:
      "For product designers, design leads, and creative directors from high-growth startups and top design studios. Cross-pollinate Figma systems and collaborate.",
    stats: "40+ Design Systems Shipped",
    memberCount: "450+ Curated Designers",
    badge: "PORTFOLIO VERIFIED",
    badgeColor: "#FFD45C",
    image: "/images/community_designers.jpg",
    roles: ["Lead Product Designer", "Design Systems Architect", "Brand Director"],
  },
  {
    id: "investor-salon",
    title: "First Cheques Angel Syndicate",
    subtitle: "Direct conversations across the table — no pitch deck bureaucracy.",
    description:
      "Founders and active angels writing $10k–$100k cheques. Step inside private lounges and breakout rooms where deals are forged with mutual conviction.",
    stats: "120+ First Cheques Written",
    memberCount: "85+ Active Angels",
    badge: "ACCREDITED ANGELS",
    badgeColor: "#6D28D9",
    image: "/images/community_investor.jpg",
    roles: ["Angel Investor", "Operator Angel", "Scout / Syndicate Lead"],
  },
  {
    id: "indie-guild",
    title: "Indie Hackers & Micro-SaaS Guild",
    subtitle: "Autonomous builders shipping weekly and scaling profitable software.",
    description:
      "For builders who code, launch, and monetize in public. Share distribution loops, AI integrations, pricing experiments, and co-working meetups.",
    stats: "$3.8M+ ARR Tracked",
    memberCount: "210+ Solo Builders",
    badge: "WEEKLY SHIPPER",
    badgeColor: "#FFD45C",
    image: "/images/community_indie_hackers.jpg",
    roles: ["Fullstack Hacker", "Micro-SaaS Founder", "AI Engineer"],
  },
];

export function CommunitiesSection() {
  const [activeCommunity, setActiveCommunity] = useState<CommunityItem | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  // Application form state
  const [applicantName, setApplicantName] = useState("");
  const [applicantRole, setApplicantRole] = useState("");
  const [applicantLink, setApplicantLink] = useState("");
  const [applicantStage, setApplicantStage] = useState("Pre-product / Idea");

  const handleOpenModal = (community: CommunityItem) => {
    setActiveCommunity(community);
    setAppliedSuccess(false);
    setApplicantName("");
    setApplicantRole("");
    setApplicantLink("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.55 },
        colors: ["#6D28D9", "#FFD45C", "#FFFFFF"],
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="communities" className="relative py-28 md:py-36 bg-[#07070c] overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#6D28D9]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6D28D9]/15 border border-[#6D28D9]/30 text-xs font-semibold text-[#B892FF] mb-4">
            <Users className="w-3.5 h-3.5 text-[#FFD45C]" />
            <span>EXCLUSIVE HUBS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Want to join the founders? <br />
            <span className="text-gradient-violet">Through the website itself.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Skip the gatekeepers. Apply directly to verified founder circles, design collectives, and angel salons right here on Kinjo.
          </p>
        </div>

        {/* Communities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communities.map((comm) => (
            <div
              key={comm.id}
              className="group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#6D28D9]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={comm.image}
                    alt={comm.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span
                      style={{
                        backgroundColor: `${comm.badgeColor}25`,
                        borderColor: `${comm.badgeColor}60`,
                        color: comm.badgeColor,
                      }}
                      className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border backdrop-blur-md"
                    >
                      {comm.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/70 backdrop-blur-md text-white border border-white/10">
                      {comm.memberCount}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {comm.stats}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#B892FF] transition-colors">
                    {comm.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#FFD45C] mb-3">
                    {comm.subtitle}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {comm.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {comm.roles.map((role) => (
                      <span
                        key={role}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-zinc-300 border border-white/5"
                      >
                        ✓ {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenModal(comm)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#7C3AED] hover:to-[#9333EA] text-white font-bold text-xs shadow-lg shadow-[#6D28D9]/30 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01]"
                >
                  <Sparkles className="w-4 h-4 text-[#FFD45C]" />
                  <span>Join {comm.title.split(" ")[0]} Community — Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with direct CTA */}
        <div className="rounded-3xl p-8 md:p-12 glass-panel border border-[#6D28D9]/40 bg-gradient-to-r from-[#17122a] via-[#0f0f15] to-[#1a1420] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFD45C]">
              NO ENDLESS DISCOVERY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-2">
              Ready to find your kind?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Tell us what you&apos;re here for, and meet the people at every event who can actually help. Available worldwide on iOS and Android.
            </p>
          </div>

          <button
            onClick={() => handleOpenModal(communities[0])}
            className="px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-sm transition-all duration-200 shadow-xl hover:scale-105 shrink-0 flex items-center gap-2"
          >
            <span>Join Kinjo Today</span>
            <ArrowRight className="w-4 h-4 text-[#6D28D9]" />
          </button>
        </div>
      </div>

      {/* Interactive Application Modal */}
      {activeCommunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e0e15] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6D28D9]/25 blur-[90px] rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setActiveCommunity(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!appliedSuccess ? (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#6D28D9]/25 text-[#B892FF] border border-[#6D28D9]/40 mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFD45C]" />
                  <span>DIRECT WEB ADMISSION</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1.5">
                  Apply to {activeCommunity.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  {activeCommunity.subtitle} Verified within 24 hours.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Maya Joshi or Vikram Kher"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6D28D9] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Your Current Role / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantRole}
                      onChange={(e) => setApplicantRole(e.target.value)}
                      placeholder="e.g. Founder @ fintech stealth, or Design Lead"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6D28D9] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Website / LinkedIn / GitHub or Portfolio Link
                    </label>
                    <input
                      type="url"
                      required
                      value={applicantLink}
                      onChange={(e) => setApplicantLink(e.target.value)}
                      placeholder="https://"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6D28D9] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Stage / What are you building?
                    </label>
                    <select
                      value={applicantStage}
                      onChange={(e) => setApplicantStage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141d] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6D28D9] transition-colors"
                    >
                      <option value="Pre-product / Idea">Pre-product / Looking for Co-founder</option>
                      <option value="MVP Shipped">MVP Shipped / Early Users</option>
                      <option value="Fundraising Pre-Seed">Actively Raising Pre-Seed / Seed</option>
                      <option value="Scaling / High-Growth">Scaling / Hiring Team</option>
                      <option value="Angel Investor">Active Investor</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#7C3AED] hover:to-[#9333EA] text-white font-bold text-sm shadow-lg shadow-[#6D28D9]/40 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#FFD45C]" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-black text-white mb-2">
                  Application Fast-Tracked!
                </h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-6">
                  Welcome aboard, <span className="text-white font-semibold">{applicantName}</span>. Your admission to the <span className="text-[#FFD45C] font-semibold">{activeCommunity.title}</span> has been confirmed. You now have instant access to tonight&apos;s Room.
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left mb-6 space-y-1.5 text-xs text-zinc-300">
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Profile verified in Kinjo matching registry</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>The Room double opt-in unlock enabled</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Invitations to private founder breakfasts</span>
                  </p>
                </div>

                <button
                  onClick={() => setActiveCommunity(null)}
                  className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors"
                >
                  Close & Explore The Room
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
