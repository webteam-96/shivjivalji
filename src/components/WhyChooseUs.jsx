import { motion } from 'framer-motion'
import { FaHardHat, FaBolt, FaShieldAlt, FaExpandAlt, FaUserTie, FaTrophy } from 'react-icons/fa'

const features = [
  {
    Icon: FaHardHat,
    title: 'Durable Construction',
    desc: 'Sturdy construction methods that ensure consistent quality on every project and duration.',
    color: '#8B1A4A',
    bg: '#8B1A4A18',
  },
  {
    Icon: FaBolt,
    title: 'Quick Installation',
    desc: 'Sheds erected to schedule within weeks — anywhere across India, no delays.',
    color: '#B8860B',
    bg: '#B8860B18',
  },
  {
    Icon: FaShieldAlt,
    title: 'Weatherproof Protection',
    desc: 'Tarpaulin covering engineered for complete monsoon, UV, and wind resistance.',
    color: '#0F2340',
    bg: '#0F234018',
  },
  {
    Icon: FaExpandAlt,
    title: 'Scalable Designs',
    desc: 'Custom sizes and configurations to match any project footprint or requirement.',
    color: '#8B1A4A',
    bg: '#8B1A4A18',
  },
  {
    Icon: FaUserTie,
    title: 'Dedicated Project Manager',
    desc: 'One point of contact assigned to your project from consultation to handover.',
    color: '#B8860B',
    bg: '#B8860B18',
  },
  {
    Icon: FaTrophy,
    title: 'Proven Track Record',
    desc: '116+ years and 1,000+ projects across India\'s biggest industrial names.',
    color: '#0F2340',
    bg: '#0F234018',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-extrabold text-navy/[0.025] select-none pointer-events-none leading-none pr-4 hidden lg:block">
        WHY US
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="section-label">Our Strengths</span>
          <h2 className="section-title">Why 1,000+ Projects Choose Shah Shivji Valji</h2>
          <p className="text-body text-base mt-3">
            Six reasons India's biggest industrial names keep coming back to us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white border border-[#e8e8e8] rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: f.bg }}
              >
                <f.Icon size={26} color={f.color} />
              </div>

              {/* Accent bar */}
              <div
                className="h-0.5 w-10 mb-4 rounded-full transition-all duration-300 group-hover:w-20"
                style={{ background: f.color }}
              />

              <h3 className="text-base font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-body text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
