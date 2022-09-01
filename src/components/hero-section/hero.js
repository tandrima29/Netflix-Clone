import "./styles.css";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import Button from "../button/Button";

export default function Hero() {
  return (
    <div className="container-fluid">
      <div className="row heroClass mx-0">
        <div className="col-md-3 col-sm-12 d-flex px-5 justify-content-center herosubclass flex-column">
          <div>
            <h1>
              THE CHESTNUT MAN RETURNS
            </h1>
            <p className="desc my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
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
