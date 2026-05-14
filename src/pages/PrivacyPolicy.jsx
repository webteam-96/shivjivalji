import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl mx-auto px-5 md:px-8">

            <div className="mb-10 text-center">
              <span className="section-label">Legal</span>
              <h1 className="section-title">Privacy Policy</h1>
              <p className="text-body text-sm mt-3">Shah Shivji Valji &amp; Co.</p>
            </div>

            <div className="prose prose-slate max-w-none text-body leading-relaxed space-y-6 text-[15px]">

              <p>This Privacy Notice applies to information collected about you by SSVCO, including personal information.</p>

              <h2 className="text-navy font-bold text-xl mt-10 mb-3 border-l-4 border-crimson pl-3">Information We Collect</h2>
              <p>We gather data about you from a variety of places, including:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Information we obtain directly from you.</li>
                <li>Any information you give us when you visit our social media pages or tabs, use our services, or view our online advertisements.</li>
                <li>We may combine all of the information we collect about you to better tailor our communications to you and develop world-class products and services.</li>
              </ol>

              <h2 className="text-navy font-bold text-xl mt-10 mb-3 border-l-4 border-crimson pl-3">Uses / Information Sharing</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>We will use the information you provide to provide the products and services you request or suggest, to inform you about other SSVCO products and services, to improve the services we provide to you, and to keep you informed about any other online or offline activity in which the brand may be involved.</li>
                <li>We will not share your personal information with any third-party marketers unless you have given us explicit permission.</li>
                <li>The brand will not use the information you provide for any promotional purposes.</li>
                <li>
                  We may share your information:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>In case SSVCO is acquired by another firm.</li>
                    <li>To protect and defend Shah Shivji Valji &amp; Co.'s rights and property (including enforcing our Disclaimers).</li>
                    <li>When the law and/or public authorities require it.</li>
                  </ul>
                </li>
              </ol>

              <div className="mt-12 pt-6 border-t border-[#e8e8e8] text-sm">
                <p className="font-semibold text-navy">Questions?</p>
                <p>Contact us at <a href="mailto:info@shivjivalji.com" className="text-crimson hover:underline">info@shivjivalji.com</a></p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
