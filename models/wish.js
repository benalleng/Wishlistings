const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    owner: {type: String, required: true},
    price: {type: Number},
    admin: {type:String, default:'admin67890'},
    isPurchased: {type:Boolean, default: false},
    inCart: {type:Boolean, default: false},
}, { timestamps: true });

module.exports = mongoose.model('Wish', wishSchema);