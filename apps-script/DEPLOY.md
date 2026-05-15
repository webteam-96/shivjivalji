# Deploying the Lead Mailer Apps Script

## One-time setup (5 minutes)

1. Open https://script.google.com and click **New project** (top-left).
2. Rename the project: **"SSV Lead Mailer"** (top-left, where it says "Untitled project").
3. In the editor on the left, you'll see `Code.gs` with a default `function myFunction()`.
   - Select all the default code and **delete it**.
   - Paste the entire contents of `apps-script/Code.gs` from this repo.
4. Click the **floppy-disk Save icon** (or Ctrl+S).
5. Click **Deploy** (top-right) → **New deployment**.
6. Click the **gear icon** next to "Select type" → pick **Web app**.
7. Fill in:
   - **Description:** `SSV Lead Mailer v1`
   - **Execute as:** `Me (your_email@gmail.com)`
   - **Who has access:** `Anyone`  ← important! must be "Anyone", not "Anyone with Google account"
8. Click **Deploy**.
9. Google will ask for authorization:
   - Click **Authorize access**
   - Pick your Google account
   - You'll see "Google hasn't verified this app" → click **Advanced** → **Go to SSV Lead Mailer (unsafe)**
   - Click **Allow** to grant Gmail sending permission
10. After authorization, you'll see a **Web app URL** like:
    `https://script.google.com/macros/s/AKfycby.../exec`
11. **Copy that URL** and paste it back in chat. I'll plug it into `LeadForm.jsx`.

## Changing recipients later

Edit the `RECIPIENTS` array in `Code.gs`, save, then:
- **Deploy** → **Manage deployments**
- Click the **pencil/edit icon** next to your deployment
- Under **Version**, pick **New version**
- Click **Deploy**

**The URL stays the same** — no need to update the frontend.

## Daily quotas (free tier)

- Consumer Gmail: 100 emails/day
- Google Workspace: 1,500 emails/day

Way more than this site will use.
