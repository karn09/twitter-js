var express = require("express");
var morgan = require('morgan');
var swig = require('swig');
var app = express();

app.use(morgan('dev'));

app.listen(process.env.PORT || 3000);

app.get('/special/', function(req, res, next) {
	console.log('You\'re special');
	//next();
});

app.get('/tacos/', function(req, res, next) {
	res.send(swig.render({

	}, {
		locals: {
			title: 'Tacos!!!',
			people: {
				name: 'Taco Stand'
			}

		},
		filename: '/views/index.html'
	}))
});

app.use('/', function(req, res, next) {
	res.send(Object.keys(req));
	// console.log(req.domain)
	console.log(res.statusCode)
	console.log(req.method)
		//    console.log(req.statusCode)
	next();
});



// app.get('/', function(req, res) {
//     res.send('Welcome');
// });