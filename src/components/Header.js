import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [button, setButton] = useState("Login");

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
                        <button
                            className="login-btn"
                            onClick={() => {
                                button === "Login" ? setButton("Logout") : setButton("Login")
                            }}
                        >{button}</button>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;