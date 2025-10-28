const JWT = require("jsonwebtoken");


function auth(req, res, next) {
    const token = req.body.token;
    if( !token ) return req.json({ message: "Access denie. No token." })

    try{
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch(err) {
        res.json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = { auth };