import React, { Component } from 'react'

class PostForm extends Component {
    state = {}
    render() {
        return (
            <div id="modal-create" className="modal">
                <div className="modal-content">
                    <h4>Create Guide</h4><br />
                    <form id="create-form">
                        <div className="input-field">
                            <input type="text" id="title" required />
                            <label for="title">Post Title</label>
                        </div>
                        <div className="input-field">
                            <textarea id="content" className="materialize-textarea" required></textarea>
                            <label for="content">Post Content</label>
                        </div>
                        <button className="btn yellow darken-2 z-depth-0">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostForm;