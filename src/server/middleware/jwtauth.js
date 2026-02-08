import express from "express";
const app = express();
import jwt from "jsonwebtoken";

function aunthetication(req, res, next) {
  console.log("I am working");
  if (false) {
    res.send("error 403");
  } else {
    next();
  }
}
export default aunthetication;
