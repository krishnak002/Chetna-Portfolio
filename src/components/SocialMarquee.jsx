import Marquee from "./Marquee.jsx";

export default function SocialMarquee() {
  const items = [
    <span className="font-script text-4xl md:text-5xl text-cream">Instagram</span>,
    <span className="text-3xl text-cream">-</span>,
    <span className="font-script text-4xl md:text-5xl text-cream">Facebook</span>,
    <span className="text-3xl text-cream">-</span>,
    <span className="font-script text-4xl md:text-5xl text-cream">LinkedIn</span>,
    <span className="text-3xl text-cream">-</span>,
    <span className="font-script text-4xl md:text-5xl text-cream">pinterest</span>,
    <span className="text-3xl text-cream">-</span>,
  ];
  return (
    <div className="bg-olive py-4 border-y border-cocoa-deep/20">
      <Marquee items={items} />
    </div>
  );
}
