const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
