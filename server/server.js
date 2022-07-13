const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = process.env;
const { seed } = require("./seed.js");

const { getUserInfo, getLotr, updateUserInfo } = require("./controller");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/users", getUserInfo);
app.put("/user", updateUserInfo);
app.get("/api/lotr", getLotr);
app.post("/seed", seed);

app.listen(4000, () => console.log("Server running on 4000"));

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));
