# Elements of Life - Luxury Real Estate Landing Page

This is a premium, conversion-focused landing page for the "Elements of Life" real estate project. It is designed to convey exclusivity, transparency, and trust, targeting High Net Worth Individuals (HNIs).

## 🏗️ Tech Stack

*   **Frontend**: React 19
*   **Styling**: Tailwind CSS (via CDN for rapid prototyping/deployment)
*   **Icons**: Lucide React
*   **Build/Runtime**: Standard HTML/ES Modules (No complex build step required for simple hosting)
*   **Backend**: Google Apps Script (for Lead Capture)

## 📁 Project Structure

```
/
├── index.html           # Entry point (Tailwind config, Import maps, Meta tags)
├── App.tsx              # Main Application Controller
├── components/          # UI Components
│   ├── Hero.tsx         # First fold visual
│   ├── InquiryModal.tsx # Lead capture form (Generic, Master Plan, Pricing logic)
│   ├── Timeline.tsx     # Construction updates
│   ├── Financials.tsx   # Price breakdown
│   └── ...
├── data/
│   └── content.tsx      # ALL text, images, and pricing data live here
└── utils/
    └── format.ts        # Currency formatting helpers
```

## 🚀 Deployment Guide

### Phase 1: Push to GitHub

1.  **Initialize Git**:
    Open your terminal in the project folder and run:
    ```bash
    git init
    git add .
    git commit -m "Initial launch: Elements of Life"
    ```

2.  **Create Repository**:
    *   Go to [GitHub.com](https://github.com) and create a new repository (e.g., `elements-of-life`).
    *   Do **not** initialize with README/license (keep it empty).

3.  **Connect & Push**:
    Copy the commands provided by GitHub (under "…or push an existing repository from the command line") and run them:
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/elements-of-life.git
    git push -u origin main
    ```

### Phase 2: Deploy to Vercel

1.  **Login**: Go to [Vercel.com](https://vercel.com) and log in with GitHub.
2.  **Add Project**: Click **"Add New..."** -> **"Project"**.
3.  **Import**: Find `elements-of-life` in the list and click **"Import"**.
4.  **Configure**:
    *   **Framework Preset**: Select **Vite** (Vercel usually detects this automatically).
    *   **Root Directory**: `./` (Leave as default).
    *   **Environment Variables**: None required for the frontend.
5.  **Deploy**: Click **"Deploy"**.

Within ~60 seconds, Vercel will build the site and provide you with a live URL (e.g., `https://elements-of-life.vercel.app`).

### Phase 3: Domain Setup (Optional)
To make it look professional (e.g., `elementsoflife.co.in`):
1.  Go to your Vercel Project Dashboard > **Settings** > **Domains**.
2.  Enter your custom domain.
3.  Follow the DNS instructions (usually adding an A Record or CNAME in GoDaddy/Namecheap).

## ⚙️ Configuration

**Lead Capture Form:**
The form in `InquiryModal.tsx` submits data to a Google Spreadsheet via Google Apps Script.
*   **Current URL**: `https://script.google.com/macros/s/AKfycbwaVi23b2Z_l-Up1__zsvHP7RouGAtv8hpzjVPunc1YAQ0I_LP7UPx8SWZCmVMPnB-NOg/exec`
*   **To Change**: Update `GOOGLE_SCRIPT_URL` in `components/InquiryModal.tsx`.

**PDF Downloads:**
Master Plans and Price Sheets are linked in `components/InquiryModal.tsx`.
*   Update `MASTER_PLAN_LINKS` array for file URLs.
*   Update `PRICING_SHEET_URL` for the pricing document.

**Content & Pricing:**
To update prices, images, or amenities, edit `data/content.tsx`. This file acts as a headless CMS for the site.

## 🧹 Maintenance & Cleanup

**Legal Compliance:**
Ensure the links in the footer (Privacy Policy, Terms) are updated with valid URLs before running paid ad campaigns.

## 🎨 Customization

*   **Colors**: Defined in `index.html` under `tailwind.config`.
    *   `stone-950`: Main background
    *   `gold-400`/`gold-500`: Accent colors
*   **Fonts**: Uses *Playfair Display* (Serif) and *Inter* (Sans-serif) from Google Fonts.

## 🔒 Security Note
The form submission uses `mode: 'no-cors'`. This is standard for Google Apps Script webhooks but means the browser console might show an "Opaque" response. This is expected behavior.