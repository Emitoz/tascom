import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <a className="navbar-brand" href="home">TazCommerce</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <a className="nav-link" href="all-meals">All meals</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" style={{textDecoration: 'none'}}>
                                <a className="nav-link" href="cart">Cart
                                    <span class="badge badge-pill badge-warning ml-2">0</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}