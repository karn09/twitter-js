var express = require("express");
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.listen(process.env.PORT || 3000);

app.get('/special/', function(req, res, next) {
    console.log('You\'re special');
    //next();
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

