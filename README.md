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
* Fonts: Playfair Display + Inter (Google Fonts)

---

## Running locally

Prerequisites: [Node.js](https://nodejs.org/) 18 or higher.

```bash
# Install dependencies (only the first time)
npm install

# Start the development server
npm start
```

Open **http://localhost:5173** in your browser.

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

## Customization

### Adding the logo

In `src/components/Hero.tsx`, locate the logo placeholder block and replace it with your `<img>`:

```tsx
<Box sx={{ mb: 4 }}>
  <img src="/logo.png" alt="Axioma Watches" style={{ width: 60, height: 60, borderRadius: '50%' }} />
</Box>
```

Place the logo file inside the `public/` folder.

### Updating the featured video

In `src/components/Videos.tsx`, edit the constant at the top:

```ts
const FEATURED_VIDEO_ID = 'abc123XYZ';
```

The ID is the part after `?v=` in the YouTube URL.
For example, in `https://www.youtube.com/watch?v=abc123XYZ`, the ID is `abc123XYZ`.

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
