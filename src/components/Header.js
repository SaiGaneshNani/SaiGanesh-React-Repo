import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div>
                <nav className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact US</li>
                        <li>Cart</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;