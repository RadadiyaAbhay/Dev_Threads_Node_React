const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const postSchema = new Schema({
    userId:{
        type : Schema.Types.ObjectId,
        ref : "users"
    },
    title:{
        type : String,
        required : true
    },
    content:{
        type : String,
        required : true
    },
    image:{
        type : String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcFI6hTmgUtdxQTZktMt5KgEbySf4mtRgfQ&usqp=CAU'
    }
},{
    timestamps :true
}) 

const postModel = mongoose.model('posts' , postSchema)

module.exports = postModel