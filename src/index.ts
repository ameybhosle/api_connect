import express from "express";
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",require("./routes/index"))

app.listen(1200,()=>{
    console.log("Server at 1200");
})