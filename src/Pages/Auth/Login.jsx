import { Link, useNavigate } from "react-router-dom";
import LoginPresentation from "./LoginPresentation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../Redux/Slices/authSlice";
import toast from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault(); // prevent the form from reloading the page
    console.log(loginData);

    // Validate required fields
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all required fields");
      return;
    }

    // Validate email with proper regex (matching backend pattern)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(loginData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate password (matching backend pattern: 8+ chars, uppercase, lowercase, number/special char)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*(\d|\W)).{8,}$/;
    if (!passwordRegex.test(loginData.password)) {
      toast.error(
        "Password must have at least 8 characters, one uppercase, one lowercase, and one number or special character"
      );
      return;
    }

    const apiReponse = await dispatch(login(loginData));
    console.log("Api response", apiReponse);
    if (apiReponse.payload.data.success) {
      navigate("/");
    }
  }

  return (
    <LoginPresentation
      handleFormSubmit={handleFormSubmit}
      handleUserInput={handleUserInput}
    />
  );
}

export default Login;
