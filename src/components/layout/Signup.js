import React, { Component } from 'react'

class Signup extends Component {
    state = {}
    render() {
        return (
            <div id="modal-signup" className="modal">
                <div className="modal-content">
                    <h4>Sign up</h4><br />
                    <form id="signup-form">
                        <div className="input-field">
                            <input type="email" id="signup-email" required />
                            <label for="signup-email">Email address</label>
                        </div>
                        <div className="input-field">
                            <input type="password" id="signup-password" required />
                            <label for="signup-password">Choose password</label>
                        </div>
                        <button className="btn yellow darken-2 z-depth-0">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;