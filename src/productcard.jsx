import { useEffect, useState } from "react";
import "./productcard.css";
function ProductCard(product) {
  return (
  <>
  <div id="productCard">

   <h2>{product.product.title}</h2>
   <p>{product.product.category}</p>
   <img src={product.product.images[0]}></img>
   <p>{`$${product.product.price}`}</p>
  </div>
  </>)
}

export default ProductCard;
