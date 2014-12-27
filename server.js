var express = require('express');
var engines = require('consolidate');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var engines = require('consolidate');
var routes = require('./app/routes/index');

// all environments
app.use(express.static(__dirname + '/app/public'));
app.set('views', path.join(__dirname, '/app/views'));

//We're using handlebars inside the HTML files
app.engine('html', engines.handlebars);
app.set('view engine', 'html');

//Lets us use application/x-www-form-urlencoded POST requests
app.use(bodyParser.urlencoded({extended: false}));

//I always hated this thing
app.disable('x-powered-by');

//Login page
app.get('/', routes.home);

//Login check page
app.post('/checklogin', routes.checklogin);

// Start the app
app.listen(5672, function() {
    console.log('Listening on port 5672');
});
