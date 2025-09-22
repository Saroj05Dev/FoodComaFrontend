import IconArrowRight from "../Components/Icons/ArrowRightButton";
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import MainPizzaImage from "../assets/Images/MainPizzaImage.png";
import CookImage from "../assets/Images/CookImage.png";
import OrderFood from "../assets/Images/orderFood (1).png";
import Enjoy from "../assets/Images/enjoy (1).png";
import Pickup from "../assets/Images/pickup (1).png";
import Layout from "../Layouts/Layout";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="flex flex-col-reverse items-center justify-center px-4 py-10 md:flex-row md:gap-10 bg-gradient-to-r from-amber-50 to-orange-300">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex justify-center md:justify-start text-3xl sm:text-4xl lg:text-5xl">
              <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                Enjoy the Slice {" "}
              </h1>
              <h1>😋</h1>
            </div>

            <p className="pb-4 text-[#6B7280] text-sm sm:text-base">
              The Pizza App lets you order your favorite pizza from the comfort
              of your home. Enjoy the best pizza in town with just a few clicks.
            </p>

            <button
              className="flex items-center mx-auto md:mx-0 px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group cursor-pointer text-sm sm:text-base"
              onClick={() => navigate("/products")}
            >
              Order Now
              <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                <IconArrowRight />
              </span>
            </button>
          </div>

          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src={MainPizzaImage}
              alt="Pizza"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </section>

        <hr className="text-amber-50" />

        {/* Services section */}
        <section className="py-10 px-4 bg-gradient-to-r from-amber-50 to-orange-300">
          <div className="container flex flex-col md:flex-row gap-8 items-center">
            <div className="flex flex-col items-center justify-center rounded-lg md:w-1/2">
              <img
                src={CookImage}
                className="rounded-lg w-full max-w-md"
                alt="Cooking"
              />
            </div>
            <div className="flex flex-col flex-wrap text-center md:text-left md:w-1/2">
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                Cooked by the best <br /> chefs in the world
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#6B7280] mb-4">
                There are many benefits regarding to that but the main ones are:
              </p>

              {["Perfect taste", "Prepared quickly", "Food hygiene guaranteed"].map(
                (item, idx) => (
                  <div key={idx} className="w-full p-1">
                    <div className="flex items-center h-full p-2 text-lg sm:text-xl rounded">
                      <IconPatchCheck className="text-[#F38339] w-8 h-8 sm:w-10 sm:h-10 mr-4" />
                      <span className="font-bold title-font">{item}</span>
                    </div>
                  </div>
                )
              )}

              <div className="px-2 sm:px-5 py-4 mx-auto">
                <div className="flex justify-center py-4">
                  <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                  {[
                    { img: OrderFood, title: "Order Food", desc: "As easy as 1, 2, 3. Just select your favorite pizza and place your order." },
                    { img: Pickup, title: "Pickup Food", desc: "Pick up your order from the nearest store or get it delivered to your doorstep." },
                    { img: Enjoy, title: "Enjoy Food", desc: "As soon as you get your order, enjoy the delicious pizza with your loved ones." },
                  ].map((service, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center p-4 md:w-1/3">
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 mb-5 bg-yellow-100 rounded-full">
                        <img src={service.img} className="w-10 h-10 sm:w-12 sm:h-12" />
                      </div>
                      <div className="flex-grow">
                        <h2 className="mb-2 text-base sm:text-lg font-bold text-gray-900 title-font">
                          {service.title}
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="text-amber-50" />

        {/* Map + About Section */}
        <section className="py-10 px-4 bg-gradient-to-r from-amber-50 to-orange-300">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Google Map */}
            <div className="w-full md:w-1/2 h-64 sm:h-80 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019243657301!2d-122.41941508468165!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e77f1ef%3A0x8e1d0f0cba4c2a9a!2sPizza%20Place!5e0!3m2!1sen!2sus!4v1678834234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* About Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text mb-4">
                About Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                At The Pizza App, we are passionate about serving you the freshest and most delicious pizzas in town.
                Our chefs use only the highest quality ingredients and traditional techniques to bring you a slice of
                happiness every time.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Whether you choose to dine in, pick up, or order online, our mission is to make your pizza experience
                quick, tasty, and unforgettable. We look forward to serving you soon!
              </p>
            </div>
          </div>
        </section>
      </div>
      <hr className="text-amber-50" />
    </Layout>
  );
}

export default Home;
