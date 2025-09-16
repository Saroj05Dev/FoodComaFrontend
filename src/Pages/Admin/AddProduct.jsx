import { useDispatch } from "react-redux";
import Layout from "../../Layouts/Layout";
import FoodImage from "../../assets/Images/FoodImage.jpg";
import { useState } from "react";
import { createProduct } from "../../Redux/Slices/productSlice";

function AddProduct() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    category: "Veg",
    image: null,
    inStock: true,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleFormSubmit(e) {
  e.preventDefault();
  const formdata = new FormData();
  formdata.append("title", formData.title);
  formdata.append("description", formData.description);
  formdata.append("price", formData.price);
  formdata.append("quantity", formData.quantity);
  formdata.append("category", formData.category);
  formdata.append("inStock", formData.inStock);
  formdata.append("image", formData.image); // or productImage based on backend
  
  for (let pair of formdata.entries()) {
    console.log(pair[0], pair[1]);
  }

  dispatch(createProduct(formdata));
}


  return (
    <Layout>
      <section className="py-12">
        <div className="max-w-4xl mx-auto mt-8 bg-white p-7 flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE IMAGE (hidden on small screens) */}
          <div className="hidden md:block md:w-1/2 mt-45">
            <img
              src={FoodImage}
              alt="Food"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="md:w-2/3 w-full">
            <h2 className="mb-4 text-2xl font-semibold">Add product</h2>

            <form onSubmit={handleFormSubmit}>
              {/* product title */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  minLength={5}
                  maxLength={30}
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* description */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <input
                  type="text"
                  required
                  minLength={5}
                  maxLength={60}
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Price */}
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* quantity */}
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  name="quantity"
                  id="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* category */}
              <div className="mb-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="Veg">Vegetarian</option>
                  <option value="Non-Veg">Non-Vegetarian</option>
                  <option value="Drinks">Soft drinks</option>
                  <option value="Sides">Sides</option>
                </select>
              </div>

              {/* In Stock */}
              <div className="mb-4 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="inStock"
                  id="inStock"
                  checked={formData.inStock}
                  onChange={(e) =>
                    setFormData({ ...formData, inStock: e.target.checked })
                  }
                  className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                />
                <label
                  htmlFor="inStock"
                  className="text-sm font-medium text-gray-700"
                >
                  In Stock
                </label>
              </div>

              {/* image */}
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product image{" "}
                  <span className="text-red-600">(.jpg, .png, .jpeg )</span>
                </label>
                <input
                  type="file"
                  required
                  name="image"
                  id="image"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              >
                Add product
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AddProduct;
