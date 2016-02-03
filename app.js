var express = require("express");
var morgan = require('morgan');
var swig = require('swig');
var bodyParser = require('body-parser');
var socketio = require('socket.io');
var app = express();
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
swig.setDefaults({cache: false})
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || 3000);
var io = socketio.listen(server);

var routes = require('./routes/');
app.use('/', routes(io));

app.use(express.static('public'));



// app.get('/', function(req, res) {
//     res.send('Welcome');
// });