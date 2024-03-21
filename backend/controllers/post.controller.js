const postModel = require("../models/post");

exports.addPost =  async(req, res) =>{
    try{
        const newPost = new postModel({
            title : req.body.title,
            content : req.body.content,
            author : req.body.author,
            userId : req.body.userId,
            fileImg : req.file.filename
        })
        await newPost.save();
        res.json({ message : 'Successfully Created Post'})
    }catch(err){
        res.status(500).json({message : "Internal Server error"})
    }
}
exports.allPost = async (req, res) =>{
    const posts = await postModel.find();
    
    res.json({posts})
}