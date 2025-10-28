const { auth } = require("../middleware/auth");
const { Router } = require("express");
const todoRouter = Router();

todoRouter.post("/todos", auth, (req, res) => {
    res.json({
        message: "todos section reached" 
    })
});
todoRouter.get("/todos", auth, (req, res) => {
    res.json({
        message: "todos section reached" 
    })
});

module.exports = {
    todoRouter
}