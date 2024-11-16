const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { content } = req.body;
    const newPost = new Post({ userId: req.user.id, content });
    await newPost.save();
    res.status(201).json(newPost);
};

exports.getPosts = async (req, res) => {
    const posts = await Post.find().populate('userId', 'username');
    res.json(posts);
};
