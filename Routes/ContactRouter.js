const express = require('express');
const contactRouter = express.Router();
const {createContactUserData, contactUserDataGet} = require('../Controller/ContactController');

contactRouter.post("/form",createContactUserData);
contactRouter.get("/listform",contactUserDataGet)

module.exports = contactRouter;