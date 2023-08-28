import {Router} from "express"
const route = Router()

const { FreePlanData, NormalPlanData, PremiumPlanData } = require("../data");


route.post("/",(req,res)=>{
    const p = req.header("apiKey")
    if(p === "free"){
        return res.json({'data':FreePlanData})
    }else if(p === "normal"){
        return res.json({'data':NormalPlanData})
    }else if(p === "premium"){
        return res.json({'data':PremiumPlanData})
    }else{
        return res.json({"error":"No api key of this value"})
    }
})

module.exports = route