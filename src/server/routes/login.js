import express from "express";
import jwt from "jsonwebtoken";
import aunthetication from "../middleware/jwtauth.js";
const router = express.Router();
import bcrypt from "bcrypt";
const app=express()
app.use(express.json())
const user = {
  name: "Mike",
  surname: "Makamo",
  id: 0,
  hash: "$2a$10$ZFD7aTsBYsEehiYYc2YcUODxGhac1cyH.IfUl27yVZYe0pzIvyxI."
};

router.post("/", async (req, res) => {
    console.log(req.body)
  const { username, password } = req.body
//auth algorithm 
  if (username === user.name) {
    console.log("user in database, matching password...");
    //comparing hashes for the user
    try {
        console.log("hashing")
      if (await bcrypt.compare("Password@123", user.hash)) {
        console.log("password matches")
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        console.log(accessToken)
        return res.send({ approval: true, token: accessToken });
      } else {
        return res.send({ approval: false, token: null });
      }
    } catch(error) {
        res.status(401).send(error)
        console.log("wrong password")
    }
  } else {
    return res.status(401).send("User Not found");
  }
});

export default router;
