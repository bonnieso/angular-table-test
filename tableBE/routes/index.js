var express = require('express');
var router = express.Router();
var data = require("../data.json");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongo API' });
});

router.get('/data', function(req, res, next) {
  res.json(data);
});

module.exports = router;
