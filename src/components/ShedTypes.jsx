import { motion } from 'framer-motion'

const sheds = [
  {
    badge: 'Most Popular',
    name: 'Temporary Storage Sheds',
    short: 'Bamboo & Wooden Pole',
    desc: 'Rapid erection at low cost. Perfect for immediate, short-term protection needs across all industries. Erected within days.',
    features: ['Fast Deployment', 'Low CAPEX', 'All Industries'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop',
    badgeColor: 'bg-amber-600',
  },
  {
    badge: 'Heavy Duty',
    name: 'MS Widespan Sheds',
    short: 'Steel Frame — Column Free',
    desc: 'Maximum unobstructed interior space. Designed for heavy machinery, bulk raw materials, and mobile equipment.',
    features: ['Column-Free Interior', 'Heavy Machinery', 'Steel Frame'],
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80&auto=format&fit=crop',
    badgeColor: 'bg-slate-700',
    highlight: true,
  },
  {
    badge: 'Best Value',
    name: 'Hybrid Sheds',
    short: 'Steel + Traditional',
    desc: 'Combines the sturdiness of steel framing with cost-efficiency of traditional materials. Ideal for long-term bulk storage.',
    features: ['Cost-Efficient', 'Long-Term Use', 'Hybrid Design'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
    badgeColor: 'bg-emerald-700',
  },
]

export default function ShedTypes() {
  const go = (e) => {
    e.preventDefault()
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="shed-types" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-label">Our Products</span>
          <h2 className="section-title">Types of Monsoon Sheds We Offer</h2>
          <p className="text-body text-base mt-3 max-w-xl mx-auto">
            Three proven shed systems to match every project size, budget, and timeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {sheds.map((shed, i) => (
            <motion.div
              key={shed.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 group ${
                shed.highlight
                  ? 'border-crimson shadow-[0_0_0_2px_#8B1A4A,0_20px_60px_rgba(139,26,74,0.15)]'
                  : 'border-[#e8e8e8] shadow-md hover:shadow-2xl'
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                <img
                  src={shed.img}
                  alt={shed.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className={`absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${shed.badgeColor}`}>
                  {shed.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{shed.short}</p>
                <h3 className="text-lg font-bold text-navy mb-3 leading-tight">{shed.name}</h3>
                <p className="text-body text-sm leading-relaxed flex-1">{shed.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {shed.features.map((f) => (
                    <span key={f} className="text-[10px] font-semibold uppercase tracking-wide bg-lightgray text-navy px-2.5 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#lead-form"
                  onClick={go}
                  className={`mt-5 flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl transition-all duration-200 ${
                    shed.highlight
                      ? 'bg-crimson text-white hover:bg-[#6e1239] shadow-md'
                      : 'border-2 border-crimson text-crimson hover:bg-crimson hover:text-white'
                  }`}
                >
                  Get a Quote for This Shed →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
