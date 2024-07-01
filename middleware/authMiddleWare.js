const jwt = require('jsonwebtoken');

exports.userProtect = async (req, res, next) => {
    const token = req.header('auth-token');

    //! Checking if token exist or not ?

    if(!token){
        return res.status(401).json({
            message:"Access Denied",
            success: false,
            statusCode:0,
        });
    }
    try{
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid Token",
            success: false,
            statusCode:0,
        });
    }
    

 };
