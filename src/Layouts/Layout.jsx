import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";
import FoodComaLogo from "../assets/Images/FoodComaLogo.png";
import { logout } from "../Redux/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "../assets/Images/cart.svg";
import { useEffect, useState } from "react";
import { getCartDetails } from "../Redux/Slices/cartSlice";
import { Menu, X } from "lucide-react";

function Layout({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { cartsData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  async function fetchCartDetails() {
    const res = await dispatch(getCartDetails());
    if (res?.payload?.isUnauthorized) {
      dispatch(logout());
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchCartDetails();
    }
  }, []);

  return (
    <div>
      <nav className="flex items-center justify-between px-4 md:px-12 h-16 text-[#6B7280] font-mono border-none shadow-md">
        {/* Logo */}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <p className="hidden md:block mr-2">Pizza App</p>
          <img width={50} height={50} src={FoodComaLogo} alt="Pizza logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            <li
              onClick={() => navigate("/menu")}
              className="hover:text-[#FF9110] cursor-pointer"
            >
              Menu
            </li>
            <li
              onClick={() => navigate("/services")}
              className="hover:text-[#FF9110] cursor-pointer"
            >
              Services
            </li>
            <li
              onClick={() => navigate("/about")}
              className="hover:text-[#FF9110] cursor-pointer"
            >
              About
            </li>
          </ul>
        </div>

        {/* Right Section (Cart + Auth + Mobile Button) */}
        <div className="flex gap-6 items-center">
          {/* Cart always visible */}
          {isLoggedIn && (
            <Link to={"/carts"}>
              <li className="list-none flex items-center">
                <img src={CartIcon} className="w-8 h-8 inline" />
                <p className="text-black inline ml-1">
                  {cartsData?.items?.length}
                </p>
              </li>
            </Link>
          )}

          {/* Auth Links (hidden on mobile, shown inside menu) */}
          <li className="hover:text-[#FF9110] list-none hidden md:block">
            {isLoggedIn ? (
              <Link onClick={handleLogout}>Logout</Link>
            ) : (
              <Link to={"/auth/login"}>Login</Link>
            )}
          </li>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-50 p-4">
          <ul className="flex flex-col gap-4 text-center">
            <li
              onClick={() => {
                navigate("/menu");
                setIsMenuOpen(false);
              }}
              className="hover:text-[#FF9110] cursor-pointer"
            >
              Menu
            </li>
            <li
              onClick={() => {
                navigate("/services");
                setIsMenuOpen(false);
              }}
              className="hover:text-[#FF9110] cursor-pointer"
            >
              Services
            </li>
            <li
              onClick={() => {
                navigate("/about");
                setIsMenuOpen(false);
              }}
              className="hover:text-[#FF9110] cursor-pointer"
            >
              About
            </li>

            <li className="hover:text-[#FF9110]">
              {isLoggedIn ? (
                <Link
                  onClick={(e) => {
                    handleLogout(e);
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </Link>
              ) : (
                <Link to={"/auth/login"} onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}

      {children}

      <Footer />
    </div>
  );
}

export default Layout;