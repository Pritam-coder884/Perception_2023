import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showTriangle1, setTriangle1] = useState(false);
  const [showTriangle2, setTriangle2] = useState(false);
  const [showTriangle3, setTriangle3] = useState(false);
  const [showTriangle4, setTriangle4] = useState(false);
  return (
    <>
      {showNav === true ? (
        <div className="nav2">
          <div className="navContent">
           <Link to="/">
           <button
              className="iconBtn"
              onMouseOver={() => setTriangle1(true)}
              onMouseOut={() => setTriangle1(false)}
            >
              <img
                src="../../assets/navicons/home.png"
                alt=""
                className="iconImg"
              />
              <div className="iconText">Home</div>
              {showTriangle1 && (
                <img
                  className="triangle"
                  src="../../assets/navicons/triangle.png"
                  alt=""
                />
              )}
            </button>
           </Link>
            <button
              className="iconBtn"
              onMouseOver={() => setTriangle2(true)}
              onMouseOut={() => setTriangle2(false)}
            >
              <img
                src="../../assets/navicons/event.png"
                alt=""
                className="iconImg"
              />
              <div className="iconText">Events</div>
              {showTriangle2 && (
                <img
                  className="triangle"
                  src="../../assets/navicons/triangle.png"
                  alt=""
                />
              )}
            </button>
            <Link to="/login">
            <button
              className="iconBtn"
              onMouseOver={() => setTriangle3(true)}
              onMouseOut={() => setTriangle3(false)}
            >
              <img
                src="../../assets/navicons/login.png"
                alt=""
                className="iconImg"
              />
              <div className="iconText">Login</div>
              {showTriangle3 && (
                <img
                  className="triangle"
                  src="../../assets/navicons/triangle.png"
                  alt=""
                />
              )}
            </button>
            </Link>
           <Link to="/register">
           <button
              className="iconBtn"
              onMouseOver={() => setTriangle4(true)}
              onMouseOut={() => setTriangle4(false)}
            >
              <img
                src="../../assets/navicons/register.png"
                alt=""
                className="iconImg"
              />
              <div className="iconText">Register</div>
              {showTriangle4 && (
                <img
                  className="triangle"
                  src="../../assets/navicons/triangle.png"
                  alt=""
                />
              )}
            </button>
           </Link>
          </div>
          <div className="exitBtn">
            <img
              src="../../assets/navicons/navexit.png"
              alt=""
              className="exitImg"
              onClick={() => setShowNav(false)}
            />
          </div>
        </div>
      ) : (
        <div className="nav">
          <div>
            <img
              src="../../assets/navicons/Homelogo.png"
              className="logo"
              alt=""
            />
          </div>
          <button className="navBtn" onClick={() => setShowNav(true)}>
            <img
              src="../../assets/navicons/navbutton.png"
              alt=""
              className="navButton"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
