"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  tag: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is KINJO free to use?",
    answer:
      "Yes — completely free to join, get matched, and connect on iOS & Android. When an organizer hosts a ticketed gathering, you purchase access directly in the app. There are zero subscriptions and zero fees just to browse, meet people, and organize your network.",
    tag: "PRICING",
  },
  {
    question: "How does matching in The Room work?",
    answer:
      "The Room activates the moment you step into a partner venue. Rather than endless scrolling, it algorithms your real-time purpose (e.g. 'Seeking fintech co-founder' or 'Raising pre-seed') against attendees in that exact room, scoring compatibility from 0% to 100%.",
    tag: "ALGORITHM",
  },
  {
    question: "Do I have to cold message strangers?",
    answer:
      "Never. Kinjo is built on double opt-in nudges. You tap 'Send a nudge'. When they accept, you're connected — no cold approach, no guesswork, and zero spam. If they don't respond, it remains completely private.",
    tag: "PRIVACY",
  },
  {
    question: "Is my profile private?",
    answer:
      "Your privacy is protected by default. Only verified attendees inside the same venue can see your active Room card. Your contact information, personal buckets, and private notes are only accessible by you.",
    tag: "SECURITY",
  },
  {
    question: "What kinds of gatherings is it for?",
    answer:
      "Founders mixers, design salons, deep tech jams, angel breakfasts, creative showcases, and private executive dinners. Whether you are seeking a co-founder, hiring founding designers, or raising an angel round, Kinjo runs the whole evening.",
    tag: "GATHERINGS",
  },
  {
    question: "Can I host and organize gatherings on Kinjo?",
    answer:
      "Yes! Organizers get access to the Kinjo Command Center: gauge community interest before committing to venues, sell tickets with instant bank payouts, scan QR passes at the door, and manage verified guest lists with ease.",
    tag: "ORGANIZERS",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="relative py-20 md:py-24 bg-[#FAFAFA] text-neutral-900 overflow-hidden border-t border-neutral-200">
      {/* Architectural Brand Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <div className="relative w-[600px] sm:w-[850px] md:w-[1000px] h-[320px] opacity-[0.03] grayscale contrast-200">
          <Image
            src="/kinjo.svg"
            alt="Kinjo Brand Mark"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-mono font-semibold text-neutral-700 mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span className="uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.04em] text-neutral-950 mb-3">
            Questions? <span className="text-neutral-400">Everything answered.</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Everything you need to know about The Room, verified attendance, and double opt-in matching.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-neutral-200/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                      {faq.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-950">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-neutral-600 leading-relaxed font-medium border-t border-neutral-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
