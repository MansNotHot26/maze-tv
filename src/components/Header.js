import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import './Headers.css'

function Header() {
    return (
        <div className="header">
            <div className="header-title">
                 Welcome to Maze TV
            </div>
            <div  className="header-home-link"><Link to="/"> Home </Link></div>

            <div  className="header-favourites-link"><Link to="/favourite"> My Favourites </Link></div>
        </div>
    )
}

export default Header
