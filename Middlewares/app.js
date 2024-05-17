import express from "express"
import path from "path"
const app =express()
console.clear()



//SERVES STATIC FILES
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(),'./public/html/home.html'))

})


app.listen(8000,()=>console.log("server started!!!!"))