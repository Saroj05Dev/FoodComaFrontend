import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "react-router-dom";
import vegPizza from "../assets/Images/veg-pizza.jpg";
import nonVegPizza from "../assets/Images/non-veg-pizza.jpg";
import drinksImage from "../assets/Images/drinksimage.jpg";
import friesImage from "../assets/Images/fries.jpg";

function Menu() {
  const menuCategories = [
    {
      name: "Veg Pizzas",
      description: "Delicious vegetarian pizzas with fresh toppings.",
      image: vegPizza,
      link: "/products?category=veg",
    },
    {
      name: "Non-Veg Pizzas",
      description: "Juicy chicken and meat loaded pizzas.",
      image: nonVegPizza,
      link: "/products?category=non-veg",
    },
    {
      name: "Drinks",
      description: "Chilled beverages to go with your meal.",
      image: drinksImage,
      link: "/products?category=drinks",
    },
    {
      name: "Sides",
      description: "Garlic bread, fries, and more snacks.",
      image: friesImage,
      link: "/products?category=sides",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text mb-12">
          Explore Our Menu 🍽️
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {menuCategories.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
