import React, { useState } from 'react';
import {Link } from "react-router-dom";
function Navbar() {
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Player Of Code</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>  
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>setDropdown(!dropdown)}>
                Links
              </a>
              <ul className={`dropdown-menu ${dropdown ? "show" : ""}`} aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" to="#">Hostinger</a></li>
                <li><a className="dropdown-item" to="#">Text Local</a></li>
                <li><a className="dropdown-item" to="#">Razorpay</a></li>
              </ul>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>  
              </li>
             
            </ul>

          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar
