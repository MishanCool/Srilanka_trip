const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const UserModel = require('./models/users');


// custom routes
const Users = require('./routes/users');

//const config = require('./config/database');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./config/passport')(passport);
app.use(passport.initialize());

app.use('/srilanka', Users);


const db = require('./config/database').database;
mongoose.connect(db).then(() => console.log('connect to database......!')).catch((err) => console.log(err));

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
