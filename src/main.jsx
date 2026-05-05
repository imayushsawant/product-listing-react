import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductList from './productlist.jsx'
import ProductCard from './productcard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ProductList />
    {/* <ProductCard /> */}
  </StrictMode>,
)
