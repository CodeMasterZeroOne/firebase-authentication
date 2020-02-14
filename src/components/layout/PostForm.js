import React, { Component } from 'react'
import M from "materialize-css";

class PostForm extends Component {
    state = {
        title: '',
        content: ''
    }

    handleCahnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // gat all info
        console.log('New post created title:' + this.state.title + ' ' + this.state.content);




        // clear the form and close modal
        document.getElementById('post-form').reset();
        M.Modal.getInstance(document.querySelector('#modal-create')).close();

    }

    render() {
        return (
            <div id="modal-create" className="modal">
                <div className="modal-content">
                    <h4>Create Post</h4><br />
                    <form id="post-form" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input type="text" id="title" required onChange={this.handleCahnge} />
                            <label htmlFor="title">Post Title</label>
                        </div>
                        <div className="input-field">
                            <textarea id="content" className="materialize-textarea" required onChange={this.handleCahnge} ></textarea>
                            <label htmlFor="content">Post Content</label>
                        </div>
                        <button className="btn yellow darken-2 z-depth-0">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostForm;