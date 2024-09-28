import React, { useState } from 'react';
import '../../styles/Navbar.css'
import { Link,useLocation } from 'react-router-dom';
import log from '../../assets/logo/doglo.jpg';



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); 
    };

    return (
        <>
            <nav className='Navbar'>
                <div className='Nav-logo'>
                    <Link to="/"><img src={log} className='log rounded-circle ' alt="Logo"></img></Link>
                    <Link to="/"><h2>Dogs Den</h2></Link>
                </div>
                <ul className={`Nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Adoption" className={location.pathname === '/Adoption' ? 'active' : ''} onClick={handleLinkClick}>Adoption</Link>
                    </li>
                    <li>
                        <Link to="/Sell" className={location.pathname === '/Sell' ? 'active' : ''} onClick={handleLinkClick}>Sell</Link>
                    </li>
                    <li>
                        <Link to="/About" className={location.pathname === '/About' ? 'active' : ''} onClick={handleLinkClick}>About</Link>
                    </li>
                </ul>
                <div className='HamMenu' id='Menu' onClick={toggle}>
                    <span className='Hambar'></span>
                    <span className='Hambar'></span>
                    <span className='Hambar'></span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;