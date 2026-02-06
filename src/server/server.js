import express from "express" ;
import cors from "cors";
const app=express ();
app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello world")
});

app.listen("8080",(req,res)=>
{console.log("server has loaded")});