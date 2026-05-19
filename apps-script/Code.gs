/**
 * Shah Shivji Valji & Company — Lead Form Mailer
 * --------------------------------------------------
 * Deploy this as a Google Apps Script Web App (see deploy steps below).
 * The deployed URL goes into LeadForm.jsx as APPS_SCRIPT_URL.
 *
 * To change recipients later, edit RECIPIENTS below, save, then
 * deploy > "Manage deployments" > pencil icon > version "New" > Deploy.
 * The same URL stays valid across re-deployments.
 */

const RECIPIENTS = [
  'bhavik.nagda@shivjivalji.com',
  'aakash.kalushte@shivjivalji.com',
]

const FROM_NAME = 'Shah Shivji Valji Website'
const SUBJECT_PREFIX = 'New Enquiry'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)

    const subject = `${SUBJECT_PREFIX} from ${data.name || 'Anonymous'}${data.company ? ` — ${data.company}` : ''}`

    const rows = [
      ['Name',           data.name],
      ['Contact Number', data.contact],
      ['Email',          data.email],
      ['Company',        data.company],
      ['Designation',    data.designation],
      ['Industry',       data.industry],
      ['Location',       data.location],
      ['Message',        data.message],
    ]

    const tableRows = rows
      .map(([label, value], i) => `
        <tr style="background: ${i % 2 === 0 ? '#f7f7f7' : '#ffffff'};">
          <td style="padding: 10px 12px; font-weight: 600; color: #0F2340; width: 35%; vertical-align: top;">${label}</td>
          <td style="padding: 10px 12px; color: #444; vertical-align: top;">${escapeHtml(value) || '—'}</td>
        </tr>`)
      .join('')

    const htmlBody = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: 0 auto; color: #333; background: #fff; padding: 24px;">
        <div style="border-bottom: 3px solid #8B1A4A; padding-bottom: 14px; margin-bottom: 18px;">
          <h2 style="color: #8B1A4A; margin: 0 0 4px 0;">New Enquiry</h2>
          <p style="margin: 0; color: #666; font-size: 13px;">Shah Shivji Valji & Co. — Website Lead Form</p>
        </div>
        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; border: 1px solid #e8e8e8; border-radius: 6px; overflow: hidden;">
          ${tableRows}
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 22px;">
          Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST<br>
          Source: shivjivalji.com
        </p>
      </div>
    `

    MailApp.sendEmail({
      to: RECIPIENTS.join(','),
      replyTo: data.email || undefined,
      subject: subject,
      htmlBody: htmlBody,
      name: FROM_NAME,
    })

    // Auto-reply to the visitor (only if we have a valid-looking email)
    if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      const firstName = (data.name || '').split(' ')[0] || 'there'
      const autoReplyHtml = buildAutoReply(firstName)
      MailApp.sendEmail({
        to: data.email,
        subject: 'Thank you for your enquiry — Shah Shivji Valji & Co.',
        htmlBody: autoReplyHtml,
        name: 'Shah Shivji Valji & Co.',
      })
    }

    return jsonOut({ success: true })
  } catch (err) {
    return jsonOut({ success: false, error: String(err) })
  }
}

function buildAutoReply(firstName) {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: 0 auto; color: #333; background: #fff;">
      <div style="background: #0F2340; padding: 28px 24px; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 22px; letter-spacing: 0.5px;">Shah Shivji Valji &amp; Co.</h1>
        <p style="color: #C9A857; margin: 6px 0 0 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Trusted Since 1910</p>
      </div>

      <div style="padding: 32px 28px;">
        <h2 style="color: #8B1A4A; margin: 0 0 12px 0; font-size: 20px;">Thank you, ${escapeHtml(firstName)}!</h2>
        <p style="line-height: 1.65; color: #444; margin: 0 0 14px 0; font-size: 15px;">
          We've received your enquiry regarding our industrial monsoon shed solutions. Our team will review the details and reach out to you within <strong>24 hours</strong> with a customised proposal.
        </p>
        <p style="line-height: 1.65; color: #444; margin: 0 0 18px 0; font-size: 15px;">
          With <strong>over 116 years</strong> of expertise serving India's largest enterprises across Iron &amp; Steel, Mining, Cement, Power, Infrastructure and more — you're in trusted hands.
        </p>

        <div style="background: #fafafa; border-left: 4px solid #C9A857; padding: 16px 18px; margin: 22px 0;">
          <p style="margin: 0 0 6px 0; font-size: 13px; color: #0F2340; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Need a faster response?</p>
          <p style="margin: 0; line-height: 1.6; color: #555; font-size: 14px;">
            Chat with us directly on WhatsApp:
            <a href="https://wa.me/919930924189?text=I%20am%20interested%20in%20Monsoon%20Sheds%20on%20Hire" style="color: #25D366; text-decoration: none; font-weight: 700;">+91 9930924189</a>
          </p>
        </div>

        <p style="line-height: 1.65; color: #444; margin: 22px 0 0 0; font-size: 15px;">Warm regards,<br><strong>Team Shah Shivji Valji &amp; Co.</strong></p>
      </div>

      <div style="background: #f5f5f5; padding: 18px 28px; border-top: 1px solid #e8e8e8;">
        <p style="margin: 0; color: #888; font-size: 12px; line-height: 1.6;">
          <strong style="color: #0F2340;">Shah Shivji Valji &amp; Co.</strong><br>
          Mumbai, Maharashtra — PAN India Operations<br>
          Email: <a href="mailto:info@shivjivalji.com" style="color: #8B1A4A; text-decoration: none;">info@shivjivalji.com</a> &nbsp;·&nbsp;
          Web: <a href="https://www.shivjivalji.com" style="color: #8B1A4A; text-decoration: none;">www.shivjivalji.com</a>
        </p>
        <p style="margin: 10px 0 0 0; color: #aaa; font-size: 11px; font-style: italic;">
          This is an automated acknowledgement. Please do not reply directly — our team will be in touch shortly from our dedicated business email.
        </p>
      </div>
    </div>
  `
}

function doGet() {
  return jsonOut({ ok: true, service: 'ssv-lead-mailer' })
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}

function escapeHtml(s) {
  if (s === null || s === undefined || s === '') return ''
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
