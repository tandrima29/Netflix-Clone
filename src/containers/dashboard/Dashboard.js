import { Routes, Route } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Body from "../../layout/Body";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}
