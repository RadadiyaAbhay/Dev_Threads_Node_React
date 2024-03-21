const { body } = require("express-validator");

exports.registerValidation = [
    body("email")
    .notEmpty()
    .withMessage('Email is Required')
    .isEmail().withMessage('Please Enter Vaild email'),

    body("password")
    .notEmpty()
    .withMessage('Password is Required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 Char long'),

    body("name")
    .notEmpty()
    .withMessage('Name is Required')
]

exports.loginValidation = [
    body("email").notEmpty().withMessage('Email is Required').isEmail().withMessage('Please Enter Vaild email'),
    body("password").notEmpty().withMessage('Password is Required')
]