const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

// establish database connection
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database: ' + config.database);
});
//on error
mongoose.connection.on('error', (err) => {
    console.log(err);
});

// custom routes  **********
const users = require('./routes/users');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// serve resources from public folder
app.use("/public", express.static(path.join(__dirname, 'public')));

// routes  **********
app.get('/', (req, res) => {
    res.send('Sri Lanka Trip API');
});
app.use('/users', users);



const port = 3002;

// Start server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});