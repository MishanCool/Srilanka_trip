const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/database');

//Register
router.post('/register', (req, res, next) => {
    // res.send('Register');
    let newUser = new User ({
        email: req.body.email,
        // phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'Fail to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    // res.send('Authenticate');
    const username  = req.body.username;
    const password = req.body.password;
    console.log('1hiiii');

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;

        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }
        console.log('2hiiii');

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;

            if(isMatch) {
                const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800 // 1 week
                });
                console.log('3hiiii');

                res.json({
                    success: true,
                    token: 'JWT'+token,
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }

        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    // res.send('Profile');
    console.log('4hiiii');
    res.json({user: req.user});
    console.log('4hiiii');
});

//Validate
router.get('/validate', (req, res, next) => {
    res.send('Validate');
});

module.exports = router;