import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Slices/productSlice";
import Layout from "../Layouts/Layout";
import ProductCard from "../Components/ProductsCard";

const Products = () => {
  const dispatch = useDispatch();
  const { productsData } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Layout>
      <div className="min-h-screen py-12 px-6">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text mb-12">
          Our Delicious Pizzas 🍕
        </h1>

        {productsData?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {productsData.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No pizzas available right now</p>
        )}
      </div>
    </Layout>
  );
};

export default Products;
