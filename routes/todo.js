const { auth } = require("../middleware/auth");
const { Router } = require("express");
const Todo = require("../models/todo");
const todoRouter = Router();

todoRouter.post("/", auth, async (req, res) => {
    try{
        const { title } = req.body;
        const newTodo = await Todo.create({ title, userId: req.userId });
        res.json({ message: "Mission added", todo: newTodo});
    } catch(err) {
        res.status(500).json({ error: "OP failed"});
    }
});
todoRouter.get("/", auth, async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId});
        res.json({ todos });
    } catch(err) {
        res.status(500).json({ error: "Failed to retrieve missions" });
    }
});

module.exports = {
    todoRouter
}