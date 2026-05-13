import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAward, FaHardHat, FaIndustry } from 'react-icons/fa'
import { asset } from '../lib/asset'

const stats = [
  {
    value: 116,
    suffix: '+',
    label: 'Years of Experience',
    Icon: FaAward,
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Projects Executed',
    Icon: FaHardHat,
  },
  {
    value: 16,
    suffix: '+',
    label: 'Industries Served',
    Icon: FaIndustry,
  },
  {
    value: null,
    display: 'PAN',
    suffix: ' India',
    label: 'Geographic Reach',
    Icon: null,
    mapIcon: true,
  },
]

function Counter({ value, suffix, display }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView || value === null) return
    const steps = 80
    const inc = value / steps
    let cur = 0
    const t = setInterval(() => {
      cur += inc
      if (cur >= value) { setCount(value); clearInterval(t) }
      else setCount(Math.floor(cur))
    }, 2000 / steps)
    return () => clearInterval(t)
  }, [inView, value])

  return (
    <span ref={ref}>
      {value !== null ? count.toLocaleString() : display}{suffix}
    </span>
  )
}


export default function StatsBar() {
  return (
    <section id="stats" className="bg-white border-y border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const isLeftCol  = i % 2 === 0          // mobile: even = left column
            const isTopRow   = i < 2                 // mobile: first two = top row
            const isLast     = i === stats.length - 1
            return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={[
                'flex flex-col items-center justify-center text-center py-8 md:py-10 px-4 md:px-6 border-[#e8e8e8]',
                // mobile cross — vertical center line on left-col cells, horizontal center line on top-row cells
                isLeftCol ? 'border-r' : '',
                isTopRow  ? 'border-b' : '',
                // desktop — only vertical dividers between columns, no horizontal
                'lg:border-b-0',
                isLast ? 'lg:border-r-0' : 'lg:border-r',
              ].join(' ')}
            >
              {/* Icon badge */}
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-crimson/10 border border-crimson/15 flex items-center justify-center mb-3 md:mb-4">
                {s.mapIcon ? (
                  <span
                    role="img"
                    aria-label="India map"
                    className="block w-5 h-5 md:w-6 md:h-6"
                    style={{
                      backgroundColor: '#8B1A4A',
                      WebkitMaskImage: `url(${asset('/icons/india-map.png')})`,
                      maskImage: `url(${asset('/icons/india-map.png')})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                ) : (
                  <s.Icon size={20} color="#8B1A4A" className="md:text-[24px]" />
                )}
              </div>

              {/* Number */}
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-crimson leading-none">
                <Counter value={s.value} suffix={s.suffix} display={s.display} />
              </span>

              {/* Label */}
              <span className="text-navy text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mt-2">
                {s.label}
              </span>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
