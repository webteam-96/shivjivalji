import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { asset } from '../lib/asset'

const WA_LINK = 'https://wa.me/918238720244?text=I%20am%20interested%20in%20Monsoon%20Sheds%20on%20Hire'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#stats' },
  { label: 'Applications', href: '#applications' },
  { label: 'Products', href: '#shed-types' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#lead-form' },
]

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault()
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#060d1a] text-white relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-crimson/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <img src={asset('/logo.png')} alt="Shah Shivji Valji & Company"
              className="h-11 w-auto object-contain mb-5 brightness-0 invert opacity-90"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              India's Trusted Monsoon Shed Solution Provider Since 1910.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-gold/50" />
              <span className="text-gold/70 text-xs font-semibold">Est. 1910, Mumbai</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.linkedin.com/company/shivjivalji" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 hover:bg-crimson border border-white/10 hover:border-crimson rounded-lg flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LIIcon />
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 hover:bg-whatsapp border border-white/10 hover:border-whatsapp rounded-lg flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <WAIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.25em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} onClick={(e) => go(e, l.href)}
                    className="text-white/55 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-gold group-hover:w-4 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.25em] mb-5">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { Icon: FaEnvelope,      val: 'info@shivjivalji.com',                   href: 'mailto:info@shivjivalji.com' },
                { Icon: FaWhatsapp,      val: '+91 8238720244',                         href: WA_LINK, external: true },
                { Icon: FaMapMarkerAlt,  val: 'Mumbai, Maharashtra — PAN India Operations', href: null },
              ].map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5"><c.Icon size={14} /></span>
                  {c.href ? (
                    <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined}
                      className="text-white/55 hover:text-white text-sm transition-colors"
                    >
                      {c.val}
                    </a>
                  ) : (
                    <span className="text-white/55 text-sm">{c.val}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.25em] mb-5">Industries Served</h4>
            <div className="flex flex-wrap gap-2">
              {['Iron & Steel', 'Mining', 'Cement', 'Power', 'Automobile', 'Infrastructure', 'Sugar', 'Ports'].map(ind => (
                <span key={ind} className="text-[10px] font-medium text-white/50 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Shah Shivji Valji &amp; Company. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#/privacy-policy" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
            <span className="text-white/15">|</span>
            <a href="#/terms-of-service" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function LIIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.7">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity="0.7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
