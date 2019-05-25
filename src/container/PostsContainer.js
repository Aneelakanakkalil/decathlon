import React, { Component } from 'react';
import Post from '../components/Post';
import api from '../api';

export default class PostsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };

        this.deletePost = this.deletePost.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    async componentDidMount() {
        const posts = await api.posts.get();
        this.setState({ posts });
    }

    renderPosts() {
        const { posts } = this.state;
        
        return posts.map((post, idx) => <Post post={post} deletePost={this.deletePost} savePost={this.savePost} postIndex={idx} />);
    }

    async deletePost(post, idx) {
        const res = await api.posts.delete(post.id);
        const { posts } = this.state;
        this.setState({ posts: [...posts.slice(0, idx), ...posts.slice(idx + 1, posts.length)] });
    }

    async savePost(post, idx) {
        const res = await api.posts.update(post.id, post);
        const { posts } = this.state;
        posts[idx] = post;
        this.setState({ posts });
    }

    render() {
        return (
            <>
                { this.renderPosts() }
            </>
        );
    }
}