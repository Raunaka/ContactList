import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">Contact List App</Link>
            </div>
        </nav>
    );
}

export default Navbar;
