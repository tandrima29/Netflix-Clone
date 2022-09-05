import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../containers/contact/Contact";
import Dashboard from "../containers/dashboard/Dashboard";
import LoginSignup from "../containers/login-signup/LoginSignup";
import About from "../containers/about/About";
import "./global.css";
import { LoginContext } from "../context/LoginContext";
import Profile from "../containers/profile/Profile";

function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

function NotLoggedInRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="contact" element={<Contact />} />
      <Route path="contact" element={<About />} />
    </Routes>
  );
}

export default function AppEntry() {
  const [isUserLoggedIn, updateLoggedInStatus] = useState(false);
  const [userDetails, updateUserDetailsAfterLogin] = useState(null);
  return (
    <div className="app">
      <LoginContext.Provider
        value={{
          isUserLoggedIn,
          updateLoggedInStatus,
          userDetails,
          updateUserDetailsAfterLogin,
        }}
      >
        {isUserLoggedIn ? <LoggedInRoutes /> : <NotLoggedInRoutes />}
      </LoginContext.Provider>
    </div>
  );
}
