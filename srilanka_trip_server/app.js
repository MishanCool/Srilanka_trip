const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const appconfig = require('./config/appconfig');


// establish database connection
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.connection.on('connected', () => {
    console.log('Connected to database: ' + config.database);
});
mongoose.connection.on('error', (err) => {
    console.log(err);
});

// initiate app
const app = express();
const port = appconfig.port;

// // middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.use(passport.initialize());
// app.use(passport.session());
// require('./config/passport')(passport);



// start server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});