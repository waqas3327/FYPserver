const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;


const Client = new Schema({
    // imageUrl: String,
    name: String,
    mnumber: String,
    address: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    rating: Number,
    count: Number
});

Client.plugin(mongoosePaginate);
module.exports = mongoose.model('client', Client);