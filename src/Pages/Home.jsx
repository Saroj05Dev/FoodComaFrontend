import IconArrowRight from "../Components/Icons/ArrowRightButton";
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import MainPizzaImage from "../assets/Images/MainPizzaImage.png"
import CookImage from "../assets/Images/CookImage.png"
import OrderFood from "../assets/Images/orderFood (1).png"
import Enjoy from "../assets/Images/enjoy (1).png"
import Pickup from "../assets/Images/pickup (1).png"
import Layout from "../Layouts/Layout";
import { useNavigate } from "react-router-dom";

function Home () {

    const navigate = useNavigate();

    return (
        <Layout>
        <div>
            {/* Hero Section */}
            <section
                className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300"
            >
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                    <div className="flex justify-center text-4xl md:justify-normal">
                        <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                            Enjoy the Slice { ' ' }
                        </h1>
                        <h1>😋</h1>
                    </div>

                    <p className="pb-4 text-[#6B7280]">
                        The Pizza App lets you order your favorite pizza from the comfort of your home. 
                        Enjoy the best pizza in town with just a few clicks.
                    </p>

                    <button
                        className="flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group"
                        onClick={() => navigate("/products")}
                    >
                        Order Now 
                        <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                            <IconArrowRight />
                        </span>
                    </button>
                </div>

                <div>
                    <img
                        src={MainPizzaImage}
                        alt="Pizza"
                        width={550}
                        height={550}
                    />
                </div>

            </section>

            <hr className="text-amber-50" />

            {/* Services section */}
            <section className="py-4 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                        <img
                            src={CookImage}
                            width={500}
                            className="rounded-lg"
                            alt="Cooking"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <div>
                                <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                                    Cooked by the best <br/> chefs in the world
                                </h2>
                                <p className="text-base leading-relaxed text-[#6B7280]">
                                    There are many benefits regarding to that but the main ones are:
                                </p>
                            </div>
                        </div>

                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Perfect taste</span>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Prepared quickly</span>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Food hygeine guaranteed</span>
                            </div>
                        </div>

                        <div className="px-5 py-4 mx-auto">
                            <div className="flex justify-center py-4">
                                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                            </div>

                            <div className="flex flex-wrap space-y-6 md:space-y-0">
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={OrderFood} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">Order Food</h2>
                                        <p className="text-base leading-relaxed">
                                            As easy as 1, 2, 3. Just select your favorite pizza and place your order.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={Pickup} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">Pickup Food</h2>
                                        <p className="text-base leading-relaxed">
                                            Pick up your order from the nearest store or get it delivered to your doorstep.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={Enjoy} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">Enjoy Food</h2>
                                        <p className="text-base leading-relaxed">
                                            As soon as you get your order, enjoy the delicious pizza with your loved ones.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="text-amber-50" />

            {/* Map + About Section */}
            <section className="py-10 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
                    {/* Google Map */}
                    <div className="w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-md">
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
                        <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text mb-4">
                            About Us
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At The Pizza App, we are passionate about serving you the freshest and most delicious pizzas in town. 
                            Our chefs use only the highest quality ingredients and traditional techniques to bring you a slice of happiness every time.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Whether you choose to dine in, pick up, or order online, our mission is to make your pizza experience quick, tasty, and unforgettable. 
                            We look forward to serving you soon!
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <hr className="text-amber-50" />
        </Layout>
    )
}

export default Home;