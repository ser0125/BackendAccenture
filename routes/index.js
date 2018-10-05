var express = require('express');
var models  = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.User.findAll({
  }).then(function(users) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
