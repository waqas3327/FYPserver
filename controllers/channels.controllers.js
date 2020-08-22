const channelsController = {};
const ChatChannels = require('../models/chatChannels');


channelsController.SaveChannel = async(req, res) => {
    try {
        const body = req.body;
        console.log('req.body', body);
        const result = await ChatChannels.findOne({ "name": name });
        if (!result) // this means result is null
        {
            const channel = new ChatChannels(body);
            const result = await channel.save();
            res.send({ message: 'channel save successful!!' });
        } else {
            res.status(401).send({
                Error: 'channel exist Already exist'
            });
        }
    } catch (ex) {
        console.log('ex', ex)
    }
};

channelsController.getAllChannels = async(req, res) => {
    // const lostproducts = await LostProduct.find();
    // console.log('all lost products', lostproducts);
    ChatChannels.find({})
        .exec(function(err, ChatChannels) {
            if (err) {
                console.log('Error while retrieving ');
            } else {
                res.json(ChatChannels);
            }
        })
}

module.exports = channelsController;
module.exports = channelsController;