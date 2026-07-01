import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'

const categories = ['All', 'Data Center', 'Commercial / Enterprise', 'Pharmaceutical / International']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <section className="bg-navy text-white py-24">
        <div className="max-w-container mx-auto px-6 text-center">
          <Reveal variant="fadeDown">
            <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block" />
              Our Portfolio
              <span className="w-8 h-px bg-accent inline-block" />
            </p>
          </Reveal>
          <Reveal variant="blurIn" delay={0.15}>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Project Experience</h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.25}>
            <p className="text-white/65 max-w-2xl mx-auto text-lg">
              19+ projects delivered across data centers, healthcare, pharmaceutical, and
              commercial enterprises in India, the UAE, and Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-20">
        <div className="max-w-container mx-auto px-6">
          {/* Filter pills */}
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center mb-14">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    active === cat
                      ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                      : 'bg-white text-ink/70 border-line hover:border-accent/50 hover:text-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.client + p.location + i}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: (i % 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="card-hover-glow bg-white border border-line rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-navy text-lg mb-1">{p.client}</h3>
                    <p className="text-sm text-ink/45 flex items-center gap-1.5 mb-5">
                      <MapPin size={14} /> {p.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {p.scope.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-bg border border-line text-ink/65 px-3 py-1.5 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
