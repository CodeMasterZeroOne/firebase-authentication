import React, { Component } from 'react'

class Login extends Component {
    state = {}
    render() {
        return (
            <div id="modal-login" className="modal">
                <div className="modal-content">
                    <h4>Login</h4><br />
                    <form id="login-form">
                        <div className="input-field">
                            <input type="email" id="login-email" required />
                            <label for="login-email">Email address</label>
                        </div>
                        <div className="input-field">
                            <input type="password" id="login-password" required />
                            <label for="login-password">Your password</label>
                        </div>
                        <button className="btn yellow darken-2 z-depth-0">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;