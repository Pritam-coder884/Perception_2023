import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.style.scss";
import authImage from "../../Assets/images/bg-auth.png";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Register = () => {
  const nav = useNavigate();
  const [userRegister, setUserRegister] = useState({
    email: "",
    name: "",
    gender: "",
    password: "",
    confirm_password: "",
    phone: "",
    college: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const toggleConfirmedPassword = (e) => {
    e.preventDefault();
    setShowConfirmedPassword(!showConfirmedPassword);
  };
  const handleRegisterChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (userRegister.password !== userRegister.confirm_password) {
      toast.error("Password doesn't match");
      return;
    }
    //!userRegister.phone.match('[0-9]{10}') &&
    if (userRegister.phone.length !== 10) {
      toast.error("Please put 10 digit mobile number");
      return;
    }

    console.log(userRegister);
    nav("/login");
  };

  const genders = [
    {
      name: "Male",
      value: "male",
    },
    {
      name: "Female",
      value: "female",
    },
    {
      name: "Other",
      value: "other",
    },
  ];
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
          <div className="auth-card-image">
            <img src={authImage} alt="" />
          </div>
          <div className="auth-card-form">
            <h2>Registration Info</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userRegister.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={userRegister.name}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="input-group">
                <select
                  className="rs-select"
                  onChange={handleRegisterChange}
                  name="gender"
                  value={userRegister.gender.selectOption}
                >
                  <option disabled selected="selected">
                    Gender
                  </option>
                  {genders.map((gender) => (
                    <option value={gender.value}>{gender.name}</option>
                  ))}
                </select>
              </div>
              <div
                className="input-group"
                style={{ display: "flex", justifyContent: "space-between" , cursor:"pointer" }}
              >
                <input
                  className="input--style-3"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={userRegister.password}
                  onChange={handleRegisterChange}
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
              <div
                className="input-group"
                style={{ display: "flex", justifyContent: "space-between",cursor:"pointer" }}
              >
                <input
                  className="input--style-3"
                  type={showConfirmedPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirm_password"
                  value={userRegister.confirm_password}
                  onChange={handleRegisterChange}
                  required
                />
                <div onClick={toggleConfirmedPassword} className="show-hide">
                  {" "}
                  {showConfirmedPassword ? (
                    <MdOutlineVisibilityOff />
                  ) : (
                    <MdOutlineVisibility />
                  )}
                </div>
              </div>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  value={userRegister.phone}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="text"
                  placeholder="College"
                  name="college"
                  value={userRegister.college}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
              <button className="auth-btn">SUBMIT</button>
            </form>
            <br />
            <Link to="/login">Already Registered?</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
