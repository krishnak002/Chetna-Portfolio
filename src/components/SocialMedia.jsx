import React from "react";
import canva from "@/assets/icons/canva.png";
import chatgpt from "@/assets/icons/chatgpt.png";
import gemini from "@/assets/icons/gemini.png";
import meta from "@/assets/icons/meta.png";
import Perplexity from "@/assets/icons/Perplexity.png";
import GoogleAnalytics from "@/assets/icons/GoogleAnalytics.png";
import Claude from "@/assets/icons/Claude.png";
import Notion from "@/assets/icons/Notion.png";
import Instagram from "@/assets/icons/Instagram.webp";
import LinkedIn from "@/assets/icons/LinkedIn.png";
import Facebook from "@/assets/icons/Facebook.png";
import YouTube from "@/assets/icons/YouTube.png";
import Reddit from "@/assets/icons/Reddit.png";
// Simple inline SVG-ish emoji fallbacks; replace src with your own logos if needed.
const tools = [
  { name: "Canva",           src: canva },
  { name: "ChatGPT",         src: chatgpt },
  { name: "Gemini",          src: gemini },
  { name: "Meta AI",         src: meta },
  { name: "Perplexity",      src: Perplexity },
  { name: "Claude",          src: Claude },
  { name: "Google Analytics",src: GoogleAnalytics },
  { name: "Notion",          src: Notion },
];

const platforms = [
  { name: "Instagram", src: Instagram },
  { name: "LinkedIn",  src: LinkedIn },
  { name: "Facebook",  src: Facebook },
  { name: "YouTube",   src: YouTube },
  { name: "Reddit",    src: Reddit },
];

export default function AboutSpread() {
  return (
    <section className="relative w-full min-h-screen bg-[#f4efe4] py-10 px-4 md:py-16 md:px-8 font-body text-skyblue">
      {/* Notebook spread */}
      <div className="relative mx-auto max-w-6xl bg-[#fdfbf3] rounded-2xl shadow-2xl overflow-hidden
                      grid grid-cols-1 md:grid-cols-2">
        {/* Center spiral binding (desktop only) */}
        <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col justify-around items-center py-6 z-10 pointer-events-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-8 h-6 rounded-full border-4 border-neutral-400 bg-neutral-300 shadow-inner" />
          ))}
        </div>

        {/* LEFT PAGE */}
        <div
          className="relative p-6 md:p-10 md:pr-16 border-b md:border-b-0 md:border-r border-dashed border-neutral-300"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0 30px, rgba(36,70,85,0.15) 30px 31px)",
          }}
        >
          <h2 className="font-display italic text-3xl md:text-4xl leading-tight text-skyblue">
            Helping brands stand<br /> out online.
          </h2>

          {/* Torn paper card */}
          <div className="relative mt-8 max-w-sm mx-auto md:mx-0">
            {/* Tape */}
            <span className="absolute -top-3 left-8 w-16 h-5 bg-neutral-300/70 rotate-[-6deg]
                             [background-image:linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)]
                             [background-size:6px_6px]" />
            <div
              className="bg-[#f1ece1] p-6 shadow-md"
              style={{
                clipPath:
                  "polygon(2% 4%, 98% 0%, 100% 20%, 97% 45%, 100% 70%, 96% 96%, 60% 100%, 30% 97%, 4% 100%, 0% 75%, 3% 40%, 0% 15%)",
              }}
            >
              <h3 className="font-display italic text-2xl mb-4">Education-</h3>
              <ul className="space-y-4 text-[15px]">
                <li>
                  <p className="font-medium">• Bachelors in business administration (marketing)</p>
                  <p className="italic opacity-80">SS Agrawal college - 2023 - 2026</p>
                </li>
                <li>
                  <p className="font-medium">• Digital marketing expert</p>
                  <p className="italic opacity-80">Ahmedabad school of digital marketing (ASDM) - 2023</p>
                </li>
                <li>
                  <p className="font-medium">• Generative AI Mastermind</p>
                  <p className="italic opacity-80">Outskill E-Learning Platform</p>
                </li>
                <li>
                  <p className="font-medium">• AI Tools Workshop</p>
                  <p className="italic opacity-80">BE10X</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT PAGE */}
        <div
          className="relative p-6 md:p-10 md:pl-16"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0 30px, rgba(36,70,85,0.15) 30px 31px)",
          }}
        >
          <h2 className="font-display italic text-3xl md:text-4xl text-skyblue">Tools i work with-</h2>
          <div className="mt-6 grid grid-cols-4 gap-4 sm:gap-6 max-w-md">
            {tools.map((t) => (
              <div key={t.name} className="flex items-center justify-center">
                <img
                  src={t.src}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-md
                             rounded-xl bg-white/60 p-2"
                />
              </div>
            ))}
          </div>

          <h2 className="mt-10 font-display italic text-3xl md:text-4xl text-skyblue">Platforms I manage-</h2>
          <div className="relative mt-6 inline-block bg-[#f1ece1] px-5 py-4 shadow-md rotate-[-1deg]"
               style={{
                 clipPath:
                   "polygon(1% 8%, 99% 2%, 100% 85%, 97% 100%, 40% 96%, 3% 100%, 0% 60%, 2% 20%)",
               }}>
            {/* Pin */} 
            <div className="flex items-center gap-3 sm:gap-4">
              {platforms.map((p) => (
                <img
                  key={p.name}
                  src={p.src}
                  alt={p.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}