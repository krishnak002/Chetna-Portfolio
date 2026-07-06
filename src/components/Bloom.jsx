import { useState } from "react";
import { motion } from "framer-motion";
import { CASES } from "../data/cases.js";

export default function Bloom() {
  const tabs = Object.keys(CASES);
  const [active, setActive] = useState(tabs[0]);
  const c = CASES[active];

  return (
    <section id="work" className="bg-grid-pink py-20 md:py-24 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] text-cocoa-deep/70 mb-3">RECENT FAVORITES</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cocoa-deep">
          Brands I've made bloom
        </h2>
        <p className="mt-3 text-cocoa-deep/75 max-w-xl mx-auto">
          Each one came in with a great product and left with an audience that actually cares.
        </p>

        {/* scrollable tab bar — handles unlimited clients */}
        <div className="mt-8 max-w-full overflow-x-auto no-scrollbar">
          <div className="inline-flex flex-nowrap justify-start md:justify-center rounded-full bg-cream/60 p-1 backdrop-blur mx-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full transition ${
                  active === t ? "bg-olive text-cream" : "text-cocoa-deep hover:bg-cream"
                }`}
              >
                {CASES[t].title || t}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 bg-paper rounded-md shadow-sticky p-5 sm:p-8 text-left relative"
        >
          <div className="absolute -top-3 right-6 bg-cocoa-deep text-cream text-xs px-3 py-2 rounded-sm rotate-3 shadow-md">
            {c.tag}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs tracking-[0.3em] text-cocoa-deep/60 mb-2">
                CASE STUDY {tabs.indexOf(active) + 1}
              </p>
              <h3 className="font-display text-3xl sm:text-4xl text-cocoa-deep">{c.title}</h3>
              <p className="font-script text-3xl text-cocoa-deep/80">{c.sub}</p>
              <dl className="mt-6 space-y-3">
                {c.stats.map((s) => (
                  <div
                    key={s.k}
                    className="flex items-baseline justify-between border-b border-dashed border-cocoa-deep/30 pb-2 gap-3"
                  >
                    <dt className="text-xs tracking-widest text-cocoa-deep/70">{s.k}</dt>
                    <dd className="font-display text-xl text-cocoa-deep">{s.v}</dd>
                  </div>
                ))}
              </dl>
              <blockquote className="mt-6 bg-butter p-4 rounded-sm text-sm text-cocoa-deep">
                "{c.quote}"<br />
                <span className="text-xs tracking-widest mt-2 block">{c.quoteBy}</span>
              </blockquote>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {c.grid.map((cell, i) =>
                cell.type === "img" ? (
                  <div key={i} className="aspect-square rounded-sm overflow-hidden">
                    <img src={cell.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm ${cell.bg} flex flex-col items-center justify-center text-cocoa-deep p-2 text-center`}
                  >
                    <span className="font-display text-2xl leading-tight">{cell.v}</span>
                    <span className="text-[9px] tracking-widest opacity-70 mt-1">{cell.k}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
