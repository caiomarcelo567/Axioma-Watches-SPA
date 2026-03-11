# Axioma Watches

Official website for the **Axioma Watches** YouTube channel, created by **Claudio Vaz** — a channel focused on quartz and automatic mechanical watchmaking.

This project was developed by me for my father, Claudio Vaz, the creator of the channel. It is a SPA (Single Page Application), meaning a single HTML page loads the entire application in the browser without reloading when navigating between sections.

**Channel links:**

* YouTube: https://www.youtube.com/@axiomawatches
* Instagram: https://www.instagram.com/axiomawatcheschannel
* Email: [cmvaz2010@gmail.com](mailto:cmvaz2010@gmail.com)
* My email: [caiomarcelo567@hotmail.com](mailto:caiomarcelo567@hotmail.com)

---

## Technologies

* [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* [Vite 7](https://vite.dev/)
* [Material UI v7](https://mui.com/)
* [EmailJS](https://www.emailjs.com/) — send emails directly from the frontend without a backend
* Fonts: Inter (Google Fonts)

---

## Running locally

Prerequisites: [Node.js](https://nodejs.org/) 18 or higher and [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`).

```bash
# Install dependencies (only the first time)
npm install

# Start the development server (includes the /api/sheet proxy)
vercel dev
```

Open **http://localhost:3000** in your browser.

> `vercel dev` is required to run the `/api/sheet` serverless function locally. `npm start` still works but the video and recommendations will use the hardcoded fallback data.

---

## Environment variables (optional)

The contact form uses EmailJS to send messages. This step is optional — the website works normally without it, but the form will only send real emails after configuration.

Create a `.env` file in the project root with the following content:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

### How to get EmailJS credentials

1. Create a free account at https://www.emailjs.com (200 emails/month on the free plan)
2. In **Email Services**, connect your Gmail or another provider
3. In **Email Templates**, create a template with the following variables in the email body:

```
Name: {{from_name}}
Email: {{from_email}}

{{message}}
```

4. Copy the **Service ID**, **Template ID**, and **Public Key** (Account → General) into the `.env` file.

---

## Google Sheets CMS

The featured video and recommended watches are driven by a Google Sheets spreadsheet via the `/api/sheet` serverless proxy. Add these to `.env`:

```env
VIDEO_SHEET_URL=<CSV export URL of the "video" tab>
RECOMMENDATIONS_SHEET_URL=<CSV export URL of the "recomendacoes" tab>
```

To get the URLs: open the spreadsheet → **File → Publish to web** → select the tab → **CSV** → Publish → copy the URL.

**`recomendacoes` tab columns** (row 1 = header, row 2+ = data):

| Col | Suggested header | Description |
|-----|------------------|-------------|
| A | brand | Brand name |
| B | model | Model name or reference code |
| C | description | Description in Portuguese |
| D | storeUrl | Store link (opens when the card is clicked) |
| E | imageUrl | Direct image URL (if empty, the OG image from the store URL is fetched automatically) |
| F | coupon | Coupon code (shown as an overlay on the card image) |
| G | descriptionEn | Description in English (if empty, column C is used as fallback) |

> Header names in the spreadsheet are free-form — the code reads by **column position**, not by name.

**`video` tab:** just the YouTube URL in cell A1.

Cache TTL is 3h (`s-maxage=10800` on the CDN + `localStorage` on the client).

---

## Build

```bash
# Generate static files in the dist/ folder
npm run build

# Test the build locally before deploying
npm run preview
```

---

Developed by **Caio Vaz** — Junior Front-End Developer.
