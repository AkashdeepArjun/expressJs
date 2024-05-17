const homeController=(req,res)=>{

    const data={
        msg:"lets help each other",
        rating:8
    };

    res.render('home',data)


}


export {homeController}