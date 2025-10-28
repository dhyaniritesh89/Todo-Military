const mongoose = require("../db");

const todoSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    completed: Boolean
});

module.exports = mongoose.model("Todo", todoSchema);