import React from 'react';
import PropTypes from 'prop-types';
import { Link
 } from 'react-router-dom';

export default function Navbar(props) {
  
  return(
  <div>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link mx-2" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-2" to="/about">{props.aboutText}</Link>
        </li>
       
      </ul>
     
      <div className={`form-check form-switch text-${(props.mode==="light")?"dark":"light"}`}>
  <input className="form-check-input"  onClick={props.toggle}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
  </div>
</nav>

 </div>
  ) ;
}
Navbar.propTypes ={
    title : PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps ={
    title :"default title",
    aboutText: "About"
}