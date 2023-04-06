import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Home from './routes/home'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
    </>
  )
}

export default App;