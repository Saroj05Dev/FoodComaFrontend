import Layout from "../Layouts/Layout";

function About() {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About FoodComma 🍕</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Welcome to <span className="font-semibold text-yellow-600">FoodComma</span> – your go-to app for ordering fresh and delicious food anytime, anywhere! Our mission is simple: to bring happiness to your table with every slice, sip, and bite. We believe that food is more than just a meal – it’s an experience that connects people and creates memories.
          </p>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 shadow-lg rounded-xl bg-white border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-3">Our Vision 🌟</h3>
              <p className="text-gray-600">
                To make premium-quality food accessible and affordable for everyone, while ensuring the best service right at your doorstep.
              </p>
            </div>

            <div className="p-8 shadow-lg rounded-xl bg-white border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-3">Our Mission 🎯</h3>
              <p className="text-gray-600">
                Delivering happiness through fresh ingredients, seamless ordering, and fast delivery, ensuring you enjoy every meal with a smile.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us? 🤔</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">🍕 Fresh Ingredients</h4>
              <p className="text-gray-600">We use only the freshest veggies, meats, and cheese to make every dish tasty and healthy.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">⚡ Fast Delivery</h4>
              <p className="text-gray-600">No more waiting! We deliver your favorite meals hot and fresh, right when you need them.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">💳 Easy Payments</h4>
              <p className="text-gray-600">Pay effortlessly with multiple payment options – Online or Cash on Delivery.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">🍴 Wide Variety</h4>
              <p className="text-gray-600">From pizzas and sides to drinks, our menu has something for everyone to enjoy.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">😊 Customer Happiness</h4>
              <p className="text-gray-600">Our customers are at the heart of everything we do. Your satisfaction is our success.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">📱 Seamless Experience</h4>
              <p className="text-gray-600">With our easy-to-use app, placing an order is just a few clicks away.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
