import { motion } from "framer-motion";

const items = [
  { n: "01", title: "Strategy first. Trends second.", subTitle: `No random posting. No "let's hope this goes viral.`, body: 'Every reel, carousel, and caption has a job to do. We build a strategy that turns followers into fans and fans into customers.', color: "bg-mint" },
  { n: "02", title: "Your biggest hype human.", subTitle: `Your DMs won't collect dust.
Your comments won't feel ignored.`, body: 'I build conversations, not just content. Because social media is called social for a reason.', color: "bg-butter" },
  { n: "03", title: "Data... but make it fun.", subTitle: `No confusing spreadsheets.`,body: `You'll know what's popping, what's flopping, and exactly what we're testing next—all explained in actual human language.`, color: "bg-blush" },
];

export default function LittleThings() {
  return (
    <section className="bg-grid-paper py-20 md:py-24 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] text-cocoa-deep/70 mb-4">BEFORE WE DIVE IN</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cocoa-deep leading-tight">
          A few little things<br />you should know…
        </h2>
      </div>
      <div className="max-w-5xl mx-auto mt-12 md:mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.n}
            initial={{ opacity: 0, y: 30, rotate: i % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, rotate: 0 }}
            className={`${it.color} p-6 rounded-sm shadow-sticky`}
          >
            <div className="font-display text-5xl text-cocoa-deep mb-6">{it.n}</div>
            <h3 className="font-display font-bold text-cocoa-deep mb-2">{it.title}</h3>
            <h3 className="font-display font-semibold text-cocoa-deep mb-3">{it.subTitle}</h3>
            <p className="text-sm text-cocoa-deep/75 leading-relaxed">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
