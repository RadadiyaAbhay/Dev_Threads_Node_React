const express = require('express')
const dotenv = require('dotenv').config()
const dbConnection = require('./config/db')
const userModel = require('./models/user')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');

const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const app = express();
const port = process.env.PORT || 3000;

dbConnection();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use(express.static('uploads'))
app.get('/', (req, res) => {
    res.send("Hello")
})
app.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, 'uploads', imageName);
    res.sendFile(imagePath);
})
app.listen(port, () => {
    console.log(`Server is running on http ${port}`)
})