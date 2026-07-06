import { motion } from "framer-motion";
import WorkWithMeButton from "./WorkWithMeButton.jsx";

const tiers = [
  { n: "01", name: "The Starter", body: "For early brands. We get your grid in order, your DMs answered, and your voice consistent.", price: "$1,800/mo" },
  { n: "02", name: "The Cult Builder", body: "The sweet spot. A real content engine — short-form, strategy, and the human follow-through that builds actual fans.", price: "$3,400/mo" },
  { n: "03", name: "The Whole Thing", body: "Your fractional social team. We run paid + organic, source creators, and own the funnel from scroll to checkout.", price: "$5,800/mo" },
];

export default function PickFlavor() {
  return (
    <>
      <div className="relative">
        <img src={desk} alt="Leather notebook on warm wood desk" className="w-full h-[35vh] md:h-[55vh] object-cover" loading="lazy" />
      </div>
      <section id="services" className="relative bg-coral text-cream overflow-hidden py-20 px-5 sm:px-6">
        <div aria-hidden className="absolute inset-0 pointer-events-none select-none opacity-20">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="whitespace-nowrap font-display italic text-[16vw] leading-[0.9]"
              style={{ transform: `translateX(${i % 2 ? "-10%" : "0"})` }}
            >
              flavor Pick flavor
            </div>
          ))}
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] mb-3">WORK WITH ME</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Pick your flavor</h2>
          <p className="text-cream/90 max-w-xl mx-auto mb-6">Every package includes strategy, content, and community management. Pick your level.</p>
          <WorkWithMeButton />

          <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`text-left p-6 rounded-sm shadow-sticky ${i === 1 ? "bg-paper" : i === 0 ? "bg-butter" : "bg-mint"} text-cocoa-deep`}
              >
                <div className="text-xs tracking-widest mb-3">{t.n}</div>
                <h3 className="font-display text-2xl mb-3">{t.name}</h3>
                <p className="text-sm leading-relaxed mb-6">{t.body}</p>
                <p className="font-display text-xl mb-5">{t.price}</p>
                <button className="inline-flex items-center gap-2 rounded-full bg-mint/70 text-cocoa-deep px-4 py-2 text-xs font-medium hover:bg-mint transition">
                  Tap to peek inside <span aria-hidden>→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
