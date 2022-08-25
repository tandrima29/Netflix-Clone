import { FaCentercode } from "react-icons/fa";
import "./moviecard.css";

export default function MovieCard(props) {
  return (
    <div
      style={{
        minHeight: 180,
        backgroundImage: `url(${props.bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      {props.isTopTen && <span>N</span>}
    </div>
  );
}
