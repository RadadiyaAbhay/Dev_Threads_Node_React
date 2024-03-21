const { validationResult } = require("express-validator");
const userModel = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        let err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(404).json({ success: false, error: err.array()[0].msg });
        }

        let existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const newUser = new userModel({
            name,
            email,
            password : hashPass,
        })
        await newUser.save();

        res.status(200).json({ success: true, message: 'Successfully Created User' })
    } catch (err) {
        res.status(500).json({ message: "Internal Server error" })
    }
}
exports.allUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json({ users })
    } catch (err) {
        res.status(500).json({ message: "Internal Server error" })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let err = validationResult(req);
        if (!err.isEmpty()) {
            res.status(404).json({ success: false, error: err.array()[0].msg });
        }
        let user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({success : false ,message: 'Invaild User' });
        }
        let isMatch = bcrypt.compareSync(password, user.password);
        if(!isMatch){
            return res.status(401).json({ success: false, message: 'Invalid Password.' });
        }

        let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRECT);


        res.status(200).json({token, success : true , message :"User Login Successfully"});
    } catch (err) {
        res.status(500).json({ message: "Internal Server error" })
    }
}

exports.getProfile = async (req , res) =>{
    try{
        const user = req.user;
        if(!user) return res.status(401).json({ message:"Not authorized!"})
        
        res.status(200).json({user , message : "Get Profile Successfully" , success : true})
    }catch (err){
        res.status(500).json({ message: "Internal Server error" })
    }
}