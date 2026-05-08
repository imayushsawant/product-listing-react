# Elegant Product Listing (React + Vite + React Router)

A sophisticated, e-commerce-inspired product listing application built with React and Vite. It fetches live dummy data and displays products with an elegant layout using CSS Grid, and features a fully responsive, modern Product Details page utilizing dynamic routing.

## Features

- **Classy UI & E-Commerce Layout:** Minimalist and luxury-brand inspired design featuring sleek typography (`Playfair Display` & `Jost`). The individual product page mimics popular e-commerce platforms.
- **Dynamic Routing:** Utilizes `react-router-dom` to navigate between the main product listing and individual product detail views (`/product/:productid`).
- **Responsive Layout:** Responsive Grid layout cleanly integrated on the root element for listings, and a Flexbox-based two-column design for the detail view.
- **Smart CSS Structuring:** Uses CSS Flexbox `order` attributes to restructure content visually, allowing the `ProductCard`'s JSX to stay completely untouched and semantic.
- **Live API Integration:** Fetches product data seamlessly using the FreeAPI public endpoint.

## Tech Stack

- **Framework:** React + Vite
- **Routing:** React Router v6 (`react-router-dom`)
- **Styling:** Vanilla CSS (CSS Grid, Flexbox, CSS Variables)
- **Package Manager:** npm / pnpm

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

3. Open `http://localhost:5173` to view it in the browser.

## Key Files

- `src/main.jsx`: Configures the application router and layouts.
- `src/productlist.jsx`: The container component fetching and mapping product data.
- `src/productcard.jsx`: The presentation component for individual items in the grid.
- `src/productview.jsx`: The detailed view component for a highly stylized individual product page.
- `src/index.css`: Contains color variables, typography setup, and the global grid layout wrapper.
- `src/productview.css`: Dedicated styling for the modern e-commerce product view.