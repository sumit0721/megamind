import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { services } from '../data/content'

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        // slight delay ensures layout is painted before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div>
      {/* Page header */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nine integrated service lines spanning building automation, fire safety, security,
              and energy management — engineered for enterprise, healthcare, pharma, and data center facilities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-20 ${isEven ? 'bg-white' : 'bg-bg'}`}
          >
            <div className="max-w-container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <Reveal className={isEven ? 'md:order-1' : 'md:order-2'}>
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                />
              </Reveal>
              <Reveal delay={0.1} className={isEven ? 'md:order-2' : 'md:order-1'}>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{service.name}</h2>
                <p className="text-ink/70 leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/10 text-accent font-medium px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}
    </div>
  )
}
