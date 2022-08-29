import axios from "axios";
import { useState } from "react";
import "./loginpage.css";
export default function LoginSignup() {
  const [userDetails, updateUserDetails] = useState({
    name: "",
    password: "",
  })
  function handleChange(e, fieldName) {
    const value = e.target.value;
    updateUserDetails((prevState) => {
      return {
        ...prevState,
        [fieldName]: value
      }
    })
  }
  function handleLogin() {
    axios.get("api url").then((response) => {

    }).catch((err) => {
      
    })
  }

  return (
    <div className=" container-fluid login-body">
      <div className="login">
        <h1>Sign In</h1>
        <form className="form-margin">
          <div className="form-floating form-margin bg-secondary">
            <input
              type="Email"
              className="form-control "
              id="floatingEmail"
              placeholder="email"
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
              onChange={(e) => handleChange(e, "password")}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            type="submit"
            className="btn bg-danger w-100 form-margin text-white p-2"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <div className="row my-2 text-white">
            <div className="col-6 text-start">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="mx-1">Remember me</span>
            </div>
            <div className="col-6 text-end">
              <span className="forgotpassword clickable">Need Help?</span>
            </div>
          </div>

          <div className="text-white mt-5">
            New to Netflix? <span>Sign up now!</span>
          </div>

          <div className="text-white mt-2 font13">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
          </div>
        </form>
      </div>
    </div>
  );
}
