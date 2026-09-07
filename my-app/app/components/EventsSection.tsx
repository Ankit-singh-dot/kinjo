"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Calendar,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Ticket,
  Clock,
  Filter,
  X,
  QrCode,
  Heart,
} from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  city: string;
  category: "Startups" | "Design" | "Tech" | "Creative";
  dateTime: string;
  venue: string;
  attendeesCount: number;
  featuredAttendee: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
  price: string;
}

const allEvents: EventItem[] = [
  {
    id: "ev1",
    title: "Founders Mixer: The Loft",
    city: "Mumbai",
    category: "Startups",
    dateTime: "Fri, Oct 24 · 7:00 PM",
    venue: "The Loft, Lower Parel",
    attendeesCount: 94,
    featuredAttendee: {
      name: "Grace R.",
      role: "Angel Investor (first cheques)",
      avatar: "/images/people_grace_r.jpg",
    },
    image: "/images/event_founders_mixer.jpg",
    tags: ["Pre-seed", "SaaS", "Co-founders"],
    price: "Free for Verified Founders",
  },
  {
    id: "ev2",
    title: "Design Week Kickoff",
    city: "Mumbai",
    category: "Design",
    dateTime: "Thu, Oct 30 · 6:30 PM",
    venue: "NCPA, Nariman Point",
    attendeesCount: 120,
    featuredAttendee: {
      name: "Maya Joshi",
      role: "Product Designer (Razorpay alum)",
      avatar: "/images/people_maya_joshi.jpg",
    },
    image: "/images/event_design_week.jpg",
    tags: ["Figma", "Design Systems", "Brand"],
    price: "RSVP Open",
  },
  {
    id: "ev3",
    title: "AI Builders & LLM Scaling Jam",
    city: "Bengaluru",
    category: "Tech",
    dateTime: "Sat, Nov 02 · 4:00 PM",
    venue: "The Hub, Indiranagar",
    attendeesCount: 68,
    featuredAttendee: {
      name: "Vikram Kher",
      role: "Motion & 3D Specialist",
      avatar: "/images/people_vikram_kher.jpg",
    },
    image: "/images/event_ai_builders.jpg",
    tags: ["GenAI", "Agents", "Engineers"],
    price: "Invite Only",
  },
  {
    id: "ev4",
    title: "Sunset Creator & Angel Salon",
    city: "Mumbai",
    category: "Creative",
    dateTime: "Sun, Nov 03 · 5:30 PM",
    venue: "Rooftop Lounge, Marine Drive",
    attendeesCount: 85,
    featuredAttendee: {
      name: "Priya Rao",
      role: "Sustainable D2C Founder",
      avatar: "/images/people_priya_rao.jpg",
    },
    image: "/images/event_creative_rooftop.jpg",
    tags: ["First Cheques", "Consumer", "Editorial"],
    price: "RSVP Open",
  },
  {
    id: "ev5",
    title: "Pre-Seed Founders Breakfast",
    city: "Bengaluru",
    category: "Startups",
    dateTime: "Wed, Nov 06 · 9:00 AM",
    venue: "Soho Space, Koramangala",
    attendeesCount: 42,
    featuredAttendee: {
      name: "Aarav Mehta",
      role: "Design Lead & Angel",
      avatar: "/images/people_aarav_mehta.jpg",
    },
    image: "/images/community_founders.jpg",
    tags: ["Fundraising", "YC Prep", "Product"],
    price: "Curated Circle",
  },
  {
    id: "ev6",
    title: "Indie Hackers & Micro-SaaS Meet",
    city: "Ahmedabad",
    category: "Tech",
    dateTime: "Sat, Nov 09 · 5:00 PM",
    venue: "Vibrant Hub, Bodakdev",
    attendeesCount: 55,
    featuredAttendee: {
      name: "Parth S.",
      role: "SaaS Builder",
      avatar: "/images/people_vikram_kher.jpg",
    },
    image: "/images/community_indie_hackers.jpg",
    tags: ["Bootstrapping", "Stripe", "Solopreneurs"],
    price: "Free Entry",
  },
];

export function EventsSection() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);
  const [rsvpStep, setRsvpStep] = useState<"form" | "confirmed">("form");

  // Form states
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userPurpose, setUserPurpose] = useState("Looking for Co-founder");

  const cities = ["All", "Mumbai", "Bengaluru", "Ahmedabad", "Delhi NCR"];
  const categories = ["All", "Startups", "Design", "Tech", "Creative"];

  const filteredEvents = allEvents.filter((ev) => {
    const matchCity = selectedCity === "All" || ev.city === selectedCity;
    const matchCat = selectedCategory === "All" || ev.category === selectedCategory;
    return matchCity && matchCat;
  });

  const handleOpenRsvp = (ev: EventItem) => {
    setActiveModalEvent(ev);
    setRsvpStep("form");
    setUserName("");
    setUserRole("");
  };

  const handleSubmitRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpStep("confirmed");

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6D28D9", "#FFD45C", "#10B981", "#FFFFFF"],
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <section id="events" className="relative py-28 md:py-36 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#6D28D9]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FFD45C] mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#FFD45C]" />
              <span>WHAT&apos;S HAPPENING AROUND YOU</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2">
              Real events. Real connections. <br />
              <span className="text-gradient-violet">One app.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              From discovering what&apos;s on tonight to meeting the right people there — Kinjo runs your whole week. Reserve your spot instantly.
            </p>
          </div>

          {/* City Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCity === city
                    ? "bg-[#6D28D9] text-white shadow-md shadow-[#6D28D9]/30"
                    : "bg-[#14141c] text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs text-zinc-500 font-mono uppercase mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Track:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#6D28D9]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Event Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-black/70 backdrop-blur-md text-[#FFD45C] border border-[#FFD45C]/30">
                      {ev.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#6D28D9]/80 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {ev.attendeesCount} going
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FFD45C]" />
                      {ev.dateTime}
                    </span>
                    <span className="text-[11px] text-zinc-300 font-mono">{ev.city}</span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#B892FF] transition-colors">
                    {ev.title}
                  </h3>

                  <p className="text-xs text-zinc-400 flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span className="truncate">{ev.venue}</span>
                  </p>

                  {/* Featured In the Room Attendee */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 mb-4 flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#6D28D9] shrink-0">
                      <Image
                        src={ev.featuredAttendee.avatar}
                        alt={ev.featuredAttendee.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">
                        {ev.featuredAttendee.name}
                      </p>
                      <p className="text-[10px] text-zinc-400 truncate">
                        {ev.featuredAttendee.role}
                      </p>
                    </div>
                    <span className="ml-auto text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                      In The Room
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {ev.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleOpenRsvp(ev)}
                  className="w-full py-3 rounded-2xl bg-white/10 hover:bg-[#6D28D9] text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#6D28D9]/25"
                >
                  <Ticket className="w-4 h-4 text-[#FFD45C]" />
                  <span>Attend / Join Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive RSVP / Guest Pass Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e0e15] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Ambient Modal Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6D28D9]/30 blur-[80px] rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {rsvpStep === "form" ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#6D28D9]/20 text-[#B892FF] border border-[#6D28D9]/30">
                    RSVP · {activeModalEvent.city}
                  </span>
                  <span className="text-xs text-zinc-400">{activeModalEvent.dateTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{activeModalEvent.title}</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  {activeModalEvent.venue} · Enter details to generate your digital pass and get matched inside The Room.
                </p>

                <form onSubmit={handleSubmitRsvp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Parth Shah or Riya Sen"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6D28D9] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Your Title & Company / Craft
                    </label>
                    <input
                      type="text"
                      required
                      value={userRole}
                      onChange={(e) => setUserRole(e.target.value)}
                      placeholder="e.g. Co-founder @ stealth or Product Designer"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#6D28D9] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      What are you looking for tonight? (Your Room Purpose)
                    </label>
                    <select
                      value={userPurpose}
                      onChange={(e) => setUserPurpose(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#14141d] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6D28D9] transition-colors"
                    >
                      <option value="Looking for Co-founder">
                        Looking for a Technical / Business Co-founder
                      </option>
                      <option value="Raising Pre-Seed / Angel Round">
                        Raising Pre-Seed / Angel Investment
                      </option>
                      <option value="Hiring Lead Designers or Engineers">
                        Hiring Senior Designers or Founding Engineers
                      </option>
                      <option value="Seeking Strategic Collaborators / Clients">
                        Seeking Strategic Collaborators / High-Value Clients
                      </option>
                      <option value="Curious & Expanding Network">
                        Curious & Meeting Intentional Peers
                      </option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#7C3AED] hover:to-[#9333EA] text-white font-bold text-sm shadow-lg shadow-[#6D28D9]/40 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-[#FFD45C]" />
                      <span>Confirm RSVP & Claim Digital Pass</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black text-white mb-1">You&apos;re On the Guest List!</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Pass issued for <span className="text-white font-semibold">{userName || "Guest"}</span> ({userRole || "Member"}).
                </p>

                {/* Digital Ticket Card */}
                <div className="rounded-2xl p-5 bg-gradient-to-br from-[#1b1430] to-[#12121c] border-2 border-[#6D28D9] text-left mb-6 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD45C]">
                        KINJO PASS · VERIFIED
                      </span>
                      <h4 className="text-sm font-bold text-white truncate">{activeModalEvent.title}</h4>
                    </div>
                    <div className="p-2 rounded-lg bg-black/60 border border-white/10">
                      <QrCode className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <span className="text-[10px] text-zinc-500">WHEN</span>
                      <p className="text-zinc-200 font-semibold">{activeModalEvent.dateTime}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500">VENUE</span>
                      <p className="text-zinc-200 font-semibold">{activeModalEvent.venue}</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Match Intent:</span>
                    <span className="text-[#FFD45C] font-semibold">{userPurpose}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
