 import express from "express"
 import route_assistant from "./routes/student.js"

 import teachers from "./routes/teachers.js"

 const main=express()

 console.clear()

//  //HTTP METHODS 😐

//  // GET 🤡  //retrieve data
//  // POST 😑 create/insert

//  //PUT 🙄 // completely update/overrides data

//  //PATCH 🤧 //partialy 

//  //DELETE 🤢

//  //ALL ANY HTTP REQUEST





//  main.get('/',(req,res)=>{

//    res.send("<h2>Home</h2>")


//  })


//  main.get('/about',(req,res)=>{

//    res.send("<h2>About</h2>")


//  })



//  main.get('/contact',(req,res)=>{

//    res.send("<h2>contact</h2>")


//  })
//                //REGEX   😭

//  main.get('/ab?cd',(req,res)=>{

//    res.send("this page opens when you type acd or abcd")

//  })

//  main.get(/^\/users\/[0-9]{4}$/,(req,res)=>{


//    res.send("if user types xy together you get this")
//  })



//  main.get('/pd/iphone',(req,res)=>{

  
//         res.send('if user types /pd/iphone')


//  })


//  main.get('/products/product/product-details',(req,res)=>{

  
//   res.send('if user types /products/product/product-details')


// })


// main.get('/single-cb',(req,res)=>{

//   res.send("<h1>single callback</h1>")

// })
// console.clear()
// main.get('/double-cb',
// (req,res,next)=>{
//   console.log("first callback");
//   next()
// },
// (req,res)=>{res.send("<h1>Second callback send here first one went to console")}

// )

// const showsProducts = (req,res,next)=>{
//       console.log(["laptops","smartphones"])
//       next()
// }

// const showsProductDetail =(req,res,next)=>{

//   console.log("intel i9 processor 8 GB DDR4 ram")
//   next()
// }

// const showsOffers =(req,res)=>{

//   console.log("get wireless keyboard mouse with any laptop price tagged above")

// }



// main.get('/array-cb',[showsProducts,showsProductDetail,showsOffers])


// const mainPage =(req,res,next)=>{

//       res.send("<h1>Products List here</h1>")
//       next();

// }

// const productOffers=(req,res,next)=>{

//   console.log("Products Offers here")
//   next();

// }




// main.get('/stupidity',[mainPage,productOffers],(req,res)=>{

//   console.log("popular products here")

// })


// // main.get('/student',(req,res)=>{

// //     res.send("<h1>All Students </h1>")


// // })


// // main.post('/student',(req,res)=>{

// //     res.send("<h1>Add New Student</h1>")
// // })

// // main.put('/student',(req,res)=>{

// //   res.send("<h1>Update Student</h1>")
// // })

// // main.delete('/student',(req,res)=>{

// //   res.send("<h1>Delete specific Student</h1>")
// // })

// //💀 to many stuff just for routing


// main.route('/student')
// .get((req,res)=>{res.send("<h1>Get all Stupid Students</h1>")})
// .post((req,res)=>{res.send("<h1>Add new Students</h1>")})
// .delete((req,res)=>{res.send("<h1>Delete Student Secion")})
// .put((req,res)=>{res.send("<h1>Pain in butt to add students </h1>")})



//ALTERNATIVE WAY 😎 


//step-1:create router  folder and put routes in separate file
//step-2:instance of express.Router()
//step-3:change app.method to  route.method
//step-4:export router
//step=5:import router
//step-6:app.use method is middleware that provide your routes

// main.use('/students',route_assistant)

// main.use('/teachers',teachers)

// main.get('/potatos/order/:day/:month/:year',(req,res)=>{

//   const {day,month,year} = req.params
//   res.send(`product was ordered on ${day}/${month}/${year}`)


// })

console.clear()
main.param("id",(req,res,next,id)=>{

  console.log(`accessed id ${id}`)
  next()
;
})

main.get('/user/:id',(req,res)=>{

const {id} =req.params
console.log(`ACCESSING user with id ${id}`)

})

 main.listen(8000,()=>{console.log("server started ....")})

