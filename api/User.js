const express = require('express');
const routers = express.Router();
const users = require('../controllers/users')

routers.get('/', users.findAllUser );


module.exports = routers;