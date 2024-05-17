import express from "express"


const AllDesigners=(req,res)=>res.send("<h1>All Designers</h1>")

const NewDesigner =(req,res)=>res.send("<h1>Sign Up New  Designers</h1>")

const UpdateDesignerInfo =(req,res)=>res.send("<h1>Update Designers Statistics</h1>")

const DeleteDesignerProfile = (req,res)=>res.send("<h1>Delete Designer Profile")


export {AllDesigners,NewDesigner,UpdateDesignerInfo,DeleteDesignerProfile }

