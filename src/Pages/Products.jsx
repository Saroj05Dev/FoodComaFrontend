import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Slices/productSlice";
import Layout from "../Layouts/Layout";
import ProductCard from "../Components/ProductsCard";

const Products = () => {
  const dispatch = useDispatch();
  const { productsData, loading } = useSelector((state) => state.product);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const filteredProducts = productsData
    ?.filter((p) => (filter === "all" ? true : p.category?.toLowerCase() === filter))
    ?.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout>
      <div className="min-h-screen py-12 px-6 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text mb-8">
          Our Delicious Menu 🍕
        </h1>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search pizzas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400"
          />
          <div className="flex gap-3">
            {["all", "veg", "non-veg", "drinks", "sides"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 hover:bg-orange-100"
                }`}
              >
                {cat === "all"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : filteredProducts?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-16">
            <img
              src="/empty.png"
              alt="No products"
              className="mx-auto w-40 mb-4 opacity-70"
            />
            <p>No items found. Try another search or category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
