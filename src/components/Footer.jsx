export default function Footer() {
  return (
    <footer id="contact" className="bg-cocoa-deep text-cream py-20 px-5 sm:px-6 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none opacity-[0.06]">
        <div className="font-script text-[22vw] leading-[0.85] whitespace-nowrap">Let's make something</div>
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] mb-3 text-cream/70">CURRENTLY BOOKING — FALL 2026</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6">
          Let's build the <em className="font-script text-5xl sm:text-6xl md:text-8xl me-4">cult</em> together.
        </h2> 
        <a href="mailto:chetnabhatia1405@gmail.com" className="font-display text-xl sm:text-2xl md:text-3xl underline decoration-coral decoration-2 underline-offset-4 hover:text-coral transition break-words">
          chetnabhatia1405@gmail.com
        </a>
        <br />
        <br />
        <a className=" text-xl sm:text-2xl md:text-3xl decoration-coral decoration-2 underline-offset-4 hover:text-coral transition break-words">
          +91-8446125936 
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-cream/70">
          <a href="#" className="hover:text-cream">Instagram</a>
          <a href="#" className="hover:text-cream">LinkedIn</a>
          <a href="#" className="hover:text-cream">Pintrest</a>
        </div>
        <p className="mt-10 text-xs text-cream/50">© 2026 Chetna Bhatia.</p>
      </div>
    </footer>
  );
}
