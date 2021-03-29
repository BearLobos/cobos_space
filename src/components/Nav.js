import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/Logo.png"

function Nav() {
    const navStyle = {
        color: 'white'
    }
    
    return (
        <nav>
            <Link to="/" style={navStyle}>
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <ul className="nav-links">
                <Link to="/" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/meme-generator" style={navStyle}>
                    <li>MemeGenerator</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav