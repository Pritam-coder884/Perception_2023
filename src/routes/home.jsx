import React from "react"
import Navbar from '../components/navbar/Navbar'
import Footer from "../components/footer"
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

const Home=()=>{
    return(
        <>
        <Navbar />
        <Login />
            {/* <Register/> */}
            <Footer/>
        </>
    )
}

export default Home