var MongoClient = require('mongodb').MongoClient;

// Login page
exports.home = function(req, res) {
    res.render('main.html', {title: 'Hello World'});
};

// Post only route to check passwords
exports.checklogin = function(req, res) {
    req.accepts('application/x-www-form-urlencoded');
    var user = req.body.username;
    // TODO: Make passwords hashed, not plaintext
    var pass = req.body.password;

    // Open a new db connection
    MongoClient.connect('mongodb://build1.codevine.io/test', function(err, db) {
        // Log error to console
        if (err) console.log(err);

        // TODO: Get a better name than testing
        var collection = db.collection('testing');

        // Find the document corresponding to the username
        collection.findOne({username: user}, function(err, item) {
            // I think username not found is caught here, not sure though
            if (err) console.log(err);

            // If it found an item
            if (item) {

                // If passwords match (hashed or not), send to main page
                if (pass === item.password) {
                    res.send('Yay you logged in! We need a page here or something');
                }

                //If passwords don't match, return to login page with error message
                else {
                    res.render('main.html', {title: 'Hello World', login: 'failed'});
                }
            }

            //If no item was found
            else {
                res.render('main.html', {title: 'Hello World', login: 'failed'});
            }

            //Very important
            db.close();
        });
    });
};
