import { Link } from 'react-router-dom'
import { Phone, Mail, Globe, MapPin, ArrowUpRight } from 'lucide-react'
import FloatingParticles from '../components/FloatingParticles'
import { services, companyInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-14 sm:pt-20 pb-8 relative overflow-hidden">
      {/* Floating particles background */}
      <FloatingParticles count={typeof window !== 'undefined' && window.innerWidth < 640 ? 10 : 20} />

      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent z-10" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-white font-extrabold text-xl mb-4">
            MEGAMIND
            <span className="block text-xs font-medium text-muted tracking-wider mt-0.5">ELECTRICAL & AUTOMATION</span>
          </h3>
          <p className="text-sm leading-relaxed text-white/55">{companyInfo.address}</p>
          <div className="mt-4 sm:mt-5 flex gap-3">
            <a href={`tel:${companyInfo.phone}`} className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/8 hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Phone size={14} className="text-white/70" />
            </a>
            <a href={`mailto:${companyInfo.email}`} className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/8 hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Mail size={14} className="text-white/70" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all">Home</Link></li>
            <li><Link to="/services" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`} className="hover:text-white transition-colors line-clamp-1">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent/70" /> 
              <span className="text-white/55">{companyInfo.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-accent/70" /> 
              <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">{companyInfo.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-accent/70" /> 
              <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors break-all">{companyInfo.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe size={15} className="text-accent/70" /> 
              <span className="text-white/55">{companyInfo.website}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 mt-10 sm:mt-14 pt-5 sm:pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </p>
        <Link 
          to="/contact" 
          className="text-xs text-accent/70 hover:text-accent inline-flex items-center gap-1 transition-colors"
        >
          Get a Quote <ArrowUpRight size={12} />
        </Link>
      </div>
    </footer>
  )
}
