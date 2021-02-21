import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (e) =>{
    e.preventDefault();
    auth.logout();
    history.push('/');
  }

  return (
  <nav>
    <div className="nav-wrapper green lighten-1">
      <NavLink to="/" className="brand-logo">Logo Links App</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/create">Create Link</NavLink></li>
        <li><NavLink to="/links">Your Links</NavLink></li>
        <li><a href="/" onClick={logoutHandler}>Logout</a></li>
      </ul>
    </div>
  </nav>
 
  )
}
