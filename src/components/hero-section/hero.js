import "./styles.css";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import Button from "../button/Button";

export default function Hero() {
  return (
    <div>
      <div className="row heroClass">
        <div className="col-md-3 col-sm-12 d-flex herosubclass flex-column text-center">
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            T H E <br /> C H E S T N U T
            <br /> M A N
          </div>
          <span className="buttonsection fontsizeclass">
            <button className="butonstyle">
              <FaPlay />
              <span> Play </span>
            </button>
            <button className="butonstyle buttoncolor">
              <BiInfoCircle />
              <span> More info</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
