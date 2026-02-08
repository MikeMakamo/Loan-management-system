import express from "express";
import login from "./routes/login.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

app.use("/login", login);

app.get("/", (req, res) => {

    res.send("hello world");
});

app.listen(process.env.PORT, (req, res) => {
    console.log("server has loaded");
});
