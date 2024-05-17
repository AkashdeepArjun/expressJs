import express from "express"

import designers from './routes/designers.js'

const app =express()

const showWelcome =(req,res)=>res.send("<h1>Welcome Mr Akashdeep Wadhwa</h1>")

app.get('/',showWelcome)

app.use('/designers',designers)
app.listen(8080,()=>console.log("server started"))