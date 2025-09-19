import Layout from "../Layouts/Layout"
function Services() {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
              Our Services 🍕
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              At FoodComma, we make sure your cravings are fulfilled with the best
              pizzas and food items delivered right to your doorstep. Check out
              what we offer:
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Service Card 1 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-8 flex-col shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    🍕
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Freshly Baked Pizzas
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    We use only the freshest ingredients and bake every pizza to
                    perfection. Taste the difference in every bite.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-8 flex-col shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    🚚
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Fast Delivery
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Craving something? Get your food delivered hot and fresh in
                    no time with our superfast delivery service.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-8 flex-col shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    💳
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Easy Payment Options
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Choose between cash on delivery or secure online payments.
                    Your convenience is our priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-8 flex-col shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    🥗
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Variety of Options
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    From veg, non-veg to sides and beverages – we’ve got
                    something for everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-8 flex-col shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    ⭐
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Customer Satisfaction
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Our customers love us for the taste, service, and
                    reliability. Join the FoodComma family today!
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-yellow-100 p-8 flex-col shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    📱
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Easy Ordering
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Our user-friendly app and website make ordering food simple
                    and hassle-free.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Services;
