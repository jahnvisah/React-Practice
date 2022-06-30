import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">ZIPPY</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to ='/'>Home</Link>
          </li>
          <li className="nav-item">
          <Link to ='/Project'>Project</Link>
          </li>
          <li className="nav-item">
          <Link to ='/Pricing'>Pricing</Link>
          </li>
          <li className="nav-item">
          <Link to ='/Team'>Team</Link>
          </li>
          <li className="nav-item">
            <Link to ='/Contact'>Contact</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

    </div>
  )
}
