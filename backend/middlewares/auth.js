const userModel = require("../models/user");
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").split(" ")[1]
        if (!token) {
            return res.status(404).json({ message: 'No Token found' });
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRECT);
        if (!decoded) {
            return res.status(404).json({ message: 'Unauthorized' });
        }
        const user = await userModel.findById(decoded?.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'Unauthorized' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server error" })
    }
}

module.exports = auth;