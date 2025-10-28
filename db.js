const mongoose = require("mongoose");

mongoose.connect(process.env.mongoUrl)
    .then(() => console.log("Database online."))
    .catch(() => console.log("Database connection failed."));

module.exports = mongoose;