const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

// routes
app.get('/', (req, res) => {
    res.send('Sri Lanka Trip API');
});


const port = 3002;

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});