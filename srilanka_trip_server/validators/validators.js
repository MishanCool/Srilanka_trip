const mongoose = require('mongoose');
const isEmpty = require('is-empty');
const validator = require('validator');

module.exports.loginValidator = loginValidator = function validateLoginInput(doc) {
    const error = {}
    doc.email = !(isEmpty(doc.email))?doc.email:'';
    doc.password = !(isEmpty(doc.password))?doc.password:'';

    if(validator.isEmpty(doc.email)) {
        error.email = 'Email is required ......!'
    }

    if(validator.isEmpty(doc.password)) {
        error.password = 'Password is required ......!'
    }


    if(!validator.isEmail(doc.email)) {
        error.email = 'Invalied email id ......!'
    }

    return {
        error: error,
        isValid: isEmpty(error)
    }

}



module.exports.registerValidator = registerValidator = function validateRegisterInput(doc) {
    const error = {}
    doc.username = !(isEmpty(doc.username))?doc.username:'';
    doc.email = !(isEmpty(doc.email))?doc.email:'';
    doc.password = !(isEmpty(doc.password))?doc.password:'';

    if(validator.isEmpty(doc.username)) {
        error.username = 'User name is required ......!'
    }

    if(validator.isEmpty(doc.email)) {
        error.email = 'Email is required ......!'
    }

    if(validator.isEmpty(doc.password)) {
        error.password = 'Password is required ......!'
    }


    if(!validator.isEmail(doc.email)) {
        error.email = 'Invalied email id ......!'
    }

    return {
        error: error,
        isValid: isEmpty(error)
    }

}