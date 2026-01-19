import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignupPresentation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../Redux/Slices/authSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUpState, setSignUpState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    role: "USER",
    address: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault(); // prevent the form from reloading the page
    console.log(signUpState);

    // Validate required fields
    if (
      !signUpState.email ||
      !signUpState.mobileNumber ||
      !signUpState.password ||
      !signUpState.firstName
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    // Validate firstName (3-15 characters as per backend schema)
    if (signUpState.firstName.length < 3 || signUpState.firstName.length > 15) {
      toast.error("First name must be between 3 and 15 characters long");
      return;
    }

    // Validate lastName if provided (3-15 characters as per backend schema)
    if (
      signUpState.lastName &&
      (signUpState.lastName.length < 3 || signUpState.lastName.length > 15)
    ) {
      toast.error("Last name must be between 3 and 15 characters long");
      return;
    }

    // Validate email with proper regex (matching backend pattern)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(signUpState.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate mobile number (exactly 10 digits as per backend schema)
    if (signUpState.mobileNumber.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits long");
      return;
    }

    // Validate mobile number contains only digits
    if (!/^\d+$/.test(signUpState.mobileNumber)) {
      toast.error("Mobile number must contain only digits");
      return;
    }

    // Validate password (matching backend pattern: 8+ chars, uppercase, lowercase, number/special char)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*(\d|\W)).{8,}$/;
    if (!passwordRegex.test(signUpState.password)) {
      toast.error(
        "Password must have at least 8 characters, one uppercase, one lowercase, and one number or special character"
      );
      return;
    }

    const apiResponse = await dispatch(createAccount(signUpState));
    console.log("api response", apiResponse);
    if (apiResponse.payload.data.success) {
      navigate("/auth/login");
    }
  }

  return (
    <SignUpPresentation
      handleUserInput={handleUserInput}
      handleFormSubmit={handleFormSubmit}
    />
  );
}

export default Signup;
