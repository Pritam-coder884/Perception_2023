import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className="top">
        <div className='l1'><div className='line1'></div></div>
        <strong className='heading'>ABOUT US</strong>
        <div className='l2'><div className='line2'></div></div>
      </div>
      <div className="row">
        <div className="content">
          <div>
            <p className='para'>
              The Annual Techno-Literary-Management Fest of College of Engineering and Technology, Bhubaneswar sees a footfall of more than 4,000 students from across the state to participate in brainstorming and inquisitive events spanning over 3 days, capping it off with a Star-Night. This Year as CET students shined in various hackathons and fests across the nation, we decided to bring all those people to our den and compete at a higher level Perception 2020 dates:
            </p>
            <strong className='date'>14<span className='th'>th</span> 15<span className='th'>th</span> 16<span className='th'>th</span> of February 2020.</strong>
          </div>
        </div>
        <div className="glitch">
          <img src="/glitch.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
