import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    const Menu = () => (
        <>
        <p><Link to='/'>Main Page</Link></p>
        <p><Link to='/Products'>Products</Link></p>
        <p><Link to='/Workouts'>Workouts</Link></p>
        <p><Link to='/Statistics'>Statistics</Link></p>
        </>
    )
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_name">
                    Name
                </div>
                <div className="navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="navbar-sign">
                <Link to='/Sign'><button type="button">Sign in/Sign up</button></Link>
            </div>

        </div>
      
        
    )
}

export default Navbar