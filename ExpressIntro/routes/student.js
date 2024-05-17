import express from "express"        //  STEP -1: CREATE ROUTE FOLDER 
//STEP -2:CREATE INSTANCE OF ROUTER
const route_assistant= express.Router() 


route_assistant.get('/all',(req,res)=>{
    res.send("<h1>All Students </h1>")
})


route_assistant.post('/create',(req,res)=>{
    res.send("<h1>Sign Up New Student </h1>")
})


route_assistant.put('/update',(req,res)=>{
    res.send("<h1>Update Student Info </h1>")
})


route_assistant.delete('/delete',(req,res)=>{
    res.send("<h1>Delete Student Info  From db</h1>")
})


export default route_assistant;


