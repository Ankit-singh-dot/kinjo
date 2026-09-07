"use client";

import React, { useState, useEffect } from "react";
import { KinjoLogo } from "./KinjoLogo";
import { ArrowUpRight, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenJoinModal: (type?: string) => void;
}

export function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Curated Rooms", href: "#events" },
    { label: "Verified Profiles", href: "#profile" },
    { label: "Outcomes", href: "#stories" },
    { label: "Good to Know", href: "#faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm"
            : "bg-white/70 backdrop-blur-md border border-neutral-200/50"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <KinjoLogo size="md" textColor="#111827" markColor="#6D28D9" />
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-100 text-neutral-600 border border-neutral-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Live 2026
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold text-neutral-600 hover:text-neutral-950 transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenJoinModal("attendee")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Download App
          </button>
          <button
            onClick={() => onOpenJoinModal("founders")}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-[13px] transition-all shadow-sm cursor-pointer"
          >
            <span>Get Kinjo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD45C]" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-neutral-200 rounded-3xl p-6 shadow-xl flex flex-col gap-4 z-50">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-neutral-700 hover:text-neutral-950 py-2 px-3 rounded-xl hover:bg-neutral-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal("founders");
              }}
              className="w-full py-3 rounded-full bg-neutral-950 text-white font-bold text-sm"
            >
              Get Kinjo Free
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal("attendee");
              }}
              className="w-full py-2.5 rounded-full border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-50"
            >
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
