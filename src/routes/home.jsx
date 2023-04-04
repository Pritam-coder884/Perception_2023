import React from "react"
import {Routes,Route} from "react-router-dom";

import Footer from "../components/footer"
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import LandingPage from "../pages/homepage";
const Home=()=>{
    return(
        <>
        {/* <Login /> */}
            {/* <Register/> */}
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default Home