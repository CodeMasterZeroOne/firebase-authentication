import React, { Component } from 'react'
import uuid from 'uuid'
import M from "materialize-css";
import signUp from '../authentication/authActions'
// import { connect } from 'react-redux'

class Signup extends Component {
    state = {
        uid: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleCahnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // add new id for the user and auth him
        this.state.uid = uuid();
        console.log('Signup submision for: ' + this.state.firstName + ' ' + this.state.lastName + ', email: '
            + this.state.email + ' with password:' + this.state.password + ' and with id: ' + this.state.uid);

        const email = this.state.email;
        const password = this.state.password;
        // TODO:signup new user to firebase db


        // clear the form and close modal
        M.Modal.getInstance(document.querySelector('#modal-signup')).close();
        document.getElementById('signup-form').reset();
    }


    render() {
        return (
            <div id="modal-signup" className="modal">
                <div className="modal-content">
                    <h4>Sign up</h4><br />
                    <form id="signup-form" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input type="text" id="firstName" required onChange={this.handleCahnge} />
                            <label htmlFor="signup-firstname">First Name</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id="lastName" required onChange={this.handleCahnge} />
                            <label htmlFor="signup-lastname">Last Name</label>
                        </div>
                        <div className="input-field">
                            <input type="email" id="email" required onChange={this.handleCahnge} />
                            <label htmlFor="signup-email">Email address</label>
                        </div>
                        <div className="input-field">
                            <input type="password" id="password" required onChange={this.handleCahnge} />
                            <label htmlFor="signup-password">Choose password</label>
                        </div>
                        <button className="btn yellow darken-2 z-depth-0">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         auth: state.firebase.auth,
//         authError: state.auth.authError

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signUp: (newUser) => dispatch(signUp(newUser))
//     }
// }


export default Signup;