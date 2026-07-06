import Marquee from "./Marquee.jsx";

export default function TopMarquee() {
  const items = [
    <span className="font-script text-4xl md:text-5xl text-cocoa-deep">Remote</span>,
    <span className="text-3xl ">.</span>,
    <span className="font-script text-4xl md:text-5xl text-cocoa-deep">Booking New Clients</span>,
    <span className="text-3xl ">.</span>,
    <span className="font-script text-4xl md:text-5xl text-cocoa-deep">Based in India</span>,
    <span className="text-3xl ">.</span>,
  ];
  return (
    <div id="about" className="bg-olive border-y border-cocoa-deep/20 py-4">
      <Marquee items={items} />
    </div>
  );
}
