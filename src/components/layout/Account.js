import React, { Component } from 'react'

class Account extends Component {
    state = {}
    render() {
        return (
            <div id="modal-account" className="modal">
                <div className="modal-content center-align">
                    <h4>Account details</h4><br />
                    <div className="account-details"></div>
                </div>
            </div>
        );
    }
}

export default Account;