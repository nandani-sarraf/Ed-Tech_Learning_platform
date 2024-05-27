
// routes/completionRoute.js
const express = require('express');
const { sendChat } = require("../controllers/chatCompletionController.js");
const router = express.Router();

router.post("/chatCompletions", sendChat);

module.exports = router;
