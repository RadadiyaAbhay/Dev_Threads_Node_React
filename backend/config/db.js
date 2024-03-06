const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const dbConnection = async () =>{

    await mongoose.connect(process.env.MONGODB_URL).then((res) =>{
        console.log("Server Connect")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnection