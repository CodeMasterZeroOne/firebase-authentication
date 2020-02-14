import React, { Component } from 'react'


class Dashboard extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <ul className="collapsible z-depth-0 posts" >
                    <li>
                        <div className="collapsible-header grey lighten-4">Post title1</div>
                        <div className="collapsible-body white">Lorem ipsum dolor sit amet.</div>
                    </li>
                    <li>
                        <div className="collapsible-header grey lighten-4">Post title2</div>
                        <div className="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header grey lighten-4">Post title3</div>
                        <div className="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header grey lighten-4">Post title4</div>
                        <div className="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Dashboard;