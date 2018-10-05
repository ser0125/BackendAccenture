var express = require('express');

var router = express.Router();

const User = require('../models/user');
const UserRepository = require('../db/repositories/userRepository');
const UserDataSource = require('../db/dataSources/userDataSource');

repository = new UserRepository(UserDataSource); 


/* GET users listing. */
router.get('/', async function(req, res, next) {
  users = await repository.findAllUsers();
  res.send(users);
});

module.exports = router;
