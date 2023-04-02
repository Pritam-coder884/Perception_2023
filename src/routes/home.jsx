import React from "react"

import Footer from "../components/footer"
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

const Home=()=>{
    return(
        <>
        <Login />
            {/* <Register/> */}
            <Footer/>
        </>
    )
}

export default Home