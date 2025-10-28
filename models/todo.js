const mongoose = require("../db");

const todoSchema = new mongoose.Schema({
    userId: ObjectId,
    title: String,
    completed: Boolean
});

module.exports = mongoose.model("Todo", todoSchema);