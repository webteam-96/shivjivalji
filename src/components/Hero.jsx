import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { asset } from '../lib/asset'

const WA_LINK = 'https://wa.me/918238720244?text=I%20am%20interested%20in%20Monsoon%20Sheds%20on%20Hire'

const banners = [
  asset('/banner-1.png'),
  asset('/banner-2.png'),
  asset('/banner-3.png'),
  asset('/banner-4.png'),
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    banners.forEach((src) => { const i = new Image(); i.src = src })
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % banners.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  const goToForm = (e) => {
    e.preventDefault()
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-navy overflow-hidden min-h-[600px] sm:min-h-[680px] md:min-h-screen flex items-center">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson via-gold to-crimson z-30" />

      {/* Full-bleed background slideshow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={banners[index]}
            alt="Industrial Monsoon Shed"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
            transition={{ opacity: { duration: 1.2, ease: 'easeInOut' }, scale: { duration: 4, ease: 'easeOut' } }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Light tint — keeps image vivid */}
        <div className="absolute inset-0 bg-navy/25" />
        {/* Focused radial darken behind centered text for legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_center,rgba(15,35,64,0.55)_0%,rgba(15,35,64,0.15)_60%,transparent_85%)]" />
        {/* Subtle bottom fade so the dot indicators stay readable */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/55 to-transparent" />
      </div>

      {/* CONTENT — centered over the slideshow */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center justify-center px-5 sm:px-6 md:px-12 pt-28 pb-20 md:pt-32 md:pb-28">

        {/* Eyebrow — premium glass pill */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2.5 sm:gap-3 mb-6 md:mb-8 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gold/30 bg-white/[0.06] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-gold" />
          </span>
          <span className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em]">
            Trusted Since 1910 · Pan-India
          </span>
        </motion.div>

        {/* Headline — bigger, more dramatic */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-[28px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-extrabold leading-[1.18] tracking-tight mb-5 md:mb-7 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)]"
        >
          Custom Reliable
          <br />
          <span className="relative inline-block pb-2 md:pb-3 mt-1 md:mt-2">
            <span className="relative z-10 text-gold">
              Monsoon Sheds
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-[3px] md:h-[5px] bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
          </span>
          <br />
          <span className="inline-block mt-2 md:mt-3 text-white/95">Across India</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.32)}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-3 md:mb-4 text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
        >
          Protect Your Projects. Scale Your Business.
        </motion.p>
        <motion.p
          {...fadeUp(0.38)}
          className="text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8 md:mb-10 text-white/80"
        >
          116+ Years of trusted expertise in industrial shed solutions for India's largest enterprises.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.44)} className="flex flex-wrap justify-center gap-3 md:gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 shadow-[0_12px_32px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,211,102,0.5)] text-sm sm:text-base"
          >
            <WAIcon size={18} />
            WhatsApp Now
          </a>
          <a
            href="#lead-form"
            onClick={goToForm}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-crimson to-[#a8225c] hover:from-[#6e1239] hover:to-crimson text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 shadow-[0_12px_32px_rgba(139,26,74,0.45)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(139,26,74,0.55)] text-sm sm:text-base"
          >
            GET QUOTE
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show banner ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-gold' : 'w-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
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
