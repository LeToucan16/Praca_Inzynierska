import React from "react";
import './navbar.css';


const Navbar = () => {
    const Menu = () => (
        <>
        <p><a href="#main">Strona Główna</a></p>
        <p><a href="#products">Produkty</a></p>
        <p><a href="#workouts">Treningi</a></p>
        <p><a href="#statistics">Statystyki</a></p>
        <p><a href="#calendar">Kalendarz</a></p>
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
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>

        </div>
      
        
    )
}

export default Navbar