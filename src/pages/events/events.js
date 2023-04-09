import React from 'react'
import Card from '../../components/card'
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

function Events() {
  return(
    <div>
    <div className='headin_header'>
    <h1 className='heading_style'>EVENTS</h1>
    </div>
  <Card/>
  </div>
  )
}

export default App;