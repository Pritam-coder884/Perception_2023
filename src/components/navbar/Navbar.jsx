import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../Assets/images/Homelogo.png';
import './navbar.css'

const Menu =()=> (
  <>
  <p><a href="/">Home</a></p>
          <p><a href="/events">Events</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Menu  />
        <a href='/login'>
          <button type="button">Login</button>
        </a>
        <a href="/register">
        <button type="button">Register</button>
        </a>
        {/* <a href='/profile'>
          <button type="button">Profile</button>
        </a>
        <a href="/logout">
        <button type="button">Logout</button>
        </a> */}
     </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu &&(
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_conatiner-links">
                <div className="gpt3__navbar-menu_container-links-sign">
                <Menu/>
                <a href='/login'>
          <button type="button">Login</button>
        </a>
        <a href="/register">
        <button type="button">Register</button>
        </a>
        {/* <a href='/profile'>
          <button type="button">Profile</button>
        </a>
        <a href="/logout">
        <button type="button">Logout</button>
        </a> */}

     </div>
            </div>

          </div>
        )}
      
      </div>
    </div>
  );
};

export default Navbar;