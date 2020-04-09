const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('../validators/validators');

const config = require('../config/database');
const passport = require('../config/passport');
const User = require('../models/users');

router.post('/register' , (req , res) => {
    const {error, isValid} = validator.registerValidator(req.body);
    if(!isValid) {
        res.status(404).json(error);
    }
    User.findOne({email:req.body.email} , (err,doc) => {
        if(err) {
            res.status(404).json({'email':'Email ID is alredy taken'});
        } else {
            const registerUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            bcrypt.genSalt(10, (err,salt) => {
                bcrypt.hash(registerUser.password, salt, (err,hash) => {
                    if(err) throw err;
                    registerUser.password = hash;
                    registerUser.save().then((user) => res.json(user)).catch((err) => console.log(err));
                });
            });
        }
    });
});


module.exports = router;