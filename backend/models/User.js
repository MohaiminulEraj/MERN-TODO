const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: {
            values: [
                'user',
                'admin'
            ]
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = User = mongoose.model('User', UserSchema)