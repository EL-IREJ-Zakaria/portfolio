import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Github, Linkedin, MessageCircle, CheckCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/constants/data'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  const INFO = [
    { icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
    { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: MapPin, label: 'Location', value: CONTACT_INFO.location, href: '#' },
  ]

  const SOCIALS = [
    { icon: Github, label: 'GitHub', href: CONTACT_INFO.github, color: '#94A3B8' },
    { icon: Linkedin, label: 'LinkedIn', href: CONTACT_INFO.linkedin, color: '#0A66C2' },
    { icon: Mail, label: 'Email', href: `mailto:${CONTACT_INFO.email}`, color: '#3B82F6' },
    { icon: MessageCircle, label: 'WhatsApp', href: CONTACT_INFO.whatsapp, color: '#25D366' },
  ]

  return (
    <SectionWrapper id="contact" className="bg-card/20">
      <div className="container-custom">
        <SectionHeader
          tag="Contact"
          title="Let's"
          highlight="Connect"
          subtitle="Have a project in mind? Let's build something great together."
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted" htmlFor="name">Name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted" htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+212 6XX XXX XXX"
                  className="bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span className="text-emerald-400">Message Sent!</span>
                  </>
                ) : loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            <div className="flex flex-col gap-3">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass-card p-4 flex items-center gap-4 hover:border-white/20 hover:bg-white/4 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <p className="text-sm font-medium text-white mt-0.5 break-all">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <p className="text-sm font-semibold text-white mb-4">Find me on</p>
              <div className="grid grid-cols-2 gap-3">
                {SOCIALS.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/4 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-300 group"
                  >
                    <Icon size={18} style={{ color }} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted group-hover:text-white transition-colors">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">Available for work</p>
                <p className="text-xs text-muted mt-0.5">Open to freelance & full-time opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
