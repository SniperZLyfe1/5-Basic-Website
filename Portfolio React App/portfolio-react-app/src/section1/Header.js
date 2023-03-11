import logo from "../images/logo2.png";
import React, { useEffect } from 'react'
import { useState } from "react";

const Header = () => {
  const [isActive,setActive] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('rgb(41, 41, 41)')
  const [color, setColor] = useState('white')

  function activeHandle(){
    setActive(!isActive)
    backgroundColor === 'rgb(41, 41, 41)' ? setBackgroundColor('white') : setBackgroundColor('rgb(41, 41, 41)')
    color === 'white' ? setColor('rgb(56, 117, 182)') : setColor('white')
  }

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;
  },[backgroundColor])

  return (
    <>
      <nav className="navbar sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-text-top"
            />
          </a>
          <i 
            onClick={activeHandle} 
            className={isActive ? 'fa fa-toggle-on' : 'fa fa-toggle-off'}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Header;
