const postModel = require("../models/post");

exports.addPost =  async(req, res) =>{
    const newPost = new postModel({
        title : req.body.title,
        content : req.body.content,
    })
    await newPost.save();
    res.json({ message : 'Successfully Created Post'})
}
exports.allPost = async (req, res) =>{
    const posts = await postModel.find();
    res.json({posts})
}