const { getAlluser, createUser, upload } = require("../controllers/userController");
const usermiddile = require("../middleware/usermiddle");

Router = require("express");

const userRoute = Router();

// routes
userRoute.get("/",getAlluser);
userRoute.post("/create",upload.array('img', 1),usermiddile,createUser);

//view
userRoute.get("/create",(req,res) => {
    res.render("signup",{msg:""});
});

module.exports = userRoute;