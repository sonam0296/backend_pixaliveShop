const jwt = require('jsonwebtoken');
const user = require('../models/user');


exports.isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token,'token')
        const verfiyUser = jwt.verify(token, process.env.JWT);
        console.log('verfiyr', verfiyUser)

        req.user = await user.findById(verfiyUser.id)
        // req.token = token
        //  = data;
        next()
    }
    catch (err) {
        res.status(401).json({ message: "invalid token request " })
    }
}

exports.authorizeRoles = (...roles) => {
    return async (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            
            return next(res.json("roles not allowed"))
        }
        next()
    }
}
