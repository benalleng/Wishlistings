const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    Thing: {type: String, required: true},
    Type: {type: String, required: true},
    Price: {type: Number, required: true},
    purchased: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Wish', wishSchema);