import { useState } from "react";
import { motion } from "framer-motion";
import WorkWithMeButton from "./WorkWithMeButton.jsx";

const faqs = [
  { q: "Do you offer one-time services, or do you only work on monthly retainers?", a: "I offer both depending on your needs. For ongoing growth, community management, and consistent posting, a monthly retainer is best. However, I also take on one-off projects like profile optimization, strategy build-outs, or campaign launches." },
  { q: "Which social media platforms do you specialize in?", a: "I manage all major platforms including Instagram, LinkedIn, Facebook, and Pinterest. During our strategy phase, we will determine which specific platforms your target audience uses most so we can focus our efforts there." },
  { q: "How involved do I need to be in the content creation process?", a: "Your level of involvement is up to you, but typically we collaborate closely at the start of each month. I will need your approval on the content calendar and any brand-specific updates. Beyond that, I handle the scripting, designing, scheduling, and community engagement so you can focus on your business." },
  { q: "How do you make sure the content matches my brand's voice?", a: "Before creating any content, I build a comprehensive brand voice guide. This outlines your brand's tone, preferred vocabulary, values, and visual style. Every caption and reply is crafted to seamlessly align with your established identity." },
  { q: "What is your cancellation policy if I need to stop services?", a: "Monthly retainers operate on a contract basis with a standard 30-day written notice required for cancellation. This ensures a smooth transition, allows me to wrap up active campaigns, and delivers all remaining assets to your team." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-grid-green py-20 md:py-24 px-5 sm:px-6">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-xs tracking-[0.3em] text-cocoa-deep/70 mb-3">FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-cocoa-deep">Quick questions, quick answers</h2>
        <p className="text-cocoa-deep/75 mt-3">Got questions? Here's what most people ask before they reach out.</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_2fr] gap-5">
        <div className="bg-paper p-5 rounded-sm shadow-sticky self-start">
          <div className="w-10 h-10 rounded-full bg-coral text-cream flex items-center justify-center text-lg mb-3">?</div>
          <h3 className="font-display text-xl text-cocoa-deep mb-2">Have a question?</h3>
          <p className="text-sm text-cocoa-deep/75 mb-4">I'm always here to fill you in with quick, clear, and reliable answers whenever needed.</p>
          <WorkWithMeButton />
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-butter rounded-sm shadow-sticky overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-cocoa-deep">{f.q}</span>
                <span className="w-7 h-7 rounded-full bg-cocoa-deep text-cream flex items-center justify-center text-sm shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-sm text-cocoa-deep/80">{f.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
