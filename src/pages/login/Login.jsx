import React from 'react'
import {Link} from "react-router-dom";
import authImage from "../../Assets/images/bg-auth.png"

const Login = () => {
  return (
    <div className='auth-card-wrapper'>
       <Link to="/"> <button><h1>Goto Home</h1></button></Link>
        <div className='auth-card'>
            <div className="auth-card-image">
                <img src={authImage} alt="" />
            </div>
            <div className="auth-card-form">
                <h2>Login Info</h2>
                <form>
                    <div className="input-group">
                        <input className="input--style-3" type="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="input-group">
                        <input className="input--style-3" type="text" placeholder="Password" name="password" required />
                    </div>
                    <button className='auth-btn'>SUBMIT</button>
                </form>
                <a>Not Registered?</a>
            </div>
        </div>
    </div>
  )
}

export default Login