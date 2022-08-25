import "./styles.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-5 mt-5">
      <div className="container">
        <div className="row mt-3">
          <div className="col-12">
            <FaFacebookF className="footer-icon" size={"20px"} />
            <FaInstagram className="footer-icon" size={"20px"} />
            <FaTwitter className="footer-icon" size={"20px"} />
            <FaLinkedinIn className="footer-icon" size={"20px"} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3  col-sm-6 mb-4">
            <p>
              <span className="cursor">Audio Description</span>
            </p>
            <p>
              <span className=" cursor">Investor Relations</span>
            </p>
            <p>
              <span className=" cursor">Legal Notices</span>
            </p>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <p>
              <span
                className="
                cursor"
              >
                Help Centre
              </span>
            </p>
            <p>
              <span className="cursor">Jobs</span>
            </p>
            <p>
              <span className=" cursor">Cookie Preferences</span>
            </p>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <p>
              <span className="cursor">Gift Cards</span>
            </p>
            <p>
              <span className="cursor">Terms of Use</span>
            </p>
            <p>
              <span className=" cursor">Corporate Information</span>
            </p>
          </div>

          <div className="col-md-3 col-sm-6  mb-4 ">
            <p>
              <span className=" cursor">Media Centre</span>
            </p>
            <p>
              <span className=" cursor">Privacy</span>
            </p>
            <p>
              <span className="cursor">Contact Us</span>
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div classNameName="col-12">© 1997-2022 Netflix, Inc.</div>
        </div>
      </div>
    </footer>
  );
}
