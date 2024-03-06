const userModel = require("../models/user");

exports.registerUser =  async(req, res) =>{
    const newUser = new userModel({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    })
    await newUser.save();
    res.json({ message : 'Successfully Created User'})
}
exports.allUser = async (req, res) =>{
    const users = await userModel.find();
    res.json({users})
}