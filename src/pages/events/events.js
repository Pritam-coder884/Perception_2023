import React from 'react'
import { ReactDOM } from 'react'
import './index.css'
import Data from './Data'

/*function  nCard(val) {
  return(
    <Card
    img={val.img}
    title={val.title}
    />
  )
}*/

function App() {
  return(
    <div>
    <div className='headin_header'>
    <h1 className='heading_style'>EVENTS</h1>
    </div>
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
         );
        })}
    </div>
</div>
  )
}

export default App;