import { motion } from 'framer-motion'

const clients = [
  { name: 'Adani',              logo: '/clients/adani.webp' },
  { name: 'Aditya Birla',       logo: '/clients/aditya-birla.webp' },
  { name: 'AIS',                logo: '/clients/ais.webp' },
  { name: 'Coca-Cola',          logo: '/clients/coca-cola.webp' },
  { name: 'IRB',                logo: '/clients/irb.webp' },
  { name: 'JIO',                logo: '/clients/jio.webp' },
  { name: 'JSW',                logo: '/clients/jsw.webp' },
  { name: 'Reliance',           logo: '/clients/reliance.webp' },
  { name: 'Shree Renuka Sugar', logo: '/clients/shree-renuka-sugar.webp' },
  { name: 'Tata',               logo: '/clients/tata.webp' },
]

function LogoCard({ client }) {
  return (
    <div className="flex items-center justify-center bg-white border border-[#e8e8e8] rounded-xl px-8 py-6 min-w-[200px] md:min-w-[230px] h-[120px] md:h-[130px] shadow-sm hover:shadow-md hover:border-crimson/30 transition-all duration-200 flex-shrink-0 group">
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-20 md:max-h-24 max-w-[170px] md:max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      <span
        className="hidden items-center justify-center text-navy font-bold text-sm w-full text-center"
      >
        {client.name}
      </span>
    </div>
  )
}

function Strip({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-4 items-center"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
        style={{ width: 'max-content' }}
      >
        {doubled.map((c, i) => (
          <LogoCard key={`${c.name}-${i}`} client={c} />
        ))}
      </motion.div>
    </div>
  )
}

export default function ClientLogos() {
  const half = Math.ceil(clients.length / 2)
  const row1 = clients.slice(0, half)
  const row2 = clients.slice(half)

  return (
    <section id="clients" className="py-20 md:py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/25 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">Our Clients</span>
          <h2 className="section-title">Trusted by Leading Companies Across Industries</h2>
          <p className="text-body text-base mt-3 max-w-lg mx-auto">
            From PSUs to multinationals — 116 years of trust built across India's most demanding sectors.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <Strip items={row1} reverse={false} />
        <Strip items={row2} reverse={true} />
      </div>
    </section>
  )
}
