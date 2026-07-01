import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LogoMarquee from '../components/LogoMarquee'
import { Link } from 'react-router-dom'
import {
  Building2, Lightbulb, Zap, Camera, Fingerprint, FlameKindling,
  Megaphone, Droplets, Server, ArrowRight, Shield, Globe, Award,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import FloatingParticles from '../components/FloatingParticles'
import { services, flagshipProjects, team } from '../data/content'

const serviceIcons = {
  'ibms': Building2,
  'lighting-utility': Lightbulb,
  'energy-management': Zap,
  'cctv': Camera,
  'access-control': Fingerprint,
  'fire-detection': FlameKindling,
  'public-address': Megaphone,
  'rodent-water-leak': Droplets,
  'dcim': Server,
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative bg-navy text-white overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh]"
      >
        {/* Animated background image */}
        <motion.div
          className="absolute inset-[-20%] sm:inset-0 animate-slow-pan"
          style={{
            backgroundImage: 'url(/images/hero/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            y: bgY,
            scale: bgScale,
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/85 to-navy/95" />

        {/* Floating particles */}
        <FloatingParticles count={typeof window !== 'undefined' && window.innerWidth < 640 ? 10 : 25} />

        {/* Glow effect */}
        <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[250px] !h-[250px] sm:!w-[400px] sm:!h-[400px] md:!w-[500px] md:!h-[500px]" />

        {/* Content — centered */}
        <motion.div
          className="relative z-10 max-w-container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] py-16 sm:py-20"
          style={{ opacity: heroOpacity }}
        >
          <Reveal variant="fadeDown" delay={0.1}>
            <p className="text-accent font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 inline-flex items-center gap-2">
              <span className="w-5 sm:w-8 h-px bg-accent inline-block hidden sm:inline-block" />
              Integrated Building Management & Energy Solutions
              <span className="w-5 sm:w-8 h-px bg-accent inline-block hidden sm:inline-block" />
            </p>
          </Reveal>

          <Reveal variant="blurIn" delay={0.25}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight max-w-5xl gradient-text px-2 sm:px-0">
              Smart, Reliable Infrastructure for Buildings That Never Stop Working
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.45}>
            <p className="mt-5 sm:mt-8 text-white/65 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0">
              Megamind delivers integrated BMS, fire safety, energy management, and security
              systems for enterprise, healthcare, pharma, and data center clients across India and the Middle East.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.6}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full sm:w-auto px-2 sm:px-0">
              <a
                href="#services-preview"
                className="btn-shimmer bg-accent text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] text-sm sm:text-base text-center"
              >
                Explore Services
              </a>
              <Link
                to="/contact"
                className="border border-white/25 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm sm:text-base text-center"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-white/60"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════ STATS STRIP ═══════════════════════════════ */}
      <section className="relative bg-white border-b border-line">
        {/* Subtle top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="max-w-container mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { value: '9', label: 'Service Lines', icon: Shield },
            { value: '19+', label: 'Projects Delivered', icon: Award },
            { value: '5+', label: 'Countries / Regions Served', icon: Globe },
            { value: '5', label: 'Industry Verticals', icon: Building2 },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <Reveal key={stat.label} delay={i * 0.1} variant="scaleUp">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-1">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-navy stat-accent pb-4">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs sm:text-sm text-ink/55 font-medium mt-1">{stat.label}</div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════ ABOUT ═══════════════════════════════════ */}
      <section className="bg-bg py-16 sm:py-24 md:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          {/* Section header */}
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-5xl font-bold text-navy">About Megamind</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-14 items-center">
            <Reveal variant="slideLeft">
              <div className="relative">
                <img
                  src="/images/hero/about-control-room.jpg"
                  alt="Control room"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10"
                />
                {/* Decorative accent behind the image */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-accent/10 border border-accent/20 z-0 hidden sm:block" />
              </div>
            </Reveal>
            <Reveal variant="slideRight" delay={0.15}>
              <div className="space-y-5">
                <p className="text-ink/70 leading-relaxed text-base sm:text-lg">
                  Megamind is a leading provider of Integrated Building Management Systems (IBMS) and
                  Energy Management Solutions, delivering smart, reliable, and scalable infrastructure
                  services across multiple sectors.
                </p>
                <p className="text-ink/70 leading-relaxed text-base sm:text-lg">
                  We operate through two specialized divisions: <strong className="text-navy">Integrated BMS (ELV)</strong>,
                  serving as a Master System Integrator for Building Automation, CCTV, Access Control,
                  Fire Detection, and Public Address & Evacuation Systems; and <strong className="text-navy">Energy Management</strong>,
                  offering solutions for Building, Factory, City Energy Management, and Microgrid Systems.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Enterprise', 'Healthcare', 'Pharma', 'Data Centers', 'Commercial'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-navy/5 text-navy font-semibold px-4 py-2 rounded-full border border-navy/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ SERVICES GRID ═══════════════════════════════ */}
      <section id="services-preview" className="bg-white py-16 sm:py-24 md:py-28 scroll-mt-20">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-3">
                What We Deliver
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-navy">
                Our Service Lines
              </h2>
              <p className="text-ink/50 max-w-2xl mx-auto mt-4">
                Nine integrated service lines spanning building automation, fire safety, security,
                and energy management.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.slug] || Building2
              return (
                <Reveal key={service.slug} delay={i * 0.06} variant="scaleUp">
                  <Link
                    to={`/services#${service.slug}`}
                    className="card-hover-glow group block bg-white border border-line rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-accent" size={26} />
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-3 leading-snug">{service.name}</h3>
                    <p className="text-sm text-ink/55 mb-5 leading-relaxed">{service.short}</p>
                    <span className="text-accent text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CLIENT LOGOS ═══════════════════════════════ */}
      <section className="bg-bg py-16 sm:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-3">Our Clients</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Trusted By Industry Leaders
              </h2>
            </div>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <LogoMarquee />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════ FLAGSHIP PROJECTS ═══════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 md:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-3">Portfolio</p>
              <h2 className="text-3xl md:text-5xl font-bold text-navy">
                Flagship Projects
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {flagshipProjects.map((p, i) => (
              <Reveal key={p.client + p.location} delay={i * 0.1} variant="fadeUp">
                <motion.div
                  className="card-hover-glow border border-line rounded-2xl p-8 h-full bg-white"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Building2 className="text-accent" size={20} />
                  </div>
                  <h3 className="font-bold text-navy text-xl mb-2">{p.client}</h3>
                  <p className="text-sm text-ink/45 mb-5">{p.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.scope.map((tag) => (
                      <span key={tag} className="text-xs bg-accent/8 text-accent font-medium px-3 py-1.5 rounded-full border border-accent/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mt-14">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 bg-navy text-white font-semibold px-8 py-4 rounded-xl hover:bg-navy/90 transition-all duration-300 hover:shadow-lg text-base group"
              >
                View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════ TEAM PREVIEW ═══════════════════════════════ */}
      <section className="bg-bg py-16 sm:py-24 md:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-accent font-semibold uppercase text-sm tracking-widest mb-3">Our People</p>
              <h2 className="text-3xl md:text-5xl font-bold text-navy">
                Our Core Team
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {team.slice(0, 4).map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08} variant="scaleUp">
                <motion.div
                  className="bg-white border border-line rounded-2xl p-4 sm:p-6 md:p-8 text-center card-hover-glow"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-navy to-accent text-white flex items-center justify-center font-bold text-base sm:text-lg md:text-xl mx-auto mb-3 sm:mb-5 shadow-lg">
                    {member.name.split(' ').filter(w => !['Mr.', 'Mrs.', 'Ms.'].includes(w)).map(w => w[0]).slice(0,2).join('')}
                  </div>
                  <h3 className="font-bold text-navy text-xs sm:text-sm md:text-base leading-tight">{member.name}</h3>
                  <p className="text-accent text-[10px] sm:text-xs font-semibold mt-1 sm:mt-1.5 tracking-wide uppercase">{member.role}</p>
                  <p className="text-ink/50 text-[10px] sm:text-xs mt-2 sm:mt-4 leading-relaxed hidden sm:block">{member.experience}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CTA BAND ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-28">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy via-[#0f2b5e] to-[#0a1930]"
          style={{ backgroundSize: '200% 200%' }}
        />
        {/* Floating particles in CTA */}
        <FloatingParticles count={15} />
        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] sm:w-[450px] sm:h-[250px] md:w-[600px] md:h-[300px] bg-accent/10 rounded-full blur-[60px] sm:blur-[80px] animate-pulse-glow" />

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 text-center">
          <Reveal variant="blurIn">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 sm:mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Build Smarter Infrastructure?
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.15}>
            <p className="text-white/60 mb-8 sm:mb-10 max-w-xl mx-auto text-base sm:text-lg">
              Talk to our team about integrating BMS, fire safety, and energy management into your next project.
            </p>
          </Reveal>
          <Reveal variant="scaleUp" delay={0.3}>
            <Link
              to="/contact"
              className="btn-shimmer inline-block bg-accent text-white font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.35)] text-base sm:text-lg"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
