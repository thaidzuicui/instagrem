const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        user_id: { type: String },
        caption: { type: String },
        post_type: { type: String },
        likes_count: { type: Number, default: 0 },
        comments_count: { type: Number, default: 0 },
        media_url: [{ type: String }],
        hashtags: [{ type: String }],
        mentions: [{ type: String }],
        status: { type: String, enum: ['Posted', 'Archived', 'Deleted'] },
    }
)

module.exports = mongoose.model('posts', Post);
