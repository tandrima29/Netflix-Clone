import axios from "axios";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from 'react-router-dom';

import "./loginpage.css";

export default function LoginSignup() {
  const {updateLoggedInStatus, updateUserDetailsAfterLogin} = useContext(LoginContext);
  const navigate = useNavigate()
  const [isLoading, updateLoading] = useState(false);
  const [userDetails, updateUserDetails] = useState({
    name: "",
    password: "",
  });
  function handleChange(e, fieldName) {
    const value = e.target.value;
    updateUserDetails((prevState) => {
      return {
        ...prevState,
        [fieldName]: value,
      };
    });
  }
  function handleLogin(e) {
    e.preventDefault()
    updateLoading(true)
    axios
      .get(" https://630722593a2114bac75a5755.mockapi.io/netflix-clone/login")
      .then((response) => {
        updateLoggedInStatus(true)
        updateLoading(false)
        updateUserDetailsAfterLogin(response.data)
        navigate("/profile")
      })
      .catch((err) => {
        updateLoading(false)
        alert("Login Failed")
      });
  }

  return (
    <div className=" container-fluid login-body">
      <div className="login">
        <h1>Sign In</h1>
        <form className="form-margin color1">
          <div className="form-floating form-margin ">
            <input
              type="Email"
              className="form-control"
              id="floatingEmail"
              placeholder="email"
              value={userDetails.name}
              onChange={(e) => handleChange(e, "name")}
            />
            <label htmlFor="floatingPassword">Email or phone number</label>
          </div>

          <div className="form-floating form-margin bg-dark">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={userDetails.password}
              onChange={(e) => handleChange(e, "password")}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            type="submit"
            className="btn bg-danger w-100 form-margin text-white p-2"
            onClick={handleLogin}
          >
            {isLoading ? "Please wait..." : "Sign In"}
          </button>
          <div className="row my-2 text-white">
            <div className="col-6 text-start">
              <input type="checkbox" />
              <span className="checkmark "></span>
              <span className="mx-1 color1">Remember me</span>
            </div>
            <div className="col-6 text-end">
              <span className="forgotpassword clickable color1">
                Need Help?
              </span>
            </div>
          </div>

          <div className="text-white mt-5">
            <span className="color1">New to Netflix? </span>
            <b>Sign up now!</b>
          </div>

          <div className="color1 mt-2 font13">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="#">Learn more.</a>
          </div>
        </form>
      </div>
    </div>
  );
}