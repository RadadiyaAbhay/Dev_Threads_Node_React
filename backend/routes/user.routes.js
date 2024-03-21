const express = require('express');
const { registerUser, allUser, loginUser, getProfile } = require('../controllers/user.controller');
const { registerValidation, loginValidation } = require('../middlewares/inputvalidation');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/create',registerValidation,registerUser)
router.post('/login',loginValidation,loginUser)

router.get('/all', allUser);
router.get('/profile', auth, getProfile);

module.exports = router;