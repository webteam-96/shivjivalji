import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaLock, FaSpinner, FaExclamationTriangle } from 'react-icons/fa'

const WA_LINK = 'https://wa.me/918238720244?text=I%20am%20interested%20in%20Monsoon%20Sheds%20on%20Hire'

// PHP mailer on same origin. Edit recipients in public/sendmail.php
const MAIL_ENDPOINT = `${import.meta.env.BASE_URL}sendmail.php`

export default function LeadForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        contact: data.contact,
        email: data.email,
        company: data.company,
        designation: data.designation,
        industry: data.industry,
        location: data.location,
        message: data.message,
      }

      const res = await fetch(MAIL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok || j.success !== true) throw new Error()

      toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} bg-navy text-white px-6 py-4 rounded-xl shadow-2xl border border-gold/30 max-w-sm`}>
          <div className="flex items-start gap-3">
            <FaCheckCircle size={24} className="text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Thank you, {data.name?.split(' ')[0] || 'there'}!</p>
              <p className="text-white/70 text-sm mt-0.5">Our team will reach out within 24 hours with your custom quote.</p>
            </div>
          </div>
        </div>
      ), { duration: 5000 })
      reset()
    } catch {
      toast.error('Something went wrong. Please try WhatsApp or call us directly.')
    }
  }

  return (
    <>
      <Toaster position="top-center" containerStyle={{ top: 80 }} />

      <section id="lead-form" className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
        {/* Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-8">

          {/* CTA heading block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-4 max-w-3xl mx-auto">
              Ready to Secure Your Assets with{' '}
              <span className="text-crimson">Reliable Industrial Sheds?</span>
            </h2>
            <p className="text-body text-base md:text-lg max-w-xl mx-auto mb-8">
              Get a free consultation from our experts. Customised proposal delivered within 24 hours — anywhere in India.
            </p>
            <a
              href="#lead-form-form"
              onClick={(e) => { e.preventDefault(); document.getElementById('lead-form-form')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 bg-crimson hover:bg-[#6e1239] text-white font-extrabold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_8px_24px_rgba(139,26,74,0.35)] hover:shadow-[0_8px_32px_rgba(139,26,74,0.5)] hover:-translate-y-0.5"
            >
              REQUEST A FREE CONSULTATION →
            </a>
          </motion.div>

          <div id="lead-form-form" className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

            {/* Left info panel */}
            <motion.div
              initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.65 }}
              className="lg:col-span-2 gradient-navy rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-crimson/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative">
                <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] block mb-3">Get in Touch</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                  Request Your<br />
                  <span className="text-crimson">Free Quote</span> Today
                </h2>
                <p className="text-white/65 text-sm leading-relaxed mb-8">
                  Fill in the form and our expert team will prepare a customised proposal for your project within 24 hours.
                </p>

                <div className="space-y-5">
                  {[
                    { Icon: FaEnvelope,     label: 'Email',   val: 'info@shivjivalji.com',  href: 'mailto:info@shivjivalji.com' },
                    { Icon: FaMapMarkerAlt, label: 'HQ',      val: 'Mumbai, Maharashtra',   href: null },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <c.Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gold uppercase tracking-widest">{c.label}</p>
                        {c.href
                          ? <a href={c.href} className="text-white/85 text-sm font-medium hover:text-white transition-colors">{c.val}</a>
                          : <p className="text-white/85 text-sm font-medium">{c.val}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-8">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-whatsapp hover:bg-green-600 text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-all shadow-lg"
                >
                  <WAIcon /> Chat Directly on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.65 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit(onSubmit)} noValidate
                className="bg-white border border-[#e8e8e8] rounded-2xl p-7 md:p-10 shadow-lg h-full"
              >
                <h3 className="text-xl font-bold text-navy mb-6">Tell us about your project</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <F label="Name *" err={errors.name?.message}>
                      <input type="text" placeholder="Name" className={inp(errors.name)}
                        {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Min 2 characters' } })} />
                    </F>
                  </div>

                  <F label="Contact Number *" err={errors.contact?.message}>
                    <input type="tel" placeholder="Contact Number" className={inp(errors.contact)}
                      {...register('contact', { required: 'Contact number required', pattern: { value: /^[6-9]\d{9}$/, message: 'Valid 10-digit mobile number' } })} />
                  </F>

                  <F label="Email *" err={errors.email?.message}>
                    <input type="email" placeholder="Email" className={inp(errors.email)}
                      {...register('email', { required: 'Email required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} />
                  </F>

                  <F label="Company Name" err={errors.company?.message}>
                    <input type="text" placeholder="Company Name" className={inp(errors.company)}
                      {...register('company')} />
                  </F>

                  <F label="Designation" err={errors.designation?.message}>
                    <input type="text" placeholder="Designation" className={inp(errors.designation)}
                      {...register('designation')} />
                  </F>

                  <F label="Select Industry of Business" err={errors.industry?.message}>
                    <select className={inp(errors.industry)}
                      {...register('industry')}
                    >
                      <option value="">Select Industry of Business</option>
                      {['Cement Industry', 'Glass Industry', 'Infrastructure', 'Oil & Gas Industry', 'Sugar Industry', 'Steel Industry', 'Other'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </F>

                  <F label="Location" err={errors.location?.message}>
                    <input type="text" placeholder="Location" className={inp(errors.location)}
                      {...register('location')} />
                  </F>

                  <div className="md:col-span-2">
                    <F label="Message" err={errors.message?.message}>
                      <textarea rows={4} placeholder="Message"
                        className={`${inp(errors.message)} resize-none`} maxLength={500}
                        {...register('message', { maxLength: { value: 500, message: 'Max 500 characters' } })} />
                    </F>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full mt-6 bg-crimson hover:bg-[#6e1239] disabled:opacity-60 text-white font-extrabold text-base py-4 rounded-xl transition-all shadow-[0_8px_24px_rgba(139,26,74,0.35)] hover:shadow-[0_8px_32px_rgba(139,26,74,0.5)] hover:-translate-y-0.5"
                >
                  {isSubmitting
                    ? <span className="flex items-center justify-center gap-2"><FaSpinner className="animate-spin" /> Submitting…</span>
                    : 'GET MY FREE QUOTE →'
                  }
                </button>

                <p className="text-xs text-body/50 text-center mt-3 flex items-center justify-center gap-1">
                  <FaLock size={10} /> Your information is secure. No spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-green-600 rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.7)] transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  )
}

function F({ label, err, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-navy tracking-wide">{label}</label>
      {children}
      {err && <p className="text-xs text-red-500 flex items-center gap-1"><FaExclamationTriangle size={10} />{err}</p>}
    </div>
  )
}

function inp(err) {
  return `w-full border ${err ? 'border-red-400 bg-red-50' : 'border-[#ddd]'} rounded-xl px-4 py-3 text-sm text-body placeholder-body/35 focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/20 transition-all bg-[#fafafa] hover:bg-white`
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
