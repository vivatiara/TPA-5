const express = require("express");
const app = express ();
const port = 3000;
const mongoose = require("mongoose");
//const auth = require("./userRoute/auth");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose
  .connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("tersambung ke db");
  })
  .catch((err) => console.log(err));

app.get("/", async (req, res) =>{
    res.send("hello");
});

app.use("/auth", require("./router/auth"));
app.use("/todo", require("./router/todo"));

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});