const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dhyani:2005Alon%40%40@cluster0.kgetpa8.mongodb.net/Military-Todo")
    .then(() => console.log("Database online."))
    .catch(() => console.log("Database connection failed."));

module.exports = mongoose;