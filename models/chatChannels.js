const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;


const ChatChannels = new Schema({
    name: String
});

ChatChannels.plugin(mongoosePaginate);
module.exports = mongoose.model('chatChannels', ChatChannels);