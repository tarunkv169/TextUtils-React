import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.about_text}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">{props.score}</Link>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
            <input onClick={props.togglemode} className="form-check-input" style={{backgroundColor: props.mode==="light"?'grey':'grey'}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==="light"?'black':'white'}}>Dark_mode</label>
          </div>

          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

      </div>
    </div>
  </nav>
  )
}

// import proptypes is necessary
Navbar.propTypes = {
    title: PropTypes.string.isRequired,        // isrequired is not left undefined
    about_text: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired                   
};

// default props 
Navbar.defaultProps={
    title: "TEXT_UTILS",
    about_text: "About",
    score: 300

}



