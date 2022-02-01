const express = require('express');
const routers = express.Router();
const users = require('../controllers/users')

routers.get('/', users.findAllUser );

routers.post('/add', users.addUser);

routers.put('/:id', users.updateUser);


module.exports = routers;