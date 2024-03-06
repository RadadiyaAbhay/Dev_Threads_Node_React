const express = require('express')
const dotenv = require('dotenv').config()
const dbConnection = require('./config/db')
const userModel = require('./models/user')
const mongoose = require('mongoose')

const userRouter =require( './routes/user.routes')
const postRouter =require( './routes/post.routes')

const app =  express();
const port = process.env.PORT || 3000;

dbConnection();
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)

app.listen(port, () => {
    console.log(`Server is running on http ${port}`)
})