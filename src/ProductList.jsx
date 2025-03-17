import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </Link>
          <Link to={`/product/${product.id}`}>
            <button className="button">Подробнее</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
