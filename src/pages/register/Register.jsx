import React from 'react'
import "../../styles/auth.style.scss";
import authImage from "../../Assets/images/bg-auth.png";

const Register = () => {
  return (
    <div className='auth-card-wrapper'>
        <div className='auth-card'>
            <div className="auth-card-image">
                <img src={authImage} alt="" />
            </div>
            <div className="auth-card-form">
                <h2>Registration Info</h2>
                <form>
                    <div className="input-group">
                        <input className="input--style-3" type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="input-group">
                        <input className="input--style-3" type="text" placeholder="Name" name="name" required />
                    </div>
                    <div className="input-group">
                        <select name="gender" className='rs-select'>
                            <option disabled="disabled" selected="selected">Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <input className="input--style-3" type="text" placeholder="Password" name="password" required />
                    </div>
                    <div className="input-group">
                        <input className="input--style-3" type="text" placeholder="Confirm Password" name="confirm_password" required />
                    </div>
                    <div className="input-group">
                        <input className="input--style-3" type="number" placeholder="Phone" name="phone" required />
                    </div>
                    <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="College" name="college" required />
                    </div>
                    <button className='auth-btn'>SUBMIT</button>
                </form>
                <a>Already Registered?</a>
            </div>
        </div>
    </div>
  )
}

export default Register