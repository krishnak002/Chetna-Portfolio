import { motion } from "framer-motion";
import chetnaimg1 from "@/assets/chetnaimg1.jpeg"
import chetnaimg2 from "@/assets/chetnaimg2.jpeg"
import WorkWithMeButton from "./WorkWithMeButton.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cocoa-deep text-cream pt-28 pb-20 sm:pt-32 sm:pb-28 md:pt-36 md:pb-32"
    >
      {/* watermark text */}
      <div aria-hidden className="absolute inset-0 overflow-hidden select-none pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="whitespace-nowrap font-script text-[22vw] md:text-[14vw] leading-[0.85] text-cream/[0.05]"
            style={{ transform: `translateX(${i % 2 === 0 ? "-5%" : "-15%"})` }}
          >
           Chetna Bhatia
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative mx-auto max-w-3xl">
          {/* Paper note card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-notebook rounded-sm px-5 pt-14 pb-10 sm:px-10 sm:pt-16 sm:pb-12 md:px-16 md:pt-20 md:pb-16 shadow-sticky"
          >
            {/* binder clip */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
              <div className="w-16 h-7 sm:w-20 sm:h-8 bg-gradient-to-b from-zinc-300 to-zinc-500 rounded-sm shadow-md flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-zinc-700 bg-zinc-400" />
              </div>
            </div>

            <p className="font-display text-cocoa-deep text-lg sm:text-2xl md:text-4xl leading-[1.5] text-center">
              From{" "}
              <em className="font-script text-3xl sm:text-4xl md:text-6xl align-baseline mx-1">Stratergy</em>{" "}
              to posting and{" "}
              <em className="font-script text-3xl sm:text-4xl md:text-6xl align-baseline mx-1">Engaging</em>{" "}
              With followers , I do{" "}
              <em className="font-script text-3xl sm:text-4xl md:text-6xl align-baseline mx-1"></em>{" "}
              everything{" "}
              <em className="font-script text-3xl sm:text-4xl md:text-6xl align-baseline mx-1">social</em>
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <WorkWithMeButton />
            </div>
          </motion.div>

          {/* Polaroids — sized down on mobile, positioned so they never clip the text */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -20 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute -left-2 sm:-left-6 md:-left-24 -bottom-10 sm:-bottom-12 md:-bottom-10 w-24 sm:w-36 md:w-52 bg-paper p-2 sm:p-3 pb-6 sm:pb-10 shadow-polaroid"
          >
            <img src={chetnaimg1} alt="Olivia Thompson" className="w-full aspect-[4/5] object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 20 }}
            animate={{ opacity: 1, x: 0, rotate: 8 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="absolute -right-2 sm:-right-4 md:-right-16 -top-6 sm:-top-8 w-20 sm:w-32 md:w-44 bg-paper p-2 sm:p-3 pb-5 sm:pb-8 shadow-polaroid"
          >
            <img src={chetnaimg2} alt="" className="w-full aspect-square object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
