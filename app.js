var express = require("express");
var morgan = require('morgan');
var swig = require('swig');
var app = express();
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
app.set('cache', false);
swig.setDefaults({cache: false})
app.use(morgan('dev'));

app.listen(process.env.PORT || 3000);

app.get('/special/', function(req, res, next) {
	console.log('You\'re special');
	//next();
});

app.get('/tacos/', function(req, res, next) {
	var locals = {
		title: 'Tacos!!!',
		people: [{
			name: 'Taco Stand'
		}, {
			name: 'another'
		}]
	};
	console.log('You are here')
	res.render('index', locals, function(err, output) {
		res.send(output)
	})


});

app.get('/', function(req, res, next) {
	//res.send(Object.keys(req));
	// console.log(req.domain)
	// console.log(res.statusCode)
	// console.log(req.method)
	var locals = {
		title: 'Main!!!',
		people: [{
			name: 'Taco Stand'
		}, {
			name: 'another'
		}]
	};
	res.render('index', locals)
		//    console.log(req.statusCode)
	//next();
});



// app.get('/', function(req, res) {
//     res.send('Welcome');
// });