import React from "react"
import './events.css'
import Data from './Data'

function card() {
    return(
<div className='container'>
        {Data.map((item)=>{
         return(
        <div className='card'>
        <div className='card-img'>
        <img src={item.img} alt="pic" />
        </div>
         <div className='title'>
         <h2>{item.title}</h2>
        </div>
        </div>
         )
         })
        }
      </div>
         )}
        export default card;