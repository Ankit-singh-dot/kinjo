"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Navbar } from "./components/Navbar";
import { ArcFanHero } from "./components/ArcFanHero";
import { CinematicVenueFilm } from "./components/CinematicVenueFilm";
import { InteractiveEventJourney } from "./components/InteractiveEventJourney";
import { CuratedEventsAndFounders } from "./components/CuratedEventsAndFounders";
import { VerifiedProfileCard } from "./components/VerifiedProfileCard";
import { CommunityStories } from "./components/CommunityStories";
import { FaqSection } from "./components/FaqSection";
import { FooterSection } from "./components/FooterSection";
import { KinjoLogo } from "./components/KinjoLogo";
import {
  Sparkles,
  X,
  CheckCircle2,
  Apple,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>("attendee");
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [roleSelection, setRoleSelection] = useState("Founder / Building a startup");

  const handleOpenJoinModal = (type: string = "attendee") => {
    setModalType(type);
    setIsJoinModalOpen(true);
    setJoinSubmitted(false);
    setFullName("");
    setEmailOrPhone("");
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ["#6D28D9", "#FFD45C", "#111827"],
      });
    } catch (err) {}
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-neutral-900 relative selection:bg-[#6D28D9] selection:text-white">
      {/* Floating Navigation */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Flagship Hero with 3D Perspective Arc Fan */}
      <ArcFanHero
        onOpenJoinModal={handleOpenJoinModal}
        onExploreEvents={scrollToHowItWorks}
      />

      {/* Apple-Grade Cinematic Video Theater: Real Venues & Unfiltered Energy */}
      <CinematicVenueFilm onOpenJoinModal={handleOpenJoinModal} />

      {/* Interactive Animated Event Walkthrough: 7:00 PM -> 9:30 PM */}
      <InteractiveEventJourney />

      {/* Curated Directory with Pinterest Parallax Wall */}
      <CuratedEventsAndFounders />

      {/* Verified Profile Showcase: Aarav Mehta */}
      <VerifiedProfileCard />

      {/* Real Member Stories (Wall of Outcomes) */}
      <CommunityStories />

      {/* Good to Know FAQs */}
      <FaqSection />

      {/* Download & Footer */}
      <FooterSection onOpenJoinModal={handleOpenJoinModal} />

      {/* Global Join Kinjo Modal (Clean Light Theme) */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/40 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-[2.5rem] bg-white border border-neutral-200 p-6 sm:p-8 shadow-2xl overflow-hidden text-left">
            {/* Close Button */}
            <button
              onClick={() => setIsJoinModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!joinSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <KinjoLogo showWordmark={false} size="sm" markColor="#6D28D9" />
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-100 text-neutral-700 border border-neutral-200">
                    FIND YOUR KIND
                  </span>
                </div>

                <h3 className="text-2xl font-black text-neutral-950 mb-1.5">
                  {modalType === "founders"
                    ? "Join the Founders Circle"
                    : modalType === "ios"
                    ? "Get Kinjo for iOS"
                    : modalType === "android"
                    ? "Get Kinjo for Android"
                    : "Join KINJO"}
                </h3>
                <p className="text-xs text-neutral-600 mb-6 font-medium">
                  Transform accidental networking into intentional connections. Claim early access to verified rooms.
                </p>

                <form onSubmit={handleJoinSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Maya Joshi"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Business Email or Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      placeholder="name@company.com or +91..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Professional Role / Intent
                    </label>
                    <select
                      value={roleSelection}
                      onChange={(e) => setRoleSelection(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                    >
                      <option value="Founder / Building a startup">Founder / Building a startup</option>
                      <option value="Product Designer / Creative Lead">
                        Product Designer / Creative Lead
                      </option>
                      <option value="Angel Investor / Pre-seed VC">
                        Angel Investor / Pre-seed VC
                      </option>
                      <option value="Senior PM / Founding Engineer">
                        Senior PM / Founding Engineer
                      </option>
                      <option value="Event Host / Organizer">Event Host / Organizer</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#FFD45C]" />
                      <span>Request Access · Find Your Kind</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-neutral-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Apple className="w-3.5 h-3.5" /> iOS App
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5" /> Android App
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-emerald-600">
                      <ShieldCheck className="w-3.5 h-3.5" /> Double Opt-in
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black text-neutral-950 mb-2">Welcome to Kinjo</h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6">
                  You&apos;re registered, <span className="text-neutral-950 font-bold">{fullName}</span>. Verification key dispatched to{" "}
                  <span className="text-[#6D28D9] font-mono font-semibold">{emailOrPhone}</span>.
                </p>

                <button
                  onClick={() => setIsJoinModalOpen(false)}
                  className="w-full py-3 rounded-full bg-neutral-950 text-white font-bold text-sm hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
                >
                  Enter The Room
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
