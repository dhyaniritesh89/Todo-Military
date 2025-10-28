const JWT = require("jsonwebtoken");
const JWT_SECRET = "bharat_mata_ki_jai";

function auth(req, res, next) {
    const token = req.body.token;
    if( !token ) return req.json({ message: "Access denie. No token." })

    try{
        const decoded = JWT.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch(err) {
        res.json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = { auth };