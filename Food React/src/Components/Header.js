import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className='l-header' id="header">
                <nav className="nav bd-container">
                    <Link to="/" className="nav__logo">Tasty</Link>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            {/*  <li className="nav__item"><Link to="/home" className="nav__link active-link">Home</Link></li> */}
                            <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                            <li className="nav__item"><Link to="/services" className="nav__link">Services</Link></li>
                            <li className="nav__item"><Link to="/menu" className="nav__link">Menu</Link></li>
                            <li className="nav__item"><Link to="/contact" className="nav__link">Contact us</Link></li>


                        </ul>
                    </div>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className='bx bx-menu'></i>
                    </div>
                </nav>
            </header>

            <main className="l-main"></main>

        </>
    )
}
