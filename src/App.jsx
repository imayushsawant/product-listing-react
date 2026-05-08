import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="page-title">Product Listing</h1>
    <Outlet />
    </>
  )
}

export default App
