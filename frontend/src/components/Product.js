import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card2">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
          <h2 style={{fontSize: "22px"}}>{product.name}</h2>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">₹{product.price}</div>
      </div>
    </div>
  );
}
  