var express = require("express");
var morgan = require('morgan');
var swig = require('swig');
var app = express();
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
swig.setDefaults({cache: false})
app.use(morgan('dev'));

app.listen(process.env.PORT || 3000);

var routes = require('./routes/');
app.use('/', routes);

app.use(express.static('public'));



// app.get('/', function(req, res) {
//     res.send('Welcome');
// });