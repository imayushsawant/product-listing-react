import { useEffect, useState } from "react";
import "./productcard.css";
import { useNavigate } from "react-router-dom";


function ProductCard(product) {
  const navigate = useNavigate()

  const clickHandle = () => {
    console.log("clicked")
    navigate(`/product/${product.product.id}`)
  }

  return (
  <>
  <div onClick={clickHandle} id="productCard">

   <h2>{product.product.title}</h2>
   <p>{product.product.category}</p>
   <img src={product.product.images[0]}></img>
   <p>{`$${product.product.price}`}</p>
  </div>
  </>)
}

export default ProductCard;
