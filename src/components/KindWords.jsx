import { motion } from "framer-motion";
import WorkWithMeButton from "./WorkWithMeButton.jsx";

const notes = [
  { text: "She took over our account in March. By June we had a waitlist.", by: "CARLO, SCOGLIO BEACH CLUB", color: "bg-paper", rotate: -3, clip: "🎀" },
  { text: "Numbers up, stress down. Worth every penny.", by: "SAM, NAILS BY SAM", color: "bg-butter", rotate: 2, clip: "🔴" },
  { text: "Three months with Olivia and people were flying in saying they found us online.", by: "CLARE, ASHEVILLE BOUTIQUE HOTEL", color: "bg-paper", rotate: -2, clip: "🌸" },
  { text: "I stopped running ads. Her content does more.", by: "FRANCIS, BLAKEHOUSE HOTEL", color: "bg-butter", rotate: 3, clip: "🔵" },
];

export default function KindWords() {
  return (
    <section className="bg-cream py-20 md:py-24 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xs tracking-[0.3em] text-cocoa-deep/70 mb-3">RECEIPTS</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cocoa-deep">Kind words</h2>
        <p className="text-cocoa-deep/70 mt-2">I could brag, but they do it better.</p>
        <div className="mt-5"><WorkWithMeButton /></div>
      </div>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 md:gap-14">
        {notes.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: n.rotate }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative ${n.color} p-6 pt-10 shadow-sticky`}
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)" }}
          >
            <div className="absolute -top-5 left-6 text-3xl drop-shadow-md">{n.clip}</div>
            <p className="font-hand text-xl text-cocoa-deep leading-snug">{n.text}</p>
            <p className="mt-4 text-xs tracking-widest text-cocoa-deep/70">{n.by}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
