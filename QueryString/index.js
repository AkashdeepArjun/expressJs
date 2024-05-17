import express from "express"

const app =express()
const greeting =(req,res)=>res.send("<h1>Welcome to Query String Lession</h1>")


app.get('/',greeting)

app.get('/products',(req,res)=>{

    const {category,price} = req.query

    res.send(`product category ${category} with price ${price}`)
})
app.listen(8000,()=>console.log("server started with bang!!"))
