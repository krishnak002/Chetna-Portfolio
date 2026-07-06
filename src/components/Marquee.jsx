export default function Marquee({ items, className = "" }) {
  const loop = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
