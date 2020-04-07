const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const userSchema = mongooose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, default: Date.now },
    //firstName: { type: String, required: true },
    //lastName: { type: String, required: true },
    //address: { type: String, required: true },
    //city: { type: String, required: true },
    //role: { type: String, default: 'user', enum: ['user', 'mod', 'admin'] },
    //avatar: { type: String, required: false },
    //phone: { type: Number, required: true },
    //active: { type: Boolean, required: true, default: false },
    //temporaryToken: { type: String, default:'' }
});

module.exports = Users = mongooose.model('Users' , userSchema);