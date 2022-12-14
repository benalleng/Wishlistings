const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
    isAdmin: Boolean
}, { timestamps: true})

module.exports = mongoose.model('User', userSchema);