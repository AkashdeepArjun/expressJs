import express from "express"
import router from './routes/route.js'

import {join} from "path"

const app = express()
app.set("view engine","ejs")
// app.use(express.static(join(process.cwd(),"public")))

app.use("/",router)

app.post("/post",(req,res)=>{

    const {name,role}=req.body
    res.send(`<h1>${name} is doing  ${role} as profession`)
})
console.clear()


app.listen(8080,()=>console.log("server started yay!!!"))