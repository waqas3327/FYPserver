const express = require("express");
const router = express.Router();

const channelsController = require('../controllers/channels.controllers');
const checkAuth = require('../middleware/check-auth');


router.post("/SaveChannel", channelsController.SaveChannel);
router.get("/GetAllChannels", channelsController.getAllChannels);


module.exports = router;