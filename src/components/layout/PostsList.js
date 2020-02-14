import React, { Component } from 'react'

class PostsList extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <ul className="collapsible z-depth-0 welcome" >
                    <li>
                        <div className="collapsible-header grey lighten-4">Welcome</div>
                        <div className="collapsible-body center white">Please Login or Signup.</div>
                    </li>

                </ul>
            </div>
        );
    }
}

export default PostsList;