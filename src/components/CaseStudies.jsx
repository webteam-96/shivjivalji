import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const cases = [
  {
    img: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=600&q=80&auto=format&fit=crop',
    tag: 'Bulk Storage',
    tagColor: '#B8860B',
    title: 'Bulk Storage Solution for MegaCorp Logistics',
    industry: 'Logistics & Warehousing',
    note: 'Completed in 3 weeks',
    size: '12,000 sq ft',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
    tag: 'Monsoon Protection',
    tagColor: '#8B1A4A',
    title: 'Monsoon Protection Shed for Coastal Infrastructure Project',
    industry: 'Infrastructure',
    note: 'Zero Downtime',
    size: '8,500 sq ft',
  },
  {
    img: 'https://images.unsplash.com/photo-1533093818119-ac1fa47a6d59?w=600&q=80&auto=format&fit=crop',
    tag: 'Industrial Expansion',
    tagColor: '#0F2340',
    title: 'Monsoon Protection for Steel Manufacturing Expansion',
    industry: 'Steel & Manufacturing',
    note: 'Delivered on Schedule',
    size: '20,000 sq ft',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Featured Project Case Studies</h2>
          <p className="text-body text-base mt-3 max-w-xl mx-auto">
            Real projects. Real outcomes. Delivered on time across India's toughest industrial sites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e8e8e8] shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                <img src={c.img} alt={c.title} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Tag */}
                <div className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: c.tagColor }}
                >
                  {c.tag}
                </div>
                {/* Size badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {c.size}
                </div>
              </div>

              <div className="p-6">
                <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2">{c.industry}</p>
                <h3 className="text-sm md:text-base font-bold text-navy leading-snug mb-4">{c.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-crimson flex items-center gap-1">
                    <FaCheck size={10} /> {c.note}
                  </span>
                  <a href="#lead-form"
                    onClick={(e) => { e.preventDefault(); document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="text-xs font-bold text-navy/50 hover:text-crimson transition-colors"
                  >
                    Similar Project? →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
