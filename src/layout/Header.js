import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { HiSearch } from "react-icons/hi";
import { BiCheckbox } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import NetflixLogo from "./images/NetflixLogo.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function Header() {
  const [recentWatch, updateRecentWatch] = useState([]);
  useEffect(() => {
    axios
      .get("https://630722593a2114bac75a5755.mockapi.io/netflix-clone/login")
      .then((response) => {
        const result = response.data;
        console.log(result);
        updateRecentWatch(result);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container className="nav">
          <Navbar.Brand href="#home">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={NetflixLogo}
                width="90"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#features">TVShows</Nav.Link>
              <Nav.Link href="#features">Movies</Nav.Link>
              <Nav.Link href="#features">New & Popular</Nav.Link>
              <Nav.Link href="#features">My list</Nav.Link>
              <Nav.Link href="#features">Browse by Languages</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <HiSearch />
              </Nav.Link>
              <Nav.Link href="#deets">
                <BsFillBellFill />
              </Nav.Link>

              <NavDropdown
                title={<img src={recentWatch.Avatar} className="avatarclass" />}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
