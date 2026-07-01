import { useState } from 'react'
import { MapPin, LayoutGrid, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal'
import FloatingParticles from '../components/FloatingParticles'
import { projects } from '../data/content'

const categories = ['All', 'Data Center', 'Commercial / Enterprise', 'Pharmaceutical / International']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      <section className="relative bg-navy text-white py-24 sm:py-32 overflow-hidden">
        {/* Animated background image */}
        <motion.div
          className="absolute inset-[-20%] sm:inset-0 animate-slow-pan"
          style={{
            backgroundImage: 'url(/images/hero/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/85 to-navy/95" />
        {/* Floating particles */}
        <FloatingParticles count={typeof window !== 'undefined' && window.innerWidth < 640 ? 12 : 25} />
        {/* Glow effect */}
        <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[250px] !h-[250px] sm:!w-[400px] sm:!h-[400px]" />

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 text-center">
          <Reveal variant="fadeDown">
            <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-accent inline-block" />
              Our Portfolio
              <span className="w-8 h-px bg-accent inline-block" />
            </p>
          </Reveal>
          <Reveal variant="blurIn" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 gradient-text leading-tight">
              Project Experience
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.25}>
            <p className="text-white/65 max-w-2xl mx-auto text-base sm:text-lg">
              19+ projects delivered across data centers, healthcare, pharmaceutical, and
              commercial enterprises in India, the UAE, and Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-bg py-16 sm:py-28 overflow-hidden">
        {/* Subtle background glow for the grid section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6">
          {/* Filter pills */}
          <Reveal>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10 sm:mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold border transition-all duration-300 ${
                    active === cat
                      ? 'bg-accent text-white border-accent shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                      : 'bg-white text-ink/70 border-line hover:border-accent/50 hover:text-accent shadow-sm'
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.client + p.location + i}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Premium animated card */}
                  <motion.div 
                    className="group relative bg-white border border-line rounded-3xl p-6 sm:p-8 h-full flex flex-col transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
                    whileHover={{ y: -8 }}
                  >
                    {/* Glowing background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-accent text-white flex items-center justify-center shadow-md">
                          <LayoutGrid size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-accent bg-accent/10 px-3 py-1.5 rounded-full uppercase tracking-widest border border-accent/20">
                          {p.category}
                        </span>
                      </div>
                      
                      <h3 className="font-extrabold text-navy text-xl sm:text-2xl mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                        {p.client}
                      </h3>
                      
                      <p className="text-sm font-semibold text-ink/50 flex items-center gap-1.5 mb-6">
                        <MapPin size={16} className="text-accent/70" /> {p.location}
                      </p>
                      
                      {/* Divider */}
                      <div className="h-px w-full bg-gradient-to-r from-line via-line to-transparent mb-6" />
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {p.scope.map((tag, tagIdx) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: tagIdx * 0.1 + 0.2 }}
                            className="text-xs bg-bg border border-line text-ink/75 px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 group-hover:border-accent/30 transition-colors"
                          >
                            <CheckCircle size={12} className="text-accent/60" />
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
