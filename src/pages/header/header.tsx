// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';



const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="logo.png" alt="Logo" className="logo" />
                </div>
                <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#locations">Locations</a></li>
                    <li><a href="#gift-cards">Gift Cards/Rewards</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#merch">Merch</a></li>
                    <li><a href="#franchise">Franchise</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#racing">Quiz Gaming</a></li>
                    <li><a href="#programs">School Programs</a></li>
                </ul>
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    ☰
                </div>
            </nav>
            <div className="banner">
                <div className="overlay">
                    <h1>Herbal Freshness, Custard-Filled Happiness</h1>
                    <br />
                    <button className="order-button">ORDER ONLINE</button>
                </div>
            </div>
        </>
    );
};

export default Header;
