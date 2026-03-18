require('dotenv').config()

const http = require("http");
const express = require("express");
const { connectDB } = require("./db");
const routes = require("./routes");

const app = express();

app.use(express.json());

connectDB();

app.use("/", routes);

const server = http.createServer(app);
server.listen(5004, () => {
    console.log("Server running on port 5004");
});