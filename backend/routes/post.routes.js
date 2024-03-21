const express = require('express');
const { addPost, allPost } = require('../controllers/post.controller');
const upload = require('./../middlewares/multer');
const router = express.Router();

router.post('/create' , upload.single('fileImg') , addPost)

router.get('/all', allPost);

module.exports = router;