var express = require('express');

var router = express.Router();

const User = require('../models/user');
const UserRepository = require('../sequelize/db/repositories/userRepository');
const UserDataSource = require('../sequelize/db/dataSources/userDataSource');

repository = new UserRepository(UserDataSource); 


/* GET users listing. */
router.get('/', async function(req, res, next) {
  users = await repository.findAllUsers();
  res.send(users);
});

/* POST save tickets . */
router.post('/', async function(req, res, next) {
  user = Object.assign(new User, req.body);
  userSaved = await repository.saveUser(user);
  res.send(userSaved);
});


module.exports = router;
