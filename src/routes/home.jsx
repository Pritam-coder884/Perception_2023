import React from "react"

import Footer from "../components/footer"
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Aboutus from "../components/AboutUs";
const Home=()=>{
    return(
        <>
        {/* <Login /> */}
            {/* <Register/> */}
            <Aboutus/>
            <Footer/>
        </>
    )
}

export default Home