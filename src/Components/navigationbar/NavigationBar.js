import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaUsersSlash } from 'react-icons/fa'; 
import './NavigationBar.css';
import "bootstrap/js/src/collapse.js";

function NavigationBar() {
  
  const activeLink={
    color:"#EEF0F1",
    fontSize:"1.2rem",
    fontWeight:"bold"
  }
  
  const inactiveLink={
    color:"#EEF0F2",
    fontSize:"1.2rem"
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/WLM_logo-2.svg" height="45px" width="45px" alt="" />
            
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/users"
                  style={({isActive})=>{
                    return isActive? activeLink: inactiveLink;
                  }}
                  ><FaUsers className='users-icon'/>Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/remove-user"
                  style={({isActive})=>{
                    return isActive? activeLink: inactiveLink;
                  }}
                  ><FaUsersSlash className='removed-users-icon'/>Remove users</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar;


