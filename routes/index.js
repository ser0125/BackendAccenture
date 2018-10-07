var express = require('express');
var cors = require('cors');
var router = express.Router();

/* GET home page. */
router.use(cors())

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
