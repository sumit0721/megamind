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
      <section className="bg-navy text-white py-24">
        <div className="max-w-container mx-auto px-6 text-center">
          <Reveal variant="fadeDown">
            <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block" />
              What We Do
              <span className="w-8 h-px bg-accent inline-block" />
            </p>
          </Reveal>
          <Reveal variant="blurIn" delay={0.15}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Our Services</h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.25}>
            <p className="text-white/65 max-w-2xl mx-auto text-lg">
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
            className={`scroll-mt-24 py-24 ${isEven ? 'bg-white' : 'bg-bg'}`}
          >
            <div className="max-w-container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
              <Reveal
                variant={isEven ? 'slideLeft' : 'slideRight'}
                className={isEven ? 'md:order-1' : 'md:order-2'}
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3] relative z-10"
                  />
                  <div className={`absolute -bottom-3 ${isEven ? '-right-3' : '-left-3'} w-full h-full rounded-2xl bg-accent/10 border border-accent/15 z-0`} />
                </div>
              </Reveal>
              <Reveal
                variant={isEven ? 'slideRight' : 'slideLeft'}
                delay={0.12}
                className={isEven ? 'md:order-2' : 'md:order-1'}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-5">{service.name}</h2>
                <p className="text-ink/65 leading-relaxed mb-6 text-lg">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/8 text-accent font-semibold px-3.5 py-1.5 rounded-full border border-accent/10"
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
