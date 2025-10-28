const express = require('express');
const app = express();
const { userRouter } = require("./routes/user");
const { todoRouter } = require("./routes/todo");
app.use(express.json());

app.use("/user", userRouter);
app.use("/todos", todoRouter);


app.listen(3000, () => {
    console.log("roger that, 3000 clicks out.")
})