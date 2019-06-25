var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

router.get('/Log', function(req, res, next) {
  res.render('pages/Log');
});

module.exports = router;