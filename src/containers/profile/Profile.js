import "./styles.css";
import firstImage from "./icon1.png";
import secondImage from "./icon2.png";
import thirdImage from "./icon3.webp";
export default function Profile() {
  return (
    <div className="container-fluid ">
      <h1 className="text-center">Who's Watching?</h1>
      <div className="choose-profile d-flex justify-content-center ">
        <span className=" avatar  ">
          <img src={firstImage} alt="icon"></img>
        </span>

        <div className="avatar2 ">
          <img src={secondImage} alt="icon"></img>
        </div>

        <div className="avatar3">
          <img src="" alt="icon"></img>
        </div>
      </div>
      <span className="profile-button color1 font1">Manage Profiles</span>
    </div>
  );
}
