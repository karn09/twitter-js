var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/users/:name', function(req, res) {
	//var nameParam = req.params.name;
	// var tweets = tweetBank.find(function(obj) {
	// 	return obj.name.indexOf(req.params.name) !== -1;
	// });
	
	var tweets = tweetBank.find({name: req.params.name});
	res.render( 'index', { title: 'Tweets from ' + req.params.name, tweets: tweets});
});

router.get('/id/:id', function(req, res) {
	var idNum = req.params.id * 1;
	var tweets = tweetBank.find({id: idNum});
	res.render( 'index', { title: 'Tweet # ' + req.params.id, tweets: tweets});
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;