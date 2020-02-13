import React, { Component } from "react";
import logo from "../images/wisetek_owl.png"

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="z-depth-0 grey lighten-4">
                <div className="nav-wrapper container">
                    <a href="/" className="brand-logo">
                        <img id="logo" src={logo} alt="Logo" />
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down" >
                        <li className="logged-in">
                            <a href="#" className="grey-text modal-trigger" data-target="modal-account">Account</a>
                        </li>
                        <li className="logged-in">
                            <a href="/" className="grey-text" id="logout">Logout</a>
                        </li>
                        <li className="logged-in">
                            <a href="#" className="grey-text modal-trigger" data-target="modal-create">Create Guide</a>
                        </li>
                        <li className="logged-out">
                            <a href="#" className="grey-text modal-trigger" data-target="modal-login">Login</a>
                        </li>
                        <li className="logged-out">
                            <a href="#" className="grey-text modal-trigger" data-target="modal-signup">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
