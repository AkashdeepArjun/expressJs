import express from "express"        //  STEP -1: CREATE ROUTE FOLDER 
//STEP -2:CREATE INSTANCE OF ROUTER
const route_assistant= express.Router() 

route_assistant.get('/all',(req,res)=>{
    res.send("<h1>All Teachers </h1>")
})


route_assistant.post('/create',(req,res)=>{
    res.send("<h1>Sign Up New Teacher </h1>")
})


route_assistant.put('/update',(req,res)=>{
    res.send("<h1>Update Teacher Info </h1>")
})


route_assistant.delete('/delete',(req,res)=>{
    res.send("<h1>Delete Teacher Info  From db</h1>")
})


export default route_assistant;


