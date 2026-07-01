import { clients } from '../data/content'

// Infinite marquee: duplicates the logo list once so the CSS animation
// can loop seamlessly from -50% back to 0% with no visible jump.
export default function LogoMarquee() {
  const loop = [...clients, ...clients]

  return (
    <div className="overflow-hidden relative">
      {/* fade edges so logos don't appear/disappear abruptly */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-bg to-transparent z-10" />

      <div className="flex gap-4 sm:gap-6 animate-marquee w-max">
        {loop.map((client, i) => (
          <div
            key={client.name + i}
            className="bg-white border border-line rounded-lg flex items-center justify-center p-3 sm:p-5 h-14 sm:h-20 w-32 sm:w-48 shrink-0"
          >
            <img src={client.logo} alt={client.name} className="max-h-7 sm:max-h-10 max-w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
