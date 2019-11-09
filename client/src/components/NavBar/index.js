import React from 'react'
import './style.css'

const NavBar = () => {
    return (
        <div className="nav-wrapper">

            <div className="link-wrapper">
                <h3><a href="/">Search Books</a></h3>
            </div>

            <div className="link-wrapper">
                <h3><a href="/saved">Saved Books</a></h3>
            </div>

        </div>
    )
}

export default NavBar