import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./App.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product) {
    return <div className="loader"></div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <img
          className="product-detail-image"
          src={product.images[0]}
          alt={product.title}
        />
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-price">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
