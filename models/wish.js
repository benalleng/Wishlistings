const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    owner: {type: String, required: true},
    price: {type: Number},
    admin: {type:String, default:'admin67890'},
    isPurchased: Boolean,
    inCart: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Wish', wishSchema);