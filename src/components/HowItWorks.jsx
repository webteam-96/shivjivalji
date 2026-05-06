import { motion } from 'framer-motion'
import { FaClipboardList, FaTools, FaHardHat, FaHandshake } from 'react-icons/fa'

const steps = [
  { num: '01', Icon: FaClipboardList, title: 'Consultation & Design',     desc: 'Site assessment, requirement scoping, and custom shed design tailored to your project.' },
  { num: '02', Icon: FaTools,         title: 'Engineering & Fabrication', desc: 'In-house steel fabrication and material preparation at our Mumbai manufacturing unit.' },
  { num: '03', Icon: FaHardHat,       title: 'On-Site Installation',      desc: 'Expert installation crews dispatched to your site — sheds erected on time, every time.' },
  { num: '04', Icon: FaHandshake,     title: 'Handover & Support',        desc: 'Post-handover project manager support, maintenance, and hassle-free demobilisation at contract end.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #0F2340 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Our Process</span>
          <h2 className="section-title">How We Deliver Your Shed in 4 Steps</h2>
          <p className="text-body text-base mt-3 max-w-lg mx-auto">
            From first call to on-site handover — a proven process refined over 116 years.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-crimson via-gold to-crimson opacity-30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-white border-2 border-crimson shadow-[0_0_0_8px_rgba(139,26,74,0.08)] flex items-center justify-center mb-5">
                  <step.Icon size={36} color="#8B1A4A" />
                </div>

                <div className="bg-crimson text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3">
                  Step {step.num}
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
