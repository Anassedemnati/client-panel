import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar =(props) => {
    const { title } = props;
    return (

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">{title}</a>
        
        
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact/add">Add contact </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">About </Link>
            </li>
            
          </ul>
          
        
      </nav>
        
     
    )
}
Navbar.defaultProps ={
  title: "default titel"
}
Navbar.propTypes ={
  title: PropTypes.string.isRequired
} 

export default Navbar;