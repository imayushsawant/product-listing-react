import { useEffect, useState } from "react";
import "./productview.css";
import { useParams, useNavigate } from "react-router-dom";

function ProductView() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const navigate = useNavigate()

    const clickHandle = () => {
    console.log("clicked")
    navigate(`/`)
  }

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data.data.data);
        return;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const correspondingProduct = product.find((p) => p.id == params.productid);
  console.log(correspondingProduct);

  
    if(correspondingProduct) {
      return (
      <div className="product-view-container">
        <div className="product-image-section">
          <img src={correspondingProduct.images[0]} alt={correspondingProduct.title} />
        </div>
        <div className="product-details-section">
          <p className="product-category">{correspondingProduct.category}</p>
          <h1 className="product-title">{correspondingProduct.title}</h1>
          <div className="product-pricing">
            <span className="price">${correspondingProduct.price}</span>
            <span className="discount">{correspondingProduct.discountPercentage}% OFF</span>
          </div>
          <div className="product-rating">
            ⭐ Customer Rating: {correspondingProduct.rating} / 5
          </div>
          <p className="product-description">{correspondingProduct.description}</p>
          <p className="product-stock">In Stock: {correspondingProduct.stock}</p>
          <div className="product-actions">
            {/* <button className="add-to-cart-btn">Add to Cart</button> */}
            <button className="back-btn" onClick={clickHandle}>← Back to Homepage</button>
          </div>
        </div>
      </div>
      )
    }
  }


export default ProductView;
