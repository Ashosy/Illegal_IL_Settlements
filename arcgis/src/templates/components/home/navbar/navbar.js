import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Button from "../ButtonFold/Button";
import "./navbar.css";
import "../ButtonFold/Button.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [clickHome, setClickChrono] = useState(false);
  const [clickMap, setClickMap] = useState(false);
  const [clickPeople, setClickPeople] = useState(false);
  const chronoClick = () => {
    setClickChrono(true);
  };
  const MapClick = () => {
    setClickMap(true);
  };
  const PeopleClick = () => {
    setClickPeople(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className="contain">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              CANAAN <i class="fas fa-route"></i>
            </Link>
            <ul className="nav-menu active" id="nav">
              <BiMenu className="icon-menu" />
              <li className="nav-item" onClick={chronoClick}>
                <Link to="/chronology" className="nav-links">
                  Chronology
                </Link>
              </li>
              <li className="nav-item" onClick={MapClick}>
                <Link to="/map" className="nav-links">
                  Map
                </Link>
              </li>
              <li className="nav-item" onClick={PeopleClick}>
                <Link to="/people" className="nav-links">
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/quiz" className="nav-links">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <hr
          width="100%"
          style={{
            marginTop: "40px",
            borderTop: "0.1px solid white",
            borderBottom: "none",
          }}
        /> */}
        {/* <hr className="nav-item-hr" style={navItemHr} width="5%" /> */}
        {/* {clickMap && <hr className="nav-item-hr" style={navItemHrMap} width="5%" />}
        {clickPeople && <hr className="nav-item-hr" style={navItemHrPeople} width="5%" />} */}
      </nav>
    </>
  );
};

const navItemHr = {
  borderTop: "2px solid black",
  marginRight: "500px",
  borderBottom: "none",
  marginTop: "-9px",
};

// const navItemHrMap = {
//   transition: "ease 0.4s",
//   borderTop: "2px solid black",
//   marginRight: "370px",
//   borderBottom: "none",
//   marginTop: "-10px",
// };
// const navItemHrPeople = {
//   transition: "ease 0.4s",
//   borderTop: "2px solid black",
//   marginRight: "235px",
//   borderBottom: "none",
//   marginTop: "-10px",
// };

export default Navbar;
