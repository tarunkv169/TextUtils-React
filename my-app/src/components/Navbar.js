import React from 'react'

import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.about_text}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.score}</a>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
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
    about_text: "ABOUT",
    score: 300

}



