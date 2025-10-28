const mongoose = require("../db");

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
//mongoose.model() creates a bridge between 
// your schema and a MongoDB collection,
// letting you interact with that collection using code instead of raw queries.
module.exports = mongoose.model("User", userSchema);