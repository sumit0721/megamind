import { Link } from 'react-router-dom'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'
import { services, companyInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8">
      <div className="max-w-container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white font-extrabold text-lg mb-3">MEGAMIND</h3>
          <p className="text-sm leading-relaxed">{companyInfo.address}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`} className="hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> {companyInfo.address}</li>
            <li className="flex items-center gap-2"><Phone size={16} /> {companyInfo.phone}</li>
            <li className="flex items-center gap-2"><Mail size={16} /> {companyInfo.email}</li>
            <li className="flex items-center gap-2"><Globe size={16} /> {companyInfo.website}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 mt-12 pt-6 border-t border-white/10 text-xs text-white/50">
        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
      </div>
    </footer>
  )
}
