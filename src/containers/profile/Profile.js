import "./styles.css";
import secondImage from "./icon2.png";
import { FaPlusCircle } from "react-icons/fa";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";

export default function Profile() {
  const {userDetails} = useContext(LoginContext);
  return (
    <div className="vh-100 v1-100 d-flex justify-content-center align-items-center flex-column">
      <h1>Who's Watching?</h1>
      <div className="mt-3 avatar-container">
        <Link to="/" style={{textDecoration: "none"}}>
          <div className="mx-3 clickable d-flex flex-column text-center">
            <img src={userDetails.Avatar} className="rounded-avatar"/>
            <h4 className="mt-3 color1">{userDetails.name}</h4>
          </div>
        </Link>
        <div className="mx-3 clickable d-flex flex-column text-center">
          <img src={secondImage} className="rounded-avatar"/>
          <h4 className="mt-3 color1">Paul</h4>
        </div>
        <div className="mx-3 clickable d-flex justify-content-center align-items-center mb-5">
          <FaPlusCircle size={"4rem"}/>
        </div>
      </div>
    </div>
  )
}
