import "./styles.css";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import Bgvideo from "../../layout/images/stock-footage-new-york-united-states-dec-glowing-netflix-neon-animated-icon-line-social-media-k.webm";
import clip from "../../layout/images/Boat_13.mp4";

export default function Hero() {
  return (
    <div className="container-fluid hoverzindexclass">
      {/* <video src={clip} playsInline autoPlay loop muted /> */}
      <video autoPlay loop className="heroClass video">
        <source src={Bgvideo} />
      </video>

      <div className="row heroClass mx-0">
        <div className="col-md-3 col-sm-12 d-flex px-5 justify-content-center herosubclass flex-column">
          <div>
            <h1>THE CHESTNUT MAN RETURNS</h1>
            <p className="desc my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <span className="buttonsection fontsizeclass">
            <button className="btn btn-light rounded btn-sm me-2">
              <FaPlay />
              <span> Play </span>
            </button>
            <button className="btn btn-secondary rounded btn-sm">
              <BiInfoCircle />
              <span> More info</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
