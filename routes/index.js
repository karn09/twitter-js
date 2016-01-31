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
// 



// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({
// 	extended: false
// });

// router.post('/tweets/', urlencodedParser, function(req, res) {
// 	if (!req.body) {
// 		return res.sendStatus(400);
// 	}
// 	res.send('welcome, ' + req.body.name);
// });


module.exports = function(io) {
	var express = require('express');
	var router = express.Router();
	var bodyParser = require('body-parser');

	// could use one line instead; var router = require('express').Router();

	var tweetBank = require('../tweetBank');
	var currentUser = "John Nieves";

	router.use(bodyParser.urlencoded({
		extended: false
	}));

	router.post('/tweets', function(req, res) {
		var name = req.body.name;
		var text = req.body.text;
		tweetBank.add(name, text);
		res.redirect('/');
	});


	router.get('/tweets/:id', function(req, res) {
		var id = req.params.id;
		var currentTweet = tweetBank.find({
			'id': Number(id)
		});
		var name = currentTweet[0].name;
		res.render('tweet', {
			title: "You are now viewing: #" + id,
			user: currentUser,
			name: name,
			tweets: currentTweet,
			id: id
		});
	});

	router.get('/users/:name', function(req, res) {
		var name = req.params.name;
		var tweets = tweetBank.find({
			name: name
		});
		// console.log(tweets)
		res.render('user', {
			title: 'Twitter.js - Posts by ' + name,
			name: name,
			user: currentUser,
			tweets: tweets
		});
	});

	router.get('/', function(req, res) {
		var tweets = tweetBank.list();
		//console.log(tweets[0]);
		console.log('test');
		res.render('index', {
			title: 'Twitter.js',
			user: currentUser,
			tweets: tweets,
			showForm: true
		});
	});

	return router;
};