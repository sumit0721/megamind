import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
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
      <section className="bg-navy text-white py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Tell us about your project — our team will get back to you with the right solution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-20">
        <div className="max-w-container mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white border border-line rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-navy block mb-1.5">Name</label>
                  <input
                    name="name" required value={form.name} onChange={handleChange}
                    className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy block mb-1.5">Company</label>
                  <input
                    name="company" value={form.company} onChange={handleChange}
                    className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy block mb-1.5">Email</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy block mb-1.5">Phone</label>
                  <input
                    name="phone" value={form.phone} onChange={handleChange}
                    className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-navy block mb-1.5">Service Interested In</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white"
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
                  className="w-full border border-line rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="bg-accent text-white font-semibold px-7 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto"
              >
                Send Enquiry
              </button>
              <p className="text-xs text-ink/40">
                This opens your email client with the message pre-filled. A live form handler will replace this before launch.
              </p>
            </form>
          </Reveal>

          {/* Company details */}
          <Reveal delay={0.1} className="lg:col-span-2 space-y-6">
            <div className="bg-navy text-white rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-5">Company Details</h3>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" /> {companyInfo.address}</li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-accent" /> {companyInfo.phone}</li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-accent" /> {companyInfo.email}</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-line h-64">
              <iframe
                title="Megamind location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps?q=Vasai+East,+Palghar&output=embed"
              />
            </div>

            <div className="bg-white border border-line rounded-2xl p-6">
              <h3 className="font-bold text-navy mb-4 text-sm">Who To Contact</h3>
              <ul className="space-y-3">
                {team.map((member) => (
                  <li key={member.email} className="text-sm flex justify-between border-b border-line last:border-0 pb-2 last:pb-0">
                    <span className="text-ink/70">{member.role}</span>
                    <a href={`mailto:${member.email}`} className="text-accent font-medium">{member.email}</a>
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
