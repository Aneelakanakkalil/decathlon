import React, { Component } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            edit: {},
        };

        this.handleChange = this.handleChange.bind(this);
    }

    editPost(post) {
        this.setState({
            isEditing: true,
            edit: post,
        });
    }

    async savePost(post, idx) {
        await this.props.savePost(post, idx);
        this.setState({ isEditing: false });
    }

    handleChange(event) {
        const { edit } = this.state;

        this.setState({
            edit: {
                ...edit,
                [event.target.name]: event.target.value,
            }
        });
    }

    render() {
        const { isEditing, edit } = this.state;
        const { post, deletePost, postIndex } = this.props;
        return (
            <article class="post">
                { !isEditing ? 
                    (<div class="body">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>) : 
                    (<div class="body">
                        <textarea name="title" onChange={this.handleChange}>{post.title}</textarea>
                        <textarea name="body" onChange={this.handleChange} class="edit-body">{post.body}</textarea>
                    </div>)}
                <div class="footer">
                    { !isEditing ? 
                        <button onClick={() => this.editPost(post)}>Edit</button> :
                        <button onClick={() => this.savePost(edit, postIndex)}>Save</button> }
                    <button onClick={async () => await deletePost(post, postIndex)}>Delete</button>
                </div>
            </article>
        );
    }
};