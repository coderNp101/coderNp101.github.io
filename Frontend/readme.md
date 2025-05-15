# Destiny Engine

Destiny Engine is a modern web application that combines ancient Vedic astrology with cutting-edge AI to provide personalized astrological insights.

## Features

- Generate detailed Kundali (birth charts)
- AI-powered interpretations of astrological placements
- Location-aware calculations for maximum accuracy
- Personalized remedial measures and spiritual practices
- Modern, responsive UI built with Next.js and Tailwind CSS

## Project Structure

- `app/` – Next.js app directory (pages, layouts, etc.)
- `components/` – Reusable UI and feature components
- `hooks/` – Custom React hooks
- `lib/` – Utility libraries and shared logic
- `public/` – Static assets
- `styles/` – Global styles

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

   If you're encountering errors, try:

   ```sh
   npm install --legacy-peer-deps
   ```

2. **Run the development server:**

   ```sh
   npx next dev
   ```

   Alternatively, after installing dependencies:

   ```sh
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Troubleshooting

- **"next not recognized" error**:
  - Make sure you've installed dependencies with `npm install`
  - Try using `npx next dev` instead of `npm run dev`
  - Check that Node.js (v14 or higher) is installed: `node -v`

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Lint the codebase

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

## License

MIT

---

© 2024 Destiny Engine
