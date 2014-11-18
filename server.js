var express = require('express');
var engines = require('consolidate');
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

//I always hated this thing
app.disable('x-powered-by');

//Main page
app.get('/', routes.home);

app.listen(5672, function() {
    console.log('Listening on port 5672');
});
