import React from 'react'
import "./Homepage.css";
import Navbar from '../../../components/navbar/Navbar';
const Homepage = () => {
  return (
    <div className='bg'>
        <Navbar/>
        <div className="htext">
            <div className='text'>PERCEPTION</div>
            <div className="timer">
            <div className='ctimer'>
              0
            <div className='timerText'>days</div>
            </div>
            <div className='ctimer'>
              0
            <div className='timerText'>hours</div>
            </div>
            <div className='ctimer'>
              0
            <div className='timerText'>minutes</div>
            </div>
            <div className='ctimer'>
              0
            <div className='timerText'>seconds</div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Homepage