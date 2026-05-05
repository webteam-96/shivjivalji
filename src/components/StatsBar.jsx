import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 116,  suffix: '+', label: 'Years of Experience' },
  { value: 1000, suffix: '+', label: 'Projects Erected' },
  { value: 16,   suffix: '+', label: 'Industries Served' },
  { value: null, display: 'PAN', suffix: ' India', label: 'Geographic Reach' },
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
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#e8e8e8]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center py-10 px-6"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-crimson leading-none">
                <Counter value={s.value} suffix={s.suffix} display={s.display} />
              </span>
              <span className="text-navy text-xs font-bold uppercase tracking-[0.15em] mt-2">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
