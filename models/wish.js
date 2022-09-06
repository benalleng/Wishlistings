const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    tags: {type: Array, required: false},
    owner: {type: String, required: true},
    price: {type: Number, required: true},
    admin: {type:String, default:'admin67890'},
    isPurchased: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Wish', wishSchema);