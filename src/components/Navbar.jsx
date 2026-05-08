import { useState, useEffect } from 'react'

const WA_LINK = 'https://wa.me/919820012345?text=I%20am%20interested%20in%20Monsoon%20Sheds%20on%20Hire'

const navLinks = [
  { label: 'About', href: '#stats' },
  { label: 'Applications', href: '#applications' },
  { label: 'Products', href: '#shed-types' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#lead-form' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.12)]'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#" onClick={(e) => go(e, '#')} className="flex items-center gap-2.5 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Shah Shivji Valji & Company"
            className="h-9 md:h-11 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => go(e, link.href)}
              className="relative text-sm font-semibold px-3 py-2 rounded-md transition-colors group text-navy hover:text-crimson"
            >
              {link.label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <WAIcon size={15} /> WhatsApp Now
          </a>
          <a href="#lead-form" onClick={(e) => go(e, '#lead-form')}
            className="text-sm font-bold px-4 py-2.5 rounded-lg border-2 transition-all hover:-translate-y-0.5 border-crimson text-crimson hover:bg-crimson hover:text-white"
          >
            Get Quote
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F2340" strokeWidth="2.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F2340" strokeWidth="2.5">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}
                className="text-navy font-semibold text-sm py-3 px-2 border-b border-gray-50 hover:text-crimson transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp text-white font-bold py-3 rounded-lg"
              >
                <WAIcon size={16} /> WhatsApp Now
              </a>
              <a href="#lead-form" onClick={(e) => go(e, '#lead-form')}
                className="flex items-center justify-center border-2 border-crimson text-crimson font-bold py-3 rounded-lg"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function WAIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
