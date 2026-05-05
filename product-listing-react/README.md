# Elegant Product Listing (React + Vite)

A sophisticated, e-commerce-inspired product listing application built with React and Vite. It fetches live dummy data and displays products with an elegant, editorial-style layout using CSS Grid and Flexbox ordering.

## Features

- **Classy UI:** Minimalist and luxury-brand inspired design featuring sleek typography (`Playfair Display` & `Jost`).
- **Responsive Layout:** Responsive Grid layout cleanly integrated on the root element.
- **Smart CSS Structuring:** Uses CSS Flexbox `order` attributes to restructure content visually, allowing the `ProductCard`'s JSX to stay completely untouched and semantic.
- **Live API Integration:** Fetches product data seamlessly using the FreeAPI public endpoint.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Vanilla CSS (CSS Grid, Flexbox, CSS Variables)
- **Package Manager:** pnpm

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm run dev
   ```

3. Open `http://localhost:5173` to view it in the browser.

## Key Files

- `src/productlist.jsx`: The container component fetching and mapping product data.
- `src/productcard.jsx`: The presentation component mapping individual item fields.
- `src/index.css`: Contains color variables, typography setup, and the global grid layout.
- `src/productcard.css`: The styling that adds hover effects and uses `order: X` properties to visually rearrange the JSX elements into a modern layout!