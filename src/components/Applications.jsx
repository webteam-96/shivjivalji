import { motion } from 'framer-motion'

const apps = [
  {
    label: 'Bulk Material Storage',
    desc: 'Nation-wide raw material protection on-site',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80&auto=format&fit=crop',
  },
  {
    label: 'Project Material Storage',
    desc: 'Temporary project material protection during construction',
    img: 'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&q=80&auto=format&fit=crop',
  },
  {
    label: 'Fabrication & Painting',
    desc: 'Enclosed industrial sheds for fabrication and painting works',
    img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80&auto=format&fit=crop',
  },
  {
    label: 'Civil Activities',
    desc: 'Covered zones for civil, admin and operational activities',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
  },
  {
    label: 'Aircraft Hangars',
    desc: 'Wide-span column-free hangars for aviation assets',
    img: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80&auto=format&fit=crop',
  },
  {
    label: 'Warehouse Expansion',
    desc: 'Rapid temporary expansion of existing warehouse footprint',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop',
  },
]

export default function Applications() {
  return (
    <section id="applications" className="py-20 md:py-28 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-label">Where We Deploy</span>
          <h2 className="section-title">Applications of Monsoon Sheds</h2>
          <p className="text-body text-base mt-3 max-w-xl mx-auto">
            From iron &amp; steel to aviation — our sheds protect assets across every major Indian industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, i) => (
            <motion.div
              key={app.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative group overflow-hidden rounded-2xl cursor-default shadow-md hover:shadow-2xl transition-shadow duration-400"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={app.img}
                alt={app.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-crimson/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-0.5 w-5 bg-gold" />
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">Application</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{app.label}</h3>
                <p className="text-white/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {app.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
