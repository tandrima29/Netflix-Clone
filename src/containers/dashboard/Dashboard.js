import { Routes, Route } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Home from "../home/Home";
import Profile from "../profile/Profile";

export default function Dashboard() {
    return (
        <div>
            <Header/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Profile />} />             
            </Routes>
            
            <Footer/>
        </div>
    )
}