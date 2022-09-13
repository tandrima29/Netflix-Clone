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
      className="movie-card"
    >
      <div className="card">
        <img src={props.bgImg} className="card-img-top" alt="CardImage" />
        <div className="card-body bodyShow text-dark">
          <b>Lorem ipsum dolor</b>
          <p className="small text-dark" style={{fontSize: 11}}>
          Sed ut perspiciatis unde omnis iste natus oloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ...
          </p>
          <div className="row">
            <div className="col-12 text-center ">
              <div className="d-flex">
                <button className="btn btn-sm">
                  <AiFillPlayCircle size={"28px"}/>
                </button>
                <button className="btn btn-sm">
                  <AiFillPlusCircle size={"28px"} />
                </button>
                <button className="btn btn-sm">
                  <AiFillLike size={"28px"}  />
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
