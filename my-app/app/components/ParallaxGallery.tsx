"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, MapPin, Users, ArrowUpRight } from "lucide-react";

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  tag: string;
  location: string;
  stat: string;
  story: string;
  color: string;
}

const galleryCol1: GalleryItem[] = [
  {
    id: "g1",
    image: "/images/event_founders_mixer.jpg",
    title: "Founders Mixer: The Loft",
    tag: "STARTUPS",
    location: "Lower Parel, Mumbai",
    stat: "94 attendees · 18 co-founder matches",
    story: "“I said I needed a brand designer. By the end of the night I had met two and hired one.” — Priya S.",
    color: "#6D28D9",
  },
  {
    id: "g2",
    image: "/images/community_designers.jpg",
    title: "Product Design Systems Lab",
    tag: "DESIGN",
    location: "Indiranagar, Bengaluru",
    stat: "42 designers · 6 studios represented",
    story: "Zero cold intros. The Room connected Figma contributors directly with design leads.",
    color: "#FFD45C",
  },
  {
    id: "g3",
    image: "/images/event_creative_rooftop.jpg",
    title: "Sunset Creator & Angel Salon",
    tag: "CREATIVE",
    location: "Marine Drive, Mumbai",
    stat: "85 builders · 14 first cheques",
    story: "Grace R. closed two pre-seed allocations right by the sea breeze.",
    color: "#6D28D9",
  },
  {
    id: "g4",
    image: "/images/people_maya_joshi.jpg",
    title: "Maya Joshi (Razorpay Alum)",
    tag: "PURPOSE: CO-FOUNDER",
    location: "Mumbai & Remote",
    stat: "94% Room Match Score",
    story: "Matched with her technical co-founder within 20 minutes inside The Room.",
    color: "#FFD45C",
  },
  {
    id: "g5",
    image: "/images/community_indie_hackers.jpg",
    title: "Indie Builders & Solo Founders",
    tag: "TECH & SAAS",
    location: "Koramangala, Bengaluru",
    stat: "60+ builders shipping weekly",
    story: "Shared playbooks on Micro-SaaS distribution, growth, and retention.",
    color: "#6D28D9",
  },
  {
    id: "g6",
    image: "/images/people_aarav_mehta.jpg",
    title: "Aarav Mehta · Design Lead",
    tag: "COLLABORATOR",
    location: "Mumbai",
    stat: "3 Highlights · 4 Collaborations",
    story: "Shipped a design system used by 40 teams, met 3 clients on Kinjo.",
    color: "#FFD45C",
  },
];

const galleryCol2: GalleryItem[] = [
  {
    id: "g7",
    image: "/images/event_design_week.jpg",
    title: "Design Week Kickoff: NCPA",
    tag: "EXHIBITION",
    location: "NCPA, South Mumbai",
    stat: "120 going · Creative directors & PMs",
    story: "A room full of intent. People filter into spontaneous co-working squads.",
    color: "#FFD45C",
  },
  {
    id: "g8",
    image: "/images/community_founders.jpg",
    title: "Pre-Seed Founders Breakfast",
    tag: "FOUNDERS CIRCLE",
    location: "Bandra West, Mumbai",
    stat: "12 founders · $15M cumulative raised",
    story: "Curation over abundance. Only verified builders working on breakthrough products.",
    color: "#6D28D9",
  },
  {
    id: "g9",
    image: "/images/event_ai_builders.jpg",
    title: "AI Architects & Neural Salon",
    tag: "DEEP TECH",
    location: "Cyber City, Gurugram",
    stat: "48 engineers · 9 open roles",
    story: "Left with 3 warm intros to engineering VPs — without a single awkward elevator pitch.",
    color: "#FFD45C",
  },
  {
    id: "g10",
    image: "/images/community_investor.jpg",
    title: "First Cheques Private Syndicate",
    tag: "ANGELS",
    location: "Bandra Kurla Complex",
    stat: "30+ pre-seed deals written",
    story: "Direct conversations across the table. No pitch deck bureaucracy.",
    color: "#6D28D9",
  },
  {
    id: "g11",
    image: "/images/people_priya_rao.jpg",
    title: "Priya Rao · Sustainable D2C",
    tag: "FOUNDER & MAKER",
    location: "Mumbai & Goa",
    stat: "Fundraising & Brand Growth",
    story: "Found an angel backer and creative packaging lead at one mixer.",
    color: "#FFD45C",
  },
  {
    id: "g12",
    image: "/images/people_grace_r.jpg",
    title: "Grace R. · First Cheques Angel",
    tag: "ANGEL INVESTOR",
    location: "Mumbai & London",
    stat: "96% Room Match Accuracy",
    story: "“Kinjo filters for people who actually match my thesis. Saves 20 hours a week.”",
    color: "#6D28D9",
  },
];

export function ParallaxGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate relative progress inside the section
        const progress = -rect.top;
        setScrollY(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute smooth parallax offsets
  const offsetLeft = Math.max(-200, Math.min(200, scrollY * 0.12));
  const offsetRight = Math.max(-200, Math.min(200, -scrollY * 0.12));

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden bg-black">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6D28D9]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FFD45C]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD45C]" />
            <span>REAL ROOMS • REAL CONNECTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            A glimpse of who&apos;s <br className="hidden sm:inline" />
            <span className="text-gradient-violet">matching right now.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Scroll to see people, spaces, and sparks. Left moves upward, right glides downward — matching people in real time.
          </p>
        </div>
      </div>

      {/* Two-Column Parallax Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1: Moves upward on scroll */}
          <div
            style={{ transform: `translateY(${offsetLeft}px)` }}
            className="flex flex-col gap-8 transition-transform duration-300 ease-out"
          >
            {galleryCol1.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl hover:border-[#6D28D9]/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      style={{ backgroundColor: `${item.color}20`, borderColor: `${item.color}50`, color: item.color }}
                      className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border backdrop-blur-md"
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/90 backdrop-blur-md flex items-center gap-1 border border-white/10">
                      <MapPin className="w-3 h-3 text-[#FFD45C]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#B892FF] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <p className="text-xs font-medium text-emerald-400 mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.stat}
                  </p>

                  <p className="text-sm text-zinc-300 italic leading-relaxed border-t border-white/10 pt-3">
                    {item.story}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Moves downward on scroll */}
          <div
            style={{ transform: `translateY(${offsetRight}px)` }}
            className="flex flex-col gap-8 transition-transform duration-300 ease-out md:pt-14"
          >
            {galleryCol2.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl hover:border-[#FFD45C]/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      style={{ backgroundColor: `${item.color}20`, borderColor: `${item.color}50`, color: item.color }}
                      className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border backdrop-blur-md"
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/90 backdrop-blur-md flex items-center gap-1 border border-white/10">
                      <MapPin className="w-3 h-3 text-[#FFD45C]" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FFD45C] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <p className="text-xs font-medium text-emerald-400 mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.stat}
                  </p>

                  <p className="text-sm text-zinc-300 italic leading-relaxed border-t border-white/10 pt-3">
                    {item.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
