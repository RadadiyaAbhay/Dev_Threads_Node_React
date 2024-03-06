const express = require('express');
const { addPost, allPost } = require('../controllers/post.controller');
const router = express.Router();

router.post('/create',addPost)

router.get('/all', allPost);

module.exports = router;