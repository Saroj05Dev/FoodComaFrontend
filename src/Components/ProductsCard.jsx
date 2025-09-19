import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col transition hover:shadow-xl relative">
      {/* Badge */}
      {product?.inStock === false && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          Out of Stock
        </span>
      )}
      <Link to={`/products/${product._id}`} className="flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-52 mb-4">
          <img
            src={product.image || "/pizza.png"}
            alt={product.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Category */}
        <p className="text-orange-500 text-sm font-semibold">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-lg font-bold text-gray-800 line-clamp-1">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Price & Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-amber-600 font-bold text-lg">
            ₹{product.price || 299}
          </span>
          <button className="bg-gradient-to-r from-orange-500 to-amber-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-amber-500 transition">
            Order
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
