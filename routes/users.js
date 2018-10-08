var express = require('express');

var router = express.Router();

const User = require('../models/user');
const UserRepository = require('../sequelize/db/repositories/userRepository');
const UserDataSource = require('../sequelize/db/dataSources/userDataSource');
var cors = require('cors');

repository = new UserRepository(UserDataSource); 

router.use(cors())

/* GET users listing. */
router.get('/', async function(req, res, next) {
  users = await repository.findAllUsers();
  res.send(users);
});

/* GET users listing. */
router.get('/:identification', async function(req, res, next) {
  users = await repository.findUserByIdentification(req.params.identification);
  res.send(users);
});


/* POST save user . */
router.post('/', async function(req, res, next) {
  user = Object.assign(new User, req.body);
  userSaved = await repository.saveUser(user);
  res.send(userSaved);
});


module.exports = router;
