const { Router } = require("express");
const { findOne } = require("../models/user");
const User = require("../models/user")
const userRouter = Router();
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const user = require("../models/user");


userRouter.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    const existingUser = await User.findOne({username});
    if(existingUser) {
        res.json({ message: "User already enlisted!" })
    }
    const hashedPass = await bcrypt.hash(password, 5);
    await User.create({ username, password: hashedPass });
    res.json({ message: "Enlisted succesfully." })
});

userRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});

    if(!user) res.json({ message: "Soldier not found!!"});

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) res.json({ mesasge: "Invalid credentials."});
    
    const token = JWT.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.json({
        mesasge: "Verification successfull",
        token 
    })
});


module.exports = {
    userRouter
}