import React,{useState} from "react";
import { Link } from "react-router-dom";
import authImage from "../../Assets/images/bg-auth.png";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword]=useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Link to="/">
        {" "}
        <button>
          <h1>Goto Home</h1>
        </button>
      </Link>
      <div className="auth-card-wrapper">
        <div className="auth-card">
          <div className="auth-card-image" style={{marginTop:"-100px"}}>
            <img src={authImage} alt="" />
          </div>
          <div className="auth-card-form">
            <h2>Login Info</h2>
            <form>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div
                className="input-group"
                style={{ display: "flex", justifyContent: "space-between" ,cursor:"pointer"}}
              >
                <input
                  className="input--style-3"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required
                />
                <div onClick={togglePassword} className="show-hide">
                  {" "}
                  {showPassword ? (
                    <MdOutlineVisibilityOff />
                  ) : (
                    <MdOutlineVisibility />
                  )}
                </div>
              </div>
              <button className="auth-btn">SUBMIT</button>
            </form>
            <br />
            <Link to="/register">Not Registered?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
