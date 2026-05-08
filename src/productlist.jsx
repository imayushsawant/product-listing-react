import { useEffect, useState } from "react";
import ProductCard from "./productcard";

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData(){

        const url =
          "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches";
    
        try {
          const response = await fetch(url);
          const data = await response.json();
          setProduct(data.data.data)
          return
        } catch (error) {
          console.error(error);
        }
    } 
    fetchData()

  }, []);

  return (
  <div className="product-list-container">
    {product.map(p => (
        <ProductCard key={p.id} product={p}></ProductCard>
    ))}
  </div>)
}

export default ProductList;

