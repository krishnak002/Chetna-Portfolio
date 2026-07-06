import { motion } from "framer-motion";
import WorkWithMeButton from "./WorkWithMeButton.jsx";

const steps = [
  { n: "01", title: "Discovery", body: "We sit down (virtually, w/ matcha) for a 90-min brand audit. I leave with your voice, your goals, and your favorite emoji.", color: "bg-butter" },
  { n: "02", title: "The Plan", body: "I send a 30-day content map: pillars, post types, captions, the works. You approve, comment, or veto. We iterate.", color: "bg-blush" },
  { n: "03", title: "Make + Post", body: "I draft, design, schedule, and reply to every DM. Weekly Loom updates so you're never in the dark.", color: "bg-mint" },
  { n: "04", title: "Look Back", body: "Monthly dashboard — what worked, what didn't, what we're doing next month. Plain English. No jargon.", color: "bg-paper" },
];

export default function SecretSauce() {
  return (
    <section id="process" className="bg-cocoa-deep text-cream py-20 md:py-24 px-5 sm:px-6 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-6xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] mb-3 text-cream/70">HOW WE WORK TOGETHER</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3">The secret sauce</h2>
        <p className="text-cream/80 mb-6">Four steps. Six weeks. Zero ghosting. You'll always know what's next.</p>
        <WorkWithMeButton />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotate: 0 }}
              className={`${s.color} text-cocoa-deep text-left p-5 rounded-sm shadow-sticky`}
            >
              <div className="font-display text-5xl mb-4">{s.n}</div>
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
