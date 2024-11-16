import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState('');

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
    };

    const handlePost = async () => {
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:5000/api/posts', { content }, {
            headers: { Authorization: token }
        });
        fetchPosts();
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="container">
            <h2>Home</h2>
            <textarea placeholder="What's on your mind?" onChange={(e) => setContent(e.target.value)}></textarea>
            <button onClick={handlePost}>Post</button>
            {posts.map(post => (
                <div className="post" key={post._id}>
                    <h4>{post.userId.username}</h4>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
