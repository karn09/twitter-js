var express = require('express');
var router = express.Router();

// could use one line instead; var router = require('express').Router();

var tweetBank = require('../tweetBank');

// router.get('/stylesheets/:name', function(req, res) {
// 	//console.log('test');
// 	var options = {
// 		root: './public/',
// 		dotfiles: 'deny',
// 		headers: {
// 			'x-timestamp': Date.now(),
// 			'x-sent': true
// 		}
// 	};
// 	var fileName = req.params.name;
// 	console.log(req.path);
// 	res.sendFile(req.path, options, function(err) {
// 		if (err) {
// 			console.log(err);
// 			res.status(err.status).end();
// 		} else {
// 			console.log('Sent:', fileName);
// 		}
// 	});
// });

router.get('/', function(req, res) {
	var tweets = tweetBank.list();
	console.log(tweets[0]);
	res.render('index', {
		title: 'Twitteer.js',
		name: tweets[0].name,
		tweets: tweets
	});
});

module.exports = router;