import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div class="col-3">
                    <div class="site-logo">
                        <a href="index.html" class="" style={{fontSize:"2rem", fontWeight:"700"}}>Multishop</a>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="col-9">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbar-nav ml-auto">
                            <li className="nav-item px-3"><NavLink className="nav-link" to="home">Home</NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link" to="shop">Shop</NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link" to="contact">Contact</NavLink></li>
                            <li className="nav-item px-3"><NavLink className="nav-link" to="about">About</NavLink></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )

}
export default Navbar