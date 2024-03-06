const express = require('express');
const { registerUser, allUser } = require('../controllers/user.controller');
const router = express.Router();

router.post('/create',registerUser)

router.get('/all', allUser);

module.exports = router;