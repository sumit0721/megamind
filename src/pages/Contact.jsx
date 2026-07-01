import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import FloatingParticles from '../components/FloatingParticles'
import { services, companyInfo, team } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // PLACEHOLDER: no backend yet. Replace this mailto with a real form
    // handler (e.g. Formspree or EmailJS) before going live.
    const subject = encodeURIComponent(`Website Enquiry - ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Interested In: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <div>
      {/* Page header */}
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
              Get In Touch
              <span className="w-8 h-px bg-accent inline-block" />
            </p>
          </Reveal>
          <Reveal variant="blurIn" delay={0.15}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-5">Contact Us</h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.25}>
            <p className="text-white/65 max-w-2xl mx-auto text-base sm:text-lg">
              Tell us about your project — our team will get back to you with the right solution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-12 sm:py-20 md:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Form */}
          <Reveal variant="slideLeft" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white border border-line rounded-2xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy mb-2">Send an Enquiry</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-navy block mb-1.5">Name</label>
                  <input
                    name="name" required value={form.name} onChange={handleChange}
                    className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy block mb-1.5">Company</label>
                  <input
                    name="company" value={form.company} onChange={handleChange}
                    className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy block mb-1.5">Email</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy block mb-1.5">Phone</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="+91 98207 95338"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-navy block mb-1.5">Service Interested In</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white transition-all"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-navy block mb-1.5">Message</label>
                <textarea
                  name="message" rows={5} value={form.message} onChange={handleChange}
                  className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn-shimmer bg-accent text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 w-full sm:w-auto inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} /> Send Enquiry
              </motion.button>
              <p className="text-xs text-ink/40">
                This opens your email client with the message pre-filled. A live form handler will replace this before launch.
              </p>
            </form>
          </Reveal>

          {/* Company details */}
          <Reveal variant="slideRight" delay={0.1} className="lg:col-span-2 space-y-6">
            <div className="bg-navy text-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-lg mb-6">Company Details</h3>
              <ul className="space-y-5 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-accent" />
                  </div>
                  <span>{companyInfo.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-accent" />
                  </div>
                  <span>{companyInfo.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <span>{companyInfo.email}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-line h-64 shadow-sm">
              <iframe
                title="Megamind location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps?q=Vasai+East,+Palghar&output=embed"
              />
            </div>

            <div className="bg-white border border-line rounded-2xl p-7 shadow-sm">
              <h3 className="font-bold text-navy mb-5 text-sm uppercase tracking-wider">Who To Contact</h3>
              <ul className="space-y-3">
                {team.map((member) => (
                  <li key={member.email} className="text-sm flex flex-col sm:flex-row sm:justify-between border-b border-line last:border-0 pb-3 last:pb-0 gap-0.5 sm:gap-2 sm:items-center">
                    <span className="text-ink/65">{member.role}</span>
                    <a href={`mailto:${member.email}`} className="text-accent font-medium hover:underline text-xs break-all">{member.email}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
