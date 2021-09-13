const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 8000;

app.use("/public", express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("index");
});

app.listen(PORT);

console.info(`server run at ${PORT}`);
