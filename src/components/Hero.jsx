import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/919820012345?text=I%20am%20interested%20in%20Monsoon%20Sheds%20on%20Hire'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const goToForm = (e) => {
    e.preventDefault()
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-white overflow-hidden min-h-[600px] sm:min-h-[680px] md:min-h-screen flex items-stretch">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson via-gold to-crimson z-30" />

      {/* Subtle navy diagonal pattern on left half */}
      <div
        className="absolute inset-y-0 left-0 w-[60%] opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0F2340 0, #0F2340 1px, transparent 0, transparent 12px)' }}
      />

      <div className="relative z-10 w-full flex items-stretch">

        {/* ── LEFT: content ── */}
        <div className="w-[60%] md:w-[58%] flex flex-col justify-center px-4 sm:px-6 md:px-12 xl:px-20 pt-24 pb-10 md:pt-32 md:pb-20">

          {/* Eyebrow pill */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center self-start gap-1.5 sm:gap-2 bg-crimson/8 border border-crimson/20 rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 mb-3 md:mb-6">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-crimson" />
            <span className="text-crimson text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] whitespace-nowrap">
              Trusted Since 1910
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.18)}
            className="font-extrabold text-navy leading-[1.08] mb-3 md:mb-4"
            style={{ fontSize: 'clamp(1.25rem, 4.6vw, 4.25rem)' }}
          >
            Custom Reliable{' '}
            <span className="text-crimson">
              Mansoon Shade <span className="text-navy">&amp;</span> Monsoon Sheds
            </span>
            <span className="block text-navy">Across India.</span>
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            {...fadeUp(0.28)}
            className="text-navy/70 font-semibold leading-snug mb-4 md:mb-7"
            style={{ fontSize: 'clamp(0.7rem, 1.6vw, 1.15rem)' }}
          >
            Protect Your Projects. Scale Your Business.
          </motion.p>

          {/* Stats inline */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex items-center gap-3 sm:gap-5 md:gap-7 mb-5 md:mb-8 pb-4 md:pb-6 border-b border-gray-200"
          >
            <div className="flex flex-col">
              <span className="text-crimson font-extrabold leading-none" style={{ fontSize: 'clamp(0.95rem, 2.4vw, 1.75rem)' }}>116+</span>
              <span className="text-navy/60 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-0.5 md:mt-1">Years</span>
            </div>
            <div className="w-px h-6 sm:h-7 md:h-9 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-crimson font-extrabold leading-none" style={{ fontSize: 'clamp(0.95rem, 2.4vw, 1.75rem)' }}>1000+</span>
              <span className="text-navy/60 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-0.5 md:mt-1">Projects</span>
            </div>
            <div className="w-px h-6 sm:h-7 md:h-9 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-crimson font-extrabold leading-none" style={{ fontSize: 'clamp(0.95rem, 2.4vw, 1.75rem)' }}>16+</span>
              <span className="text-navy/60 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-0.5 md:mt-1">Industries</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.44)} className="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="#lead-form"
              onClick={goToForm}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-crimson hover:bg-[#6e1239] text-white font-bold rounded-lg transition-all duration-200 shadow-[0_8px_24px_rgba(139,26,74,0.3)] hover:-translate-y-0.5"
              style={{ padding: 'clamp(0.55rem, 1.4vw, 1rem) clamp(0.85rem, 2vw, 1.75rem)', fontSize: 'clamp(0.65rem, 1.4vw, 0.95rem)' }}
            >
              GET FREE QUOTE
              <span aria-hidden>→</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border-2 border-[#25D366] text-[#1a8a45] hover:bg-[#25D366] hover:text-white font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{ padding: 'clamp(0.5rem, 1.3vw, 0.95rem) clamp(0.75rem, 1.8vw, 1.6rem)', fontSize: 'clamp(0.65rem, 1.4vw, 0.95rem)' }}
            >
              <WAIcon size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </motion.div>

        </div>

        {/* ── RIGHT: shed image (sharp edge, no fade) ── */}
        <div className="relative w-[40%] md:w-[42%] flex-shrink-0">
          {/* Diagonal accent stripe at boundary */}
          <div className="absolute top-0 bottom-0 -left-px w-1 bg-gradient-to-b from-crimson via-gold to-crimson z-20" />

          <div className="absolute inset-0">
            <img
              src="/shed-hero.png"
              alt="Industrial Mansoon Shade"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle dark vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 via-transparent to-transparent" />
            {/* Top fade for navbar clearance */}
            <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-white/40 to-transparent" />
          </div>

          {/* Floating badge — quality marker (desktop+ only) */}
          <motion.div
            {...fadeUp(0.6)}
            className="hidden md:flex absolute bottom-8 right-6 lg:bottom-12 lg:right-10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] rounded-2xl px-5 py-4 items-center gap-3 border border-gray-100"
          >
            <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#8B1A4A">
                <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"/>
              </svg>
            </div>
            <div>
              <div className="text-navy font-extrabold text-lg leading-none">PAN India</div>
              <div className="text-navy/55 text-[10px] font-bold uppercase tracking-widest mt-1">Service Coverage</div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent z-20" />
    </section>
  )
}

function WAIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
