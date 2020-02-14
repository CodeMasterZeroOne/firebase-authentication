import React, { Component } from 'react'
import M from "materialize-css";

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleCahnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // gat all info
        console.log('Login Submision for: ' + this.state.email + ' and ' + this.state.password);


        //TODO: Login user


        // clear the form and close modal
        document.getElementById('login-form').reset();
        M.Modal.getInstance(document.querySelector('#modal-login')).close();

    }
    render() {
        return (
            <div id="modal-login" className="modal">
                <div className="modal-content">
                    <h4>Login</h4><br />
                    <form id="login-form" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input type="email" id="email" required onChange={this.handleCahnge} />
                            <label htmlFor="login-email">Email address</label>
                        </div>
                        <div className="input-field">
                            <input type="password" id="password" required onChange={this.handleCahnge} />
                            <label htmlFor="login-password">Your password</label>
                        </div>
                        <button className="btn yellow darken-2 z-depth-0">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;