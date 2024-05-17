import http from "http"
const atHome=(res)=>{
   res.writeHead(202,"OK",{"content-type":"text/html"}) 
   res.write("<h1>Home</h1>")
}




const atAbout =(res)=>{
    res.writeHead(202,"OK",{"content-type":"text/html"}) 
    res.write("<h1>About</h1>")
}


const atContact=(res)=>{

    res.writeHead(202,"OK",{"content-type":"text/html"}) 
    res.write("<h1>Contact</h1>")


}



const badPage =(res)=>{

    res.writeHead(404,"OK LOL its bad",{"content-type":"text/html"}) 
    res.write("<h1>404  lmfao!!!NOT FOUND</h1>")


}





const myserver =http.createServer((req,res)=>{


    req.url==="/"?atHome(res):req.url==='/about'?atAbout(res):req.url==='/contact'?atContact(res):badPage(res)



})



myserver.listen(8000,()=>console.log("oh yeah !!! server started !!!!"))