import { motion } from 'framer-motion'
import { asset } from '../lib/asset'

const apps = [
  {
    label: 'Bulk Material Storage',
    desc: 'Heavy-duty covered storage for cement, coal, ore, and other bulk industrial materials — protected from monsoon and wind',
    img: asset('/applications/bulk-material-storage.png'),
  },
  {
    label: 'Project Material Storage',
    desc: 'Secure on-site sheds for project materials, equipment, and construction inventory during active execution phases',
    img: asset('/applications/project-material-storage.png'),
  },
  {
    label: 'Finished Storage',
    desc: 'Weatherproof covered storage for finished goods, machinery, and high-value industrial inventory awaiting dispatch',
    img: asset('/applications/finished-storage.png'),
  },
  {
    label: 'Agricultural Storage',
    desc: 'Protect harvested crops, grains, and agri-produce from rainfall and sun damage during seasonal storage',
    img: asset('/applications/agricultural-storage.png'),
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
          <span className="section-label">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="text-body text-base mt-3 max-w-xl mx-auto">
            Trusted shed solutions for raw material protection, finished goods storage, and agricultural produce across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {apps.map((app, i) => (
            <motion.div
              key={app.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
