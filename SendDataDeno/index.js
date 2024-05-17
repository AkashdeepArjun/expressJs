import express from "express"

import products from "./products.js";

const app = express()

const showWelcome=(req,res)=>res.send("<h1>Hi Mr akashdeep </h1>")

const showProducts =(req,res)=>res.json(products)

app.get('/',showWelcome);

app.get('/products',showProducts)

app.listen(8080,()=>console.log("server have been started"))