const usermiddile = (req,res,next) => {
    let {username,img,email,Password} = req.body;

    if(!username || !email || !Password){
        res.render("signup",{msg:"pls Eneter Fields."});
    }
    else{
        next();
    }
} 

module.exports = usermiddile;