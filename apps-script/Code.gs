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
  // 'web@kaizeninfotech.com',
  // Production: uncomment below and remove web@kaizeninfotech.com when ready
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

    return jsonOut({ success: true })
  } catch (err) {
    return jsonOut({ success: false, error: String(err) })
  }
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
