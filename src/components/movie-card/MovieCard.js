import { FaCentercode } from "react-icons/fa";
import Button from "../button/Button";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./moviecard.css";

export default function MovieCard(props) {
  return (
    <div
      classNameName="movie-card"
      style={
        {
          // minHeight: 180,
          // backgroundImage: `url(${props.bgImg})`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // backgroundSize: "100% 100%",
        }
      }
    >
      <div className="card">
        <img src={props.bgImg} className="card-img-top" alt="CardImage" />
        <div className="card-body bodyShow">
          <h5 className="card-title">{props.isTopTen && <span>N</span>}</h5>
          <div className="row">
            <div className="col-md-6 ">
              <div className="d-flex">
                <button className="btn btn-sm">
                  <AiFillPlayCircle />
                </button>
                <button className="btn btn-sm">
                  <AiFillPlusCircle />
                </button>
                <button className="btn btn-sm">
                  <AiFillLike />
                </button>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-end">
                <button className="btn btn-sm">
                  <IoIosArrowDropdownCircle />
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>Rousing . Military</p>
          </div>
        </div>
      </div>
    </div>
  );
}
