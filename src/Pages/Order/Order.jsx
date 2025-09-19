import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../Layouts/Layout";
import { placeOrder } from "../../Redux/Slices/OrderSlice";

function Order() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartsData } = useSelector((state) => state.cart);

  const items = cartsData?.items || [];
  const subtotal = items.reduce(
    (acc, it) => acc + it.quantity * (it.product?.price || 0),
    0
  );

  const [details, setDetails] = useState({ paymentMethod: "OFFLINE", address: "" });
  const [loading, setLoading] = useState(false);

  function handleUserInput(e) {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    if (!details.address || details.address.trim().length < 5) {
      toast.error("Please enter a valid address");
      return;
    }

    setLoading(true);

    try {
      // payload shape: adjust if your backend expects different keys
      const payload = {
        paymentMethod: details.paymentMethod,
        address: details.address,
        items: items.map((it) => ({ product: it.product?._id || it.product, quantity: it.quantity })),
        total: subtotal,
      };

      const response = await dispatch(placeOrder(payload));

      if (response?.payload?.data?.success) {
        toast.success("Order placed successfully");
        navigate("/orders/success");
      } else {
        toast.error(response?.payload?.data?.message || "Failed to place order");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while placing the order");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <section className="text-gray-600 body-font min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

              <div className="flex-1 overflow-auto">
                {items.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  items.map((item) => (
                    <div key={item.product?._id || item.product} className="flex items-center justify-between py-4 border-b">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.product?.image || "/pizza.png"}
                          alt={item.product?.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                          <p className="font-medium">{item.product?.title}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-semibold text-amber-600">₹{item.quantity * (item.product?.price || 0)}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-500">Subtotal</div>
                  <div className="text-xl font-bold">₹{subtotal}</div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-500">Delivery</div>
                  <div className="text-lg font-medium">Free</div>
                </div>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col h-full">
              <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>

              <form onSubmit={handleFormSubmit} className="flex flex-col flex-1">
                <div className="mb-4">
                  <label className="block mb-2 text-gray-700 font-medium">Payment Method</label>
                  <div className="flex gap-6">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="OFFLINE"
                        checked={details.paymentMethod === "OFFLINE"}
                        onChange={handleUserInput}
                        className="h-4 w-4 text-yellow-500"
                      />
                      <span>Offline (Cash on Delivery)</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="ONLINE"
                        checked={details.paymentMethod === "ONLINE"}
                        onChange={handleUserInput}
                        className="h-4 w-4 text-yellow-500"
                      />
                      <span>Online Payment</span>
                    </label>
                  </div>
                </div>

                <div className="mb-4 flex-1">
                  <label className="block mb-2 text-gray-700 font-medium">Delivery Address</label>
                  <textarea
                    name="address"
                    value={details.address}
                    onChange={handleUserInput}
                    placeholder="Enter your complete address..."
                    className="w-full h-40 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-400 disabled:opacity-60"
                  >
                    {loading ? "Placing order..." : `Place Order • ₹${subtotal}`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Order;
