"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Calendar,
  Users,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Ticket,
  X,
  ShieldCheck,
  Search,
  Filter,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface CuratedItem {
  id: number;
  title: string;
  host: string;
  hostRole: string;
  hostImage: string;
  date: string;
  venue: string;
  readTime: string;
  desc: string;
  category: string;
  tags: string[];
  takeaways: string[];
  indexing: string;
  targetAudience: string;
  attendees: number;
  image: string;
  color: string;
  badge: string;
}

const allCuratedItems: CuratedItem[] = [
  {
    id: 1,
    title: "Founders & Pre-Seed Syndicate Circle",
    host: "Aarav Mehta",
    hostRole: "Design Lead & Mentor · Freehand Labs",
    hostImage: "/images/people_aarav_mehta.jpg",
    date: "Weekly Cohorts · Mumbai & Bengaluru",
    venue: "The Loft & Partner Venues",
    readTime: "320 Members Active",
    desc: "A closed-door community of 320+ high-growth operators, repeat founders, and bootstrapped builders sharing playbooks and co-founding opportunities.",
    category: "Communities",
    tags: ["RepeatFounders", "B2BSaaS", "PreSeed"],
    takeaways: [
      "Direct admission into private Syndicate Slack & Telegram channels.",
      "Access to weekly founder brunches and peer pitch tear-downs.",
      "Instant purpose-matching when launching new ventures.",
    ],
    indexing: "Verified Founders • Weekly Cohorts • Syndicate",
    targetAudience: "Funded & Bootstrapped Tech Founders, Repeat Operators",
    attendees: 320,
    image: "/images/community_founders.jpg",
    color: "bg-[#FFFBEB]",
    badge: "Community Circle",
  },
  {
    id: 2,
    title: "Bombay Design Week 2026: Founder & Design Salon",
    host: "Maya Joshi",
    hostRole: "Product Design Lead · Ex-Razorpay",
    hostImage: "/images/people_maya_joshi.jpg",
    date: "Thu, Oct 30 · 6:30 PM",
    venue: "NCPA, South Mumbai",
    readTime: "120 Attendees Verified",
    desc: "The annual gathering connecting elite product designers with early-stage founders to build zero-to-one MVPs, design systems, and consumer fintech checkout flows.",
    category: "Events",
    tags: ["DesignSystems", "FintechMVP", "Figma"],
    takeaways: [
      "Access to The Room geo-fenced lounge unlocked inside NCPA venue.",
      "Live strategic purpose-matching with founders seeking a design equity co-founder.",
      "Discreet silent nudges — zero cold awkward small talk.",
    ],
    indexing: "Verified Door Access • NCPA Mumbai • Geo-fenced",
    targetAudience: "Design Leads, Creative Directors & Pre-seed Founders",
    attendees: 120,
    image: "/images/event_design_week.jpg",
    color: "bg-[#FAF5FF]",
    badge: "Design & Startups",
  },
  {
    id: 3,
    title: "Product Designers & Creative Architecture Guild",
    host: "Sneha Rao",
    hostRole: "Brand Director & Editorial Lead",
    hostImage: "/images/people_priya_rao.jpg",
    date: "Bi-Weekly Salons · South Mumbai",
    venue: "Artisans Gallery & Studio",
    readTime: "185 Designers Inside",
    desc: "A curated collective for product design leads, brand architects, and design engineers crafting next-generation digital interfaces.",
    category: "Communities",
    tags: ["DesignLeadership", "BrandIdentity", "Tokens"],
    takeaways: [
      "Quarterly design critiques with venture-backed creative directors.",
      "Direct portfolio referrals for equity design partnerships.",
      "Exclusive access to unreleased typography and token systems.",
    ],
    indexing: "Portfolio Verified • South Mumbai • Design Only",
    targetAudience: "Senior Product Designers, Staff Designers & Brand Architects",
    attendees: 185,
    image: "/images/community_designers.jpg",
    color: "bg-[#F0FDF4]",
    badge: "Creative Guild",
  },
  {
    id: 4,
    title: "Founders Mixer: The Loft",
    host: "Aarav Mehta",
    hostRole: "Design Lead @ Freehand Labs",
    hostImage: "/images/people_aarav_mehta.jpg",
    date: "Fri, Oct 24 · 7:00 PM",
    venue: "The Loft, Lower Parel, Mumbai",
    readTime: "94 Founders Inside",
    desc: "Closed-door evening for founders who have raised seed capital or are actively bootstrapping high-margin SaaS. Intent-focused room with zero vendor noise.",
    category: "Events",
    tags: ["SeedStage", "B2BSaaS", "CoFounders"],
    takeaways: [
      "100% verified attendees with live traction and verified goals.",
      "Direct double opt-in introductions facilitated via Kinjo app.",
      "Automated exit structuring into Co-founders and Angel Backer buckets.",
    ],
    indexing: "100% Verified Founders • Lower Parel • Syndicate Backed",
    targetAudience: "Seed & Series A Founders, Tech Leads & Angels",
    attendees: 94,
    image: "/images/event_founders_mixer.jpg",
    color: "bg-[#FFF7ED]",
    badge: "Founders & Angels",
  },
  {
    id: 5,
    title: "Bootstrapped SaaS & Indie Hackers Collective",
    host: "Ankit Kulkarni",
    hostRole: "Founding Engineer · Core Payments",
    hostImage: "/images/event_ai_builders.jpg",
    date: "Weekly Sync · Bengaluru & Virtual",
    venue: "Indiranagar Cowork Studio",
    readTime: "240 Builders Active",
    desc: "Profitable micro-SaaS builders, solo technical founders, and open-source contributors sharing MRR growth benchmarks and infrastructure architectures.",
    category: "Communities",
    tags: ["IndieHacker", "ProfitableSaaS", "MicroMRR"],
    takeaways: [
      "Real-time revenue architecture sharing without vanity hype.",
      "Co-marketing synergies across non-competing developer tooling.",
      "Private API & infrastructure credits from partner cloud syndicates.",
    ],
    indexing: "Profitable Builders • Bengaluru Chapter • Code Demos",
    targetAudience: "Solo Engineers, Micro-SaaS Builders & Open-Source Creators",
    attendees: 240,
    image: "/images/community_indie_hackers.jpg",
    color: "bg-[#F8FAFC]",
    badge: "Builders Guild",
  },
  {
    id: 6,
    title: "AI Builders & Infrastructure Deep Tech Jam",
    host: "Ankit Kulkarni",
    hostRole: "Founding Engineer · Distributed Systems",
    hostImage: "/images/event_ai_builders.jpg",
    date: "Sat, Nov 02 · 4:00 PM",
    venue: "Indiranagar, Bengaluru",
    readTime: "68 Tech Leads Verified",
    desc: "Hands-on architectural demo night for engineers and researchers building core LLM infrastructure, low-latency transaction rails, and agentic workflows.",
    category: "Events",
    tags: ["RustGo", "AgenticAI", "UPIInfra"],
    takeaways: [
      "Live engineering code-walkthroughs, strictly zero PowerPoint fluff.",
      "Pair-matching technical co-founders with domain-expert operators.",
      "Private developer channel unlocks upon venue arrival.",
    ],
    indexing: "Bengaluru Chapter • Deep Tech • Senior Builders Only",
    targetAudience: "Senior Engineers, AI Researchers & Technical Founders",
    attendees: 68,
    image: "/images/event_ai_builders.jpg",
    color: "bg-[#F0FDF4]",
    badge: "AI & Infrastructure",
  },
  {
    id: 7,
    title: "First Cheques Angel & Micro-VC Roundtable",
    host: "Grace R.",
    hostRole: "Managing Partner · First Cheques",
    hostImage: "/images/people_grace_r.jpg",
    date: "Monthly Closed Dinner · Mumbai & London",
    venue: "Bandra Kurla Complex (BKC)",
    readTime: "60 Active Angels",
    desc: "Intimate private dinners for active angel investors, family offices, and pre-seed micro-VC leads deploying ₹50L–₹2Cr into Indian early-stage tech.",
    category: "Communities",
    tags: ["AngelSyndicate", "PreSeedCheques", "B2BDeals"],
    takeaways: [
      "Curated deal-flow pipeline reviewed directly by repeat operators.",
      "Chatham House rule discussions on Indian macro fintech trends.",
      "Direct syndicate co-investment allocations with verified leads.",
    ],
    indexing: "Accredited Angels • BKC South Mumbai • Private Syndicate",
    targetAudience: "Active Angel Investors, Micro-VC Partners & Family Offices",
    attendees: 60,
    image: "/images/community_investor.jpg",
    color: "bg-[#FFFBEB]",
    badge: "Investor Circle",
  },
  {
    id: 8,
    title: "Creative Directors Rooftop Salon: 3D & Spatial",
    host: "Vikram Kher",
    hostRole: "Creative Director & 3D Lead",
    hostImage: "/images/people_vikram_kher.jpg",
    date: "Sun, Nov 09 · 6:00 PM",
    venue: "Koramangala Rooftop, Bengaluru",
    readTime: "52 Creatives Verified",
    desc: "Sunset salon and cocktail hour for 3D artists, brand strategists, and spatial designers shaping next-generation consumer product identities.",
    category: "Events",
    tags: ["SpatialDesign", "3DMotion", "BrandIdentity"],
    takeaways: [
      "High-resolution work projections and creative teardowns.",
      "Match-making top creative directors with funded tech startups.",
      "Private Kinjo creative group membership for ongoing collaborations.",
    ],
    indexing: "Bengaluru Rooftop • Curated Portfolio Entry",
    targetAudience: "3D Motion Designers, Brand Directors & Agency Heads",
    attendees: 52,
    image: "/images/event_creative_rooftop.jpg",
    color: "bg-[#FAF5FF]",
    badge: "Creative Salon",
  },
];

const categories = [
  "All",
  "Events",
  "Communities",
  "Design",
  "Founders",
  "Investors",
];

// Pinterest-style card component matching user's reference code
function PinterestCuratedCard({
  item,
  onOpenModal,
}: {
  item: CuratedItem;
  onOpenModal: (item: CuratedItem) => void;
}) {
  const angles = [-1.5, 1.8, -1.2, 2.1, -2, 1.4, -1.8, 1.5];
  const rot = angles[(item.id - 1) % angles.length];

  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      style={{ transform: `rotate(${rot}deg)` }}
      className={`${item.color} rounded-[2rem] p-7 md:p-8 border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group cursor-default flex flex-col justify-between text-left`}
    >
      {/* Pinterest Washi Tape Decorator */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/70 backdrop-blur-sm rounded-xs rotate-[-1deg] border border-black/5 shadow-xs pointer-events-none group-hover:opacity-70 transition-opacity" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-bold text-neutral-700 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-black/5 shadow-xs">
            {item.badge}
          </span>
          <span className="text-[10px] font-semibold text-neutral-500 flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-neutral-400" />
            {item.attendees} Verified
          </span>
        </div>

        {/* Banner Thumbnail */}
        <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4 border border-black/5 shadow-xs">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#FFD45C]" />
              {item.date.split("·")[0]}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-300" />
              {item.venue.split(",")[0]}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-black text-gray-900 leading-[1.25] tracking-tight mb-3 group-hover:text-[#6D28D9] transition-colors">
          {item.title}
        </h3>

        {/* Description Quote */}
        <p className="font-serif italic text-sm sm:text-[14px] text-gray-800/90 leading-relaxed mb-4">
          &ldquo;{item.desc}&rdquo;
        </p>

        {/* Takeaway Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold text-neutral-600 bg-white/70 px-2.5 py-0.5 rounded-full border border-black/[0.04]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Author Attribution */}
      <div className="border-t border-black/[0.08] pt-4 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-300 shrink-0">
            <Image
              src={item.hostImage}
              alt={item.host}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900 leading-none">
              {item.host}
            </p>
            <p className="text-[10px] text-neutral-500 mt-0.5 truncate max-w-[120px]">
              {item.hostRole.split("·")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenModal(item)}
            className="px-3.5 py-1.5 rounded-full bg-white text-neutral-900 text-[11px] font-bold hover:bg-neutral-900 hover:text-white transition-colors border border-black/5 shadow-xs cursor-pointer"
          >
            Insights
          </button>
          <button
            onClick={() => onOpenModal(item)}
            className="w-7 h-7 rounded-full bg-black/5 hover:bg-neutral-900 hover:text-white text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
            title="View Details"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function CuratedEventsAndFounders() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalItem, setModalItem] = useState<CuratedItem | null>(null);
  const [rsvpDone, setRsvpDone] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const total = allCuratedItems.length;

  // Masonry parallax scroll reference
  const masonryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: masonryScroll } = useScroll({
    target: masonryRef,
    offset: ["start end", "end start"],
  });

  // Staggered parallax speeds for the 3 Pinterest columns
  const yCol1 = useTransform(masonryScroll, [0, 1], [40, -60]);
  const yCol2 = useTransform(masonryScroll, [0, 1], [-60, 80]);
  const yCol3 = useTransform(masonryScroll, [0, 1], [30, -50]);

  // Filter items
  const filteredItems = useMemo(() => {
    return allCuratedItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" ||
        item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()));

      const matchesSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Partition into 3 columns
  const col1 = useMemo(() => filteredItems.filter((_, i) => i % 3 === 0), [filteredItems]);
  const col2 = useMemo(() => filteredItems.filter((_, i) => i % 3 === 1), [filteredItems]);
  const col3 = useMemo(() => filteredItems.filter((_, i) => i % 3 === 2), [filteredItems]);

  const handleModalPrev = () => {
    if (!modalItem) return;
    const currentIdx = allCuratedItems.findIndex((e) => e.id === modalItem.id);
    const prevIdx = currentIdx === 0 ? total - 1 : currentIdx - 1;
    setModalItem(allCuratedItems[prevIdx]);
    setRsvpDone(false);
  };

  const handleModalNext = () => {
    if (!modalItem) return;
    const currentIdx = allCuratedItems.findIndex((e) => e.id === modalItem.id);
    const nextIdx = currentIdx === total - 1 ? 0 : currentIdx + 1;
    setModalItem(allCuratedItems[nextIdx]);
    setRsvpDone(false);
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpDone(true);
    try {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.5 },
        colors: ["#6D28D9", "#FFD45C", "#111827"],
      });
    } catch (err) {}
  };

  return (
    <section id="events" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 border-t border-neutral-200 text-neutral-900 bg-[#FAFAFA]">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
        <div>
          <span className="inline-block px-4 py-1.5 bg-neutral-100 border border-neutral-200 text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-600 rounded-full mb-4">
            Curated Gatherings & Communities
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-neutral-950 tracking-[-0.04em]">
            The Directory.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl font-medium mt-2">
            Every gathering is door-verified. Purpose-matched attendees. Zero unsolicited pitch noise.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search venue, role, keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-2xl text-sm focus:outline-none focus:border-[#6D28D9] text-neutral-900 placeholder:text-neutral-400 shadow-xs"
          />
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
        <Filter className="w-4 h-4 text-neutral-400 shrink-0 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-neutral-950 text-white shadow-sm"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* APPLE-GRADE MOBILE EXPERIENCE SHOWCASE: LIVE RADAR & VENUE SCREENS (Dashboard.png & img2.png) */}
      <div className="mb-16 p-6 sm:p-10 rounded-[2.5rem] bg-[#F8FAFC] border border-neutral-200/90 relative overflow-hidden text-left shadow-xs">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Product Architecture Specs */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-mono font-semibold text-neutral-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>THE MOBILE RADAR · LIVE VENUE PLATFORM</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-tight">
              Live Map Radar & <br />
              <span className="text-neutral-400">Partner Venues.</span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
              Explore live verified gatherings near you with purple beacon radar. From London to Mumbai, Kinjo geo-fences activate automatically upon door entry.
            </p>

            {/* Architecture Spec Card */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs text-left space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[#6D28D9] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                  Radar Beacon Architecture
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  50m Radius · Zero Manual Check-in
                </span>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                &ldquo;Purple beacons pulse in real-time when 15+ verified members arrive inside a partner venue. Seamless transition into The Room with zero manual check-in friction.&rdquo;
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-neutral-600">
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                Real-time Geofence
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                Live Headcount
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs text-[#6D28D9] font-bold">
                3 Venues Active Tonight
              </span>
            </div>
          </div>

          {/* Right: Dual Phone Display with Dashboard.png & img2.png */}
          <div className="lg:col-span-6 flex justify-center items-center gap-4 relative">
            {/* PRIMARY PHONE: Dashboard.png (Discovery & Map Radar) */}
            <div className="relative w-[280px] sm:w-[310px] rounded-[46px] p-2.5 bg-gradient-to-b from-[#E5E7EB] via-[#F3F4F6] to-[#D1D5DB] border-2 border-neutral-300 shadow-2xl">
              <div className="relative rounded-[38px] bg-black overflow-hidden border border-neutral-300 h-[480px] text-left shadow-inner">
                <div className="relative w-full h-full">
                  <Image
                    src="/Dashboard.png"
                    alt="Kinjo Discovery & Map Radar"
                    fill
                    sizes="(max-width: 768px) 280px, 310px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* SECONDARY OVERLAPPING PHONE: img2.png (Tinkerspace Venue Screen) */}
            <div className="hidden sm:block relative w-[220px] rounded-[42px] p-2 bg-gradient-to-b from-[#E5E7EB] via-[#F3F4F6] to-[#D1D5DB] border-2 border-neutral-300 shadow-xl opacity-90 hover:opacity-100 transition-opacity -ml-16 mt-12 z-20">
              <div className="relative rounded-[34px] bg-black overflow-hidden border border-neutral-300 h-[400px] text-left shadow-inner">
                <div className="relative w-full h-full">
                  <Image
                    src="/img2.png"
                    alt="Tinkerspace Venue Screen"
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Parallax Masonry Wall */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200">
          <p className="text-neutral-500 font-medium">
            No curated gathering found matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-neutral-950 text-white text-xs font-bold rounded-full cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div ref={masonryRef} className="relative pb-16">
          {/* Desktop 3-Column Parallax Wall */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Column 1 */}
            <motion.div style={{ y: yCol1 }} className="flex flex-col gap-8">
              {col1.map((item) => (
                <PinterestCuratedCard
                  key={item.id}
                  item={item}
                  onOpenModal={setModalItem}
                />
              ))}
            </motion.div>

            {/* Column 2 */}
            <motion.div style={{ y: yCol2 }} className="flex flex-col gap-8 pt-8">
              {col2.map((item) => (
                <PinterestCuratedCard
                  key={item.id}
                  item={item}
                  onOpenModal={setModalItem}
                />
              ))}
            </motion.div>

            {/* Column 3 */}
            <motion.div style={{ y: yCol3 }} className="flex flex-col gap-8 pt-16">
              {col3.map((item) => (
                <PinterestCuratedCard
                  key={item.id}
                  item={item}
                  onOpenModal={setModalItem}
                />
              ))}
            </motion.div>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
            {filteredItems.map((item) => (
              <PinterestCuratedCard
                key={item.id}
                item={item}
                onOpenModal={setModalItem}
              />
            ))}
          </div>
        </div>
      )}

      {/* QUICK-READ INSIGHTS MODAL DIALOG (Light Theme) */}
      <AnimatePresence>
        {modalItem && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setModalItem(null)}
              className="fixed inset-0 bg-neutral-950/40 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className={`relative w-full max-w-2xl ${modalItem.color} rounded-[2.5rem] shadow-2xl border border-neutral-200 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto text-left`}
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 pb-4 border-b border-black/[0.08] flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-neutral-700 bg-white/80 px-3 py-1 rounded-full border border-black/5 shadow-xs">
                      {modalItem.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-600">
                      {modalItem.date}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                    {modalItem.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    {modalItem.venue}
                  </p>
                </div>

                <button
                  onClick={() => setModalItem(null)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-neutral-100 text-neutral-700 flex items-center justify-center transition-colors border border-black/5 shrink-0 ml-4 cursor-pointer shadow-xs"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                {/* Host Credentials */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/80 border border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-300 shrink-0">
                      <Image
                        src={modalItem.hostImage}
                        alt={modalItem.host}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 flex items-center gap-1">
                        {modalItem.host}
                        <ShieldCheck className="w-3.5 h-3.5 text-[#6D28D9]" />
                      </h4>
                      <p className="text-[11px] text-neutral-500">
                        {modalItem.hostRole}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Active
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-800">
                      {modalItem.attendees} Verified
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mb-2">
                    Overview & Mission
                  </h4>
                  <p className="text-neutral-800 text-sm leading-relaxed bg-white/60 p-4 rounded-2xl border border-black/5 font-serif italic">
                    &ldquo;{modalItem.desc}&rdquo;
                  </p>
                </div>

                {/* Key Takeaways */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#6D28D9]" />
                    Key Benefits & What Unfolds
                  </h4>
                  <div className="space-y-2">
                    {modalItem.takeaways.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-black/[0.04]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RSVP Form */}
                {!rsvpDone ? (
                  <form onSubmit={handleRsvpSubmit} className="p-4 rounded-2xl bg-white border border-black/[0.08] space-y-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-neutral-900">
                        REQUEST ACCESS / PASS
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Door Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Work email or LinkedIn"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-neutral-950 text-white font-bold text-xs hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Request Access Key</span>
                    </button>
                  </form>
                ) : (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                    <h5 className="text-sm font-bold text-emerald-950">Pass Requested!</h5>
                    <p className="text-xs text-emerald-800">
                      Credentials for <strong>{applicantName}</strong> submitted. Access unlocks via Kinjo app.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-5 sm:p-6 bg-white/80 border-t border-black/[0.08] flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleModalPrev}
                    className="px-3.5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-bold hover:bg-neutral-50 transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" /> Prev
                  </button>

                  <button
                    onClick={handleModalNext}
                    className="px-3.5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-bold hover:bg-neutral-50 transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Curated & Verified
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
