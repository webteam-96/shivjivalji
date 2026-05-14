import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    n: '1.', title: 'Acceptance of Terms',
    body: (
      <p>By accessing and using this website (https://www.shivjivalji.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
    ),
  },
  {
    n: '2.', title: 'Use License',
    body: (
      <>
        <p>Shah Shivji Valji &amp; Co. ("Company") grants you a limited license to access and use this website and its content for lawful purposes only. You agree not to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Reproduce, duplicate, copy, or resell any portion of this website</li>
          <li>Attempt to gain unauthorized access to any portion or feature of this website</li>
          <li>Use this website for any unlawful purpose or to solicit others to do unlawful acts</li>
          <li>Harass, abuse, or threaten Company staff or other users</li>
          <li>Remove or modify any proprietary notices, labels, or marks on this website</li>
          <li>Interfere with the operation of this website or servers</li>
        </ul>
      </>
    ),
  },
  {
    n: '3.', title: 'Product & Service Information',
    body: (
      <>
        <p>All product descriptions, pricing, and availability information is subject to change without notice. While we strive to provide accurate information, we do not warrant the accuracy, completeness, or timeliness of any information on this website.</p>
        <p className="mt-2">Quotes and pricing provided on this website are estimates only and are subject to confirmation upon order placement.</p>
      </>
    ),
  },
  {
    n: '4.', title: 'Limitation of Liability',
    body: (
      <>
        <p>In no event shall Shah Shivji Valji &amp; Co., its owners, employees, or agents be liable for any damages (including, without limitation, indirect, incidental, special, consequential, or punitive damages) arising from:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Your use or inability to use this website</li>
          <li>Any content obtained through this website</li>
          <li>Unauthorized access to or alteration of your transmissions or data</li>
          <li>Any other matter relating to this website</li>
        </ul>
      </>
    ),
  },
  {
    n: '5.', title: 'Disclaimer of Warranties',
    body: (
      <>
        <p>This website and all content are provided on an "as-is" basis. Company makes no warranties, expressed or implied, including but not limited to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Implied warranties of merchantability or fitness for a particular purpose</li>
          <li>Warranty that the website will be uninterrupted or error-free</li>
          <li>Warranty that defects will be corrected</li>
          <li>Warranty that the website is free of viruses or harmful components</li>
        </ul>
      </>
    ),
  },
  {
    n: '6.', title: 'Indemnification',
    body: (
      <>
        <p>You agree to indemnify and hold harmless Company, its owners, employees, and agents from any claims, damages, losses, or expenses arising from:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Your violation of these Terms of Service</li>
          <li>Your violation of any law or third-party rights</li>
          <li>Your use of this website or its content</li>
        </ul>
      </>
    ),
  },
  {
    n: '7.', title: 'Links to Third-Party Websites',
    body: (
      <>
        <p>This website may contain links to third-party websites. Company is not responsible for:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The availability or content of third-party websites</li>
          <li>Any transactions or interactions with third parties</li>
          <li>Any loss or damage resulting from your use of third-party websites</li>
        </ul>
        <p className="mt-2">We recommend reviewing the terms and privacy policies of any third-party websites before use.</p>
      </>
    ),
  },
  {
    n: '8.', title: 'Intellectual Property Rights',
    body: (
      <p>All content on this website, including text, graphics, logos, images, and software, is the property of Shah Shivji Valji &amp; Co. or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without written permission.</p>
    ),
  },
  {
    n: '9.', title: 'User-Generated Content',
    body: (
      <p>If you submit any content to this website (comments, feedback, suggestions), you grant Company a royalty-free, perpetual, irrevocable, worldwide license to use, reproduce, modify, and distribute such content.</p>
    ),
  },
  {
    n: '10.', title: 'Modification of Terms',
    body: (
      <p>Company reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of this website constitutes acceptance of the modified terms.</p>
    ),
  },
  {
    n: '11.', title: 'Governing Law',
    body: (
      <p>These Terms of Service are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Maharashtra, India.</p>
    ),
  },
  {
    n: '12.', title: 'Contact Information',
    body: (
      <>
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <div className="mt-3 space-y-1 text-navy">
          <p className="font-semibold">Shah Shivji Valji &amp; Co.</p>
          <p>Email: <a href="mailto:info@shivjivalji.com" className="text-crimson hover:underline">info@shivjivalji.com</a></p>
          <p>Phone: +91 98201 24400</p>
          <p>+91 97681 99499</p>
          <p>Website: <a href="https://www.shivjivalji.com" target="_blank" rel="noopener noreferrer" className="text-crimson hover:underline">https://www.shivjivalji.com</a></p>
        </div>
      </>
    ),
  },
  {
    n: '13.', title: 'Severability',
    body: (
      <p>If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
    ),
  },
  {
    n: '14.', title: 'Entire Agreement',
    body: (
      <p>These Terms of Service constitute the entire agreement between you and Company regarding your use of this website and supersede all prior agreements and understandings.</p>
    ),
  },
]

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl mx-auto px-5 md:px-8">

            <div className="mb-10 text-center">
              <span className="section-label">Legal</span>
              <h1 className="section-title">Terms of Service</h1>
              <p className="text-body text-sm mt-3">Last Updated: May 13, 2026</p>
            </div>

            <div className="text-body leading-relaxed space-y-6 text-[15px]">
              {sections.map((s) => (
                <div key={s.n}>
                  <h2 className="text-navy font-bold text-xl mt-8 mb-3 border-l-4 border-crimson pl-3">
                    {s.n} {s.title}
                  </h2>
                  <div className="space-y-2">{s.body}</div>
                </div>
              ))}

              <div className="mt-12 pt-6 border-t border-[#e8e8e8] italic">
                <p>By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
