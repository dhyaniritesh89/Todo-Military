const { auth } = require("../middleware/auth");
const { Router } = require("express");
const todoRouter = Router();

todoRouter.post("/create", auth, (req, res) => {
    res.json({
        message: "todos section reached" 
    })
});
todoRouter.get("/get", auth, (req, res) => {
    res.json({
        message: "todos section reached" 
    })
});

module.exports = {
    todoRouter
}