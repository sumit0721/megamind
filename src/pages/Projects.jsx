import { useState } from 'react'
import { MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'

const categories = ['All', 'Data Center', 'Commercial / Enterprise', 'Pharmaceutical / International']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <section className="bg-navy text-white py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Project Experience</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              19+ projects delivered across data centers, healthcare, pharmaceutical, and
              commercial enterprises in India, the UAE, and Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-16">
        <div className="max-w-container mx-auto px-6">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                  active === cat
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-ink/70 border-line hover:border-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.client + p.location + i} delay={(i % 6) * 0.05}>
                <div className="bg-white border border-line rounded-xl p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-navy mb-1">{p.client}</h3>
                  <p className="text-sm text-ink/50 flex items-center gap-1 mb-4">
                    <MapPin size={14} /> {p.location}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.scope.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-bg border border-line text-ink/70 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
