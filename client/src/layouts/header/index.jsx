import React from 'react'
import "./index.scss"
import logo from "../../img/logo.webp"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id='Header'>
        <div className="container">
            <div className="header">
                <div className="logo">
                <img src={logo} alt="" />
                <h1>COURSE</h1>
                </div>

                <ul className='navBar'>
                    <li> <NavLink to={"/"}> HOME </NavLink></li>
                    <li> <NavLink> ABOUT US  </NavLink></li>
                    <li> <NavLink> COURSES </NavLink></li>
                    <li> <NavLink> ELEMENTS </NavLink></li>
                    <li> <NavLink> NEWS </NavLink></li>
                    <li> <NavLink> CONTACT </NavLink></li>
                    <li> <NavLink to={"/addCourse"}> ADD COURSE </NavLink></li>
                </ul>

                <div className="call">
                <i className="fa-solid fa-phone-volume"></i>
                <p>+43 4566 7788 2457</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header