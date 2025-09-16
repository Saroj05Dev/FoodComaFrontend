import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl">
      <Link to={`/products/${product._id}`} >
      
      <div className="w-full h-56">
        <img
          src={product.image || "/pizza.png"}
          alt={product.title}
          className="w-full h-full object-cover rounded-xl"
          />
      </div>
      <p className="text-gray-700 text-sm font-semibold">{product.category}</p>
      <h3 className="mt-4 text-xl font-bold text-gray-800">{product.title}</h3>
      <p className="text-sm text-gray-500 text-center mt-1 line-clamp-2">
        {product.description}
      </p>
      <span className="mt-2 text-amber-600 font-bold text-lg">
        ₹{product.price || 299}
      </span>
      <button className="mt-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white px-5 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-amber-500 transition">
        Order Now
      </button>
          </Link>
    </div>
  );
};

export default ProductCard;
