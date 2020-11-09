import React from 'react'
import './style.css'

function Header() {
    return (
    <div className="container">
        <div className="navbar navbar-expand">
        <div className="row">
            <ul className="navbar-nav col-sm-8">
                <li className="nav-item active">
                    <a href="" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Contact Us</a>
                </li>
            </ul>
            <div className="col-3 offset-4 offset-sm-1 side-icons">
                Side Icons
            </div>
        </div>
        </div>            
    </div>)
}

export default Header
