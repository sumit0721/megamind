import LogoMarquee from '../components/LogoMarquee'
import { Link } from 'react-router-dom'
import {
  Building2, Lightbulb, Zap, Camera, Fingerprint, FlameKindling,
  Megaphone, Droplets, Server, ArrowRight,
} from 'lucide-react'
import Reveal from '../components/Reveal'
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
  return (
    <div>
      {/* HERO */}
      <section
        className="relative bg-navy text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(11,30,61,0.85), rgba(11,30,61,0.92)), url(/images/hero/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-container mx-auto px-6 py-28 md:py-40">
          <Reveal>
            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">
              Integrated Building Management & Energy Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
              Smart, Reliable Infrastructure for Buildings That Never Stop Working
            </h1>
            <p className="mt-6 text-white/75 max-w-xl text-lg">
              Megamind delivers integrated BMS, fire safety, energy management, and security
              systems for enterprise, healthcare, pharma, and data center clients across India and the Middle East.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services-preview"
                className="bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Explore Services
              </a>
              <Link
                to="/contact"
                className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white border-b border-line">
        <div className="max-w-container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '9', label: 'Service Lines' },
            { value: '19+', label: 'Projects Delivered' },
            { value: '5+', label: 'Countries / Regions Served' },
            { value: '5', label: 'Industry Verticals' },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-navy">{stat.value}</div>
              <div className="text-sm text-ink/60 mt-1">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-bg py-24">
        <div className="max-w-container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src="/images/hero/about-control-room.jpg"
              alt="Control room"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5">About Megamind</h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              Megamind is a leading provider of Integrated Building Management Systems (IBMS) and
              Energy Management Solutions, delivering smart, reliable, and scalable infrastructure
              services across multiple sectors.
            </p>
            <p className="text-ink/70 leading-relaxed">
              We operate through two specialized divisions: <strong>Integrated BMS (ELV)</strong>,
              serving as a Master System Integrator for Building Automation, CCTV, Access Control,
              Fire Detection, and Public Address & Evacuation Systems; and <strong>Energy Management</strong>,
              offering solutions for Building, Factory, City Energy Management, and Microgrid Systems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-preview" className="bg-white py-24 scroll-mt-20">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <p className="text-accent font-semibold uppercase text-sm tracking-wide mb-2 text-center">
              What We Deliver
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-14">
              Expected Deliverables
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.slug] || Building2
              return (
                <Reveal key={service.slug} delay={i * 0.05}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="group block bg-white border border-line rounded-xl p-7 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="font-bold text-navy mb-2 leading-snug">{service.name}</h3>
                    <p className="text-sm text-ink/60 mb-4">{service.short}</p>
                    <span className="text-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="bg-bg py-20">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
              Trusted By Industry Leaders
            </h2>
          </Reveal>
          <Reveal>
            <LogoMarquee />
          </Reveal>
        </div>
      </section>

      {/* FLAGSHIP PROJECTS */}
      <section className="bg-white py-24">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-14">
              Flagship Projects
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {flagshipProjects.map((p, i) => (
              <Reveal key={p.client + p.location} delay={i * 0.08}>
                <div className="border border-line rounded-xl p-7 h-full hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-navy text-lg mb-1">{p.client}</h3>
                  <p className="text-sm text-ink/50 mb-4">{p.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.scope.map((tag) => (
                      <span key={tag} className="text-xs bg-accent/10 text-accent font-medium px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-navy text-navy font-semibold px-7 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="bg-bg py-24">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-14">
              Our Core Team
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.slice(0, 4).map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <div className="bg-white border border-line rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {member.name.split(' ').filter(w => !['Mr.', 'Mrs.', 'Ms.'].includes(w)).map(w => w[0]).slice(0,2).join('')}
                  </div>
                  <h3 className="font-bold text-navy text-sm">{member.name}</h3>
                  <p className="text-accent text-xs font-semibold mt-1">{member.role}</p>
                  <p className="text-ink/55 text-xs mt-3 leading-relaxed">{member.experience}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-navy py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to Build Smarter Infrastructure?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Talk to our team about integrating BMS, fire safety, and energy management into your next project.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
