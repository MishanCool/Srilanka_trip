// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;

// const User = require('../models/user');
// const config = require('../config/database');

// module.exports = function(passport) {
//     let opts = {};
//     //opts.jwtFromRequest = ExtractJwt.fromAuthHeader('jwt');
//    // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('jwt');
//     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
//     opts.secretOrKey = config.secret;
//     console.log('11hiiii');
//     passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//         console.log('7hiiii');
//         console.log(jwt_payload);
//         console.log('8hiiii');
//         User.findById(jwt_payload._id, (err, user) => {
//             if(err) {
//                 return done(err, false);
//             }

//             if(user) {
//                 return done(null, user);
//             } else {
//                 return done(null, false);
//             }
//         });
//     }));
// }

// var JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;
//     module.exports = function(passport) {
// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('jwt');
// opts.secretOrKey = config.secret;
// console.log('11hiiii');
// passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//     console.log('12hiiii');
//     User.findOne({id: jwt_payload.sub}, (err, user) => {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));

//     }


const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {
    const opts = {};
    // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('jwt');
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');

    opts.secretOrKey = config.secret;
    console.log('1hiiii');
    console.log(opts.secretOrKey);
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log('21hiiii');
        console.log(jwt_payload);
        User.getUserById(jwt_payload.data._id, (err, user) => {
            console.log('31hiiii');
            if (err) return done(err, false);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}